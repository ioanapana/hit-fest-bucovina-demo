// Hit Fest Bucovina — Screens part 2: Photo, Map, Info, MySchedule
const { useState: u2S, useRef: u2R } = React;

// ─────────────── Retro Photo Frames ───────────────
// Photo subject placeholder — faux portrait silhouette with tinted backdrop
const PhotoSubject = ({ tint = 0 }) => {
  const bgs = [
    ['#FF8FA5', '#FFD27A'],
    ['#7ABFE0', '#C7E0A0'],
    ['#FFC36B', '#FF8C7A'],
    ['#B8A8E0', '#FFB0CC'],
  ];
  const [a, b] = bgs[tint % 4];
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative',
      background: `linear-gradient(135deg, ${a}, ${b})`, overflow: 'hidden' }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="ps-light" cx="60%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#ps-light)" />
        {/* two heads — friends */}
        <path d="M -5,100 Q 10,68 35,68 Q 50,68 55,80 Q 60,68 78,68 Q 105,68 110,100 Z"
          fill="rgba(40,30,55,0.6)" />
        <ellipse cx="32" cy="50" rx="13" ry="16" fill="rgba(70,50,75,0.7)" />
        <ellipse cx="70" cy="48" rx="12" ry="15" fill="rgba(60,42,70,0.72)" />
        <path d="M 19,46 Q 24,32 32,33 Q 42,34 45,48 Q 40,42 32,42 Q 24,43 19,46 Z"
          fill="rgba(20,10,30,0.85)" />
        <path d="M 60,42 Q 67,30 75,32 Q 81,38 82,46 Q 76,40 70,41 Q 64,42 60,42 Z"
          fill="rgba(25,15,30,0.85)" />
        {/* smiles */}
        <path d="M 28,57 Q 32,60 36,57" stroke="rgba(80,40,50,0.7)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 66,55 Q 70,58 74,55" stroke="rgba(80,40,50,0.7)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// ─── Frame styles ─── each integrates the festival mark differently
const FRAMES = [
  { id: 'polaroid', label: 'Polaroid', desc: 'Instant clasic' },
  { id: 'vhs',      label: 'VHS',      desc: 'Captură \'94' },
  { id: 'ticket',   label: 'Ticket',   desc: 'Stub de concert' },
  { id: 'mag',      label: 'Magazine', desc: 'Cover \'90s' },
  { id: 'cassette', label: 'Cassette', desc: 'J-Card insert' },
  { id: 'neon',     label: 'Neon',     desc: 'Poster disco' },
];

const Polaroid = ({ tint }) => (
  <div style={{ background: '#fafaf6', padding: '14px 14px 70px',
    boxShadow: '0 12px 30px rgba(10,37,64,0.22), 0 2px 6px rgba(10,37,64,0.1)',
    borderRadius: 3, position: 'relative', maxWidth: 300, margin: '0 auto' }}>
    <div style={{ aspectRatio: '1', background: '#000', overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.15)' }}>
      <PhotoSubject tint={tint} />
    </div>
    <div style={{ position: 'absolute', bottom: 18, left: 14, right: 14,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontFamily: 'var(--ff-script)', fontSize: 22, color: '#1a1a1a',
          lineHeight: 1 }}>Hit Fest</div>
        <div style={{ fontFamily: 'var(--ff-display)', fontSize: 10,
          letterSpacing: '0.18em', color: '#666', marginTop: 4 }}>
          BUCOVINA · AUG 2026
        </div>
      </div>
      <div style={{ background: 'var(--hf-coral)', color: '#fff', padding: '3px 6px',
        fontFamily: 'ui-monospace, monospace', fontSize: 9, fontWeight: 700,
        transform: 'rotate(-3deg)' }}>08·26</div>
    </div>
  </div>
);

const VHS = ({ tint }) => (
  <div style={{ background: '#0E0E12', padding: 8, position: 'relative',
    boxShadow: '0 14px 28px rgba(0,0,0,0.4)', maxWidth: 320, margin: '0 auto' }}>
    <div style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden',
      filter: 'saturate(1.4) contrast(1.05) hue-rotate(-8deg)' }}>
      <PhotoSubject tint={tint} />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.28) 0 1px, transparent 1px 3px)' }} />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, transparent 45%, rgba(255,77,163,0.18) 50%, transparent 55%)' }} />
      <div style={{ position: 'absolute', top: 8, left: 10, color: '#fff',
        fontFamily: 'ui-monospace, monospace', fontSize: 10, fontWeight: 700,
        letterSpacing: 1, textShadow: '1px 1px 0 rgba(0,0,0,0.8)',
        display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: '#E94B5A',
          boxShadow: '0 0 6px #E94B5A' }} />
        REC · SP
      </div>
      <div style={{ position: 'absolute', top: 8, right: 10, color: '#fff',
        fontFamily: 'ui-monospace, monospace', fontSize: 10, fontWeight: 700,
        textShadow: '1px 1px 0 rgba(0,0,0,0.8)' }}>
        08·08·26  21:47
      </div>
      <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        color: 'var(--hf-galben)', fontFamily: 'var(--ff-display)',
        textShadow: '1px 1px 0 rgba(0,0,0,0.8)' }}>
        <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: '0.18em' }}>
          ▶ HIT FEST '26
        </span>
        <span style={{ fontSize: 10, fontFamily: 'ui-monospace, monospace' }}>
          CH 01
        </span>
      </div>
    </div>
  </div>
);

const Ticket = ({ tint }) => (
  <div style={{ display: 'flex', maxWidth: 340, margin: '0 auto',
    boxShadow: '0 14px 28px rgba(10,37,64,0.2)' }}>
    <div style={{ flex: 1, background: 'var(--hf-crem)',
      padding: 12, position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', marginBottom: 8 }}>
        <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 800,
          color: 'var(--hf-bleumarin)', lineHeight: 1 }}>
          <div style={{ fontSize: 20, letterSpacing: '0.04em' }}>HIT FEST</div>
          <div style={{ fontSize: 10, letterSpacing: '0.22em',
            color: 'var(--hf-coral)', marginTop: 3 }}>BUCOVINA · 2026</div>
        </div>
        <div style={{ textAlign: 'right', fontFamily: 'ui-monospace, monospace',
          fontSize: 9, color: 'var(--hf-bleumarin)' }}>
          <div style={{ fontWeight: 700 }}>N° 0826·47</div>
          <div style={{ opacity: 0.7 }}>SEAT GA</div>
        </div>
      </div>
      <div style={{ aspectRatio: '5/3', overflow: 'hidden',
        border: '1px solid rgba(10,37,64,0.15)' }}>
        <PhotoSubject tint={tint} />
      </div>
      <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--ff-display)', letterSpacing: '0.1em',
        fontSize: 10, color: 'var(--hf-bleumarin)' }}>
        <span>SUCEAVA · ARINIȘ</span>
        <span>7–9 · AUG · 2026</span>
      </div>
    </div>
    <div style={{ width: 70, background: 'var(--hf-coral)',
      color: '#fff', padding: '12px 8px', textAlign: 'center',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      borderLeft: '2px dashed rgba(255,255,255,0.5)',
      position: 'relative' }}>
      <div style={{ fontFamily: 'var(--ff-display)', fontSize: 11,
        fontWeight: 800, letterSpacing: '0.2em',
        writingMode: 'vertical-rl', transform: 'rotate(180deg)',
        margin: '0 auto' }}>
        ADMIT ONE
      </div>
      <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 8,
        opacity: 0.85, marginTop: 8 }}>
        #0826
      </div>
    </div>
  </div>
);

const Magazine = ({ tint }) => (
  <div style={{ background: '#fff', maxWidth: 300, margin: '0 auto',
    boxShadow: '0 14px 30px rgba(10,37,64,0.22)',
    position: 'relative', overflow: 'hidden' }}>
    <div style={{ background: 'var(--hf-coral)', color: '#fff',
      padding: '10px 14px 8px', display: 'flex',
      alignItems: 'flex-end', justifyContent: 'space-between' }}>
      <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 900,
        fontSize: 32, letterSpacing: '-0.02em', lineHeight: 0.9 }}>
        HIT<br/>FEST
      </div>
      <div style={{ textAlign: 'right', fontFamily: 'ui-monospace, monospace',
        fontSize: 9, opacity: 0.95, lineHeight: 1.3 }}>
        Vol 26<br/>Issue 08<br/>50 LEI
      </div>
    </div>
    <div style={{ aspectRatio: '4/5', position: 'relative', overflow: 'hidden' }}>
      <PhotoSubject tint={tint} />
      <div style={{ position: 'absolute', left: 0, bottom: 14,
        background: 'var(--hf-galben)', color: 'var(--hf-bleumarin)',
        padding: '4px 12px 4px 14px',
        fontFamily: 'var(--ff-display)', fontWeight: 800,
        fontSize: 14, letterSpacing: '0.04em',
        transform: 'rotate(-2deg)' }}>
        YOU WERE THERE
      </div>
      <div style={{ position: 'absolute', right: 8, top: 8,
        background: 'rgba(10,37,64,0.85)', color: '#fff',
        padding: '4px 8px', fontFamily: 'var(--ff-display)',
        fontSize: 10, letterSpacing: '0.1em' }}>
        + ALDEA, PARTIZAN, AURA
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '8px 12px',
      borderTop: '2px solid var(--hf-bleumarin)' }}>
      <div style={{ display: 'flex', gap: 1.5 }}>
        {[2,1,3,1,2,4,1,3,2,1,3,1,2,3,1].map((w, i) => (
          <span key={i} style={{ width: w, height: 22,
            background: 'var(--hf-bleumarin)' }} />
        ))}
      </div>
      <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 9,
        color: 'var(--hf-bleumarin)' }}>
        BUCOVINA · 7–9 AUG
      </div>
    </div>
  </div>
);

const Cassette = ({ tint }) => (
  <div style={{ display: 'flex', maxWidth: 340, margin: '0 auto',
    background: '#fff', boxShadow: '0 14px 28px rgba(10,37,64,0.2)' }}>
    <div style={{ width: 28, background: 'var(--hf-bleumarin)',
      color: 'var(--hf-galben)', display: 'flex', alignItems: 'center',
      justifyContent: 'center' }}>
      <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 800,
        fontSize: 12, letterSpacing: '0.3em',
        writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
        HIT FEST · SIDE A · 90 MIN
      </span>
    </div>
    <div style={{ flex: 1, padding: 10, position: 'relative' }}>
      <div style={{ background: 'var(--hf-galben)', color: 'var(--hf-bleumarin)',
        padding: '5px 8px', marginBottom: 8,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--ff-display)', fontWeight: 800,
        letterSpacing: '0.08em', fontSize: 11 }}>
        <span>★ HIT FEST '26 MIXTAPE ★</span>
        <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 9 }}>
          C-90
        </span>
      </div>
      <div style={{ aspectRatio: '4/3', overflow: 'hidden',
        border: '2px solid var(--hf-bleumarin)' }}>
        <PhotoSubject tint={tint} />
      </div>
      <div style={{ marginTop: 8, display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: '2px 12px',
        fontFamily: 'ui-monospace, monospace', fontSize: 9,
        color: 'var(--hf-bleumarin)' }}>
        {['01 ALDEA','02 PARTIZAN','03 AURA','04 KOSHKA','05 — YOU —','06 NEȘTIUT'].map(t => (
          <div key={t} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{t}</span><span style={{ opacity: 0.5 }}>3:24</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Neon = ({ tint }) => (
  <div style={{ background: '#0B0420', padding: 14, maxWidth: 300, margin: '0 auto',
    boxShadow: '0 0 40px rgba(255,77,163,0.4), 0 14px 30px rgba(0,0,0,0.4)',
    position: 'relative', overflow: 'hidden' }}>
    <svg viewBox="0 0 100 100" preserveAspectRatio="none"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: 0.55 }}>
      <defs>
        <radialGradient id="ng" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FF1F8F" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0B0420" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#ng)" />
      {Array.from({ length: 18 }).map((_, i) => (
        <line key={i} x1="50" y1="40" x2={50 + Math.cos(i * 20 * Math.PI/180) * 80}
          y2={40 + Math.sin(i * 20 * Math.PI/180) * 80}
          stroke="#FFE53B" strokeWidth="0.4" opacity="0.6" />
      ))}
    </svg>
    <div style={{ position: 'relative', textAlign: 'center',
      fontFamily: 'var(--ff-display)', fontWeight: 900,
      letterSpacing: '0.04em', color: '#FFE53B',
      textShadow: '0 0 8px #FF1F8F, 0 0 16px #FF1F8F',
      fontSize: 26, lineHeight: 1, marginBottom: 8 }}>
      HIT FEST
    </div>
    <div style={{ position: 'relative', aspectRatio: '4/5',
      border: '3px solid #FF1F8F', overflow: 'hidden',
      boxShadow: '0 0 12px #FF1F8F, inset 0 0 10px rgba(0,0,0,0.4)' }}>
      <PhotoSubject tint={tint} />
    </div>
    <div style={{ position: 'relative', textAlign: 'center', marginTop: 10,
      color: '#00D4FF', fontFamily: 'var(--ff-display)',
      letterSpacing: '0.2em', fontSize: 11, fontWeight: 800,
      textShadow: '0 0 6px #00D4FF' }}>
      ★ BUCOVINA · 7–9 AUG '26 ★
    </div>
  </div>
);

const FRAME_COMPONENTS = {
  polaroid: Polaroid, vhs: VHS, ticket: Ticket,
  mag: Magazine, cassette: Cassette, neon: Neon,
};

const SHARE_TARGETS = [
  { id: 'ig',  label: 'Instagram', color: '#E1306C', icon: 'M 7 2 H 17 A 5 5 0 0 1 22 7 V 17 A 5 5 0 0 1 17 22 H 7 A 5 5 0 0 1 2 17 V 7 A 5 5 0 0 1 7 2 Z M 12 8 A 4 4 0 1 0 12 16 A 4 4 0 1 0 12 8 Z M 18 5.5 A 0.5 0.5 0 1 0 18 6.5' },
  { id: 'wa',  label: 'WhatsApp',  color: '#25D366', icon: 'M 12 3 A 9 9 0 0 0 4 16 L 3 21 L 8 20 A 9 9 0 1 0 12 3 Z' },
  { id: 'tt',  label: 'TikTok',    color: '#000',    icon: 'M 14 4 V 14.5 A 3 3 0 1 1 11 11.5 V 8 A 6 6 0 0 0 17 14 V 11' },
  { id: 'dl',  label: 'Salvează',  color: 'var(--hf-bleumarin)', icon: 'M 12 4 V 16 M 7 12 L 12 17 L 17 12 M 4 20 H 20' },
];

const FrameThumb = ({ id }) => {
  const styles = {
    polaroid: { bg: '#fafaf6', accent: '#1a1a1a' },
    vhs:      { bg: '#0E0E12', accent: '#FFE53B' },
    ticket:   { bg: 'var(--hf-crem)', accent: 'var(--hf-coral)' },
    mag:      { bg: '#fff', accent: 'var(--hf-coral)' },
    cassette: { bg: '#fff', accent: 'var(--hf-galben)' },
    neon:     { bg: '#0B0420', accent: '#FF1F8F' },
  }[id] || {};
  return (
    <div style={{ width: '100%', height: '100%', background: styles.bg,
      position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {id === 'mag' && (
        <div style={{ background: styles.accent, color: '#fff',
          fontFamily: 'var(--ff-display)', fontWeight: 900, fontSize: 8,
          padding: '2px 4px', lineHeight: 1 }}>HIT FEST</div>
      )}
      {id === 'vhs' && (
        <div style={{ position: 'absolute', top: 2, left: 3, color: '#fff',
          fontSize: 6, fontFamily: 'ui-monospace, monospace' }}>● REC</div>
      )}
      {id === 'ticket' && (
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0,
          width: 14, background: styles.accent, color: '#fff',
          fontSize: 6, fontFamily: 'var(--ff-display)', fontWeight: 800,
          writingMode: 'vertical-rl', transform: 'rotate(180deg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          letterSpacing: '0.2em' }}>HF '26</div>
      )}
      {id === 'cassette' && (
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 8, background: 'var(--hf-bleumarin)' }} />
      )}
      <div style={{ flex: 1, margin: id === 'ticket' ? '3px 18px 3px 3px'
        : id === 'cassette' ? '3px 3px 3px 11px' : 3,
        background: 'linear-gradient(135deg,#FF8FA5,#FFD27A)',
        borderRadius: 1, border: id === 'neon' ? `1.5px solid ${styles.accent}` : 'none' }} />
      {id === 'polaroid' && (
        <div style={{ height: 12, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontFamily: 'var(--ff-script)',
          fontSize: 8, color: styles.accent }}>Hit Fest</div>
      )}
      {id === 'neon' && (
        <div style={{ position: 'absolute', top: 1, left: 0, right: 0,
          textAlign: 'center', color: styles.accent, fontSize: 6,
          fontFamily: 'var(--ff-display)', fontWeight: 800,
          textShadow: '0 0 3px currentColor' }}>HIT FEST</div>
      )}
    </div>
  );
};

const PhotoScreen = () => {
  const [frame, setFrame] = u2S('polaroid');
  const [tint, setTint] = u2S(0);
  const [hasPhoto, setHasPhoto] = u2S(false);

  const Frame = FRAME_COMPONENTS[frame];

  return (
    <div style={{ padding: '60px 16px 100px', display: 'flex',
      flexDirection: 'column', gap: 18 }}>
      <div>
        <div className="hf-display" style={{ fontSize: 30 }}>CADRE RETRO</div>
        <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 4 }}>
          Pune-ți poza într-un cadru Hit Fest și share-uiește amintirea.
        </div>
      </div>

      {!hasPhoto ? (
        <>
          <div style={{ padding: '6px 0' }}>
            <Frame tint={0} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button className="hf-btn hf-btn-primary"
              style={{ fontSize: 15, padding: 14 }}
              onClick={() => setHasPhoto(true)}>
              <Icon name="camera" size={16} stroke="#fff" /> FĂ POZA ACUM
            </button>
            <button className="hf-btn hf-btn-secondary"
              onClick={() => setHasPhoto(true)}>
              <Icon name="upload" size={16} /> ÎNCARCĂ DIN GALERIE
            </button>
          </div>
          <div style={{ padding: 12, background: 'var(--hf-crem)',
            border: '1px solid var(--color-border)', borderRadius: 'var(--r-md)',
            display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12,
            color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
            <Icon name="info" size={14} stroke="var(--hf-bleumarin)" />
            <span>
              <strong style={{ color: 'var(--hf-bleumarin)' }}>Funcționează cel mai bine pe telefon.</strong>
              {' '}Pe desktop nu avem cameră — încarcă o poză din galerie sau deschide aplicația pe telefon.
            </span>
          </div>
          <div style={{ fontSize: 12, color: 'var(--color-text-secondary)',
            textAlign: 'center', padding: '4px 24px' }}>
            6 cadre cu logo-ul festivalului integrat — preview-ul de mai sus se schimbă cu poza ta.
          </div>
        </>
      ) : (
        <>
          <div style={{ padding: '6px 0' }}>
            <Frame tint={tint} />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between',
              alignItems: 'baseline', marginBottom: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
                color: 'var(--color-text-secondary)' }}>CADRU</div>
              <div style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                {FRAMES.find(f => f.id === frame)?.desc}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto',
              margin: '0 -16px', padding: '0 16px 6px' }} className="hf-scroll">
              {FRAMES.map(f => {
                const active = frame === f.id;
                return (
                  <button key={f.id} onClick={() => setFrame(f.id)}
                    style={{
                      flexShrink: 0, width: 84, padding: 6,
                      background: active ? 'var(--gen-accent)' : 'var(--hf-paper)',
                      color: active ? '#fff' : 'var(--color-text-primary)',
                      border: '2px solid ' + (active ? 'var(--gen-accent)' : 'var(--color-border)'),
                      borderRadius: 'var(--r-md)', cursor: 'pointer',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                    }}>
                    <div style={{ width: 60, height: 44, position: 'relative',
                      overflow: 'hidden', borderRadius: 2 }}>
                      <FrameThumb id={f.id} />
                    </div>
                    <span style={{ fontFamily: 'var(--ff-display)', fontSize: 11,
                      letterSpacing: '0.06em', fontWeight: 700 }}>
                      {f.label.toUpperCase()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
              color: 'var(--color-text-secondary)', marginBottom: 8 }}>VARIANTĂ</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[0,1,2,3].map(i => (
                <button key={i} onClick={() => setTint(i)}
                  style={{
                    flex: 1, height: 36, padding: 0, cursor: 'pointer',
                    border: '2px solid ' + (tint === i ? 'var(--gen-accent)' : 'var(--color-border)'),
                    borderRadius: 'var(--r-sm)', overflow: 'hidden',
                  }}>
                  <div style={{ width: '100%', height: '100%',
                    background: ['linear-gradient(135deg,#FF8FA5,#FFD27A)',
                      'linear-gradient(135deg,#7ABFE0,#C7E0A0)',
                      'linear-gradient(135deg,#FFC36B,#FF8C7A)',
                      'linear-gradient(135deg,#B8A8E0,#FFB0CC)'][i] }} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
              color: 'var(--color-text-secondary)', marginBottom: 10 }}>SHARE</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
              gap: 8 }}>
              {SHARE_TARGETS.map(t => (
                <button key={t.id}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    gap: 6, padding: '10px 4px', background: 'var(--hf-paper)',
                    border: '1.5px solid var(--color-border)',
                    borderRadius: 'var(--r-md)', cursor: 'pointer',
                  }}>
                  <span style={{ width: 38, height: 38, borderRadius: '50%',
                    background: t.color, display: 'grid', placeItems: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={t.icon} />
                    </svg>
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 600,
                    color: 'var(--color-text-primary)' }}>{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button className="hf-btn hf-btn-secondary"
            onClick={() => setHasPhoto(false)}>
            <Icon name="refresh" size={14} /> REFĂ POZA
          </button>
        </>
      )}
    </div>
  );
};

// ─────────────── Map ───────────────
// Stylized aerial of Parcul Ariniș: viewBox 0 0 400 500
// — organic park outline, Moldova river bend along the south
// — wooded alder clusters (the park name "Ariniș" = alder grove)
// — dashed walking paths + the central N-S axis
// — clickable zones rendered as real SVG shapes

const ZoneShape = ({ z, active, onClick }) => {
  const s = z.shape;
  const stroke = active ? 'var(--hf-bleumarin)' : 'rgba(255,255,255,0.85)';
  const sw = active ? 3 : 1.6;
  const common = {
    onClick, style: { cursor: 'pointer', transition: 'all .18s var(--ease)' },
    filter: 'url(#hf-zone-shadow)',
  };
  if (s.type === 'rect') {
    return (
      <g {...common}>
        <rect x={s.x} y={s.y} width={s.w} height={s.h} rx={s.r}
          fill={z.color} stroke={stroke} strokeWidth={sw} />
      </g>
    );
  }
  if (s.type === 'circle') {
    return (
      <g {...common}>
        <circle cx={s.cx} cy={s.cy} r={s.r}
          fill={z.color} stroke={stroke} strokeWidth={sw} />
      </g>
    );
  }
  if (s.type === 'chevron') {
    const dirs = { n: '↑', s: '↓', e: '→', w: '←' };
    return (
      <g {...common}>
        <circle cx={s.x} cy={s.y} r={15}
          fill={z.color} stroke="var(--hf-galben)" strokeWidth={sw + 0.5} />
        <text x={s.x} y={s.y + 5} textAnchor="middle"
          fontSize={16} fontWeight={800} fill="var(--hf-galben)"
          style={{ pointerEvents: 'none' }}>{dirs[s.dir]}</text>
      </g>
    );
  }
  return null;
};

const ZoneLabel = ({ z }) => {
  const s = z.shape;
  if (s.type === 'rect') {
    const cx = s.x + s.w / 2;
    const cy = s.y + s.h / 2;
    const lightOn = ['main', 'b00'].includes(z.id);
    const fontSize = z.id === 'main' ? 14 : 11;
    const lines = z.name.toUpperCase().split(' ');
    return (
      <g style={{ pointerEvents: 'none' }}>
        {lines.length === 1 ? (
          <text x={cx} y={cy + fontSize / 3} textAnchor="middle"
            fontFamily="var(--ff-display)" fontSize={fontSize}
            letterSpacing="0.04em" fontWeight={800}
            fill={lightOn ? '#fff' : 'var(--hf-bleumarin)'}>{lines[0]}</text>
        ) : (
          lines.map((ln, i) => (
            <text key={i} x={cx} y={cy + (i - (lines.length - 1) / 2) * (fontSize + 1) + fontSize / 3}
              textAnchor="middle" fontFamily="var(--ff-display)" fontSize={fontSize}
              letterSpacing="0.04em" fontWeight={800}
              fill={lightOn ? '#fff' : 'var(--hf-bleumarin)'}>{ln}</text>
          ))
        )}
      </g>
    );
  }
  if (s.type === 'circle') {
    const glyphs = { info: 'i', med: '+', 'wc-n': 'WC', 'wc-s': 'WC' };
    const g = glyphs[z.id] || '•';
    return (
      <text x={s.cx} y={s.cy + 5} textAnchor="middle"
        fontFamily="var(--ff-display)" fontWeight={800}
        fontSize={g.length > 1 ? 11 : 18} fill="#fff"
        style={{ pointerEvents: 'none' }}>{g}</text>
    );
  }
  return null;
};

const MapScreen = () => {
  const [open, setOpen] = u2S(null);
  const [filter, setFilter] = u2S('all');
  const cats = [
    { id: 'all', label: 'Toate' },
    { id: 'scenă', label: 'Scenă' },
    { id: 'bar', label: 'Baruri' },
    { id: 'food', label: 'Mâncare' },
    { id: 'family', label: 'Family' },
    { id: 'service', label: 'Servicii' },
  ];
  const visible = ZONES.filter(z => filter === 'all' || z.cat === filter);
  const zone = ZONES.find(z => z.id === open);

  const trees = [
    [55, 60], [75, 75], [100, 50], [320, 55], [345, 80], [365, 130],
    [40, 250], [25, 320], [50, 370], [365, 250], [375, 320], [355, 380],
    [130, 250], [180, 232], [220, 232], [270, 250],
    [115, 415], [155, 430], [250, 425], [295, 415],
  ];

  return (
    <div style={{ padding: '16px 16px 100px', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="hf-display" style={{ fontSize: 30 }}>HARTA</div>
        <span className="hf-chip hf-chip-galben" style={{ fontSize: 11 }}>📡 OFFLINE</span>
      </div>
      <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
        Parcul Ariniș · Gura Humorului · 18 hectare
      </div>

      <div style={{
        position: 'relative',
        background: 'var(--hf-crem)',
        borderRadius: 'var(--r-xl)', overflow: 'hidden',
        border: '2px solid var(--color-border)',
        boxShadow: 'var(--sh-md)',
      }}>
        <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', width: '100%', height: 'auto' }}>
          <defs>
            <radialGradient id="hf-lawn" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#D8EAB8" />
              <stop offset="60%" stopColor="#B6D88A" />
              <stop offset="100%" stopColor="#92BD6A" />
            </radialGradient>
            <linearGradient id="hf-river" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#9BCDEC" />
              <stop offset="100%" stopColor="#6FAFD5" />
            </linearGradient>
            <pattern id="hf-grass" width="6" height="6" patternUnits="userSpaceOnUse">
              <path d="M3,1 L3,5" stroke="#8BB867" strokeWidth="0.4" opacity="0.35" />
            </pattern>
            <filter id="hf-zone-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0A2540" floodOpacity="0.18" />
            </filter>
          </defs>

          <rect width="400" height="500" fill="var(--hf-crem-2)" />

          <g opacity="0.55">
            <path d="M0,30 L400,30" stroke="#E8DFCB" strokeWidth="14" />
            <path d="M0,475 L400,475" stroke="#E8DFCB" strokeWidth="14" />
            <text x="14" y="22" fontFamily="var(--ff-display)" fontSize="8"
              fill="#9C8E6E" letterSpacing="0.15em">STR. ȘTEFAN CEL MARE</text>
            <text x="14" y="494" fontFamily="var(--ff-display)" fontSize="8"
              fill="#9C8E6E" letterSpacing="0.15em">STR. VOIEVOD PETRU MUȘAT</text>
          </g>

          <path d="M -10,440 Q 60,420 120,448 Q 200,478 280,452 Q 350,432 410,460 L 410,500 L -10,500 Z"
            fill="url(#hf-river)" />
          <path d="M -10,440 Q 60,420 120,448 Q 200,478 280,452 Q 350,432 410,460"
            stroke="#5F9BBE" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M 40,455 Q 60,450 80,455" stroke="#fff" strokeWidth="0.8" fill="none" opacity="0.6" />
          <path d="M 180,468 Q 200,463 220,468" stroke="#fff" strokeWidth="0.8" fill="none" opacity="0.6" />
          <path d="M 320,455 Q 340,450 360,455" stroke="#fff" strokeWidth="0.8" fill="none" opacity="0.6" />
          <text x="350" y="488" fontFamily="var(--ff-display)" fontSize="9"
            fill="#5F9BBE" letterSpacing="0.1em" fontStyle="italic">r. Moldova</text>

          <path d="M 30,48 Q 80,32 150,38 Q 230,32 300,42 Q 360,52 378,108
                   Q 388,200 372,290 Q 380,370 340,422 Q 260,448 180,440
                   Q 90,448 36,408 Q 18,340 22,250 Q 18,140 30,48 Z"
            fill="url(#hf-lawn)" stroke="#7AA84F" strokeWidth="1.5" />
          <path d="M 30,48 Q 80,32 150,38 Q 230,32 300,42 Q 360,52 378,108
                   Q 388,200 372,290 Q 380,370 340,422 Q 260,448 180,440
                   Q 90,448 36,408 Q 18,340 22,250 Q 18,140 30,48 Z"
            fill="url(#hf-grass)" />

          <g opacity="0.85">
            <path d="M 22,55 Q 50,40 90,52 Q 130,48 130,90 Q 100,110 60,100 Q 28,95 22,55 Z"
              fill="#7BAE52" />
            <path d="M 280,52 Q 320,42 360,58 Q 380,80 372,115 Q 340,128 305,118 Q 278,100 280,52 Z"
              fill="#7BAE52" />
            <path d="M 20,300 Q 30,265 65,260 Q 85,280 75,330 Q 55,360 30,355 Q 14,335 20,300 Z"
              fill="#7BAE52" />
            <path d="M 340,300 Q 380,275 380,330 Q 370,365 340,365 Q 318,335 340,300 Z"
              fill="#7BAE52" />
          </g>

          {trees.map(([x, y], i) => (
            <g key={i}>
              <circle cx={x + 1} cy={y + 2} r="4" fill="#3D6B2A" opacity="0.25" />
              <circle cx={x} cy={y} r="4.5" fill="#4F8A3A" />
              <circle cx={x - 1.2} cy={y - 1.2} r="1.5" fill="#7CBA5A" />
            </g>
          ))}

          <g stroke="#F4ECD3" strokeWidth="9" strokeLinecap="round" fill="none">
            <path d="M 200,30 L 200,148" />
            <path d="M 200,148 L 200,275" />
            <path d="M 200,275 L 200,440" />
            <path d="M 24,240 Q 110,250 200,250 Q 290,250 376,240" />
            <path d="M 200,360 L 158,385" />
            <path d="M 200,360 L 242,385" />
          </g>
          <g stroke="#C9B98C" strokeWidth="9.6" strokeLinecap="round" fill="none" opacity="0.6">
            <path d="M 200,30 L 200,148" pathLength="100" strokeDasharray="0 9.6 1 9.6" />
          </g>

          <ellipse cx="170" cy="320" rx="14" ry="8" fill="url(#hf-river)" opacity="0.7" />

          {visible.map(z => (
            <ZoneShape key={z.id} z={z} active={open === z.id}
              onClick={() => setOpen(z.id)} />
          ))}
          {visible.map(z => <ZoneLabel key={z.id + '-l'} z={z} />)}

          <g transform="translate(355, 60)">
            <circle r="18" fill="#fff" stroke="var(--hf-bleumarin)" strokeWidth="1.5" />
            <path d="M0,-13 L4,0 L0,3 L-4,0 Z" fill="var(--hf-coral)" />
            <path d="M0,13 L4,0 L0,-3 L-4,0 Z" fill="var(--hf-bleumarin)" opacity="0.4" />
            <text y="-4" textAnchor="middle" fontFamily="var(--ff-display)" fontSize="8"
              fontWeight="800" fill="var(--hf-bleumarin)">N</text>
          </g>

          <g transform="translate(24, 460)">
            <rect width="60" height="4" fill="var(--hf-bleumarin)" />
            <rect x="30" width="30" height="4" fill="var(--hf-galben)" />
            <text y="14" fontFamily="var(--ff-display)" fontSize="8"
              fill="var(--hf-bleumarin)" letterSpacing="0.1em">100 m</text>
          </g>
        </svg>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, fontSize: 11,
        color: 'var(--color-text-secondary)' }}>
        {[
          ['var(--hf-coral)', 'Scenă'],
          ['var(--hf-galben)', 'Bar 80s'],
          ['var(--hf-turcoaz)', 'Bar 90s'],
          ['var(--hf-portocaliu)', 'Bar 00s'],
          ['#B8D936', 'Kids'],
          ['#FFB6A8', 'Food'],
        ].map(([c, l]) => (
          <span key={l} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: c,
              border: '1px solid rgba(0,0,0,0.1)' }} />
            {l}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }} className="hf-scroll">
        {cats.map(c => (
          <button key={c.id} onClick={() => setFilter(c.id)}
            className={"hf-chip" + (filter === c.id ? ' hf-chip-active' : '')}
            style={{ flexShrink: 0, cursor: 'pointer' }}>
            {c.label}
          </button>
        ))}
      </div>

      {zone && (
        <>
          <div onClick={() => setOpen(null)}
            style={{ position: 'absolute', inset: 0, background: 'rgba(10,37,64,0.4)', zIndex: 80 }} />
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 90,
            background: 'var(--hf-paper)', borderRadius: 'var(--r-2xl) var(--r-2xl) 0 0',
            padding: '16px 20px 32px', boxShadow: 'var(--sh-lg)' }}>
            <div style={{ width: 36, height: 4, background: 'var(--color-border)',
              borderRadius: 999, margin: '0 auto 14px' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: zone.color }} />
              <div style={{ flex: 1 }}>
                <div className="hf-display" style={{ fontSize: 22 }}>{zone.name}</div>
                <div style={{ fontSize: 12, color: 'var(--color-text-secondary)',
                  textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>{zone.cat}</div>
              </div>
              <button onClick={() => setOpen(null)}
                style={{ width: 32, height: 32, borderRadius: 999, border: 'none',
                  background: 'var(--hf-crem-2)', cursor: 'pointer' }}>
                <Icon name="close" size={14} />
              </button>
            </div>
            <div style={{ marginTop: 10, fontSize: 14, color: 'var(--color-text-primary)',
              lineHeight: 1.5 }}>{zone.desc}</div>
            <div style={{ marginTop: 12, padding: 10, background: 'var(--hf-crem)',
              borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 12, color: 'var(--color-text-secondary)' }}>
              <Icon name="pin" size={14} stroke="var(--hf-coral)" />
              <span><strong style={{ color: 'var(--hf-bleumarin)' }}>~120 m</strong> · 2 min de la intrarea principală</span>
            </div>
            <button className="hf-btn hf-btn-primary" style={{ width: '100%', marginTop: 12 }}>
              <Icon name="pin" size={16} /> NAVIGHEAZĂ AICI
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// ─────────────── Info / FAQ ───────────────
const InfoScreen = () => {
  const [filter, setFilter] = u2S('all');
  const cats = [
    { id: 'all',     label: 'Toate' },
    { id: 'transport', label: 'Transport' },
    { id: 'kids',    label: 'Kids' },
    { id: 'reguli',  label: 'Reguli' },
    { id: 'bilete',  label: 'Bilete' },
    { id: 'camping', label: 'Camping' },
  ];
  const faq = [
    { cat: 'reguli', q: 'Pot intra cu mâncare sau băuturi?',
      a: 'Nu — conform regulamentului, mâncarea și băutura proprii nu sunt permise. În incinta festivalului ai 12 standuri culinare și 3 baruri (80s, 90s, 2000s) cu prețuri prietenoase.' },
    { cat: 'reguli', q: 'Ce facem dacă plouă?',
      a: 'Festivalul are loc indiferent de vreme. Vino echipat — îți recomandăm pelerină subțire de ploaie (nu umbrelă, deoarece blochează vizibilitatea).' },
    { cat: 'kids', q: 'Copiii sub 14 ani plătesc?',
      a: 'Acces gratuit pentru copii sub 14 ani însoțiți de un adult cu bilet valid. Avem și o Kids Zone dedicată — „O Vacanță în Miniatură" — cu activități supravegheate.' },
    { cat: 'transport', q: 'Există parcare?',
      a: 'Da, parcarea Primăria Gura Humorului (gratuită) și parcările amenajate la 5 minute de mers de festival. Recomandăm car-pooling pentru weekend.' },
    { cat: 'reguli', q: 'Pot face poze?',
      a: 'Da, dar fără camere foto cu obiectiv detașabil sau echipament profesional. Telefonul mobil este permis fără restricții. Pentru acreditări media: contact@hitfestbucovina.ro.' },
    { cat: 'bilete', q: 'Ce bilete există?',
      a: 'Abonament 3 zile — 240 lei · Bilet o zi — 120 lei · Family pack (2 adulți + copil) — 380 lei. Toate biletele dau acces la toate scenele.' },
    { cat: 'camping', q: 'Există camping?',
      a: 'Da, camping organizat în zona dedicată, cu duș, toalete și pază 24/7. 50 lei/noapte/cort. Rezervare separată în secțiunea Bilete.' },
  ];
  const visible = filter === 'all' ? faq : faq.filter(f => f.cat === filter);

  return (
    <div style={{ padding: '16px 16px 100px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="hf-display" style={{ fontSize: 30 }}>INFORMAȚII UTILE</div>

      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }} className="hf-scroll">
        {cats.map(c => (
          <button key={c.id} onClick={() => setFilter(c.id)}
            className={"hf-chip" + (filter === c.id ? ' hf-chip-active' : '')}
            style={{ flexShrink: 0, cursor: 'pointer' }}>
            {c.label}
          </button>
        ))}
      </div>

      <Accordion items={visible} />

      <div style={{ marginTop: 12, padding: 18, background: 'var(--hf-bleumarin)',
        color: '#fff', borderRadius: 'var(--r-xl)' }}>
        <div className="hf-display" style={{ fontSize: 20, color: 'var(--hf-galben)' }}>
          CONTACT & URGENȚE
        </div>
        {[
          { icon: 'phone', l: 'WhatsApp suport', v: '+40 748 999 444', sub: 'răspuns ~15 min · L-D 9-22' },
          { icon: 'info',  l: 'Email',       v: 'contact@hitfestbucovina.ro' },
          { icon: 'warn',  l: 'Urgențe',     v: '112' },
          { icon: 'pin',   l: 'Prim ajutor', v: 'Lângă Punct Info' },
        ].map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 0', borderTop: i ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
            <span style={{ width: 32, height: 32, borderRadius: 999, background: 'rgba(255,255,255,0.12)',
              display: 'grid', placeItems: 'center', flexShrink: 0 }}>
              <Icon name={c.icon} size={16} stroke="#fff" />
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, opacity: 0.7, letterSpacing: 1, fontWeight: 600,
                textTransform: 'uppercase' }}>{c.l}</div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{c.v}</div>
              {c.sub && <div style={{ fontSize: 11, opacity: 0.6, marginTop: 2 }}>{c.sub}</div>}
            </div>
          </div>
        ))}
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button onClick={(e) => e.preventDefault()} className="hf-btn"
            style={{ flex: 1, background: '#25D366', color: '#fff',
              border: 'none', fontSize: 13, padding: '12px 8px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" aria-hidden>
              <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 22c-1.74 0-3.4-.45-4.86-1.31L2 22l1.34-4.94C2.45 15.54 2 13.81 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/>
            </svg>
            DESCHIDE WHATSAPP
          </button>
          <button onClick={(e) => e.preventDefault()} className="hf-btn"
            style={{ flex: 1, background: 'var(--hf-galben)', color: 'var(--hf-bleumarin)',
              border: 'none', fontSize: 13, padding: '12px 8px' }}>
            <Icon name="phone" size={16} stroke="var(--hf-bleumarin)" strokeWidth={2.5} />
            SUNĂ
          </button>
        </div>
      </div>
    </div>
  );
};

// ─────────────── My Schedule ───────────────
const MyScheduleScreen = ({ favs, onFav, onArtistTap, onTabChange }) => {
  const all = [];
  for (const d of [7, 8, 9]) {
    LINEUP[d].filter(a => favs.includes(a.id)).forEach(a => all.push({ ...a, day: d }));
  }
  const conflicts = [];
  for (let i = 0; i < all.length; i++) {
    for (let j = i + 1; j < all.length; j++) {
      if (all[i].day === all[j].day && all[i].time === all[j].time) {
        conflicts.push([all[i], all[j]]);
      }
    }
  }
  const byDay = { 7: [], 8: [], 9: [] };
  all.forEach(a => byDay[a.day].push(a));
  for (const d in byDay) byDay[d].sort((a, b) => a.time.localeCompare(b.time));

  if (all.length === 0) {
    return (
      <div style={{ padding: '60px 20px 100px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', gap: 16, minHeight: '100%' }}>
        <div className="hf-display" style={{ fontSize: 30 }}>SCHEDULE-UL MEU</div>
        <div style={{
          width: 120, height: 120, borderRadius: 999, background: 'var(--gen-accent-soft)',
          display: 'grid', placeItems: 'center', marginTop: 24,
        }}>
          <Icon name="star" size={48} stroke="var(--gen-accent)" strokeWidth={1.5} />
        </div>
        <div className="hf-display" style={{ fontSize: 22, marginTop: 12 }}>
          ÎNCĂ NICIUN PREFERAT
        </div>
        <div style={{ fontSize: 14, color: 'var(--color-text-secondary)', maxWidth: 260, lineHeight: 1.5 }}>
          Mergi la Line-up și apasă ⭐ la artiștii pe care îi vrei la festival. Îi adunăm aici pe zile.
        </div>
        <button className="hf-btn hf-btn-primary" style={{ marginTop: 8 }}
          onClick={() => onTabChange('lineup')}>
          VEZI LINE-UP
        </button>
        <Dots size={9} />
      </div>
    );
  }

  return (
    <div style={{ padding: '16px 16px 100px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div className="hf-display" style={{ fontSize: 30 }}>SCHEDULE-UL MEU</div>
        <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 4 }}>
          Artiștii pe care îi vrei la festival ({all.length})
        </div>
      </div>

      <button onClick={(e) => e.preventDefault()} className="hf-btn"
        style={{ background: 'var(--hf-bleumarin)', color: '#fff', border: 'none',
          fontSize: 13, padding: '12px 16px', justifyContent: 'space-between' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <Icon name="calendar" size={18} stroke="#fff" />
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.2 }}>
            <span style={{ fontWeight: 700 }}>EXPORT ÎN CALENDAR</span>
            <span style={{ fontSize: 11, opacity: 0.7, fontWeight: 400, marginTop: 2 }}>
              .ics · Google · Apple · Outlook
            </span>
          </span>
        </span>
        <Icon name="chevronRight" size={18} stroke="#fff" />
      </button>

      {conflicts.map(([a, b], i) => (
        <div key={i} style={{
          padding: 14, background: 'rgba(255,107,122,0.12)',
          border: '2px solid var(--hf-coral)', borderRadius: 'var(--r-lg)',
          display: 'flex', alignItems: 'flex-start', gap: 10,
        }}>
          <Icon name="warn" size={20} stroke="var(--hf-coral)" strokeWidth={2.5} fill={false} />
          <div style={{ flex: 1, fontSize: 13 }}>
            <strong>Conflict de orar</strong><br/>
            <span style={{ color: 'var(--color-text-secondary)' }}>
              {a.name} și {b.name} cântă în același timp ({a.time}, {a.day} aug).
            </span>
          </div>
        </div>
      ))}

      {[7, 8, 9].map(d => byDay[d].length > 0 && (
        <div key={d}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span className="hf-display" style={{ fontSize: 24,
              padding: '4px 12px',
              background: d === 8 ? 'var(--hf-turcoaz)' : 'var(--hf-galben)',
              color: d === 8 ? '#fff' : 'var(--hf-bleumarin)',
              borderRadius: 'var(--r-md)', letterSpacing: '0.05em' }}>
              {d} AUG
            </span>
            <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 600 }}>
              {byDay[d].length} artiști
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {byDay[d].map(a => (
              <ArtistCardCompact key={a.id} artist={a} isFav={true}
                onFav={() => onFav(a.id)}
                onTap={() => onArtistTap(a.id, d)} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ─────────────── Tickets ───────────────
const TICKET_DB = {
  'HFB-2026-A91X':  { type: '3day',  name: 'Andrei Popescu',  days: '7–9 aug', used: false },
  'HFB-2026-B47Z':  { type: '1day',  name: 'Maria Iliescu',   days: '8 aug',   used: false },
  'HFB-2026-F22Q':  { type: 'family', name: 'Familia Munteanu', days: '7–9 aug', used: false, pax: '2 adulți + 1 copil' },
  'HFB-2026-U03K':  { type: '3day',  name: 'Cristian Vasile', days: '7–9 aug', used: true },
};
const TICKET_TYPES = {
  '3day':  { label: 'Abonament 3 zile', short: 'PASS 3 ZILE', price: 240,
             color: 'var(--hf-coral)',
             perks: ['Acces toate scenele', 'Toate cele 3 zile', 'Reintrare nelimitată', 'Discount foodcourt 10%'] },
  '1day':  { label: 'Bilet o zi', short: 'PASS 1 ZI', price: 120,
             color: 'var(--hf-turcoaz)',
             perks: ['Acces toate scenele', 'Ziua aleasă de tine', 'Reintrare nelimitată'] },
  'family': { label: 'Family Pack', short: 'FAMILY', price: 380,
             color: 'var(--hf-galben)',
             perks: ['2 adulți + 1 copil', 'Toate cele 3 zile', 'Acces prioritar Kids Zone', '20% reducere foodcourt'] },
};

const MiniQR = ({ size = 100 }) => {
  const cells = [];
  for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) {
    const corner = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
    const edge = (x === 0 || x === 6 || y === 0 || y === 6) && (x < 7 && y < 7);
    const re = (x === 14 || x === 20 || y === 0 || y === 6) && (x > 13 && y < 7);
    const le = (x === 0 || x === 6 || y === 14 || y === 20) && (x < 7 && y > 13);
    const inner = (x > 1 && x < 5 && y > 1 && y < 5)
               || (x > 15 && x < 19 && y > 1 && y < 5)
               || (x > 1 && x < 5 && y > 15 && y < 19);
    const on = inner || edge || re || le
            || (!corner && ((x * 7 + y * 13 + (x ^ y)) % 3 === 0));
    if (on) cells.push({ x, y });
  }
  return (
    <svg viewBox="0 0 21 21" width={size} height={size} aria-hidden>
      <rect width="21" height="21" fill="#fff" />
      {cells.map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width="1" height="1" fill="var(--hf-bleumarin)" />
      ))}
    </svg>
  );
};

const TicketsScreen = ({ tickets = [], onTicketsChange = () => {}, initialMode = 'mine' }) => {
  const [mode, setMode] = uS(initialMode);
  const [code, setCode] = uS('');
  const [scanning, setScanning] = uS(false);
  const [result, setResult] = uS(null);
  const [buying, setBuying] = uS(null);
  const [purchased, setPurchased] = uS(null);
  const [copiedId, setCopiedId] = uS(null);

  const submit = (c) => {
    const norm = (c || code).trim().toUpperCase();
    if (!norm) return;
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      const t = TICKET_DB[norm];
      if (!t) setResult({ ok: false, code: norm, reason: 'invalid' });
      else if (t.used) setResult({ ok: false, code: norm, reason: 'used', ticket: t });
      else setResult({ ok: true, code: norm, ticket: t });
    }, 1100);
  };
  const reset = () => { setResult(null); setCode(''); };

  return (
    <div style={{ padding: '16px 16px 100px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="hf-display" style={{ fontSize: 30 }}>BILETE</div>

      <div style={{ display: 'flex', background: 'var(--hf-crem)', borderRadius: 999,
        padding: 4, gap: 4 }}>
        {[{ id: 'mine', label: 'Biletele mele' }, { id: 'buy', label: 'Cumpără' }, { id: 'verify', label: 'Verifică' }].map(m => (
          <button key={m.id} onClick={() => { setMode(m.id); reset(); setPurchased(null); setBuying(null); }}
            style={{
              flex: 1, padding: '10px 8px', borderRadius: 999, border: 'none',
              background: mode === m.id ? 'var(--hf-bleumarin)' : 'transparent',
              color: mode === m.id ? '#fff' : 'var(--color-text-secondary)',
              fontFamily: 'var(--ff-display)', fontSize: 12, letterSpacing: '0.04em',
              cursor: 'pointer', transition: 'all var(--t-fast) var(--ease)',
            }}>{m.label.toUpperCase()}</button>
        ))}
      </div>

      {mode === 'mine' && tickets.length === 0 && (
        <EmptyTicketsState onBuyTap={() => setMode('buy')} />
      )}
      {mode === 'mine' && tickets.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
            {tickets.length} {tickets.length === 1 ? 'bilet înregistrat' : 'bilete înregistrate'} · fiecare cu propriul cod de reduceri.
          </div>
          {tickets.map((t) => {
            const meta = TICKET_KIND_META[t.kind] || TICKET_KIND_META['3day'];
            return (
              <div key={t.id} style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden',
                background: 'var(--hf-paper)', border: '2px solid ' + meta.color,
                boxShadow: 'var(--sh-md)' }}>
                <div style={{ background: meta.color, color: t.kind === 'family' ? 'var(--hf-bleumarin)' : '#fff',
                  padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, opacity: 0.85 }}>HIT FEST BUCOVINA</div>
                    <div className="hf-display" style={{ fontSize: 17, letterSpacing: '0.04em' }}>{meta.short}</div>
                  </div>
                  <MiniQR size={56} />
                </div>
                <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1,
                        color: 'var(--color-text-secondary)' }}>SERIAL</div>
                      <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12,
                        color: 'var(--hf-bleumarin)', marginTop: 1 }}>{t.serial}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1,
                        color: 'var(--color-text-secondary)' }}>VALID</div>
                      <div style={{ fontSize: 12, color: 'var(--hf-bleumarin)', marginTop: 1 }}>7–9 aug 2026</div>
                    </div>
                  </div>
                  <div style={{ borderTop: '1px dashed var(--color-border)', paddingTop: 10 }}>
                    <TicketCodeCard ticket={t} variant="compact"
                      onCopy={(tk) => {
                        try { navigator.clipboard?.writeText(tk.code); } catch (e) {}
                        setCopiedId(tk.id);
                        setTimeout(() => setCopiedId(null), 1600);
                      }}
                      copied={copiedId === t.id} />
                  </div>
                </div>
              </div>
            );
          })}
          <button className="hf-btn hf-btn-secondary" onClick={() => setMode('buy')}
            style={{ marginTop: 4 }}>
            + ADAUGĂ ÎncĂ UN BILET
          </button>
        </div>
      )}

      {mode === 'verify' && !result && (
        <>
          <div style={{
            aspectRatio: '1/1', borderRadius: 'var(--r-xl)',
            background: 'var(--hf-bleumarin)', position: 'relative', overflow: 'hidden',
            display: 'grid', placeItems: 'center',
          }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08 }}>
              {[20,40,60,80].map(n => <line key={'h'+n} x1="0" x2="100" y1={n} y2={n} stroke="#fff" strokeWidth="0.3" />)}
              {[20,40,60,80].map(n => <line key={'v'+n} x1={n} x2={n} y1="0" y2="100" stroke="#fff" strokeWidth="0.3" />)}
            </svg>
            <div style={{ position: 'relative', width: '64%', aspectRatio: '1/1' }}>
              {['tl','tr','bl','br'].map(c => (
                <span key={c} style={{
                  position: 'absolute', width: 28, height: 28,
                  borderColor: 'var(--hf-galben)', borderStyle: 'solid', borderWidth: 0,
                  borderTopWidth: c[0] === 't' ? 4 : 0, borderBottomWidth: c[0] === 'b' ? 4 : 0,
                  borderLeftWidth: c[1] === 'l' ? 4 : 0, borderRightWidth: c[1] === 'r' ? 4 : 0,
                  top: c[0] === 't' ? 0 : 'auto', bottom: c[0] === 'b' ? 0 : 'auto',
                  left: c[1] === 'l' ? 0 : 'auto', right: c[1] === 'r' ? 0 : 'auto',
                  borderTopLeftRadius: c === 'tl' ? 12 : 0,
                  borderTopRightRadius: c === 'tr' ? 12 : 0,
                  borderBottomLeftRadius: c === 'bl' ? 12 : 0,
                  borderBottomRightRadius: c === 'br' ? 12 : 0,
                }} />
              ))}
              {scanning && (
                <div style={{
                  position: 'absolute', left: 8, right: 8, height: 3,
                  background: 'linear-gradient(90deg, transparent, var(--hf-coral), transparent)',
                  boxShadow: '0 0 14px var(--hf-coral)',
                  animation: 'hf-scan 1.2s ease-in-out infinite', top: '50%',
                }} />
              )}
              <div style={{ position: 'absolute', inset: '18%', background: '#fff',
                padding: 10, borderRadius: 12,
                opacity: scanning ? 0.4 : 0.85,
                transition: 'opacity var(--t-base) var(--ease)',
                display: 'grid', placeItems: 'center' }}>
                <MiniQR size="100%" />
              </div>
            </div>
            <span style={{ position: 'absolute', bottom: 14, left: 0, right: 0, textAlign: 'center',
              color: 'var(--hf-galben)', fontFamily: 'var(--ff-display)',
              fontSize: 12, letterSpacing: '0.12em' }}>
              {scanning ? 'SE SCANEAZĂ…' : 'POZIȚIONEAZĂ QR-UL ÎN CADRU'}
            </span>
          </div>
          <style>{`@keyframes hf-scan { 0%{top:8%}50%{top:88%}100%{top:8%} }`}</style>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1,
              textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>
              Sau introdu codul manual
            </label>
            <div style={{ display: 'flex', gap: 8 }}>
              <input value={code} onChange={e => setCode(e.target.value)}
                placeholder="HFB-2026-XXXX"
                style={{
                  flex: 1, padding: '12px 14px', borderRadius: 'var(--r-lg)',
                  border: '1.5px solid var(--color-border)', background: 'var(--hf-paper)',
                  fontFamily: 'ui-monospace, monospace', fontSize: 14, letterSpacing: '0.05em',
                  color: 'var(--color-text-primary)', outline: 'none', textTransform: 'uppercase',
                }} />
              <button className="hf-btn hf-btn-primary" disabled={!code.trim() || scanning}
                onClick={() => submit()}
                style={{ minWidth: 96, opacity: !code.trim() || scanning ? 0.5 : 1 }}>
                {scanning ? '...' : 'VERIFICĂ'}
              </button>
            </div>
          </div>

          <details style={{ background: 'var(--hf-crem)', borderRadius: 'var(--r-md)',
            padding: '10px 14px', fontSize: 12, color: 'var(--color-text-secondary)' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              💡 Coduri demo (tap pentru a încerca)
            </summary>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
              {Object.keys(TICKET_DB).map(c => (
                <button key={c} onClick={() => { setCode(c); submit(c); }}
                  style={{ textAlign: 'left', padding: '8px 10px',
                    background: 'var(--hf-paper)', border: '1px solid var(--color-border)',
                    borderRadius: 'var(--r-sm)', cursor: 'pointer',
                    fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'var(--hf-bleumarin)' }}>
                  {c} <span style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--ff-body)' }}>
                    — {TICKET_TYPES[TICKET_DB[c].type].label}{TICKET_DB[c].used ? ' (folosit)' : ''}
                  </span>
                </button>
              ))}
              <button onClick={() => submit('HFB-2026-FAKE')}
                style={{ textAlign: 'left', padding: '8px 10px',
                  background: 'var(--hf-paper)', border: '1px dashed var(--hf-coral)',
                  borderRadius: 'var(--r-sm)', cursor: 'pointer',
                  fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'var(--hf-coral)' }}>
                HFB-2026-FAKE <span style={{ fontFamily: 'var(--ff-body)' }}>— cod invalid</span>
              </button>
            </div>
          </details>
        </>
      )}

      {mode === 'verify' && result && (
        <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden',
          border: '2px solid ' + (result.ok ? 'var(--hf-turcoaz)' : 'var(--hf-coral)'),
          background: 'var(--hf-paper)', boxShadow: 'var(--sh-lg)' }}>
          <div style={{
            background: result.ok ? 'var(--hf-turcoaz)'
              : result.reason === 'used' ? 'var(--hf-portocaliu)' : 'var(--hf-coral)',
            color: '#fff', padding: '16px 18px',
            display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 44, height: 44, borderRadius: 999,
              background: 'rgba(255,255,255,0.22)', display: 'grid', placeItems: 'center' }}>
              <Icon name={result.ok ? 'check' : 'warn'} size={24} stroke="#fff" strokeWidth={3} />
            </span>
            <div style={{ flex: 1 }}>
              <div className="hf-display" style={{ fontSize: 22, letterSpacing: '0.04em' }}>
                {result.ok ? 'BILET VALID' : result.reason === 'used' ? 'DEJA FOLOSIT' : 'BILET INVALID'}
              </div>
              <div style={{ fontSize: 12, opacity: 0.9 }}>
                {result.ok ? 'Bun venit la festival 🎉'
                  : result.reason === 'used' ? 'A fost scanat anterior la intrare'
                  : 'Codul nu există în sistem'}
              </div>
            </div>
          </div>
          {result.ticket && (
            <div style={{ padding: '18px 18px 0', display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{ flexShrink: 0, background: TICKET_TYPES[result.ticket.type].color,
                padding: 6, borderRadius: 10 }}>
                <MiniQR size={84} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
                  color: TICKET_TYPES[result.ticket.type].color, textTransform: 'uppercase' }}>
                  {TICKET_TYPES[result.ticket.type].short}
                </div>
                <div className="hf-display" style={{ fontSize: 19, lineHeight: 1.1,
                  marginTop: 2, color: 'var(--hf-bleumarin)' }}>
                  {result.ticket.name}
                </div>
                <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>
                  {result.ticket.days}{result.ticket.pax ? ' · ' + result.ticket.pax : ''}
                </div>
              </div>
            </div>
          )}
          <div style={{ padding: '12px 18px',
            fontFamily: 'ui-monospace, monospace', fontSize: 11,
            color: 'var(--color-text-secondary)',
            borderTop: '1px dashed var(--color-border)', marginTop: 12,
            display: 'flex', justifyContent: 'space-between' }}>
            <span>COD: {result.code}</span>
            <span>HIT FEST · 2026</span>
          </div>
          <div style={{ padding: 14, background: 'var(--hf-crem)', display: 'flex', gap: 10 }}>
            {!result.ok && result.reason === 'invalid' && (
              <button className="hf-btn hf-btn-primary" style={{ flex: 1 }}
                onClick={() => setMode('buy')}>CUMPĂRĂ BILET</button>
            )}
            <button className="hf-btn hf-btn-secondary" style={{ flex: 1 }} onClick={reset}>
              {result.ok ? 'SCANEAZĂ ALTUL' : 'ÎNCEARCĂ DIN NOU'}
            </button>
          </div>
        </div>
      )}

      {mode === 'buy' && !purchased && !buying && (
        <>
          <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
            Alege biletul potrivit pentru tine. Plata securizată Stripe.
          </div>
          {Object.entries(TICKET_TYPES).map(([id, tt]) => (
            <div key={id} style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden',
              background: 'var(--hf-paper)', border: '1.5px solid var(--color-border)',
              boxShadow: 'var(--sh-sm)' }}>
              <div style={{ background: tt.color,
                color: id === 'family' ? 'var(--hf-bleumarin)' : '#fff',
                padding: '14px 16px', display: 'flex',
                alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="hf-display" style={{ fontSize: 18, letterSpacing: '0.04em' }}>{tt.short}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                  <span className="hf-display" style={{ fontSize: 28 }}>{tt.price}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, opacity: 0.85 }}>lei</span>
                </div>
              </div>
              <div style={{ padding: '14px 16px' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--hf-bleumarin)', marginBottom: 8 }}>
                  {tt.label}
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none',
                  display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {tt.perks.map((p, i) => (
                    <li key={i} style={{ display: 'flex', gap: 8, fontSize: 13,
                      color: 'var(--color-text-primary)' }}>
                      <Icon name="check" size={14} stroke={tt.color} strokeWidth={3} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <button className="hf-btn hf-btn-primary"
                  onClick={() => setBuying(id)}
                  style={{ marginTop: 14, width: '100%', background: tt.color,
                    color: id === 'family' ? 'var(--hf-bleumarin)' : '#fff' }}>
                  CUMPĂRĂ
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {mode === 'buy' && buying && !purchased && (
        <div style={{ borderRadius: 'var(--r-xl)', background: 'var(--hf-paper)',
          border: '1.5px solid var(--color-border)', padding: 18,
          display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="hf-display" style={{ fontSize: 18 }}>FINALIZARE COMANDĂ</span>
            <button onClick={() => setBuying(null)}
              style={{ width: 28, height: 28, borderRadius: 999, border: 'none',
                background: 'var(--hf-crem-2)', cursor: 'pointer' }}>
              <Icon name="close" size={12} />
            </button>
          </div>
          <div style={{ background: TICKET_TYPES[buying].color,
            color: buying === 'family' ? 'var(--hf-bleumarin)' : '#fff',
            padding: '12px 14px', borderRadius: 'var(--r-lg)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--ff-display)', letterSpacing: '0.04em', fontSize: 14 }}>
              {TICKET_TYPES[buying].short}
            </span>
            <span className="hf-display" style={{ fontSize: 22 }}>{TICKET_TYPES[buying].price} lei</span>
          </div>
          {['Nume complet', 'Email', 'Telefon'].map(l => (
            <div key={l}>
              <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1,
                textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>{l}</label>
              <input placeholder={l} style={{
                width: '100%', marginTop: 4, padding: '11px 14px',
                borderRadius: 'var(--r-md)', border: '1.5px solid var(--color-border)',
                background: 'var(--hf-paper)', fontSize: 14, outline: 'none',
              }} />
            </div>
          ))}
          <div style={{ background: 'var(--hf-crem)', borderRadius: 'var(--r-md)',
            padding: 12, fontSize: 12, color: 'var(--color-text-secondary)',
            display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="info" size={14} />
            <span>Demo prototype — fără plată reală. Biletul se generează instant.</span>
          </div>
          <button className="hf-btn hf-btn-primary" onClick={() => {
            const t = addUserTicket(buying, '');
            onTicketsChange(loadUserTickets());
            setPurchased({ ticket: t });
            setBuying(null);
          }}>
            <Icon name="check" size={16} stroke="#fff" strokeWidth={3} /> PLĂTEȘTE {TICKET_TYPES[buying].price} LEI
          </button>
        </div>
      )}

      {mode === 'buy' && purchased && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center',
          padding: '20px 4px 0', textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: 999,
            background: 'var(--hf-turcoaz)', display: 'grid', placeItems: 'center' }}>
            <Icon name="check" size={36} stroke="#fff" strokeWidth={3.5} />
          </div>
          <div>
            <div className="hf-display" style={{ fontSize: 24 }}>BILET GENERAT 🎉</div>
            <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 4 }}>
              Ți l-am trimis și pe email. Codul de reduceri e în aplicație.
            </div>
          </div>
          <div style={{ width: '100%', borderRadius: 'var(--r-xl)', overflow: 'hidden',
            background: 'var(--hf-paper)',
            border: '2px solid ' + TICKET_TYPES[purchased.ticket.kind].color,
            boxShadow: 'var(--sh-lg)' }}>
            <div style={{ background: TICKET_TYPES[purchased.ticket.kind].color,
              color: purchased.ticket.kind === 'family' ? 'var(--hf-bleumarin)' : '#fff',
              padding: '14px 18px', textAlign: 'left',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
                  opacity: 0.85 }}>HIT FEST BUCOVINA</div>
                <div className="hf-display" style={{ fontSize: 18, letterSpacing: '0.04em' }}>
                  {TICKET_TYPES[purchased.ticket.kind].short}
                </div>
              </div>
              <span style={{ fontSize: 11, padding: '4px 8px',
                background: 'rgba(255,255,255,0.25)', borderRadius: 999,
                fontWeight: 700, letterSpacing: 0.5 }}>NOU</span>
            </div>
            <div style={{ padding: 18, display: 'flex', gap: 16, alignItems: 'center' }}>
              <MiniQR size={108} />
              <div style={{ textAlign: 'left', flex: 1 }}>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)',
                  fontWeight: 700, letterSpacing: 1 }}>SERIAL</div>
                <div style={{ fontFamily: 'ui-monospace, monospace',
                  fontSize: 14, color: 'var(--hf-bleumarin)', marginTop: 2 }}>
                  {purchased.ticket.serial}
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)',
                  fontWeight: 700, letterSpacing: 1, marginTop: 10 }}>COD REDUCERI</div>
                <div style={{ fontFamily: 'var(--ff-display)',
                  fontSize: 15, color: 'var(--hf-coral)', marginTop: 2, letterSpacing: '0.06em' }}>
                  {purchased.ticket.code}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, width: '100%' }}>
            <button className="hf-btn hf-btn-secondary" style={{ flex: 1 }}
              onClick={() => { setPurchased(null); setMode('mine'); }}>
              VEZI BILETELE
            </button>
            <button className="hf-btn hf-btn-primary" style={{ flex: 1 }}
              onClick={() => setPurchased(null)}>
              MAI CUMPĂR UNUL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

window.PhotoScreen = PhotoScreen;
window.MapScreen = MapScreen;
window.InfoScreen = InfoScreen;
window.MyScheduleScreen = MyScheduleScreen;
window.TicketsScreen = TicketsScreen;
