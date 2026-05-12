// Hit Fest Bucovina — F8 v2: Ticket validation + email capture + partner code
// Self-contained: data layer + add-ticket flow + mascot + locked teaser + my tickets.

const { useState: vS, useEffect: vE, useRef: vR, useMemo: vM, useCallback: vCB } = React;

// ─────────────── Data layer ───────────────
const HF_USER_KEY = 'hf_user_v2'; // single blob: { userCode, email, marketingConsent, tickets[] }

const _rand6 = () => {
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < 6; i++) s += A[Math.floor(Math.random() * A.length)];
  return s;
};
const _uuid = () => 't_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);

const _emptyUser = () => ({
  userCode: null,
  email: null,
  marketingConsent: false,
  tickets: [],
});

const loadUser = () => {
  try {
    const raw = localStorage.getItem(HF_USER_KEY);
    if (!raw) return _emptyUser();
    return { ..._emptyUser(), ...JSON.parse(raw) };
  } catch (e) { return _emptyUser(); }
};
const saveUser = (u) => {
  try { localStorage.setItem(HF_USER_KEY, JSON.stringify(u)); } catch (e) {}
};
const clearUser = () => {
  try { localStorage.removeItem(HF_USER_KEY); } catch (e) {}
};

// Returns user state after adding ticket. Generates user code on first ticket.
const addTicketToUser = ({ type, photoUri, qrData }) => {
  const u = loadUser();
  if (!u.userCode) u.userCode = 'HF2026-' + _rand6();
  const ticket = {
    id: _uuid(),
    type,
    photoUri: photoUri || null,
    qrData: qrData || null,
    addedAt: new Date().toISOString(),
  };
  u.tickets.unshift(ticket); // most recent first
  saveUser(u);
  return { user: u, ticket };
};
const removeTicketFromUser = (ticketId) => {
  const u = loadUser();
  u.tickets = u.tickets.filter(t => t.id !== ticketId);
  // If no tickets remain, we keep the user code so partner display logic stays consistent,
  // but the gated empty state will appear again because tickets.length === 0.
  saveUser(u);
  return u;
};
const setUserEmail = (email, marketingConsent) => {
  const u = loadUser();
  u.email = email;
  u.marketingConsent = !!marketingConsent;
  saveUser(u);
  return u;
};

Object.assign(window, {
  HF_USER_KEY, loadUser, saveUser, clearUser,
  addTicketToUser, removeTicketFromUser, setUserEmail,
});

// ─────────────── Mascot — pixel-art Generația ───────────────
// A small character holding a festival ticket. Stylised, not slop.
const Mascot = ({ size = 140, mood = 'wave', accent = 'var(--gen-accent)' }) => {
  // 32x32 grid. P=primary skin, T=hair, S=shirt (accent), H=hat (bleumarin), W=white, B=black outline,
  // K=ticket cream, R=ticket coral, _=transparent.
  // Mascot face — friendly cassette-shaped head with headphones, holding a ticket.
  const px = size / 32;
  const cellStyle = { width: px, height: px, display: 'inline-block', verticalAlign: 'top' };
  // Colours
  const C = {
    B: 'var(--hf-bleumarin)',
    H: 'var(--hf-bleumarin)',
    T: 'var(--hf-coral)',
    S: accent,
    P: '#F2D3B5', // skin
    W: '#FFFFFF',
    K: '#FBF1DA', // ticket paper
    R: 'var(--hf-coral)',
    G: 'var(--hf-galben)',
  };
  // 32 rows x 32 cols, each char = a pixel
  const grid = [
    '________________________________',
    '_______BBBBBBBBBBBBBB____________',
    '______BHHHHHHHHHHHHHHB__________',
    '_____BHHHHHHHHHHHHHHHHB_________',
    '____BHHHGGGGGGGGGGGGHHB_________',
    '____BHHHGHFGFGFGFGFGGHB_________',
    '____BHHHGGGGGGGGGGGGGHB_________',
    '___BPPPPPPPPPPPPPPPPPPB_________',
    '___BPPWWPPPPPPPPPPWWPPB_________',
    '__BPPWBWPPPPPPPPPPWBWPPB________',
    '__BPPWWPPPPPPPPPPPPWWPPB________',
    '__BPPPPPPPPRRPPPPPPPPPPB________',
    '__BPPPPPPRRRRRRPPPPPPPPB________',
    '__BPPPPPPPRRRRPPPPPPPPPB________',
    '___BPPPPPPPPPPPPPPPPPPB_________',
    '____BPPPPPBBBBBBPPPPPPB_________',
    '_____BBBBBSSSSSSBBBBBB__________',
    '____BSSSSSSSSSSSSSSSSB__________',
    '___BSSSSKKKKKKKKKSSSSSB_________',
    '__BSSSSKKKKKKKKKKKKSSSSB________',
    '__BSSSSKKHFKKBucKKKKSSSB________',
    '__BSSSSKKKKKKKKKKKKSSSSB________',
    '__BSSSSKKHITKFESTKKKSSSB________',
    '__BSSSSKKKKKKKKKKKKSSSSB________',
    '__BSSSSKK7-9AUGKKKKKSSSB________',
    '__BSSSSKKKKKKKKKKKKSSSSB________',
    '__BSSSSSSSSSSSSSSSSSSSSB________',
    '___BSSSSSSSSSSSSSSSSSSB_________',
    '____BSSSSSSSSSSSSSSSSB__________',
    '_____BBBBSSSSSSSSSSBBB__________',
    '________BBBBBBBBBBB_____________',
    '________________________________',
  ];

  // Replace letters in 'HF' label rows with K (the ticket paper bg) — they were just there
  // to ensure visually pleasant pattern; render as K otherwise.
  const renderRow = (row, ri) => (
    <div key={ri} style={{ display: 'flex', height: px, lineHeight: 0 }}>
      {row.split('').map((ch, ci) => {
        let bg = 'transparent';
        if (ch === '_') bg = 'transparent';
        else if (ch === 'B') bg = C.B;
        else if (ch === 'H') bg = C.H;
        else if (ch === 'T') bg = C.T;
        else if (ch === 'S') bg = C.S;
        else if (ch === 'P') bg = C.P;
        else if (ch === 'W') bg = C.W;
        else if (ch === 'K') bg = C.K;
        else if (ch === 'R') bg = C.R;
        else if (ch === 'G') bg = C.G;
        else if (ch === 'F') bg = C.R; // accent dots in hair stripe
        else bg = C.K; // letters (HIT FEST, 7-9 AUG, etc) on the ticket — treat as paper
        return <span key={ci} style={{ ...cellStyle, background: bg }} />;
      })}
    </div>
  );

  return (
    <div style={{
      width: size, height: size,
      display: 'inline-block', position: 'relative',
      animation: mood === 'wave' ? 'hf-mascot-idle 3s ease-in-out infinite' : undefined,
    }}>
      {grid.map(renderRow)}
      <style>{`
        @keyframes hf-mascot-idle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
};

// Simpler, cleaner mascot — geometric, on-brand. Replaces the pixel grid above.
// (We keep the pixel one but render this simpler SVG mascot by default.)
const MascotSVG = ({ size = 160, mood = 'wave' }) => (
  <div style={{
    width: size, height: size, position: 'relative',
    animation: mood === 'wave' ? 'hf-mascot-idle 3.2s ease-in-out infinite' : undefined,
  }}>
    <svg viewBox="0 0 200 200" width={size} height={size}>
      {/* Sun halo */}
      <circle cx="100" cy="100" r="92" fill="var(--gen-accent-soft)" />
      {/* Confetti / sparkles */}
      <circle cx="38"  cy="38"  r="4" fill="var(--hf-galben)" />
      <circle cx="162" cy="42"  r="3" fill="var(--hf-turcoaz)" />
      <circle cx="170" cy="148" r="4" fill="var(--hf-coral)" />
      <circle cx="28"  cy="150" r="3" fill="var(--hf-bleumarin)" />
      {/* Head — rounded square in bleumarin (the "cassette-head" shape) */}
      <rect x="56" y="40" width="88" height="78" rx="22" fill="var(--hf-bleumarin)" />
      {/* Antenna / hair tuft */}
      <rect x="94" y="28" width="12" height="14" rx="3" fill="var(--hf-coral)" />
      <circle cx="100" cy="26" r="6" fill="var(--hf-galben)" />
      {/* Cassette reels (eyes) */}
      <circle cx="80"  cy="76" r="11" fill="#FFF" />
      <circle cx="120" cy="76" r="11" fill="#FFF" />
      <circle cx="80"  cy="76" r="4" fill="var(--hf-bleumarin)" />
      <circle cx="120" cy="76" r="4" fill="var(--hf-bleumarin)" />
      {/* Smile */}
      <path d="M 84 96 Q 100 110 116 96" stroke="var(--hf-coral)" strokeWidth="4"
        fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="70"  cy="96"  r="4" fill="var(--hf-coral)" opacity="0.55" />
      <circle cx="130" cy="96" r="4" fill="var(--hf-coral)" opacity="0.55" />
      {/* Body — t-shirt in accent */}
      <path d="M 50 120 Q 100 110 150 120 L 150 170 Q 100 178 50 170 Z"
        fill="var(--gen-accent)" />
      {/* Ticket in hand */}
      <g transform="translate(112 132) rotate(-10)">
        <rect x="0" y="0" width="62" height="40" rx="6" fill="#FBF1DA"
          stroke="var(--hf-bleumarin)" strokeWidth="2" />
        <line x1="0" y1="14" x2="62" y2="14" stroke="var(--hf-bleumarin)"
          strokeWidth="1" strokeDasharray="2 2" />
        <text x="31" y="11" fontFamily="var(--ff-display)" fontSize="7"
          fill="var(--hf-bleumarin)" textAnchor="middle" letterSpacing="0.5">
          HIT FEST
        </text>
        <text x="31" y="28" fontFamily="var(--ff-display)" fontSize="8"
          fill="var(--hf-coral)" textAnchor="middle" fontWeight="800">
          7-9 AUG
        </text>
        <text x="31" y="37" fontFamily="var(--ff-mono, monospace)" fontSize="5"
          fill="var(--hf-bleumarin)" textAnchor="middle" letterSpacing="1">
          BUCOVINA
        </text>
      </g>
      {/* Other hand wave */}
      <circle cx="46" cy="138" r="11" fill="var(--gen-accent)" />
      <circle cx="42" cy="132" r="3" fill="#FFF" opacity="0.5" />
    </svg>
    <style>{`
      @keyframes hf-mascot-idle {
        0%, 100% { transform: translateY(0) rotate(-1deg); }
        50% { transform: translateY(-6px) rotate(1deg); }
      }
    `}</style>
  </div>
);

// ─────────────── EmptyDiscountsLocked ───────────────
// Empty state for /reduceri when user has no tickets yet.
const EmptyDiscountsLocked = ({ onAddTicket, onSkip }) => {
  const { t } = useT();
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      textAlign: 'center', gap: 14, padding: '16px 8px 8px',
    }}>
      <MascotSVG size={150} />
      <div className="hf-display" style={{ fontSize: 24, letterSpacing: '0.03em',
        lineHeight: 1.1, color: 'var(--hf-bleumarin)', textWrap: 'balance',
        padding: '0 8px' }}>
        {t('discounts.empty.title')}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--color-text-secondary)',
        maxWidth: 320, textWrap: 'pretty' }}>
        {t('discounts.empty.subtitle')}
      </div>
      <button className="hf-btn hf-btn-primary" onClick={onAddTicket}
        style={{ width: '100%', marginTop: 6, padding: '14px 18px', fontSize: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <Icon name="ticket" size={18} stroke="#fff" />
        {t('discounts.empty.cta')}
      </button>
      <button onClick={onSkip}
        style={{ background: 'transparent', border: 'none', cursor: 'pointer',
          color: 'var(--color-text-secondary)', fontSize: 13, padding: '6px 8px',
          textDecoration: 'underline', textUnderlineOffset: 3,
          fontFamily: 'var(--ff-body)' }}>
        {t('discounts.empty.skip')} →
      </button>
    </div>
  );
};

// Renders a teaser of the partners list, blurred + locked, under the empty state.
const PartnersBlurredTeaser = ({ partners, onAddTicket }) => {
  const { t } = useT();
  const shown = partners.slice(0, 4);
  return (
    <div style={{ position: 'relative', marginTop: 8 }}>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 10,
        filter: 'blur(6px) saturate(0.75)',
        pointerEvents: 'none', userSelect: 'none',
      }} aria-hidden="true">
        {shown.map(p => (
          <PartnerCard key={p.id} p={p} onTap={() => {}} />
        ))}
      </div>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent 0%, var(--hf-paper) 85%)',
      }} />
      <button onClick={onAddTicket}
        style={{
          position: 'absolute', left: '50%', top: 70,
          transform: 'translateX(-50%)',
          background: 'var(--hf-bleumarin)', color: '#fff',
          border: 'none', borderRadius: 999,
          padding: '10px 18px',
          fontFamily: 'var(--ff-display)', fontSize: 12,
          letterSpacing: '0.08em', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: '0 6px 22px rgba(31,46,77,0.35)',
        }}>
        <Icon name="lock" size={14} stroke="#fff" />
        {t('discounts.locked.message')}
      </button>
    </div>
  );
};

Object.assign(window, { Mascot, MascotSVG, EmptyDiscountsLocked, PartnersBlurredTeaser });
