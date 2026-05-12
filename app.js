// Hit Fest Bucovina — App shell + design system reference
const {
  useState: aS,
  useEffect: aE,
  useMemo: aM
} = React;
const ModalHeader = ({
  label,
  onClose
}) => /*#__PURE__*/React.createElement("header", {
  style: {
    position: 'sticky',
    top: 0,
    zIndex: 40,
    background: 'var(--hf-paper)',
    borderBottom: '1px solid var(--color-border)',
    padding: '60px 16px 12px',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    minHeight: 64
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "hf-btn-icon",
  onClick: onClose,
  style: {
    width: 38,
    height: 38,
    background: 'var(--hf-crem-2)'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "chevronLeft",
  size: 20
})), /*#__PURE__*/React.createElement("span", {
  className: "hf-display",
  style: {
    fontSize: 18,
    letterSpacing: '0.05em'
  }
}, label));

// Wrap iOS frame with our app — handles routing, theme, favorites
const HitFestApp = ({
  initialTheme = 'cd',
  skipOnboarding = false
}) => {
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
  const userCode = aM(() => tickets[0] ? tickets[0].code : null, [tickets]);
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
  const openArtist = (id, day) => setDetail({
    id,
    day
  });
  if (!onboarded) {
    return /*#__PURE__*/React.createElement("div", {
      "data-theme": theme,
      className: "hf-app",
      style: {
        height: '100%',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Onboarding, {
      onDone: opts => {
        if (window.__pickedTheme) setTheme(window.__pickedTheme);
        if (opts && opts.tab) setTab(opts.tab);
        setOnboarded(true);
      }
    }));
  }
  let content;
  if (settings_open) {
    content = /*#__PURE__*/React.createElement(SettingsScreen, {
      theme: theme,
      onThemeChange: changeTheme,
      onResetApp: () => {
        clearUserTickets();
        setTickets([]);
        setFavs([]);
        try {
          localStorage.removeItem('hf_lang');
        } catch (e) {}
        setSettingsOpen(false);
        setToast('Aplicația a fost resetată');
        setTimeout(() => setToast(null), 1600);
      }
    });
  } else if (info) {
    content = /*#__PURE__*/React.createElement(InfoScreen, null);
  } else if (tickets_open) {
    content = /*#__PURE__*/React.createElement(MyTicketsScreen, {
      tickets: tickets,
      onChange: ts => setTickets(ts),
      onAddTicket: () => {
        setTicketsOpen(false);
        setAddFlowOpen(true);
      },
      onPartnerTap: () => {
        setTicketsOpen(false);
        setTab('reduceri');
      }
    });
  } else if (partnerDetail) {
    content = /*#__PURE__*/React.createElement(PartnerDetailScreen, {
      partnerId: partnerDetail,
      tickets: tickets,
      onBack: () => setPartnerDetail(null),
      onBuyTap: () => {
        setPartnerDetail(null);
        setAddFlowOpen(true);
      }
    });
  } else if (detail) {
    content = /*#__PURE__*/React.createElement(ArtistDetail, {
      artistId: detail.id,
      day: detail.day,
      onBack: () => setDetail(null),
      onArtistTap: (id, d) => setDetail({
        id,
        day: d
      }),
      isFav: favs.includes(detail.id),
      onFav: onFav
    });
  } else if (tab === 'home') {
    content = /*#__PURE__*/React.createElement(HomeScreen, {
      theme: theme,
      favs: favs,
      hasTicket: tickets.length > 0,
      onAddTicket: () => setAddFlowOpen(true),
      onTabChange: setTab,
      onArtistTap: openArtist
    });
  } else if (tab === 'lineup') {
    content = /*#__PURE__*/React.createElement(LineupScreen, {
      favs: favs,
      onFav: onFav,
      onArtistTap: openArtist
    });
  } else if (tab === 'photo') {
    content = /*#__PURE__*/React.createElement(PhotoScreen, null);
  } else if (tab === 'map') {
    content = /*#__PURE__*/React.createElement(MapScreen, null);
  } else if (tab === 'reduceri') {
    content = /*#__PURE__*/React.createElement(PartnersScreen, {
      tickets: tickets,
      onPartnerTap: id => setPartnerDetail(id),
      onBuyTap: () => setAddFlowOpen(true),
      onTabChange: setTab
    });
  } else if (tab === 'my') {
    content = /*#__PURE__*/React.createElement(MyScheduleScreen, {
      favs: favs,
      onFav: onFav,
      onArtistTap: openArtist,
      onTabChange: setTab
    });
  }
  const showHeader = !detail && !tickets_open && !partnerDetail && !info && !settings_open && tab !== 'photo';
  const showBottomNav = !tickets_open && !partnerDetail && !info && !settings_open;
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme,
    className: "hf-app",
    style: {
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, showHeader && /*#__PURE__*/React.createElement(Header, {
    theme: theme,
    onThemeChange: changeTheme,
    onTicketsTap: () => {
      setTicketsMode('mine');
      setTicketsOpen(true);
    },
    onInfoTap: () => setInfo(true),
    onSettingsTap: () => setSettingsOpen(true)
  }), tickets_open && /*#__PURE__*/React.createElement(ModalHeader, {
    label: "BILETE",
    onClose: () => setTicketsOpen(false)
  }), info && /*#__PURE__*/React.createElement(ModalHeader, {
    label: "INFO & FAQ",
    onClose: () => setInfo(false)
  }), settings_open && /*#__PURE__*/React.createElement(ModalHeader, {
    label: "SET\u0102RI",
    onClose: () => setSettingsOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "hf-scroll",
    style: {
      flex: 1,
      overflowY: 'auto',
      position: 'relative'
    }
  }, content), showBottomNav && /*#__PURE__*/React.createElement(BottomNav, {
    active: tab === 'my' ? 'lineup' : tab,
    onChange: t => {
      setDetail(null);
      setPartnerDetail(null);
      setTab(t);
    }
  }), showBottomNav && (tab === 'home' || tab === 'lineup') && favs.length > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab('my'),
    style: {
      position: 'absolute',
      bottom: 86,
      right: 14,
      zIndex: 30,
      padding: '10px 14px',
      borderRadius: 999,
      background: 'var(--hf-bleumarin)',
      color: '#fff',
      border: 'none',
      fontFamily: 'var(--ff-display)',
      fontSize: 12,
      letterSpacing: '0.06em',
      boxShadow: 'var(--sh-lg)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 14,
    fill: true
  }), " AL MEU \xB7 ", favs.length), /*#__PURE__*/React.createElement(Toast, {
    msg: toast
  }), shimmer && /*#__PURE__*/React.createElement("div", {
    className: "hf-theme-shimmer"
  }), addFlowOpen && /*#__PURE__*/React.createElement(AddTicketFlow, {
    onClose: () => setAddFlowOpen(false),
    onComplete: ({
      tab: targetTab
    }) => {
      setTickets(loadUser().tickets);
      setAddFlowOpen(false);
      if (targetTab) setTab(targetTab);
    }
  }));
};

// ─────────────── Design System reference card ───────────────
const DesignSystemRef = () => /*#__PURE__*/React.createElement("div", {
  "data-theme": "cd",
  className: "hf-app",
  style: {
    padding: 28,
    fontFamily: 'var(--ff-body)',
    minHeight: '100%',
    background: 'var(--hf-paper)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 28
  }
}, /*#__PURE__*/React.createElement(HitFestMark, {
  size: 1.4
}), /*#__PURE__*/React.createElement("div", {
  className: "hf-display",
  style: {
    fontSize: 28,
    marginTop: 12
  }
}, "DESIGN SYSTEM"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: 'var(--color-text-secondary)',
    marginTop: 4
  }
}, "Tokens, components, motion \xB7 ", FESTIVAL.dates)), /*#__PURE__*/React.createElement(Section, {
  title: "Tipografie"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gap: 12
  }
}, /*#__PURE__*/React.createElement(Token, {
  label: "Display \xB7 Bebas Neue"
}, /*#__PURE__*/React.createElement("span", {
  className: "hf-display",
  style: {
    fontSize: 56
  }
}, "HIT FEST 2026")), /*#__PURE__*/React.createElement(Token, {
  label: "Body \xB7 Inter"
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 16,
    lineHeight: 1.5
  }
}, "Festivalul comunit\u0103\u021Bii care \xEE\u0219i aminte\u0219te cine a fost.")), /*#__PURE__*/React.createElement(Token, {
  label: "Script \xB7 Caveat (logo only)"
}, /*#__PURE__*/React.createElement("span", {
  className: "hf-script",
  style: {
    fontSize: 32,
    color: 'var(--hf-coral)'
  }
}, "Hit")), /*#__PURE__*/React.createElement(Token, {
  label: "Scale"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 14,
    alignItems: 'baseline',
    flexWrap: 'wrap'
  }
}, [12, 14, 16, 18, 24, 32, 48, 64].map(s => /*#__PURE__*/React.createElement("span", {
  key: s,
  style: {
    fontSize: s
  }
}, s)))))), /*#__PURE__*/React.createElement(Section, {
  title: "Culori brand"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 10
  }
}, [{
  n: 'Turcoaz',
  v: '#1ABC9C',
  t: '#fff'
}, {
  n: 'Galben',
  v: '#F4C430',
  t: 'var(--hf-bleumarin)'
}, {
  n: 'Bleumarin',
  v: '#0A2540',
  t: '#fff'
}, {
  n: 'Coral',
  v: '#FF6B7A',
  t: '#fff'
}, {
  n: 'Portocaliu',
  v: '#FF8C42',
  t: '#fff'
}, {
  n: 'Crem',
  v: '#FAF6E8',
  t: 'var(--hf-bleumarin)'
}].map(c => /*#__PURE__*/React.createElement("div", {
  key: c.n,
  style: {
    background: c.v,
    color: c.t,
    padding: 14,
    borderRadius: 'var(--r-md)',
    fontSize: 12,
    fontWeight: 600,
    border: c.n === 'Crem' ? '1px solid var(--color-border)' : 'none'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--ff-display)',
    fontSize: 16,
    letterSpacing: '0.04em'
  }
}, c.n.toUpperCase()), /*#__PURE__*/React.createElement("div", {
  style: {
    opacity: 0.8,
    marginTop: 2
  }
}, c.v)))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: 14
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 11,
    fontWeight: 600,
    color: 'var(--color-text-secondary)'
  }
}, "Decorative dots:"), /*#__PURE__*/React.createElement(Dots, {
  size: 10
}))), /*#__PURE__*/React.createElement(Section, {
  title: "Generation themes (accents only)"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gap: 10
  }
}, [{
  id: 'casete',
  label: 'CASETE · <1990',
  glyph: '📼'
}, {
  id: 'cd',
  label: 'CD · 1990–2000',
  glyph: '💿'
}, {
  id: 'mp3',
  label: 'MP3 · >2000',
  glyph: '🎧'
}].map(t => /*#__PURE__*/React.createElement("div", {
  key: t.id,
  "data-theme": t.id,
  style: {
    padding: 14,
    borderRadius: 'var(--r-lg)',
    background: 'var(--gen-accent-soft)',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    border: '2px solid var(--gen-accent)'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 28
  }
}, t.glyph), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "hf-display",
  style: {
    fontSize: 18,
    color: 'var(--gen-accent)',
    letterSpacing: '0.04em'
  }
}, t.label)), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 6
  }
}, [1, 2, 3].map(n => /*#__PURE__*/React.createElement("span", {
  key: n,
  style: {
    width: 18,
    height: 18,
    borderRadius: 999,
    background: 'var(--gen-confetti-' + n + ')',
    border: '2px solid var(--hf-paper)'
  }
}))))))), /*#__PURE__*/React.createElement(Section, {
  title: "Spacing \xB7 Radius"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 4,
    alignItems: 'flex-end'
  }
}, [{
  l: 'xs',
  v: 4
}, {
  l: 'sm',
  v: 8
}, {
  l: 'md',
  v: 16
}, {
  l: 'lg',
  v: 24
}, {
  l: 'xl',
  v: 32
}, {
  l: '2xl',
  v: 48
}].map(s => /*#__PURE__*/React.createElement("div", {
  key: s.l,
  style: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: s.v,
    height: s.v,
    background: 'var(--hf-turcoaz)',
    borderRadius: 4
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 10,
    color: 'var(--color-text-secondary)'
  }
}, s.l)))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }
}, [{
  l: 'sm',
  v: 6
}, {
  l: 'md',
  v: 12
}, {
  l: 'lg',
  v: 20
}, {
  l: 'xl',
  v: 28
}, {
  l: '2xl',
  v: 36
}, {
  l: 'full',
  v: 999
}].map(s => /*#__PURE__*/React.createElement("div", {
  key: s.l,
  style: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 36,
    height: 36,
    background: 'var(--hf-galben)',
    borderRadius: s.v
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 10,
    color: 'var(--color-text-secondary)'
  }
}, s.l)))))), /*#__PURE__*/React.createElement(Section, {
  title: "Buttons"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'flex-start'
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "hf-btn hf-btn-primary"
}, "CUMP\u0102R\u0102 BILET"), /*#__PURE__*/React.createElement(Dots, {
  size: 9
}), /*#__PURE__*/React.createElement("button", {
  className: "hf-btn hf-btn-secondary"
}, "VEZI LINE-UP"), /*#__PURE__*/React.createElement("button", {
  className: "hf-btn hf-btn-ghost"
}, "Detalii"))), /*#__PURE__*/React.createElement(Section, {
  title: "Chips & cards"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 6,
    flexWrap: 'wrap',
    marginBottom: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "hf-chip"
}, "Default"), /*#__PURE__*/React.createElement("span", {
  className: "hf-chip hf-chip-galben"
}, "ERA 90s"), /*#__PURE__*/React.createElement("span", {
  className: "hf-chip hf-chip-turcoaz"
}, "ERA 80s"), /*#__PURE__*/React.createElement("span", {
  className: "hf-chip hf-chip-coral"
}, "\u2605 HEADLINER"), /*#__PURE__*/React.createElement("span", {
  className: "hf-chip hf-chip-active"
}, "Filtru activ")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gap: 8
  }
}, /*#__PURE__*/React.createElement(ArtistCardCompact, {
  artist: {
    id: 'demo',
    name: 'HADDAWAY',
    time: '22:00',
    headliner: true,
    role: ''
  },
  isFav: true,
  onFav: () => {},
  onTap: () => {}
}), /*#__PURE__*/React.createElement(ArtistCardCompact, {
  artist: {
    id: 'demo2',
    name: 'L.A.',
    time: '20:30',
    role: 'Trupă'
  },
  isFav: false,
  onFav: () => {},
  onTap: () => {}
}))), /*#__PURE__*/React.createElement(Section, {
  title: "Day selector"
}, /*#__PURE__*/React.createElement(DaySelector, {
  active: 8,
  onChange: () => {}
})), /*#__PURE__*/React.createElement(Section, {
  title: "Countdown"
}, /*#__PURE__*/React.createElement(Countdown, null)), /*#__PURE__*/React.createElement(Section, {
  title: "Shadows \xB7 Motion"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: 10
  }
}, [{
  l: 'sm',
  s: 'var(--sh-sm)'
}, {
  l: 'md',
  s: 'var(--sh-md)'
}, {
  l: 'lg',
  s: 'var(--sh-lg)'
}, {
  l: 'warm',
  s: 'var(--sh-warm)'
}].map(x => /*#__PURE__*/React.createElement("div", {
  key: x.l,
  style: {
    height: 72,
    background: 'var(--hf-paper)',
    borderRadius: 'var(--r-md)',
    boxShadow: x.s,
    display: 'grid',
    placeItems: 'center',
    fontSize: 11,
    fontWeight: 700,
    color: 'var(--color-text-secondary)',
    letterSpacing: 1
  }
}, x.l.toUpperCase()))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 14,
    fontSize: 12,
    color: 'var(--color-text-secondary)',
    lineHeight: 1.6
  }
}, /*#__PURE__*/React.createElement("strong", {
  style: {
    color: 'var(--color-text-primary)'
  }
}, "Durations:"), " fast 150ms \xB7 base 250ms \xB7 slow 400ms", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
  style: {
    color: 'var(--color-text-primary)'
  }
}, "Easing:"), " cubic-bezier(.22,.61,.36,1)", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
  style: {
    color: 'var(--color-text-primary)'
  }
}, "Reduced motion:"), " respected via media query")), /*#__PURE__*/React.createElement(Section, {
  title: "Accessibility"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: 'var(--color-text-primary)',
    lineHeight: 1.6
  }
}, "\u2713 WCAG AA contrast on bleumarin/cream (12.4:1)", /*#__PURE__*/React.createElement("br", null), "\u2713 Touch targets \u2265 48px", /*#__PURE__*/React.createElement("br", null), "\u2713 Romanian diacritics (\u0103 \xE2 \xEE \u0219 \u021B) supported", /*#__PURE__*/React.createElement("br", null), "\u2713 Focus states visible", /*#__PURE__*/React.createElement("br", null), "\u2713 Reduced-motion respected")));
const Section = ({
  title,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 24
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1.5,
    color: 'var(--color-text-secondary)',
    marginBottom: 10,
    textTransform: 'uppercase'
  }
}, title), children);
const Token = ({
  label,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 12,
    background: 'var(--hf-crem)',
    borderRadius: 'var(--r-md)',
    border: '1px solid var(--color-border)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1,
    color: 'var(--color-text-secondary)',
    marginBottom: 6
  }
}, label.toUpperCase()), children);

// ─────────────── Canvas root ───────────────
const Root = () => /*#__PURE__*/React.createElement(DesignCanvas, null, /*#__PURE__*/React.createElement(DCSection, {
  id: "prototype",
  title: "Interactive Prototype",
  subtitle: "Tap bottom nav \xB7 switch generation theme top-right \xB7 star artists to build your schedule"
}, /*#__PURE__*/React.createElement(DCArtboard, {
  id: "cd-flow",
  label: "CD theme \xB7 default",
  width: 390,
  height: 844
}, /*#__PURE__*/React.createElement(IOSDevice, {
  width: 390,
  height: 844
}, /*#__PURE__*/React.createElement(HitFestApp, {
  initialTheme: "cd",
  skipOnboarding: true
}))), /*#__PURE__*/React.createElement(DCArtboard, {
  id: "onboarding-flow",
  label: "With onboarding",
  width: 390,
  height: 844
}, /*#__PURE__*/React.createElement(IOSDevice, {
  width: 390,
  height: 844
}, /*#__PURE__*/React.createElement(HitFestApp, {
  initialTheme: "cd",
  skipOnboarding: false
}))), /*#__PURE__*/React.createElement(DCArtboard, {
  id: "casete-flow",
  label: "Casete theme \xB7 '80s",
  width: 390,
  height: 844
}, /*#__PURE__*/React.createElement(IOSDevice, {
  width: 390,
  height: 844
}, /*#__PURE__*/React.createElement(HitFestApp, {
  initialTheme: "casete",
  skipOnboarding: true
}))), /*#__PURE__*/React.createElement(DCArtboard, {
  id: "mp3-flow",
  label: "MP3 theme \xB7 '00s",
  width: 390,
  height: 844
}, /*#__PURE__*/React.createElement(IOSDevice, {
  width: 390,
  height: 844
}, /*#__PURE__*/React.createElement(HitFestApp, {
  initialTheme: "mp3",
  skipOnboarding: true
})))), /*#__PURE__*/React.createElement(DCSection, {
  id: "system",
  title: "Design System",
  subtitle: "Tokens, type, color, components \u2014 handoff reference"
}, /*#__PURE__*/React.createElement(DCArtboard, {
  id: "ds",
  label: "Tokens & components",
  width: 520,
  height: 1700
}, /*#__PURE__*/React.createElement(DesignSystemRef, null))));
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(LangProvider, null, /*#__PURE__*/React.createElement(Root, null)));
