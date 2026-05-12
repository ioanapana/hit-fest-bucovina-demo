// Hit Fest Bucovina — App shell + design system reference
const { useState: aS, useEffect: aE, useMemo: aM } = React;

const ModalHeader = ({ label, onClose }) => (
  <header style={{ position: 'sticky', top: 0, zIndex: 40,
    background: 'var(--hf-paper)', borderBottom: '1px solid var(--color-border)',
    padding: '60px 16px 12px', display: 'flex', alignItems: 'center', gap: 8, minHeight: 64 }}>
    <button className="hf-btn-icon" onClick={onClose}
      style={{ width: 38, height: 38, background: 'var(--hf-crem-2)' }}>
      <Icon name="chevronLeft" size={20} />
    </button>
    <span className="hf-display" style={{ fontSize: 18, letterSpacing: '0.05em' }}>{label}</span>
  </header>
);

// Wrap iOS frame with our app — handles routing, theme, favorites
const HitFestApp = ({ initialTheme = 'cd', skipOnboarding = false }) => {
  const [onboarded, setOnboarded] = aS(skipOnboarding);
  const [theme, setTheme] = aS(initialTheme);
  const [tab, setTab] = aS('home');
  const [favs, setFavs] = aS(['haddaway', 'la']);
  const [detail, setDetail] = aS(null); // {id, day}
  const [partnerDetail, setPartnerDetail] = aS(null);
  const [tickets_open, setTicketsOpen] = aS(false);
  const [ticketsMode, setTicketsMode] = aS('mine');
  const [addFlowOpen, setAddFlowOpen] = aS(false);
  const [info, setInfo] = aS(false);
  const [settings_open, setSettingsOpen] = aS(false);
  const [toast, setToast] = aS(null);
  const [shimmer, setShimmer] = aS(false);
  const [tickets, setTickets] = aS(() => loadUserTickets());
  const userCode = aM(() => (tickets[0] ? tickets[0].code : null), [tickets]);

  const changeTheme = t => {
    setTheme(t);
    setShimmer(true);
    setTimeout(() => setShimmer(false), 600);
  };

  const onFav = id => {
    setFavs(f => {
      const has = f.includes(id);
      setToast(has ? 'Eliminat din favorite' : 'Adăugat la favorite ⭐');
      setTimeout(() => setToast(null), 1600);
      return has ? f.filter(x => x !== id) : [...f, id];
    });
  };

  const openArtist = (id, day) => setDetail({ id, day });

  if (!onboarded) {
    return (
      <div data-theme={theme} className="hf-app" style={{ height: '100%', position: 'relative' }}>
        <Onboarding onDone={(opts) => {
          if (window.__pickedTheme) setTheme(window.__pickedTheme);
          if (opts && opts.tab) setTab(opts.tab);
          setOnboarded(true);
        }} />
      </div>
    );
  }

  let content;
  if (settings_open) {
    content = <SettingsScreen theme={theme}
      onThemeChange={changeTheme}
      onResetApp={() => {
        clearUserTickets();
        setTickets([]);
        setFavs([]);
        try { localStorage.removeItem('hf_lang'); } catch (e) {}
        setSettingsOpen(false);
        setToast('Aplicația a fost resetată');
        setTimeout(() => setToast(null), 1600);
      }} />;
  } else if (info) {
    content = <InfoScreen />;
  } else if (tickets_open) {
    content = <MyTicketsScreen tickets={tickets}
      onChange={(ts) => setTickets(ts)}
      onAddTicket={() => { setTicketsOpen(false); setAddFlowOpen(true); }}
      onPartnerTap={() => { setTicketsOpen(false); setTab('reduceri'); }} />;
  } else if (partnerDetail) {
    content = <PartnerDetailScreen partnerId={partnerDetail} tickets={tickets}
      onBack={() => setPartnerDetail(null)}
      onBuyTap={() => { setPartnerDetail(null); openLivetickets(); }} />;
  } else if (detail) {
    content = <ArtistDetail artistId={detail.id} day={detail.day}
      onBack={() => setDetail(null)}
      onArtistTap={(id, d) => setDetail({ id, day: d })}
      isFav={favs.includes(detail.id)} onFav={onFav} />;
  } else if (tab === 'home') {
    content = <HomeScreen theme={theme} favs={favs}
      hasTicket={tickets.length > 0}
      onAddTicket={() => setAddFlowOpen(true)}
      onTabChange={setTab} onArtistTap={openArtist} />;
  } else if (tab === 'lineup') {
    content = <LineupScreen favs={favs} onFav={onFav} onArtistTap={openArtist} />;
  } else if (tab === 'photo') {
    content = <PhotoScreen />;
  } else if (tab === 'map') {
    content = <MapScreen />;
  } else if (tab === 'reduceri') {
    content = tickets.length === 0 ? (
      <div style={{ padding: '24px 16px' }}>
        <EmptyDiscountsLocked
          onAddTicket={() => setAddFlowOpen(true)}
          onSkip={() => setTab('home')} />
        <div style={{ marginTop: 18 }}>
          <PartnersBlurredTeaser
            partners={(window.PARTNERS || [])}
            onAddTicket={() => setAddFlowOpen(true)} />
        </div>
      </div>
    ) : (
      <PartnersScreen tickets={tickets}
        onPartnerTap={(id) => setPartnerDetail(id)}
        onBuyTap={openLivetickets}
        onTabChange={setTab} />
    );
  } else if (tab === 'my') {
    content = <MyScheduleScreen favs={favs} onFav={onFav}
      onArtistTap={openArtist} onTabChange={setTab} />;
  }

  const showHeader = !detail && !tickets_open && !partnerDetail && !info && !settings_open && tab !== 'photo';
  const showBottomNav = !tickets_open && !partnerDetail && !info && !settings_open;

  return (
    <div data-theme={theme} className="hf-app"
      style={{ height: '100%', position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column' }}>
      {showHeader && <Header theme={theme} onThemeChange={changeTheme}
        onTicketsTap={() => { setTicketsMode('mine'); setTicketsOpen(true); }}
        onInfoTap={() => setInfo(true)}
        onSettingsTap={() => setSettingsOpen(true)} />}
      {tickets_open && (
        <ModalHeader label="BILETE" onClose={() => setTicketsOpen(false)} />
      )}
      {info && (
        <ModalHeader label="INFO & FAQ" onClose={() => setInfo(false)} />
      )}
      {settings_open && (
        <ModalHeader label="SETĂRI" onClose={() => setSettingsOpen(false)} />
      )}
      <div className="hf-scroll" style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
        {content}
      </div>
      {showBottomNav && <BottomNav active={tab === 'my' ? 'lineup' : tab} onChange={t => {
        setDetail(null); setPartnerDetail(null); setTab(t);
      }} />}
      {/* Floating "my schedule" pill on home/lineup */}
      {showBottomNav && (tab === 'home' || tab === 'lineup') && favs.length > 0 && (
        <button onClick={() => setTab('my')} style={{
          position: 'absolute', bottom: 86, right: 14, zIndex: 30,
          padding: '10px 14px', borderRadius: 999,
          background: 'var(--hf-bleumarin)', color: '#fff', border: 'none',
          fontFamily: 'var(--ff-display)', fontSize: 12, letterSpacing: '0.06em',
          boxShadow: 'var(--sh-lg)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <Icon name="star" size={14} fill /> AL MEU · {favs.length}
        </button>
      )}
      <Toast msg={toast} />
      {shimmer && <div className="hf-theme-shimmer" />}
      {addFlowOpen && (
        <AddTicketFlow
          onClose={() => setAddFlowOpen(false)}
          onComplete={({ tab: targetTab }) => {
            setTickets(loadUser().tickets);
            setAddFlowOpen(false);
            if (targetTab) setTab(targetTab);
          }} />
      )}
    </div>
  );
};

// ─────────────── Design System reference card ───────────────
const DesignSystemRef = () => (
  <div data-theme="cd" className="hf-app" style={{
    padding: 28, fontFamily: 'var(--ff-body)', minHeight: '100%',
    background: 'var(--hf-paper)',
  }}>
    <div style={{ marginBottom: 28 }}>
      <HitFestMark size={1.4} />
      <div className="hf-display" style={{ fontSize: 28, marginTop: 12 }}>DESIGN SYSTEM</div>
      <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 4 }}>
        Tokens, components, motion · {FESTIVAL.dates}
      </div>
    </div>

    {/* Type */}
    <Section title="Tipografie">
      <div style={{ display: 'grid', gap: 12 }}>
        <Token label="Display · Bebas Neue">
          <span className="hf-display" style={{ fontSize: 56 }}>HIT FEST 2026</span>
        </Token>
        <Token label="Body · Inter">
          <span style={{ fontSize: 16, lineHeight: 1.5 }}>
            Festivalul comunității care își amintește cine a fost.
          </span>
        </Token>
        <Token label="Script · Caveat (logo only)">
          <span className="hf-script" style={{ fontSize: 32, color: 'var(--hf-coral)' }}>
            Hit
          </span>
        </Token>
        <Token label="Scale">
          <div style={{ display: 'flex', gap: 14, alignItems: 'baseline', flexWrap: 'wrap' }}>
            {[12,14,16,18,24,32,48,64].map(s => (
              <span key={s} style={{ fontSize: s }}>{s}</span>
            ))}
          </div>
        </Token>
      </div>
    </Section>

    {/* Colors */}
    <Section title="Culori brand">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {[
          { n: 'Turcoaz',   v: '#1ABC9C', t: '#fff' },
          { n: 'Galben',    v: '#F4C430', t: 'var(--hf-bleumarin)' },
          { n: 'Bleumarin', v: '#0A2540', t: '#fff' },
          { n: 'Coral',     v: '#FF6B7A', t: '#fff' },
          { n: 'Portocaliu',v: '#FF8C42', t: '#fff' },
          { n: 'Crem',      v: '#FAF6E8', t: 'var(--hf-bleumarin)' },
        ].map(c => (
          <div key={c.n} style={{ background: c.v, color: c.t, padding: 14,
            borderRadius: 'var(--r-md)', fontSize: 12, fontWeight: 600,
            border: c.n === 'Crem' ? '1px solid var(--color-border)' : 'none' }}>
            <div style={{ fontFamily: 'var(--ff-display)', fontSize: 16, letterSpacing: '0.04em' }}>
              {c.n.toUpperCase()}
            </div>
            <div style={{ opacity: 0.8, marginTop: 2 }}>{c.v}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-secondary)' }}>
          Decorative dots:
        </span>
        <Dots size={10} />
      </div>
    </Section>

    {/* Themes */}
    <Section title="Generation themes (accents only)">
      <div style={{ display: 'grid', gap: 10 }}>
        {[
          { id: 'casete', label: 'CASETE · <1990', glyph: '📼' },
          { id: 'cd',     label: 'CD · 1990–2000', glyph: '💿' },
          { id: 'mp3',    label: 'MP3 · >2000',    glyph: '🎧' },
        ].map(t => (
          <div key={t.id} data-theme={t.id} style={{
            padding: 14, borderRadius: 'var(--r-lg)',
            background: 'var(--gen-accent-soft)',
            display: 'flex', alignItems: 'center', gap: 12,
            border: '2px solid var(--gen-accent)',
          }}>
            <span style={{ fontSize: 28 }}>{t.glyph}</span>
            <div style={{ flex: 1 }}>
              <div className="hf-display" style={{ fontSize: 18, color: 'var(--gen-accent)',
                letterSpacing: '0.04em' }}>{t.label}</div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {[1,2,3].map(n => (
                <span key={n} style={{ width: 18, height: 18, borderRadius: 999,
                  background: 'var(--gen-confetti-' + n + ')',
                  border: '2px solid var(--hf-paper)' }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Spacing & radius */}
    <Section title="Spacing · Radius">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
          {[
            { l: 'xs', v: 4 }, { l: 'sm', v: 8 }, { l: 'md', v: 16 },
            { l: 'lg', v: 24 }, { l: 'xl', v: 32 }, { l: '2xl', v: 48 },
          ].map(s => (
            <div key={s.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ width: s.v, height: s.v, background: 'var(--hf-turcoaz)',
                borderRadius: 4 }} />
              <span style={{ fontSize: 10, color: 'var(--color-text-secondary)' }}>{s.l}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {[
            { l: 'sm', v: 6 }, { l: 'md', v: 12 }, { l: 'lg', v: 20 },
            { l: 'xl', v: 28 }, { l: '2xl', v: 36 }, { l: 'full', v: 999 },
          ].map(s => (
            <div key={s.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 36, height: 36, background: 'var(--hf-galben)',
                borderRadius: s.v }} />
              <span style={{ fontSize: 10, color: 'var(--color-text-secondary)' }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Components */}
    <Section title="Buttons">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
        <button className="hf-btn hf-btn-primary">CUMPĂRĂ BILET</button>
        <Dots size={9} />
        <button className="hf-btn hf-btn-secondary">VEZI LINE-UP</button>
        <button className="hf-btn hf-btn-ghost">Detalii</button>
      </div>
    </Section>

    <Section title="Chips & cards">
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
        <span className="hf-chip">Default</span>
        <span className="hf-chip hf-chip-galben">ERA 90s</span>
        <span className="hf-chip hf-chip-turcoaz">ERA 80s</span>
        <span className="hf-chip hf-chip-coral">★ HEADLINER</span>
        <span className="hf-chip hf-chip-active">Filtru activ</span>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <ArtistCardCompact
          artist={{ id: 'demo', name: 'HADDAWAY', time: '22:00', headliner: true, role: '' }}
          isFav={true} onFav={() => {}} onTap={() => {}} />
        <ArtistCardCompact
          artist={{ id: 'demo2', name: 'L.A.', time: '20:30', role: 'Trupă' }}
          isFav={false} onFav={() => {}} onTap={() => {}} />
      </div>
    </Section>

    <Section title="Day selector">
      <DaySelector active={8} onChange={() => {}} />
    </Section>

    <Section title="Countdown">
      <Countdown />
    </Section>

    <Section title="Shadows · Motion">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
        {[
          { l: 'sm', s: 'var(--sh-sm)' },
          { l: 'md', s: 'var(--sh-md)' },
          { l: 'lg', s: 'var(--sh-lg)' },
          { l: 'warm', s: 'var(--sh-warm)' },
        ].map(x => (
          <div key={x.l} style={{ height: 72, background: 'var(--hf-paper)',
            borderRadius: 'var(--r-md)', boxShadow: x.s,
            display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700,
            color: 'var(--color-text-secondary)', letterSpacing: 1 }}>
            {x.l.toUpperCase()}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
        <strong style={{ color: 'var(--color-text-primary)' }}>Durations:</strong> fast 150ms · base 250ms · slow 400ms<br/>
        <strong style={{ color: 'var(--color-text-primary)' }}>Easing:</strong> cubic-bezier(.22,.61,.36,1)<br/>
        <strong style={{ color: 'var(--color-text-primary)' }}>Reduced motion:</strong> respected via media query
      </div>
    </Section>

    <Section title="Accessibility">
      <div style={{ fontSize: 13, color: 'var(--color-text-primary)', lineHeight: 1.6 }}>
        ✓ WCAG AA contrast on bleumarin/cream (12.4:1)<br/>
        ✓ Touch targets ≥ 48px<br/>
        ✓ Romanian diacritics (ă â î ș ț) supported<br/>
        ✓ Focus states visible<br/>
        ✓ Reduced-motion respected
      </div>
    </Section>
  </div>
);

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
      color: 'var(--color-text-secondary)', marginBottom: 10,
      textTransform: 'uppercase' }}>{title}</div>
    {children}
  </div>
);

const Token = ({ label, children }) => (
  <div style={{ padding: 12, background: 'var(--hf-crem)', borderRadius: 'var(--r-md)',
    border: '1px solid var(--color-border)' }}>
    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1,
      color: 'var(--color-text-secondary)', marginBottom: 6 }}>
      {label.toUpperCase()}
    </div>
    {children}
  </div>
);

// ─────────────── Canvas root ───────────────
const Root = () => (
  <DesignCanvas>
    <DCSection id="prototype" title="Interactive Prototype"
      subtitle="Tap bottom nav · switch generation theme top-right · star artists to build your schedule">
      <DCArtboard id="cd-flow" label="CD theme · default" width={390} height={844}>
        <IOSDevice width={390} height={844}>
          <HitFestApp initialTheme="cd" skipOnboarding={true} />
        </IOSDevice>
      </DCArtboard>
      <DCArtboard id="onboarding-flow" label="With onboarding" width={390} height={844}>
        <IOSDevice width={390} height={844}>
          <HitFestApp initialTheme="cd" skipOnboarding={false} />
        </IOSDevice>
      </DCArtboard>
      <DCArtboard id="casete-flow" label="Casete theme · '80s" width={390} height={844}>
        <IOSDevice width={390} height={844}>
          <HitFestApp initialTheme="casete" skipOnboarding={true} />
        </IOSDevice>
      </DCArtboard>
      <DCArtboard id="mp3-flow" label="MP3 theme · '00s" width={390} height={844}>
        <IOSDevice width={390} height={844}>
          <HitFestApp initialTheme="mp3" skipOnboarding={true} />
        </IOSDevice>
      </DCArtboard>
    </DCSection>

    <DCSection id="system" title="Design System"
      subtitle="Tokens, type, color, components — handoff reference">
      <DCArtboard id="ds" label="Tokens & components" width={520} height={1700}>
        <DesignSystemRef />
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <LangProvider><Root /></LangProvider>
);
