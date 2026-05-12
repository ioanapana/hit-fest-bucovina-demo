// Hit Fest Bucovina — Partner Discounts (F8)
// PartnersScreen, PartnerDetailScreen + supporting components
const { useState: u3S, useEffect: u3E, useMemo: u3M } = React;

// ─────────────── User tickets (local storage) ───────────────
const HF_TICKETS_KEY = 'hf_user_tickets';
const TICKET_KIND_META = {
  '3day':   { label: 'Abonament 3 zile', short: 'PASS 3 ZILE', color: 'var(--hf-coral)' },
  '1day':   { label: 'Bilet o zi',       short: 'PASS 1 ZI',   color: 'var(--hf-turcoaz)' },
  'family': { label: 'Family Pack',      short: 'FAMILY',      color: 'var(--hf-galben)' },
  'vip':    { label: 'VIP',              short: 'VIP',         color: 'var(--hf-bleumarin)' },
};
const _randChars = (n) => {
  const a = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < n; i++) s += a[Math.floor(Math.random() * a.length)];
  return s;
};
const makeTicket = (kind = '3day', holder = '') => ({
  id: 'tk-' + Date.now().toString(36) + _randChars(3),
  kind,
  serial: 'HFB-2026-' + _randChars(4),
  code: 'HF2026-' + _randChars(6),
  holder,
  createdAt: Date.now(),
});
const loadUserTickets = () => {
  try {
    const raw = localStorage.getItem(HF_TICKETS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
};
const saveUserTickets = (tickets) => {
  try { localStorage.setItem(HF_TICKETS_KEY, JSON.stringify(tickets)); } catch (e) {}
};
const addUserTicket = (kind, holder) => {
  const ts = loadUserTickets();
  const t = makeTicket(kind, holder);
  ts.push(t);
  saveUserTickets(ts);
  return t;
};
const clearUserTickets = () => saveUserTickets([]);

// Per-partner "used" tracking — keyed by `${ticketId}::${partnerId}` → timestamp.
// Same code can be used at MULTIPLE partners, tracked separately.
const HF_PARTNER_USES_KEY = 'hf_partner_uses';
const loadPartnerUses = () => {
  try {
    const raw = localStorage.getItem(HF_PARTNER_USES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
};
const savePartnerUses = (m) => {
  try { localStorage.setItem(HF_PARTNER_USES_KEY, JSON.stringify(m)); } catch (e) {}
};
const partnerUseKey = (ticketId, partnerId) => `${ticketId}::${partnerId}`;
const togglePartnerUse = (ticketId, partnerId) => {
  const m = loadPartnerUses();
  const k = partnerUseKey(ticketId, partnerId);
  if (m[k]) delete m[k];
  else m[k] = Date.now();
  savePartnerUses(m);
  return m;
};
// Legacy alias used by older flows (kept so dev seeds still work)
const getOrCreateUserCode = () => {
  const ts = loadUserTickets();
  return ts.length > 0 ? ts[0].code : 'HF2026-——————';
};

// ─────────────── Partners data ───────────────
const PARTNERS = [
  {
    id: 'mega-tiroliana',
    name: 'Mega Tiroliana Bucovina',
    cat: 'tiroliana', catLabel: 'Tiroliana', catGlyph: '🎢',
    distance: '28 km', location: 'Vatra Dornei',
    discount: '20% OFF', discountType: 'percent',
    desc: 'Cea mai mare tiroliana din România, cu 1.6 km lungime',
    offer: '20% reducere la toate cursele tirolianei pentru posesorii de cod Hit Fest. Valabil zilnic, fără rezervare.',
    validity: '1 august – 30 septembrie 2026',
    phone: '+40 744 123 456',
    web: 'https://megatiroliana.ro',
    color: 'var(--hf-coral)',
  },
  {
    id: 'bob-gura-humorului',
    name: 'Pârtia Bob Gura Humorului',
    cat: 'bob', catLabel: 'Bob & Sanie', catGlyph: '🛷',
    distance: '2 km', location: 'Gura Humorului',
    discount: '30% OFF', discountType: 'percent',
    desc: 'Pârtie de bob pe șine, deschisă tot anul, în mijlocul orașului',
    offer: '30% reducere la o coborâre pentru posesorii de cod. O singură utilizare per cod.',
    validity: '1 august – 30 septembrie 2026',
    phone: '+40 745 234 567',
    color: 'var(--hf-turcoaz)',
  },
  {
    id: 'muzeul-bucovinei',
    name: 'Muzeul Bucovinei',
    cat: 'muzee', catLabel: 'Muzee', catGlyph: '🏛️',
    distance: '35 km', location: 'Suceava',
    discount: 'INTRARE GRATIS', discountType: 'freebie',
    desc: 'Muzeul Național al Bucovinei — istorie, etnografie, artă',
    offer: 'Intrare gratuită pentru posesorii de cod Hit Fest, valabil Marți-Duminică.',
    validity: '1 – 15 august 2026',
    color: 'var(--hf-galben)',
  },
  {
    id: 'manastirea-voronet',
    name: 'Mănăstirea Voroneț',
    cat: 'muzee', catLabel: 'Muzee', catGlyph: '🏛️',
    distance: '5 km', location: 'Voroneț',
    discount: '20% OFF', discountType: 'percent',
    desc: 'UNESCO Heritage, faimoasă pentru "Albastru de Voroneț"',
    offer: '20% reducere la intrare pentru posesorii de cod. Valabil zilnic 09:00–18:00.',
    validity: '1 august – 30 septembrie 2026',
    color: 'var(--hf-bleumarin)',
  },
  {
    id: 'restaurant-bucovinean',
    name: 'Hanul Bucovinean',
    cat: 'restaurante', catLabel: 'Restaurante', catGlyph: '🍽️',
    distance: '1 km', location: 'Gura Humorului',
    discount: '1+1 GRATIS', discountType: 'bogo',
    desc: 'Tradițional bucovinean — sarmale, balmoș, păstrăv',
    offer: '1+1 gratis la balmoș pentru posesorii de cod. Doar în zilele festivalului.',
    validity: '7 – 9 august 2026',
    phone: '+40 746 345 678',
    color: 'var(--hf-portocaliu)',
  },
  {
    id: 'pensiunea-floralis',
    name: 'Pensiunea Floralis',
    cat: 'cazare', catLabel: 'Cazare', catGlyph: '🛏️',
    distance: '2 km', location: 'Gura Humorului',
    discount: '15% OFF', discountType: 'percent',
    desc: 'Pensiune 4★ cu vedere la munte și mic dejun tradițional',
    offer: '15% reducere la cazare pentru sejurul festivalului. Aplică la rezervare cu cod.',
    validity: '6 – 10 august 2026',
    phone: '+40 747 456 789',
    web: 'https://floralis.ro',
    color: 'var(--hf-coral)',
  },
  {
    id: 'aventura-parc',
    name: 'Aventura Parc Bucovina',
    cat: 'atractii', catLabel: 'Atracții', catGlyph: '🎨',
    distance: '3 km', location: 'Gura Humorului',
    discount: '25% OFF', discountType: 'percent',
    desc: 'Parc de aventură cu trasee în copaci, tiroliene scurte și escaladă',
    offer: '25% reducere la toate biletele pentru posesorii de cod. Familie sau adult.',
    validity: '1 august – 30 septembrie 2026',
    phone: '+40 748 567 890',
    color: 'var(--hf-lime)',
  },
  {
    id: 'manastirea-humorului',
    name: 'Mănăstirea Humorului',
    cat: 'muzee', catLabel: 'Muzee', catGlyph: '🏛️',
    distance: '8 km', location: 'Mănăstirea Humorului',
    discount: 'INTRARE GRATIS', discountType: 'freebie',
    desc: 'Mănăstire UNESCO din secolul XVI, frescuri exterioare excepționale',
    offer: 'Intrare gratuită pentru posesorii de cod, Joi-Duminică.',
    validity: '1 – 15 august 2026',
    color: 'var(--hf-galben)',
  },
];

const CATS = [
  { id: 'all',         label: 'Toate',       glyph: '★' },
  { id: 'tiroliana',   label: 'Tiroliana',   glyph: '🎢' },
  { id: 'bob',         label: 'Bob & Sanie', glyph: '🛷' },
  { id: 'muzee',       label: 'Muzee',       glyph: '🏛️' },
  { id: 'restaurante', label: 'Restaurante', glyph: '🍽️' },
  { id: 'cazare',      label: 'Cazare',      glyph: '🛏️' },
  { id: 'atractii',    label: 'Atracții',    glyph: '🎨' },
];

// ─────────────── Partner placeholder image ───────────────
const PartnerImage = ({ p, size = 80, radius = 18 }) => {
  // Deterministic illustrated placeholder — colored backdrop + category glyph + dots pattern
  const tones = {
    tiroliana:  ['#FF8FA5', '#FFD27A'],
    bob:        ['#A6E0DA', '#1ABC9C'],
    muzee:      ['#F4DD8F', '#E8B449'],
    restaurante:['#FFB892', '#FF8C42'],
    cazare:     ['#C7B7E8', '#9B7FD4'],
    atractii:   ['#D8E89A', '#B8D936'],
  };
  const [a, b] = tones[p.cat] || ['#ddd', '#aaa'];
  return (
    <div style={{
      width: size, height: size, borderRadius: radius, flexShrink: 0,
      background: `linear-gradient(135deg, ${a}, ${b})`,
      position: 'relative', overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px rgba(10,37,64,0.08)',
    }}>
      <svg viewBox="0 0 60 60" preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18 }}>
        {[8,18,28,38,48].map(y =>
          [8,18,28,38,48].map(x => (
            <circle key={x + ',' + y} cx={x} cy={y} r="1.6" fill="#fff" />
          ))
        )}
      </svg>
      <span style={{
        position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
        fontSize: size * 0.45, lineHeight: 1,
        filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.15))',
      }}>{p.catGlyph}</span>
    </div>
  );
};

// ─────────────── DiscountBadge ───────────────
const DiscountBadge = ({ p, size = 'small' }) => {
  const styles = {
    percent: { bg: 'var(--hf-coral)',  fg: '#fff' },
    freebie: { bg: 'var(--hf-galben)', fg: 'var(--hf-bleumarin)' },
    bogo:    { bg: 'transparent',      fg: 'var(--hf-bleumarin)', border: 'var(--hf-bleumarin)' },
  };
  const s = styles[p.discountType] || styles.percent;
  const fontSize = size === 'large' ? 64 : 13;
  const padding = size === 'large' ? '6px 14px' : '4px 10px';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      background: s.bg, color: s.fg,
      border: s.border ? `2px solid ${s.border}` : 'none',
      padding, borderRadius: 999,
      fontFamily: 'var(--ff-display)',
      fontSize, letterSpacing: size === 'large' ? '0.04em' : '0.06em',
      fontWeight: 800, lineHeight: 1,
      whiteSpace: 'nowrap',
    }}>{p.discount}</span>
  );
};

// ─────────────── TicketCodeCard ───────────────
// Renders a single ticket's discount code. Accepts a ticket object.
// Pseudo-QR pattern derived from the code string (visual only — finder squares + hashed cells)
const InlineQR = ({ code = '', size = 140 }) => {
  // Simple deterministic hash from code -> 21x21 grid
  const N = 21;
  const cells = [];
  let h = 0;
  for (let i = 0; i < code.length; i++) h = (h * 31 + code.charCodeAt(i)) >>> 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      // Finder squares (3 corners)
      const inFinder = (gx, gy) =>
        x >= gx && x < gx + 7 && y >= gy && y < gy + 7;
      const f1 = inFinder(0, 0), f2 = inFinder(14, 0), f3 = inFinder(0, 14);
      let on = false;
      if (f1 || f2 || f3) {
        const lx = f1 ? x : f2 ? x - 14 : x;
        const ly = f1 ? y : f3 ? y - 14 : y;
        // Outer ring + center 3x3
        on = (lx === 0 || lx === 6 || ly === 0 || ly === 6) ||
             (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4);
      } else {
        // Hash-derived noise — stable per code
        const k = (h ^ (x * 1103515245 + y * 12345)) >>> 0;
        on = (k & 0b11) === 0b10;
      }
      if (on) cells.push(<rect key={x + ',' + y} x={x} y={y} width="1" height="1" fill="#0A2540" />);
    }
  }
  return (
    <svg width={size} height={size} viewBox={`-1 -1 ${N + 2} ${N + 2}`}
      shapeRendering="crispEdges" style={{ display: 'block' }}>
      <rect x="-1" y="-1" width={N + 2} height={N + 2} fill="#fff" />
      {cells}
    </svg>
  );
};

const TicketCodeCard = ({ ticket, variant = 'compact', onCopy, copied, multi = false }) => {
  const meta = TICKET_KIND_META[ticket.kind] || TICKET_KIND_META['3day'];
  const [showQR, setShowQR] = u3S(false);
  if (variant === 'compact') {
    return (
      <div style={{
        background: 'rgba(26, 188, 156, 0.10)',
        border: '1.5px solid var(--hf-turcoaz)',
        borderRadius: 'var(--r-lg)',
        padding: '12px 14px',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
              color: 'var(--hf-turcoaz-d)', textTransform: 'uppercase' }}>
              {multi ? meta.short : 'CODUL TĂU'}
            </span>
            {multi && (
              <span style={{ fontSize: 10, fontWeight: 700,
                color: 'var(--color-text-secondary)' }}>
                · {ticket.serial}
              </span>
            )}
          </div>
          <div className="hf-display" style={{
            fontSize: 22, color: 'var(--hf-bleumarin)',
            letterSpacing: '0.08em', marginTop: 2,
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{ticket.code}</div>
        </div>
        <button onClick={() => onCopy(ticket)} style={{
          width: 44, height: 44, borderRadius: 12, border: 'none',
          background: copied ? 'var(--hf-turcoaz)' : 'var(--hf-paper)',
          color: copied ? '#fff' : 'var(--hf-bleumarin)',
          display: 'grid', placeItems: 'center', cursor: 'pointer', flexShrink: 0,
          boxShadow: 'var(--sh-sm)',
          transition: 'all var(--t-fast) var(--ease)',
        }}>
          {copied
            ? <Icon name="check" size={18} stroke="#fff" strokeWidth={3} />
            : <CopyGlyph />
          }
        </button>
      </div>
    );
  }
  // FULL variant — for detail page
  return (
    <div style={{
      background: 'var(--hf-crem)',
      border: '2px dashed var(--hf-coral)',
      borderRadius: 'var(--r-xl)',
      padding: '18px 18px 16px',
      textAlign: 'center', position: 'relative',
    }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '3px 10px', borderRadius: 999,
        background: meta.color, color: '#fff',
        fontFamily: 'var(--ff-display)', fontSize: 11, letterSpacing: '0.08em' }}>
        {meta.short}
      </div>
      <div className="hf-display" style={{
        fontSize: 36, color: 'var(--hf-bleumarin)',
        letterSpacing: '0.1em', marginTop: 10, lineHeight: 1,
      }}>{ticket.code}</div>
      <div style={{ fontSize: 11, color: 'var(--color-text-secondary)',
        marginTop: 6, fontFamily: 'ui-monospace, monospace' }}>
        {ticket.serial}
      </div>
      {showQR && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: 6, marginTop: 14 }}>
          <div style={{ padding: 8, background: '#fff', borderRadius: 'var(--r-md)',
            boxShadow: 'var(--sh-sm)' }}>
            <InlineQR code={ticket.code} size={140} />
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-text-secondary)',
            maxWidth: 220, lineHeight: 1.4 }}>
            Arată ecranul partenerului — scanează codul, nu trebuie să-l tastezi.
          </div>
        </div>
      )}
      <div style={{ display: 'flex', gap: 8, marginTop: 12, justifyContent: 'center' }}>
        <button onClick={() => onCopy(ticket)} className="hf-btn hf-btn-secondary"
          style={{
            fontSize: 13, padding: '8px 16px',
            borderColor: copied ? 'var(--hf-turcoaz)' : 'var(--hf-coral)',
            color: copied ? 'var(--hf-turcoaz-d)' : 'var(--hf-coral)',
            gap: 6,
          }}>
          {copied
            ? <><Icon name="check" size={14} stroke="var(--hf-turcoaz-d)" strokeWidth={3} /> COPIAT</>
            : <><CopyGlyph /> COPIAZĂ</>
          }
        </button>
        <button onClick={() => setShowQR(v => !v)} className="hf-btn hf-btn-secondary"
          style={{
            fontSize: 13, padding: '8px 16px',
            borderColor: showQR ? 'var(--hf-bleumarin)' : 'var(--hf-coral)',
            color: showQR ? 'var(--hf-bleumarin)' : 'var(--hf-coral)',
            background: showQR ? 'var(--hf-bleumarin)' : 'transparent',
            gap: 6,
          }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke={showQR ? '#fff' : 'currentColor'} strokeWidth="2" aria-hidden>
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <path d="M14 14h3M20 14v3M14 20h3M17 17h3" />
          </svg>
          <span style={{ color: showQR ? '#fff' : undefined }}>
            {showQR ? 'ASCUNDE QR' : 'ARATĂ QR'}
          </span>
        </button>
      </div>
    </div>
  );
};

// Empty state — no tickets registered
const EmptyTicketsState = ({ onBuyTap, compact = false }) => (
  <div style={{
    background: 'var(--hf-crem)',
    border: '1.5px dashed var(--color-border)',
    borderRadius: 'var(--r-xl)',
    padding: compact ? '18px 16px' : '24px 20px 22px',
    textAlign: 'center',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    gap: compact ? 10 : 14,
  }}>
    <div style={{
      width: compact ? 56 : 72, height: compact ? 56 : 72,
      position: 'relative', flexShrink: 0,
    }}>
      <svg viewBox="0 0 64 64" width="100%" height="100%"
        style={{ animation: 'hf-mascot-bob 2.6s ease-in-out infinite' }}>
        <defs>
          <linearGradient id="hf-mascot-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--hf-coral)" />
            <stop offset="100%" stopColor="var(--hf-galben)" />
          </linearGradient>
        </defs>
        {/* Ticket body */}
        <path d="M8 18 h36 a4 4 0 0 1 4 4 v4 a4 4 0 0 0 0 8 v4 a4 4 0 0 1 -4 4 h-36 a4 4 0 0 1 -4 -4 v-4 a4 4 0 0 0 0 -8 v-4 a4 4 0 0 1 4 -4 z"
          fill="url(#hf-mascot-fill)" />
        {/* Perforation */}
        <line x1="36" y1="20" x2="36" y2="40" stroke="var(--hf-paper)"
          strokeWidth="1.5" strokeDasharray="2 2" />
        {/* Stripes */}
        <rect x="10" y="24" width="20" height="2" rx="1" fill="rgba(10,37,64,0.18)" />
        <rect x="10" y="29" width="14" height="2" rx="1" fill="rgba(10,37,64,0.18)" />
        <rect x="10" y="34" width="18" height="2" rx="1" fill="rgba(10,37,64,0.18)" />
        {/* Star sparkle */}
        <g style={{ animation: 'hf-mascot-spark 2.6s ease-in-out infinite' }}>
          <path d="M52 12 L53.4 15 L56.5 15.5 L54.2 17.8 L54.8 21 L52 19.5 L49.2 21 L49.8 17.8 L47.5 15.5 L50.6 15 z"
            fill="var(--hf-bleumarin)" />
        </g>
      </svg>
    </div>
    <div>
      <div className="hf-display" style={{
        fontSize: compact ? 18 : 22, color: 'var(--hf-bleumarin)',
        letterSpacing: '0.04em', lineHeight: 1.15,
      }}>
        AI NEVOIE DE UN BILET
      </div>
      <div style={{ fontSize: 13, color: 'var(--color-text-secondary)',
        marginTop: 6, lineHeight: 1.5, textWrap: 'pretty',
        maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
        Reducerile la parteneri sunt rezervate posesorilor de bilet Hit Fest.
        Fiecare bilet are propriul cod.
      </div>
    </div>
    <button className="hf-btn hf-btn-primary"
      onClick={onBuyTap}
      style={{ width: '100%', marginTop: 2 }}>
      CUMPĂRĂ BILET
    </button>
  </div>
);

// Copy icon (clipboard)
const CopyGlyph = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </svg>
);

// ─────────────── CategoryFilterPill ───────────────
const CategoryFilterPill = ({ cat, active, onTap }) => (
  <button onClick={onTap} style={{
    flexShrink: 0,
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '10px 16px',
    background: active ? 'var(--hf-bleumarin)' : 'transparent',
    color: active ? '#fff' : 'var(--hf-bleumarin)',
    border: '1.5px solid ' + (active ? 'var(--hf-bleumarin)' : 'rgba(10,37,64,0.18)'),
    borderRadius: 999,
    fontFamily: 'var(--ff-body)',
    fontSize: 13, fontWeight: 600,
    cursor: 'pointer', minHeight: 40,
    transition: 'all var(--t-fast) var(--ease)',
    whiteSpace: 'nowrap',
  }}>
    <span style={{ fontSize: 14 }}>{cat.glyph}</span>
    <span>{cat.label}</span>
  </button>
);

// ─────────────── PartnerCard (list row) ───────────────
const PartnerCard = ({ p, onTap }) => (
  <button onClick={onTap} style={{
    display: 'flex', alignItems: 'center', gap: 14,
    padding: 14, background: 'var(--hf-paper)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--r-xl)', boxShadow: 'var(--sh-sm)',
    cursor: 'pointer', textAlign: 'left', width: '100%',
    transition: 'all var(--t-fast) var(--ease)',
  }} className="hf-partner-card">
    <PartnerImage p={p} size={72} radius={18} />
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--hf-bleumarin)',
        lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis',
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
        {p.name}
      </div>
      <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>
        {p.catGlyph} {p.catLabel} · {p.distance} de festival
      </div>
      <div style={{ marginTop: 8 }}>
        <DiscountBadge p={p} />
      </div>
    </div>
    <Icon name="chevron" size={18} stroke="var(--color-text-secondary)" />
  </button>
);

// ─────────────── PartnersScreen (list) ───────────────
const PartnersScreen = ({ tickets = [], onPartnerTap, onBuyTap, onTabChange }) => {
  const [filter, setFilter] = u3S('all');
  const [copiedId, setCopiedId] = u3S(null);
  const [toast, setToast] = u3S(null);
  const [activeIdx, setActiveIdx] = u3S(0);

  const visible = u3M(() =>
    filter === 'all' ? PARTNERS : PARTNERS.filter(p => p.cat === filter),
    [filter]);

  const copyTicket = (t) => {
    try { navigator.clipboard?.writeText(t.code); } catch (e) {}
    setCopiedId(t.id);
    setToast('Cod copiat ✓');
    setTimeout(() => { setCopiedId(null); setToast(null); }, 1600);
  };

  const hasTickets = tickets.length > 0;
  const multi = tickets.length > 1;
  const activeTicket = hasTickets ? tickets[Math.min(activeIdx, tickets.length - 1)] : null;

  return (
    <div style={{ padding: '8px 16px 100px', display: 'flex',
      flexDirection: 'column', gap: 14, position: 'relative' }}>
      <div>
        <div className="hf-display" style={{ fontSize: 32, letterSpacing: '0.04em' }}>
          REDUCERI PARTENERI
        </div>
        <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 4 }}>
          {PARTNERS.length} parteneri · Pentru posesorii de bilet Hit Fest
        </div>
      </div>

      {!hasTickets && <EmptyTicketsState onBuyTap={onBuyTap} compact />}

      {hasTickets && !multi && (
        <TicketCodeCard ticket={activeTicket} variant="compact"
          onCopy={copyTicket} copied={copiedId === activeTicket.id} />
      )}

      {hasTickets && multi && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
            color: 'var(--color-text-secondary)', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>CODURILE TALE · {tickets.length} bilete</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {tickets.map((t) => (
              <TicketCodeCard key={t.id} ticket={t} variant="compact" multi
                onCopy={copyTicket} copied={copiedId === t.id} />
            ))}
          </div>
        </div>
      )}

      <div style={{ margin: '4px -16px 0', padding: '0 16px',
        overflowX: 'auto', display: 'flex', gap: 8 }} className="hf-scroll">
        {CATS.map(c => (
          <CategoryFilterPill key={c.id} cat={c}
            active={filter === c.id} onTap={() => setFilter(c.id)} />
        ))}
      </div>

      {visible.length === 0 ? (
        <div style={{ padding: '40px 20px', textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 80, height: 80, borderRadius: 999,
            background: 'var(--hf-crem-2)', display: 'grid', placeItems: 'center',
            fontSize: 36 }}>🥲</div>
          <div className="hf-display" style={{ fontSize: 18 }}>
            NU SUNT PARTENERI ÎN ACEASTĂ CATEGORIE
          </div>
          <button className="hf-btn hf-btn-secondary"
            onClick={() => setFilter('all')}>VEZI TOATE</button>
        </div>
      ) : (
        <div key={filter} style={{ display: 'flex', flexDirection: 'column', gap: 10,
          animation: 'hf-fade-in 220ms var(--ease)' }}>
          {visible.map(p => (
            <PartnerCard key={p.id} p={p} onTap={() => onPartnerTap(p.id)} />
          ))}
        </div>
      )}

      {hasTickets && (
        <div style={{ padding: '8px 12px', fontSize: 11, color: 'var(--color-text-secondary)',
          textAlign: 'center', lineHeight: 1.5 }}>
          Codurile sunt unice per bilet. Le găsești și în secțiunea <strong>Bilete</strong>.
        </div>
      )}

      {toast && <Toast msg={toast} />}
      <style>{`@keyframes hf-fade-in { from{opacity:0; transform:translateY(4px)} to{opacity:1; transform:none} }`}</style>
    </div>
  );
};

// ─────────────── OfferCard ───────────────
const OfferCard = ({ p }) => (
  <div style={{
    background: p.discountType === 'freebie'
      ? 'linear-gradient(135deg, var(--hf-galben), var(--hf-portocaliu))'
      : p.discountType === 'bogo'
      ? 'linear-gradient(135deg, var(--hf-bleumarin), var(--hf-bleumarin-2))'
      : 'linear-gradient(135deg, var(--hf-turcoaz), var(--hf-turcoaz-d))',
    color: '#fff', borderRadius: 'var(--r-xl)',
    padding: '20px 20px 22px', position: 'relative', overflow: 'hidden',
    boxShadow: 'var(--sh-md)',
  }}>
    <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.15,
      fontSize: 140, lineHeight: 1, transform: 'rotate(-12deg)' }}>
      {p.catGlyph}
    </div>
    <div style={{ position: 'relative' }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2,
        opacity: 0.9, textTransform: 'uppercase' }}>
        OFERTA TA
      </div>
      <div className="hf-display" style={{
        fontSize: p.discount.length > 9 ? 38 : 56,
        letterSpacing: '0.02em', marginTop: 6, lineHeight: 0.95,
      }}>{p.discount}</div>
      <div style={{ fontSize: 14, marginTop: 12, lineHeight: 1.5,
        opacity: 0.95, maxWidth: 320 }}>
        {p.offer}
      </div>
      <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 6,
        fontSize: 12, opacity: 0.85 }}>
        <Icon name="info" size={13} stroke="currentColor" />
        Valabil {p.validity}
      </div>
    </div>
  </div>
);

// ─────────────── PartnerDetailScreen ───────────────
const PartnerDetailScreen = ({ partnerId, tickets = [], onBack, onBuyTap }) => {
  const p = PARTNERS.find(x => x.id === partnerId);
  const [copiedId, setCopiedId] = u3S(null);
  const [toast, setToast] = u3S(null);
  const [uses, setUses] = u3S(() => loadPartnerUses());

  if (!p) return null;

  const copyTicket = (t) => {
    try { navigator.clipboard?.writeText(t.code); } catch (e) {}
    setCopiedId(t.id);
    setToast('Cod copiat ✓');
    setTimeout(() => { setCopiedId(null); setToast(null); }, 1600);
  };

  const hasTickets = tickets.length > 0;

  const tones = {
    tiroliana:  ['#FF8FA5', '#FFD27A'],
    bob:        ['#A6E0DA', '#1ABC9C'],
    muzee:      ['#F4DD8F', '#E8B449'],
    restaurante:['#FFB892', '#FF8C42'],
    cazare:     ['#C7B7E8', '#9B7FD4'],
    atractii:   ['#D8E89A', '#B8D936'],
  };
  const [a, b] = tones[p.cat] || ['#ccc', '#999'];

  return (
    <div style={{ position: 'relative', minHeight: '100%' }}>
      {/* HERO */}
      <div style={{
        height: 240, position: 'relative', overflow: 'hidden',
        background: `linear-gradient(135deg, ${a}, ${b})`,
      }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18 }}>
          {Array.from({ length: 9 }).map((_, r) =>
            Array.from({ length: 9 }).map((_, c) => (
              <circle key={r + ',' + c} cx={c * 12 + 6} cy={r * 12 + 6} r="1.4" fill="#fff" />
            ))
          )}
        </svg>
        <span style={{
          position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
          fontSize: 110, lineHeight: 1, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
        }}>{p.catGlyph}</span>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(10,37,64,0.05) 40%, rgba(10,37,64,0.6) 100%)',
        }} />

        {/* Back button */}
        <button onClick={onBack} style={{
          position: 'absolute', top: 56, left: 16,
          width: 44, height: 44, borderRadius: 999, border: 'none',
          background: 'rgba(255,255,255,0.95)', color: 'var(--hf-bleumarin)',
          display: 'grid', placeItems: 'center', cursor: 'pointer',
          backdropFilter: 'blur(8px)', boxShadow: 'var(--sh-sm)',
        }}>
          <Icon name="chevronLeft" size={22} />
        </button>
        {/* Category badge */}
        <span style={{
          position: 'absolute', top: 58, right: 16,
          padding: '7px 14px', borderRadius: 999,
          background: 'var(--hf-galben)', color: 'var(--hf-bleumarin)',
          fontFamily: 'var(--ff-display)', fontSize: 13, letterSpacing: '0.06em',
          boxShadow: 'var(--sh-sm)',
        }}>{p.catGlyph} {p.catLabel.toUpperCase()}</span>
      </div>

      {/* INFO + offer + code + CTAs */}
      <div style={{ padding: '20px 20px 100px', display: 'flex',
        flexDirection: 'column', gap: 16,
        marginTop: -28, background: 'var(--hf-paper)',
        borderTopLeftRadius: 'var(--r-2xl)', borderTopRightRadius: 'var(--r-2xl)',
        position: 'relative', zIndex: 2 }}>
        <div>
          <div className="hf-display" style={{ fontSize: 30, lineHeight: 1.05,
            color: 'var(--hf-bleumarin)', letterSpacing: '0.02em' }}>
            {p.name.toUpperCase()}
          </div>
          <div style={{ fontSize: 14, color: 'var(--color-text-secondary)',
            marginTop: 6, lineHeight: 1.5 }}>
            {p.desc}
          </div>
          <div style={{ fontSize: 13, color: 'var(--color-text-secondary)',
            marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Icon name="pin" size={14} stroke="var(--hf-coral)" />
            {p.location} · {p.distance} de festival
          </div>
        </div>

        <OfferCard p={p} />

        {!hasTickets && <EmptyTicketsState onBuyTap={onBuyTap} />}
        {hasTickets && tickets.length === 1 && (
          <TicketCodeCard ticket={tickets[0]} variant="full"
            onCopy={copyTicket} copied={copiedId === tickets[0].id} />
        )}
        {hasTickets && tickets.length > 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
              color: 'var(--color-text-secondary)', textTransform: 'uppercase',
              textAlign: 'center' }}>
              ALEGE CODUL · {tickets.length} bilete
            </div>
            {tickets.map(t => (
              <TicketCodeCard key={t.id} ticket={t} variant="compact" multi
                onCopy={copyTicket} copied={copiedId === t.id} />
            ))}
          </div>
        )}

        {/* Per-partner used tracking */}
        {hasTickets && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {tickets.map(tk => {
              const used = uses[partnerUseKey(tk.id, p.id)];
              const lbl = tickets.length > 1
                ? `Bilet ${(tk.code || '').slice(-6)}`
                : 'Codul tău';
              return (
                <button key={tk.id}
                  onClick={() => {
                    const m = togglePartnerUse(tk.id, p.id);
                    setUses(m);
                    setToast(used ? 'Marcaj eliminat' : 'Marcat ca folosit ✓');
                    setTimeout(() => setToast(null), 1500);
                  }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '12px 14px',
                    background: used ? 'var(--hf-crem)' : 'var(--hf-paper)',
                    border: '1.5px solid ' + (used ? 'var(--hf-turcoaz)' : 'var(--color-border)'),
                    borderRadius: 'var(--r-md)', cursor: 'pointer',
                    textAlign: 'left', width: '100%',
                    fontFamily: 'var(--ff-body)',
                  }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                    background: used ? 'var(--hf-turcoaz)' : 'transparent',
                    border: '1.5px solid ' + (used ? 'var(--hf-turcoaz)' : 'var(--color-border)'),
                    display: 'grid', placeItems: 'center', transition: 'all var(--t-fast)',
                  }}>
                    {used && <Icon name="check" size={14} stroke="#fff" strokeWidth={3} />}
                  </span>
                  <span style={{ flex: 1, fontSize: 13, color: 'var(--hf-bleumarin)',
                    fontWeight: 600, lineHeight: 1.3 }}>
                    {used
                      ? <>Folosit la <strong>{p.name}</strong></>
                      : <>Marchează {lbl} ca folosit aici</>}
                  </span>
                  {used && (
                    <span style={{ fontSize: 11, color: 'var(--color-text-secondary)',
                      whiteSpace: 'nowrap' }}>
                      {new Date(used).toLocaleDateString('ro-RO',
                        { day: '2-digit', month: 'short' })}
                    </span>
                  )}
                </button>
              );
            })}
            <div style={{ fontSize: 11, color: 'var(--color-text-secondary)',
              lineHeight: 1.4, padding: '0 4px' }}>
              Marcajul te ajută să ții evidența ofertelor. Codul rămâne valid și după marcare —
              dacă partenerul permite mai multe utilizări, îl poți folosi din nou.
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button className="hf-btn hf-btn-primary" style={{ width: '100%' }}>
            <Icon name="pin" size={16} stroke="#fff" /> DESCHIDE ÎN HARTĂ
          </button>
          <div style={{ display: 'flex', gap: 10 }}>
            {p.phone && (
              <button className="hf-btn hf-btn-secondary"
                style={{ flex: 1, padding: '10px 16px', fontSize: 14 }}>
                <Icon name="phone" size={14} /> SUNĂ
              </button>
            )}
            {p.web && (
              <button className="hf-btn hf-btn-secondary"
                style={{ flex: 1, padding: '10px 16px', fontSize: 14 }}>
                <WebGlyph /> SITE
              </button>
            )}
          </div>
        </div>

        <div style={{ marginTop: 8, padding: '14px 16px', background: 'var(--hf-crem)',
          borderRadius: 'var(--r-md)', fontSize: 11, color: 'var(--color-text-secondary)',
          lineHeight: 1.5 }}>
          Reducerea este oferită de <strong>{p.name}</strong>. Hit Fest Bucovina nu garantează
          disponibilitatea ofertei. Codul tău este personal — nu îl partaja.
        </div>
      </div>

      {toast && <Toast msg={toast} />}
    </div>
  );
};

const WebGlyph = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);

// Expose globals
Object.assign(window, {
  PartnersScreen, PartnerDetailScreen,
  TicketCodeCard, PartnerCard, DiscountBadge, CategoryFilterPill, OfferCard,
  PartnerImage, CopyGlyph, EmptyTicketsState,
  loadUserTickets, saveUserTickets, addUserTicket, clearUserTickets,
  loadPartnerUses, togglePartnerUse, partnerUseKey,
  makeTicket, TICKET_KIND_META,
  getOrCreateUserCode, // legacy
  PARTNERS, CATS,
});
