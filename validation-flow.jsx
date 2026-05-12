// Hit Fest Bucovina — F8 v2: AddTicketFlow (state machine)
// Pieces: MethodSelector, PhotoSourceSheet, PhotoCapture, PhotoPreview,
//         QRPermission, QRScanner, EmailCapture, SuccessScreen
// External: <AddTicketFlow onClose onComplete /> — full-screen overlay.

const { useState: fS, useEffect: fE, useRef: fR, useMemo: fM } = React;

// ─────────────── Flow shell ───────────────
const FlowShell = ({ onClose, title, step, totalSteps, children, scrollable = true }) => (
  <div style={{
    position: 'absolute', inset: 0,
    background: 'var(--hf-paper)',
    display: 'flex', flexDirection: 'column',
    animation: 'hf-flow-in 240ms var(--ease)',
  }}>
    <div style={{
      padding: '14px 14px 10px',
      display: 'flex', alignItems: 'center', gap: 8,
      borderBottom: '1px solid var(--color-border)',
      background: 'var(--hf-paper)',
    }}>
      <button onClick={onClose} aria-label="Close"
        style={{ width: 36, height: 36, borderRadius: 999, border: 'none',
          background: 'var(--hf-crem-2)', color: 'var(--hf-bleumarin)',
          display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
        <Icon name="chevronLeft" size={18} />
      </button>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <div className="hf-display" style={{
          fontSize: 13, letterSpacing: '0.12em', color: 'var(--hf-bleumarin)',
        }}>{title}</div>
        {totalSteps > 0 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: 4 }}>
            {Array.from({ length: totalSteps }).map((_, i) => (
              <span key={i} style={{
                width: i === step ? 18 : 6, height: 4, borderRadius: 999,
                background: i <= step ? 'var(--hf-coral)' : 'var(--color-border)',
                transition: 'width var(--t-fast) var(--ease), background var(--t-fast) var(--ease)',
              }} />
            ))}
          </div>
        )}
      </div>
      <div style={{ width: 36 }} />
    </div>
    <div style={{
      flex: 1, overflow: scrollable ? 'auto' : 'hidden',
      WebkitOverflowScrolling: 'touch', padding: '20px 18px 28px',
      display: 'flex', flexDirection: 'column',
    }}>{children}</div>
    <style>{`
      @keyframes hf-flow-in {
        from { transform: translateY(12px); opacity: 0; }
        to { transform: none; opacity: 1; }
      }
    `}</style>
  </div>
);

// ─────────────── Step 1: Method selector ───────────────
const MethodSelector = ({ onPick, onClose }) => {
  const { t } = useT();
  return (
    <FlowShell title="ADAUGĂ BILET" step={0} totalSteps={4} onClose={onClose}>
      <div style={{ marginBottom: 22 }}>
        <div className="hf-display" style={{ fontSize: 26, lineHeight: 1.05,
          color: 'var(--hf-bleumarin)', textWrap: 'balance' }}>
          {t('ticket.add.title')}
        </div>
        <div style={{ marginTop: 6, fontSize: 14,
          color: 'var(--color-text-secondary)' }}>
          {t('ticket.add.subtitle')}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <MethodCard
          icon="qr"
          title={t('ticket.add.qr.title')}
          desc={t('ticket.add.qr.description')}
          badge={t('ticket.add.qr.badge')}
          badgeColor="var(--hf-coral)"
          onPress={() => onPick('qr')}
        />
        <MethodCard
          icon="camera"
          title={t('ticket.add.photo.title')}
          desc={t('ticket.add.photo.description')}
          badge={t('ticket.add.photo.badge')}
          badgeColor="var(--hf-turcoaz)"
          onPress={() => onPick('photo')}
        />
        <MethodCard
          icon="sparkle"
          title="BILET DEMO"
          desc="Generează un bilet de test instant ca să poți explora reducerile și codurile partenere fără un bilet real."
          badge="DEMO"
          badgeColor="var(--hf-galben)"
          onPress={() => onPick('demo')}
        />
      </div>

      <div style={{ flex: 1 }} />
      <div style={{ fontSize: 11, color: 'var(--color-text-secondary)',
        textAlign: 'center', lineHeight: 1.6, marginTop: 18 }}>
        Datele biletului tău rămân pe acest telefon. Nu le încărcăm nicăieri.
      </div>
    </FlowShell>
  );
};

const MethodCard = ({ icon, title, desc, badge, badgeColor, onPress }) => (
  <button onClick={onPress}
    style={{
      display: 'flex', alignItems: 'flex-start', gap: 16,
      padding: '20px 18px',
      background: 'var(--hf-paper)',
      border: '2px solid var(--color-border)',
      borderRadius: 'var(--r-xl)',
      cursor: 'pointer', textAlign: 'left',
      transition: 'all var(--t-fast) var(--ease)',
      position: 'relative',
    }}
    onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; }}
    onMouseUp={(e) => { e.currentTarget.style.transform = ''; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}>
    <div style={{
      width: 56, height: 56, borderRadius: 'var(--r-lg)',
      background: badgeColor + '22',
      display: 'grid', placeItems: 'center', flexShrink: 0,
      color: badgeColor,
    }}>
      <Icon name={icon} size={28} stroke={badgeColor} strokeWidth={2} />
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span className="hf-display" style={{ fontSize: 18,
          color: 'var(--hf-bleumarin)', letterSpacing: '0.02em' }}>
          {title}
        </span>
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
          padding: '2px 8px', borderRadius: 999,
          background: badgeColor + '22', color: badgeColor,
          textTransform: 'uppercase',
        }}>{badge}</span>
      </div>
      <div style={{ marginTop: 6, fontSize: 13, lineHeight: 1.5,
        color: 'var(--color-text-secondary)' }}>{desc}</div>
    </div>
    <Icon name="chevron" size={16} stroke="var(--color-text-secondary)" />
  </button>
);

// ─────────────── Step 2a: Photo flow ───────────────
const PhotoFlow = ({ onComplete, onCancel, onSwitchToQR }) => {
  const { t } = useT();
  const [sub, setSub] = fS('source'); // source → capture → preview
  const [photoUri, setPhotoUri] = fS(null);
  const fileRef = fR(null);

  const pickSource = (kind) => {
    setSub('capture');
    if (fileRef.current) {
      if (kind === 'camera') fileRef.current.setAttribute('capture', 'environment');
      else fileRef.current.removeAttribute('capture');
      fileRef.current.click();
    }
  };

  const onFileChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) { setSub('source'); return; }
    const reader = new FileReader();
    reader.onload = () => {
      setPhotoUri(reader.result);
      setSub('preview');
    };
    reader.readAsDataURL(f);
  };

  // If user picks gallery but cancels, return to source picker.
  fE(() => {
    if (sub === 'capture') {
      const back = setTimeout(() => {
        if (!photoUri) {
          // soft fallback — if still no photo after 8s, return to source
          // (mostly relevant when running in browser without camera)
        }
      }, 8000);
      return () => clearTimeout(back);
    }
  }, [sub, photoUri]);

  if (sub === 'source' || sub === 'capture') {
    return (
      <FlowShell title="ADAUGĂ BILET · FOTO" step={1} totalSteps={4} onClose={onCancel}>
        <input ref={fileRef} type="file" accept="image/*" onChange={onFileChange}
          style={{ position: 'absolute', left: -9999, opacity: 0 }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 18, textAlign: 'center' }}>
          <MascotSVG size={120} />
          <div className="hf-display" style={{ fontSize: 22,
            color: 'var(--hf-bleumarin)', letterSpacing: '0.02em' }}>
            {t('ticket.photo.source.title')}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10,
            width: '100%', maxWidth: 320 }}>
            <button className="hf-btn hf-btn-primary"
              onClick={() => pickSource('camera')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 10, padding: '14px 18px', fontSize: 14 }}>
              <Icon name="camera" size={20} stroke="#fff" />
              {t('ticket.photo.source.camera')}
            </button>
            <button onClick={() => pickSource('gallery')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 10, padding: '14px 18px', fontSize: 14,
                fontFamily: 'var(--ff-display)', letterSpacing: '0.08em',
                background: 'var(--hf-crem-2)', color: 'var(--hf-bleumarin)',
                border: 'none', borderRadius: 999, cursor: 'pointer' }}>
              <Icon name="gallery" size={20} stroke="var(--hf-bleumarin)" />
              {t('ticket.photo.source.gallery')}
            </button>
          </div>
        </div>
      </FlowShell>
    );
  }

  // preview
  return <PhotoPreview photoUri={photoUri}
    onRetake={() => { setPhotoUri(null); setSub('source'); }}
    onContinue={() => onComplete({ type: 'photo', photoUri })}
    onCancel={onCancel} />;
};

const PhotoPreview = ({ photoUri, onRetake, onContinue, onCancel }) => {
  const { t } = useT();
  const [confirmed, setConfirmed] = fS(false);
  return (
    <FlowShell title="ADAUGĂ BILET · FOTO" step={1} totalSteps={4} onClose={onCancel}>
      <div className="hf-display" style={{ fontSize: 22,
        color: 'var(--hf-bleumarin)', letterSpacing: '0.02em' }}>
        {t('ticket.preview.title')}
      </div>
      <div style={{ marginTop: 4, fontSize: 13,
        color: 'var(--color-text-secondary)', marginBottom: 16 }}>
        {t('ticket.preview.subtitle')}
      </div>
      <div style={{
        flex: 1, minHeight: 200,
        background: 'var(--hf-bleumarin)',
        borderRadius: 'var(--r-xl)',
        backgroundImage: photoUri ? `url(${photoUri})` : 'none',
        backgroundSize: 'contain', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'grid', placeItems: 'center',
        overflow: 'hidden', position: 'relative',
      }}>
        {!photoUri && <span style={{ color: '#fff', opacity: 0.5 }}>Se încarcă...</span>}
      </div>

      {/* Confirm visibility checklist */}
      <button onClick={() => setConfirmed(c => !c)}
        style={{
          marginTop: 12, padding: '12px 14px',
          background: confirmed ? 'var(--hf-turcoaz)15' : 'var(--hf-crem-2)',
          border: '1.5px solid ' + (confirmed ? 'var(--hf-turcoaz)' : 'var(--color-border)'),
          borderRadius: 'var(--r-lg)',
          display: 'flex', alignItems: 'flex-start', gap: 12,
          cursor: 'pointer', textAlign: 'left',
          transition: 'all var(--t-fast) var(--ease)',
        }}>
        <span style={{
          width: 22, height: 22, borderRadius: 6, flexShrink: 0, marginTop: 1,
          border: '2px solid ' + (confirmed ? 'var(--hf-turcoaz)' : 'var(--color-border)'),
          background: confirmed ? 'var(--hf-turcoaz)' : 'var(--hf-paper)',
          display: 'grid', placeItems: 'center',
        }}>
          {confirmed && <Icon name="check" size={14} stroke="#fff" strokeWidth={3.2} />}
        </span>
        <span style={{ flex: 1, fontSize: 13, lineHeight: 1.45,
          color: 'var(--hf-bleumarin)' }}>
          <strong>Confirm că în poză se văd clar:</strong>
          <span style={{ display: 'block', marginTop: 3, fontSize: 12,
            color: 'var(--color-text-secondary)' }}>
            codul biletului · data evenimentului · numele festivalului
          </span>
        </span>
      </button>

      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        <button onClick={onRetake}
          style={{ flex: 1, padding: '14px 16px', border: '1.5px solid var(--color-border)',
            background: 'var(--hf-paper)', borderRadius: 999, cursor: 'pointer',
            fontWeight: 600, fontSize: 13, fontFamily: 'var(--ff-body)',
            color: 'var(--hf-bleumarin)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Icon name="refresh" size={14} stroke="var(--hf-bleumarin)" />
          {t('ticket.preview.retake')}
        </button>
        <button className="hf-btn hf-btn-primary"
          disabled={!confirmed}
          onClick={() => confirmed && onContinue()}
          style={{ flex: 1.4, padding: '14px 16px', fontSize: 13,
            opacity: confirmed ? 1 : 0.4,
            cursor: confirmed ? 'pointer' : 'not-allowed',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          {t('ticket.preview.continue')}
          <Icon name="arrowRight" size={14} stroke="#fff" />
        </button>
      </div>
    </FlowShell>
  );
};

// ─────────────── Step 2b: QR flow ───────────────
const QRFlow = ({ onComplete, onCancel, onSwitchToPhoto }) => {
  const { t } = useT();
  const [phase, setPhase] = fS('permission'); // permission → scanning → invalid → failed
  const [scanCount, setScanCount] = fS(0);

  // Mock scanner: tap "Simulează scanare" to validate; tap "Invalid demo" to reject.
  const simulateValid = () => {
    onComplete({ type: 'qr', qrData: 'https://livetickets.ro/event/hit-fest-bucovina-2026/order/A7F2K9' });
  };
  const simulateInvalid = () => {
    setPhase('invalid');
    setTimeout(() => setPhase('scanning'), 1800);
  };
  const simulateFail = () => setPhase('failed');

  if (phase === 'permission' || phase === 'denied') {
    const denied = phase === 'denied';
    return (
      <FlowShell title="ADAUGĂ BILET · QR" step={1} totalSteps={4} onClose={onCancel}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 18, textAlign: 'center' }}>
          <div style={{ width: 110, height: 110, borderRadius: 'var(--r-xl)',
            background: denied ? 'var(--hf-coral)' : 'var(--hf-bleumarin)',
            display: 'grid', placeItems: 'center', position: 'relative' }}>
            <Icon name="camera" size={48} stroke="#fff" strokeWidth={1.8} />
            <span style={{ position: 'absolute', bottom: -8, right: -8,
              width: 36, height: 36, borderRadius: 999,
              background: denied ? 'var(--hf-bleumarin)' : 'var(--hf-coral)',
              display: 'grid', placeItems: 'center' }}>
              {denied
                ? <Icon name="close" size={16} stroke="#fff" strokeWidth={2.8} />
                : <Icon name="qr" size={18} stroke="#fff" strokeWidth={2.2} />}
            </span>
          </div>
          <div className="hf-display" style={{ fontSize: 22, lineHeight: 1.15,
            color: 'var(--hf-bleumarin)', letterSpacing: '0.02em', textWrap: 'balance' }}>
            {denied ? 'CAMERA E BLOCATĂ' : t('ticket.qr.permission.title')}
          </div>
          <div style={{ fontSize: 14, color: 'var(--color-text-secondary)',
            maxWidth: 290, lineHeight: 1.5 }}>
            {denied
              ? 'Ai refuzat accesul mai devreme. Activează camera din setările telefonului, sau folosește metoda foto.'
              : t('ticket.qr.permission.subtitle')}
          </div>

          {denied && (
            <div style={{ width: '100%', maxWidth: 320, padding: 12,
              background: 'var(--hf-crem)', border: '1px solid var(--color-border)',
              borderRadius: 'var(--r-md)', textAlign: 'left', fontSize: 12,
              color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              <div style={{ fontWeight: 700, color: 'var(--hf-bleumarin)',
                marginBottom: 4 }}>iOS:</div>
              <div>Setări → Hit Fest Bucovina → Cameră → Permite</div>
              <div style={{ fontWeight: 700, color: 'var(--hf-bleumarin)',
                marginTop: 8, marginBottom: 4 }}>Android:</div>
              <div>Setări → Aplicații → Hit Fest Bucovina → Permisiuni → Cameră</div>
            </div>
          )}

          <button className="hf-btn hf-btn-primary"
            onClick={() => {
              if (denied) {
                // Simulate opening native settings
                setPhase('permission');
              } else {
                // 80% allow, 20% deny — for demo always allow but with a deny option
                setPhase('scanning');
              }
            }}
            style={{ marginTop: 8, padding: '12px 28px' }}>
            {denied ? 'DESCHIDE SETĂRI' : t('ticket.qr.permission.cta')}
          </button>
          <button onClick={onSwitchToPhoto}
            style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              fontSize: 13, color: 'var(--hf-coral)', fontWeight: 600,
              fontFamily: 'var(--ff-body)', textDecoration: 'underline',
              textUnderlineOffset: 2,
            }}>
            Folosește metoda foto în schimb
          </button>
          {!denied && (
            <button onClick={() => setPhase('denied')}
              style={{
                background: 'transparent', border: 'none', cursor: 'pointer',
                fontSize: 11, color: 'var(--color-text-secondary)',
                fontFamily: 'var(--ff-body)', textDecoration: 'underline',
                opacity: 0.6,
              }}>
              Demo: refuză permisiunea
            </button>
          )}
        </div>
      </FlowShell>
    );
  }

  return (
    <FlowShell title="ADAUGĂ BILET · QR" step={1} totalSteps={4} onClose={onCancel}
      scrollable={false}>
      {/* Camera viewport — dark, with scan window cut-out */}
      <div style={{
        flex: 1, minHeight: 280,
        background: 'radial-gradient(circle at 50% 35%, #2a3550 0%, #0d1424 100%)',
        borderRadius: 'var(--r-xl)', position: 'relative', overflow: 'hidden',
      }}>
        {/* Scan window */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 220, height: 220, borderRadius: 18,
          background: 'rgba(255,255,255,0.04)',
          border: '2px solid rgba(255,255,255,0.25)',
          overflow: 'hidden',
        }}>
          {/* corner brackets */}
          {[[0,0,'tl'],[1,0,'tr'],[0,1,'bl'],[1,1,'br']].map(([x,y,k]) => (
            <span key={k} style={{
              position: 'absolute',
              top: y ? 'auto' : 0, bottom: y ? 0 : 'auto',
              left: x ? 'auto' : 0, right: x ? 'auto' : 0,
              width: 30, height: 30,
              borderTop: y ? 'none' : '4px solid var(--hf-coral)',
              borderBottom: y ? '4px solid var(--hf-coral)' : 'none',
              borderLeft: x ? 'none' : '4px solid var(--hf-coral)',
              borderRight: x ? '4px solid var(--hf-coral)' : 'none',
              borderTopLeftRadius: !x && !y ? 12 : 0,
              borderTopRightRadius: x && !y ? 12 : 0,
              borderBottomLeftRadius: !x && y ? 12 : 0,
              borderBottomRightRadius: x && y ? 12 : 0,
            }} />
          ))}
          {/* scanline */}
          <span style={{
            position: 'absolute', left: 8, right: 8,
            height: 2, background: 'linear-gradient(90deg, transparent, var(--hf-coral), transparent)',
            boxShadow: '0 0 18px var(--hf-coral)',
            animation: 'hf-scanline 1.8s linear infinite',
            top: 0,
          }} />
        </div>

        {/* Hints */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 18,
          textAlign: 'center', color: '#fff',
        }}>
          <div style={{ fontFamily: 'var(--ff-display)', fontSize: 13,
            letterSpacing: '0.08em', opacity: 0.95 }}>
            {t('ticket.qr.scanning.hint')}
          </div>
          <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4 }}>
            {t('ticket.qr.scanning.hint2')}
          </div>
        </div>

        {/* Invalid flash */}
        {phase === 'invalid' && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(255,107,122,0.35)',
            display: 'grid', placeItems: 'center',
            animation: 'hf-flash 1.8s ease-out',
          }}>
            <div style={{
              background: '#fff', color: 'var(--hf-coral)',
              padding: '10px 18px', borderRadius: 999,
              fontFamily: 'var(--ff-display)', fontSize: 13, letterSpacing: '0.06em',
              boxShadow: 'var(--sh-lg)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <Icon name="warn" size={16} stroke="var(--hf-coral)" />
              {t('ticket.qr.invalid')}
            </div>
          </div>
        )}

        {/* Failed prompt overlay */}
        {phase === 'failed' && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(13,20,36,0.78)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20,
          }}>
            <div style={{ background: 'var(--hf-paper)', borderRadius: 'var(--r-xl)',
              padding: 22, maxWidth: 320, textAlign: 'center' }}>
              <div className="hf-display" style={{ fontSize: 20,
                color: 'var(--hf-bleumarin)' }}>
                {t('ticket.qr.failed.title')}
              </div>
              <div style={{ marginTop: 8, fontSize: 13,
                color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                {t('ticket.qr.failed.message')}
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                <button onClick={() => setPhase('scanning')}
                  style={{ flex: 1, padding: 10, border: '1.5px solid var(--color-border)',
                    background: 'var(--hf-paper)', borderRadius: 999,
                    cursor: 'pointer', fontWeight: 600, fontSize: 13 }}>
                  {t('ticket.qr.failed.retry')}
                </button>
                <button onClick={onSwitchToPhoto} className="hf-btn hf-btn-primary"
                  style={{ flex: 1, padding: '10px 12px', fontSize: 13 }}>
                  {t('ticket.qr.failed.tryPhoto')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mock controls — visible only with ?demo=1 in URL */}
      {(typeof location !== 'undefined' && /[?&]demo=1/.test(location.search)) && (
      <div style={{ marginTop: 14, padding: '10px 14px',
        background: 'var(--hf-crem-2)', borderRadius: 'var(--r-lg)',
        border: '1px dashed var(--color-border)' }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
          color: 'var(--color-text-secondary)', textTransform: 'uppercase',
          marginBottom: 8 }}>
          DEMO · simulează scanner
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={simulateValid}
            style={{ flex: 1, padding: '8px 10px', fontSize: 12,
              background: 'var(--hf-turcoaz)', color: '#fff', border: 'none',
              borderRadius: 999, cursor: 'pointer', fontWeight: 600 }}>
            QR valid
          </button>
          <button onClick={simulateInvalid}
            style={{ flex: 1, padding: '8px 10px', fontSize: 12,
              background: 'transparent', color: 'var(--hf-coral)',
              border: '1.5px solid var(--hf-coral)', borderRadius: 999,
              cursor: 'pointer', fontWeight: 600 }}>
            QR invalid
          </button>
          <button onClick={simulateFail}
            style={{ flex: 1, padding: '8px 10px', fontSize: 12,
              background: 'transparent', color: 'var(--color-text-secondary)',
              border: '1.5px solid var(--color-border)', borderRadius: 999,
              cursor: 'pointer', fontWeight: 600 }}>
            Eșec
          </button>
        </div>
      </div>
      )}
      {/* Auto-validate for prototype: tap viewport */}
      {!(typeof location !== 'undefined' && /[?&]demo=1/.test(location.search)) && (
        <button onClick={simulateValid} aria-label="Simulate scan"
          style={{ position: 'absolute', inset: 0, background: 'transparent',
            border: 'none', cursor: 'pointer' }} />
      )}
      <style>{`
        @keyframes hf-scanline {
          0% { top: 8px; }
          50% { top: calc(100% - 10px); }
          100% { top: 8px; }
        }
        @keyframes hf-flash {
          0% { opacity: 1; } 100% { opacity: 0; }
        }
      `}</style>
    </FlowShell>
  );
};

// ─────────────── Step 3: Email capture ───────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EmailCapture = ({ ticketDraft, draftEmail, draftMarketing, draftPrivacy,
  onDraftChange, onChangeTicket, onSubmit, onCancel }) => {
  const { t } = useT();
  const [email, setEmail] = fS(draftEmail || '');
  const [touched, setTouched] = fS(false);
  const [privacy, setPrivacy] = fS(!!draftPrivacy);
  const [marketing, setMarketing] = fS(!!draftMarketing);
  fE(() => { onDraftChange && onDraftChange({ email, privacy, marketing }); },
    [email, privacy, marketing]);
  const valid = EMAIL_RE.test(email);
  const canSubmit = valid && privacy;

  return (
    <FlowShell title="ADAUGĂ BILET · EMAIL" step={2} totalSteps={4} onClose={onCancel}>
      <div className="hf-display" style={{ fontSize: 26, lineHeight: 1.1,
        color: 'var(--hf-bleumarin)', letterSpacing: '0.02em', textWrap: 'balance' }}>
        {t('email.capture.title')}
      </div>
      <div style={{ marginTop: 6, fontSize: 14,
        color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
        {t('email.capture.subtitle')}
      </div>

      {/* Ticket preview chip */}
      <div style={{
        marginTop: 16, padding: '10px 12px',
        background: 'var(--gen-accent-soft)',
        border: '1px solid var(--gen-accent)',
        borderRadius: 'var(--r-lg)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 'var(--r-md)',
          background: ticketDraft.photoUri ? `url(${ticketDraft.photoUri}) center/cover` : 'var(--hf-bleumarin)',
          display: 'grid', placeItems: 'center', flexShrink: 0,
        }}>
          {!ticketDraft.photoUri && <Icon name="qr" size={20} stroke="#fff" />}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.3,
            color: 'var(--gen-accent)', textTransform: 'uppercase' }}>
            {t('email.capture.ticket_added')} · {t('tickets.tag.' + ticketDraft.type)}
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-text-secondary)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {ticketDraft.type === 'qr'
              ? (ticketDraft.qrData || '').replace(/^https?:\/\//, '')
              : 'Foto bilet'}
          </div>
        </div>
        <button onClick={onChangeTicket}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'var(--gen-accent)', fontSize: 12, fontWeight: 700,
            textDecoration: 'underline', textUnderlineOffset: 2 }}>
          {t('email.capture.change_ticket')}
        </button>
      </div>

      {/* Email input */}
      <label style={{ display: 'block', marginTop: 22 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
          color: 'var(--color-text-secondary)', textTransform: 'uppercase',
          marginBottom: 6 }}>
          {t('email.capture.label')}
        </div>
        <input type="email" inputMode="email" autoComplete="email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder={t('email.capture.placeholder')}
          style={{
            width: '100%', padding: '14px 14px', fontSize: 15,
            background: 'var(--hf-paper)',
            border: '2px solid ' + (touched && !valid && email
              ? 'var(--hf-coral)' : valid ? 'var(--hf-turcoaz)' : 'var(--color-border)'),
            borderRadius: 'var(--r-md)', outline: 'none',
            fontFamily: 'var(--ff-body)', color: 'var(--hf-bleumarin)',
            boxSizing: 'border-box',
          }} />
        <div style={{ marginTop: 6, fontSize: 11,
          color: touched && !valid && email ? 'var(--hf-coral)' : 'var(--color-text-secondary)',
          lineHeight: 1.5 }}>
          {touched && !valid && email ? t('email.capture.invalid') : t('email.capture.helper')}
        </div>
      </label>

      {/* GDPR */}
      <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <CheckRow checked={privacy} onToggle={() => setPrivacy(p => !p)} required>
          <span>Am citit <a href="#" onClick={(e)=>{e.preventDefault(); e.stopPropagation(); window.__hfShowPolicy && window.__hfShowPolicy();}} style={{color:'var(--hf-coral)', textDecoration:'underline', fontWeight:600}}>Politica de confidențialitate</a> și sunt de acord</span>
        </CheckRow>
        <CheckRow checked={marketing} onToggle={() => setMarketing(p => !p)}>
          <span>{t('email.capture.marketing')}</span>
        </CheckRow>
      </div>

      <div style={{ flex: 1 }} />
      <button disabled={!canSubmit}
        onClick={() => canSubmit && onSubmit({ email, marketingConsent: marketing })}
        className="hf-btn hf-btn-primary"
        style={{
          marginTop: 22, padding: '14px 18px',
          opacity: canSubmit ? 1 : 0.4,
          cursor: canSubmit ? 'pointer' : 'not-allowed',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
        <Icon name="mail" size={18} stroke="#fff" />
        {t('email.capture.submit')}
      </button>
    </FlowShell>
  );
};

const CheckRow = ({ checked, onToggle, required, children }) => (
  <button onClick={onToggle}
    style={{
      display: 'flex', alignItems: 'flex-start', gap: 12,
      background: 'transparent', border: 'none', cursor: 'pointer',
      textAlign: 'left', padding: 0, color: 'var(--hf-bleumarin)',
    }}>
    <span style={{
      width: 22, height: 22, borderRadius: 6, flexShrink: 0,
      border: '2px solid ' + (checked ? 'var(--hf-coral)' : 'var(--color-border)'),
      background: checked ? 'var(--hf-coral)' : 'var(--hf-paper)',
      display: 'grid', placeItems: 'center',
      marginTop: 1,
      transition: 'all var(--t-fast) var(--ease)',
    }}>
      {checked && <Icon name="check" size={14} stroke="#fff" strokeWidth={3.2} />}
    </span>
    <span style={{ fontSize: 13, lineHeight: 1.5, fontFamily: 'var(--ff-body)' }}>
      {children}
      {required && <span style={{ color: 'var(--hf-coral)' }}> *</span>}
    </span>
  </button>
);

// ─────────────── Step 4: Success ───────────────
const SuccessScreen = ({ ticket, code, email, onSeeDiscounts, onAddAnother }) => {
  const { t } = useT();
  const [copied, setCopied] = fS(false);

  const copy = () => {
    try { navigator.clipboard?.writeText(code); } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'var(--hf-paper)',
      display: 'flex', flexDirection: 'column',
      animation: 'hf-flow-in 240ms var(--ease)',
      overflow: 'hidden',
    }}>
      {/* Confetti */}
      <SuccessConfetti />
      <div style={{ padding: '60px 18px 28px', flex: 1, overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', gap: 14 }}>
        <MascotSVG size={130} />
        <div className="hf-display" style={{ fontSize: 38, letterSpacing: '0.02em',
          color: 'var(--hf-bleumarin)' }}>
          {t('success.title')} <span style={{ display: 'inline-block',
            animation: 'hf-wiggle 0.6s ease-in-out 3' }}>🎉</span>
        </div>
        <div style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
          {t('success.subtitle')}
        </div>

        {/* Code card */}
        <div style={{
          width: '100%', maxWidth: 340,
          background: 'var(--hf-paper)',
          border: '2px solid var(--hf-coral)',
          borderRadius: 'var(--r-xl)',
          padding: '22px 18px',
          boxShadow: '0 10px 30px rgba(255,107,122,0.15)',
          position: 'relative',
          animation: 'hf-pop-in 460ms cubic-bezier(0.34, 1.56, 0.64, 1) both',
        }}>
          <div className="hf-display" style={{
            fontSize: code.length > 12 ? 36 : 44,
            letterSpacing: '0.04em', color: 'var(--hf-bleumarin)',
            lineHeight: 1,
          }}>{code}</div>
          <button onClick={copy}
            style={{
              marginTop: 14,
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 999,
              background: copied ? 'var(--hf-turcoaz)' : 'var(--hf-crem-2)',
              color: copied ? '#fff' : 'var(--hf-bleumarin)',
              border: 'none', cursor: 'pointer',
              fontFamily: 'var(--ff-display)', fontSize: 12, letterSpacing: '0.08em',
              transition: 'all var(--t-fast) var(--ease)',
            }}>
            <Icon name={copied ? 'check' : 'copy'} size={14}
              stroke={copied ? '#fff' : 'var(--hf-bleumarin)'} />
            {copied ? t('success.copied') : t('success.copy')}
          </button>
          {/* Wallet save (stub) */}
          <div style={{ marginTop: 10, display: 'flex', gap: 6, justifyContent: 'center' }}>
            <button
              onClick={() => {
                // Stub: real impl would generate .pkpass / Google Pay pass
                alert('Adăugare în Apple Wallet · disponibil la lansare');
              }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '7px 11px', borderRadius: 'var(--r-sm)',
                background: '#000', color: '#fff', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 600,
              }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 12.5c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.2.9-4 .9-.8 0-2.1-.9-3.5-.9-1.8 0-3.5 1.1-4.4 2.7-1.9 3.3-.5 8.1 1.3 10.8.9 1.3 2 2.7 3.4 2.7 1.4-.1 1.9-.9 3.5-.9s2.1.9 3.5.9c1.5 0 2.4-1.3 3.3-2.6 1-1.5 1.5-3 1.5-3.1-.1 0-2.9-1.1-3-4.6zM14.9 4.6c.7-.9 1.3-2.1 1.1-3.4-1.1.1-2.5.7-3.2 1.6-.6.8-1.3 2.1-1.1 3.3 1.2.1 2.5-.6 3.2-1.5z" />
              </svg>
              Apple Wallet
            </button>
            <button
              onClick={() => {
                alert('Adăugare în Google Wallet · disponibil la lansare');
              }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '7px 11px', borderRadius: 'var(--r-sm)',
                background: '#fff', color: '#202124',
                border: '1px solid var(--color-border)', cursor: 'pointer',
                fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 600,
              }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="6" width="20" height="13" rx="2" />
                <path d="M2 11h20" />
              </svg>
              Google Wallet
            </button>
          </div>
        </div>

        <div style={{ marginTop: 14, fontSize: 13,
          color: 'var(--color-text-secondary)', lineHeight: 1.5, maxWidth: 320 }}>
          Codul rămâne salvat pe acest telefon.
          {email ? <> Ți-l vom trimite și pe email la <strong>{email}</strong>.</> : ' Bilet de tip demo — folosește-l ca să încerci reducerile.'}
        </div>
        <div style={{ fontSize: 12, color: 'var(--color-text-secondary)',
          fontStyle: 'italic', opacity: 0.85 }}>
          {t('success.save_hint')}
        </div>
      </div>

      <div style={{ padding: '0 18px 24px',
        display: 'flex', flexDirection: 'column', gap: 8 }}>
        <button className="hf-btn hf-btn-primary" onClick={onSeeDiscounts}
          style={{ padding: '14px 18px', fontSize: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          {t('success.cta.discounts')}
          <Icon name="arrowRight" size={16} stroke="#fff" />
        </button>
        <button onClick={onAddAnother}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer',
            padding: '10px 16px', fontSize: 13, fontWeight: 600,
            color: 'var(--hf-bleumarin)', fontFamily: 'var(--ff-body)',
            textDecoration: 'underline', textUnderlineOffset: 3 }}>
          {t('success.cta.another')}
        </button>
      </div>
      <style>{`
        @keyframes hf-flow-in { from { opacity:0 } to { opacity:1 } }
        @keyframes hf-pop-in {
          0% { transform: scale(0.6); opacity: 0; }
          70% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes hf-wiggle {
          0%,100% { transform: rotate(0); }
          25% { transform: rotate(-12deg); }
          75% { transform: rotate(12deg); }
        }
      `}</style>
    </div>
  );
};

const SuccessConfetti = () => {
  const colors = ['var(--hf-coral)', 'var(--hf-turcoaz)', 'var(--hf-galben)', 'var(--hf-bleumarin)'];
  const pieces = fM(() => Array.from({ length: 28 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.6,
    dur: 1.6 + Math.random() * 1.2,
    color: colors[i % 4],
    size: 6 + Math.random() * 6,
    rot: Math.random() * 360,
  })), []);
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
      overflow: 'hidden' }}>
      {pieces.map(p => (
        <span key={p.id} style={{
          position: 'absolute', top: -20, left: p.x + '%',
          width: p.size, height: p.size * 0.5,
          background: p.color, borderRadius: 2,
          transform: `rotate(${p.rot}deg)`,
          animation: `hf-confetti ${p.dur}s ease-in ${p.delay}s 1 both`,
        }} />
      ))}
      <style>{`
        @keyframes hf-confetti {
          0% { transform: translateY(0) rotate(0); opacity: 1; }
          100% { transform: translateY(140vh) rotate(720deg); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

// ─────────────── Top-level AddTicketFlow ───────────────
const AddTicketFlow = ({ onClose, onComplete }) => {
  const [step, setStep] = fS('method'); // method | photo | qr | email | success
  const [draft, setDraft] = fS(null);   // { type, photoUri?, qrData? }
  const [emailDraft, setEmailDraft] = fS({ email: '', privacy: false, marketing: false });
  const [result, setResult] = fS(null); // { code, email }

  const goEmail = (ticketDraft) => {
    setDraft(ticketDraft);
    setStep('email');
  };

  const submitEmail = ({ email, marketingConsent }) => {
    // Save ticket + email + generate code
    const { user, ticket } = addTicketToUser(draft);
    setUserEmail(email, marketingConsent);
    setResult({ code: user.userCode, email, ticket });
    setStep('success');
  };

  if (step === 'method') {
    return <MethodSelector onClose={onClose}
      onPick={(m) => {
        if (m === 'demo') {
          // Demo path: instantly create a 3-day pass ticket, skip email, go to success.
          const demoDraft = { type: '3day', photoUri: null, qrData: 'DEMO-TICKET' };
          const { user, ticket } = addTicketToUser(demoDraft);
          setDraft(demoDraft);
          setResult({ code: user.userCode, email: null, ticket });
          setStep('success');
          return;
        }
        setStep(m);
      }} />;
  }
  if (step === 'photo') {
    return <PhotoFlow
      onCancel={() => setStep('method')}
      onSwitchToQR={() => setStep('qr')}
      onComplete={goEmail} />;
  }
  if (step === 'qr') {
    return <QRFlow
      onCancel={() => setStep('method')}
      onSwitchToPhoto={() => setStep('photo')}
      onComplete={goEmail} />;
  }
  if (step === 'email') {
    return <EmailCapture ticketDraft={draft}
      draftEmail={emailDraft.email}
      draftPrivacy={emailDraft.privacy}
      draftMarketing={emailDraft.marketing}
      onDraftChange={setEmailDraft}
      onChangeTicket={() => setStep('method')}
      onCancel={onClose}
      onSubmit={submitEmail} />;
  }
  if (step === 'success') {
    return <SuccessScreen
      ticket={result.ticket}
      code={result.code}
      email={result.email}
      onSeeDiscounts={() => onComplete({ tab: 'reduceri' })}
      onAddAnother={() => { setDraft(null); setResult(null); setStep('method'); }} />;
  }
  return null;
};

Object.assign(window, {
  AddTicketFlow, FlowShell, MethodSelector, MethodCard,
  PhotoFlow, PhotoPreview, QRFlow, EmailCapture, SuccessScreen, SuccessConfetti,
});
