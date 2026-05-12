// Hit Fest Bucovina — Components
// Reusable UI primitives. All Romanian copy. No external assets.

const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

// ─────────────── Icons (24px, stroke-based, warm) ───────────────
const Icon = ({
  name,
  size = 22,
  fill = false,
  stroke = "currentColor",
  strokeWidth = 2
}) => {
  const paths = {
    home: /*#__PURE__*/React.createElement("path", {
      d: "M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"
    }),
    lineup: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 6h16M4 12h10M4 18h16"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "12",
      r: "2"
    })),
    map: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 4v14M15 6v14"
    })),
    photo: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "6",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "13",
      r: "3.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 6l1.5-2h5L16 6"
    })),
    info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 8.5v0.1M12 11v6"
    })),
    star: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l2.6 5.5 6 .9-4.4 4.2 1 6-5.2-2.8-5.2 2.8 1-6L3.4 9.4l6-.9z"
    }),
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"
    }),
    chevron: /*#__PURE__*/React.createElement("path", {
      d: "M9 6l6 6-6 6"
    }),
    chevronLeft: /*#__PURE__*/React.createElement("path", {
      d: "M15 6l-6 6 6 6"
    }),
    chevronDown: /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    }),
    plus: /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    }),
    close: /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12M18 6L6 18"
    }),
    sparkle: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l1.5 5L18 9.5 13.5 11 12 16l-1.5-5L6 9.5 10.5 8z"
    }),
    upload: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 16V4M7 9l5-5 5 5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"
    })),
    camera: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "7",
      width: "18",
      height: "13",
      rx: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "13",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 7l1.5-2h5L16 7"
    })),
    share: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "12",
      r: "2.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "6",
      r: "2.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "18",
      r: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 11l8-4M8 13l8 4"
    })),
    download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 4v12M7 11l5 5 5-5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 18v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
    })),
    pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 2a6 6 0 0 0-6 6c0 5 6 13 6 13s6-8 6-13a6 6 0 0 0-6-6z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "2"
    })),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M5 12l4 4L19 6"
    }),
    warn: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 4l9 16H3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 11v4M12 18v.1"
    })),
    phone: /*#__PURE__*/React.createElement("path", {
      d: "M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
    }),
    music: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 18V5l11-2v13"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "16",
      r: "3"
    })),
    filter: /*#__PURE__*/React.createElement("path", {
      d: "M4 5h16l-6 8v6l-4-2v-4z"
    }),
    refresh: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12a9 9 0 0 1 15-6.7L21 8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 4v4h-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 12a9 9 0 0 1-15 6.7L3 16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 20v-4h4"
    })),
    ticket: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 6v2M14 11v2M14 16v2"
    })),
    lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "11",
      width: "14",
      height: "9",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 11V8a4 4 0 0 1 8 0v3"
    })),
    mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 7l9 7 9-7"
    })),
    qr: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 14h3v3M21 14v3M14 17v4h3M17 21h4"
    })),
    gallery: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "11",
      r: "1.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 17l-5-5-7 7"
    })),
    scan: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12h18"
    })),
    trash: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 11v6M14 11v6"
    })),
    copy: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "9",
      width: "11",
      height: "11",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 15V6a2 2 0 0 1 2-2h9"
    })),
    arrowRight: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    })
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill ? stroke : "none",
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  }, paths[name]);
};

// ─────────────── Decorative bits ───────────────
const Dots = ({
  size = 10
}) => /*#__PURE__*/React.createElement("span", {
  className: "hf-dots",
  style: {
    '--d': size + 'px'
  }
}, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null));
const Sparkle = ({
  x,
  y,
  color = "var(--hf-galben)",
  size = 14,
  rot = 0
}) => /*#__PURE__*/React.createElement("svg", {
  style: {
    position: 'absolute',
    left: x,
    top: y,
    transform: `rotate(${rot}deg)`
  },
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: color
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l1.5 8.5L22 12l-8.5 1.5L12 22l-1.5-8.5L2 12l8.5-1.5z"
}));

// Generation glyphs as SVG
const GenGlyph = ({
  gen,
  size = 36
}) => {
  if (gen === 'casete') return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size * 0.7,
    viewBox: "0 0 60 42",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "56",
    height: "34",
    rx: "4",
    fill: "var(--hf-galben)",
    stroke: "var(--hf-bleumarin)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "16",
    width: "40",
    height: "14",
    rx: "2",
    fill: "var(--hf-bleumarin)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "23",
    r: "3.5",
    fill: "var(--hf-galben)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "23",
    r: "3.5",
    fill: "var(--hf-galben)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "22",
    y: "22",
    width: "16",
    height: "2",
    fill: "var(--hf-galben)"
  }));
  if (gen === 'cd') return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 60 60"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "cdg",
    cx: "50%",
    cy: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--hf-crem)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "40%",
    stopColor: "var(--hf-turcoaz)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "80%",
    stopColor: "var(--hf-coral)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--hf-galben)"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "30",
    r: "28",
    fill: "url(#cdg)",
    stroke: "var(--hf-bleumarin)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "30",
    r: "9",
    fill: "var(--hf-crem)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "30",
    r: "3",
    fill: "var(--hf-bleumarin)"
  }));
  // mp3
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 60 60"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "10",
    width: "48",
    height: "40",
    rx: "6",
    fill: "var(--hf-portocaliu)",
    stroke: "var(--hf-bleumarin)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "18",
    width: "32",
    height: "14",
    rx: "2",
    fill: "var(--hf-lime)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "30",
    y: "29",
    fontFamily: "var(--ff-display)",
    fontSize: "11",
    fill: "var(--hf-bleumarin)",
    textAnchor: "middle"
  }, "MP3"), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "42",
    r: "3",
    fill: "var(--hf-crem)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "42",
    r: "3",
    fill: "var(--hf-crem)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "42",
    r: "3",
    fill: "var(--hf-crem)"
  }));
};

// Hit Fest wordmark — script "Hit" + condensed "FEST"
const HitFestMark = ({
  size = 1,
  color = "var(--color-text-primary)",
  accent = "var(--hf-coral)"
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'inline-flex',
    alignItems: 'baseline',
    gap: 4 * size,
    fontSize: 32 * size,
    lineHeight: 1,
    color
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "hf-script",
  style: {
    fontSize: '1em',
    color: accent,
    transform: 'rotate(-4deg)',
    display: 'inline-block'
  }
}, "Hit"), /*#__PURE__*/React.createElement("span", {
  className: "hf-display",
  style: {
    fontSize: '0.78em',
    letterSpacing: '0.06em'
  }
}, "FEST"));

// ─────────────── Bottom Nav ───────────────
const BottomNav = ({
  active,
  onChange
}) => {
  const {
    t
  } = useT();
  const tabs = [{
    id: 'home',
    label: t('nav.home'),
    icon: 'home'
  }, {
    id: 'lineup',
    label: t('nav.lineup'),
    icon: 'lineup'
  }, {
    id: 'reduceri',
    label: t('nav.reduceri'),
    icon: 'ticket',
    highlight: true
  }, {
    id: 'photo',
    label: t('nav.photo'),
    icon: 'photo'
  }, {
    id: 'map',
    label: t('nav.map'),
    icon: 'map'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "hf-bnav"
  }, tabs.map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.id,
    className: "hf-bnav-item" + (active === tab.id ? ' is-active' : '') + (tab.highlight ? ' is-highlight' : ''),
    onClick: () => onChange(tab.id)
  }, tab.highlight ? /*#__PURE__*/React.createElement("span", {
    className: "hf-bnav-cta"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: tab.icon,
    size: 22,
    fill: active === tab.id,
    stroke: active === tab.id ? '#fff' : 'var(--hf-coral)'
  })) : /*#__PURE__*/React.createElement(Icon, {
    name: tab.icon,
    size: 22,
    fill: active === tab.id
  }), /*#__PURE__*/React.createElement("span", null, tab.label), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }))));
};

// ─────────────── Header ───────────────
const Header = ({
  theme,
  onThemeChange,
  transparent = false,
  title,
  onBack,
  onTicketsTap,
  onInfoTap,
  onSettingsTap
}) => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const themes = [{
    id: 'casete',
    label: 'Casete',
    desc: '<1990'
  }, {
    id: 'cd',
    label: 'CD',
    desc: '1990–2000'
  }, {
    id: 'mp3',
    label: 'MP3',
    desc: '>2000'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: transparent ? 'transparent' : 'var(--hf-paper)',
      borderBottom: transparent ? 'none' : '1px solid var(--color-border)',
      padding: '60px 16px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 64,
      transition: 'background var(--t-base) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    className: "hf-btn-icon",
    onClick: onBack,
    style: {
      width: 38,
      height: 38,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft",
    size: 20
  })), title ? /*#__PURE__*/React.createElement("span", {
    className: "hf-display",
    style: {
      fontSize: 20,
      letterSpacing: '0.05em'
    }
  }, title) : /*#__PURE__*/React.createElement(HitFestMark, {
    size: 0.7
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, (typeof onSettingsTap === 'function' || typeof onInfoTap === 'function') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenuOpen(o => !o),
    style: {
      width: 34,
      height: 34,
      borderRadius: 999,
      border: 'none',
      background: menuOpen ? 'var(--hf-bleumarin)' : 'var(--hf-crem-2)',
      color: menuOpen ? '#fff' : 'var(--hf-bleumarin)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      transition: 'all var(--t-fast) var(--ease)'
    },
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "7",
    x2: "20",
    y2: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "12",
    x2: "20",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "17",
    x2: "20",
    y2: "17"
  }))), menuOpen && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setMenuOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      right: 0,
      background: 'var(--hf-paper)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--sh-lg)',
      padding: 6,
      minWidth: 200,
      zIndex: 70,
      border: '1px solid var(--color-border)'
    }
  }, typeof onInfoTap === 'function' && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMenuOpen(false);
      onInfoTap();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '10px 10px',
      background: 'transparent',
      border: 'none',
      borderRadius: 'var(--r-md)',
      cursor: 'pointer',
      fontFamily: 'var(--ff-body)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      background: 'var(--gen-accent-soft)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 14,
    stroke: "var(--gen-accent)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 600,
      fontSize: 13
    }
  }, "Info & FAQ"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)'
    }
  }, "\xCEntreb\u0103ri frecvente, contact"))), typeof onSettingsTap === 'function' && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMenuOpen(false);
      onSettingsTap();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '10px 10px',
      background: 'transparent',
      border: 'none',
      borderRadius: 'var(--r-md)',
      cursor: 'pointer',
      fontFamily: 'var(--ff-body)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      background: 'var(--gen-accent-soft)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gen-accent)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 600,
      fontSize: 13
    }
  }, "Set\u0103ri"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)'
    }
  }, "Limb\u0103, notific\u0103ri, cont")))))), onTicketsTap && /*#__PURE__*/React.createElement("button", {
    onClick: onTicketsTap,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      background: 'var(--hf-coral)',
      color: '#fff',
      border: 'none',
      padding: '6px 11px',
      borderRadius: 999,
      fontFamily: 'var(--ff-display)',
      fontSize: 12,
      letterSpacing: '0.06em',
      cursor: 'pointer',
      boxShadow: 'var(--sh-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ticket",
    size: 14,
    stroke: "#fff"
  }), " BILETE"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--gen-accent-soft)',
      color: 'var(--color-text-primary)',
      border: 'none',
      padding: '6px 10px 6px 8px',
      borderRadius: 999,
      fontFamily: 'var(--ff-body)',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 999,
      display: 'grid',
      placeItems: 'center',
      background: 'var(--gen-accent)',
      color: '#fff',
      fontSize: 12
    }
  }, theme === 'casete' ? '📼' : theme === 'cd' ? '💿' : '🎧'), /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: 0.5
    }
  }, theme === 'casete' ? 'Casete' : theme === 'cd' ? 'CD' : 'MP3'), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 14
  })), open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      right: 0,
      background: 'var(--hf-paper)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--sh-lg)',
      padding: 6,
      minWidth: 180,
      zIndex: 70,
      border: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px 4px',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--color-text-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 1
    }
  }, "Genera\u021Bia ta"), themes.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => {
      onThemeChange(t.id);
      setOpen(false);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '10px 10px',
      background: theme === t.id ? 'var(--gen-accent-soft)' : 'transparent',
      border: 'none',
      borderRadius: 'var(--r-md)',
      cursor: 'pointer',
      fontFamily: 'var(--ff-body)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, t.id === 'casete' ? '📼' : t.id === 'cd' ? '💿' : '🎧'), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 600,
      fontSize: 13
    }
  }, "Genera\u021Bia ", t.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)'
    }
  }, "N\u0103scut ", t.desc)), theme === t.id && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: "var(--gen-accent)",
    strokeWidth: 3
  })))))));
};

// ─────────────── Day Selector ───────────────
const DaySelector = ({
  active,
  onChange
}) => {
  const days = [{
    id: 7,
    label: '7 AUG',
    sub: 'VINERI',
    bg: 'var(--hf-galben)'
  }, {
    id: 8,
    label: '8 AUG',
    sub: 'SÂMBĂTĂ',
    bg: 'var(--hf-turcoaz)'
  }, {
    id: 9,
    label: '9 AUG',
    sub: 'DUMINICĂ',
    bg: 'var(--hf-galben)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '12px 16px'
    }
  }, days.map(d => {
    const isActive = active === d.id;
    return /*#__PURE__*/React.createElement("button", {
      key: d.id,
      onClick: () => onChange(d.id),
      style: {
        flex: 1,
        padding: '14px 8px',
        background: isActive ? d.bg : 'var(--hf-paper)',
        color: isActive && d.id === 8 ? '#fff' : 'var(--color-text-primary)',
        border: '2px solid ' + (isActive ? d.bg : 'var(--color-border)'),
        borderRadius: 'var(--r-lg)',
        cursor: 'pointer',
        fontFamily: 'var(--ff-display)',
        transition: 'all var(--t-base) var(--ease)',
        boxShadow: isActive ? 'var(--sh-md)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        letterSpacing: '0.05em'
      }
    }, d.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        opacity: 0.75,
        fontFamily: 'var(--ff-body)',
        fontWeight: 600,
        letterSpacing: 1,
        marginTop: 2
      }
    }, d.sub));
  }));
};

// ─────────────── Artist photo placeholder ───────────────
const ArtistPhoto = ({
  name,
  size = 64,
  shape = 'circle',
  tone
}) => {
  // deterministic color from name
  const palette = ['var(--hf-turcoaz)', 'var(--hf-coral)', 'var(--hf-galben)', 'var(--hf-portocaliu)', 'var(--hf-bleumarin)', '#4A90E2'];
  const idx = (name || '').charCodeAt(0) % palette.length;
  const bg = tone || palette[idx];
  const initials = (name || '').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: shape === 'circle' ? '50%' : 'var(--r-lg)',
      background: bg,
      backgroundImage: `repeating-linear-gradient(135deg,
        rgba(255,255,255,0.08) 0 4px, transparent 4px 12px)`,
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontFamily: 'var(--ff-display)',
      fontSize: size * 0.32,
      letterSpacing: '0.05em',
      flexShrink: 0,
      border: shape === 'circle' ? '3px solid var(--hf-paper)' : 'none',
      boxShadow: 'var(--sh-sm)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, initials, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 4,
      right: 6,
      fontSize: 9,
      fontFamily: 'var(--ff-body)',
      fontWeight: 600,
      opacity: 0.6
    }
  }, "foto"));
};

// ─────────────── Artist Card (compact, in schedule) ───────────────
const ArtistCardCompact = ({
  artist,
  isFav,
  onFav,
  onTap,
  isPlaying
}) => /*#__PURE__*/React.createElement("div", {
  onClick: onTap,
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: 12,
    background: 'var(--hf-paper)',
    borderRadius: 'var(--r-lg)',
    border: isPlaying ? '2px solid var(--hf-coral)' : '1px solid var(--color-border)',
    cursor: 'pointer',
    position: 'relative',
    boxShadow: isPlaying ? '0 0 0 4px rgba(255,107,122,0.15), var(--sh-md)' : 'var(--sh-sm)',
    transition: 'all var(--t-fast) var(--ease)'
  }
}, /*#__PURE__*/React.createElement(ArtistPhoto, {
  name: artist.name,
  size: 56
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 6
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "hf-display",
  style: {
    fontSize: 18,
    letterSpacing: '0.04em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}, artist.name), artist.headliner && /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 10,
    padding: '2px 6px',
    background: 'var(--hf-coral)',
    color: '#fff',
    borderRadius: 999,
    fontWeight: 700,
    letterSpacing: 0.5
  }
}, "HEADLINER")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: 'var(--color-text-secondary)',
    marginTop: 2,
    display: 'flex',
    alignItems: 'center',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--ff-display)',
    fontSize: 16,
    letterSpacing: '0.04em',
    color: 'var(--color-text-primary)'
  }
}, artist.time), artist.role && /*#__PURE__*/React.createElement("span", null, "\xB7 ", artist.role), isPlaying && /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--hf-coral)',
    fontWeight: 700
  }
}, "\xB7 LIVE"))), /*#__PURE__*/React.createElement("button", {
  onClick: e => {
    e.stopPropagation();
    onFav(artist.id);
  },
  style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    border: 'none',
    background: isFav ? 'var(--hf-galben)' : 'transparent',
    color: isFav ? 'var(--hf-bleumarin)' : 'var(--color-text-secondary)',
    cursor: 'pointer',
    flexShrink: 0,
    display: 'grid',
    placeItems: 'center',
    transition: 'all var(--t-fast) var(--ease)',
    transform: isFav ? 'scale(1.05)' : 'scale(1)'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "star",
  size: 18,
  fill: isFav
})));

// ─────────────── Generic InfoCard / Accordion ───────────────
const Accordion = ({
  items
}) => {
  const [open, setOpen] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "hf-card",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? null : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 18px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--ff-body)',
        fontSize: 15,
        fontWeight: 600,
        textAlign: 'left',
        color: 'var(--color-text-primary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        paddingRight: 12
      }
    }, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 999,
        background: isOpen ? 'var(--gen-accent)' : 'var(--hf-crem-2)',
        color: isOpen ? '#fff' : 'var(--color-text-primary)',
        display: 'grid',
        placeItems: 'center',
        transition: 'all var(--t-base) var(--ease)',
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14,
      strokeWidth: 2.5
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height var(--t-slow) var(--ease)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 18px 18px',
        fontSize: 14,
        color: 'var(--color-text-secondary)',
        lineHeight: 1.55
      }
    }, it.a)));
  }));
};

// ─────────────── Toast ───────────────
const Toast = ({
  msg,
  kind = 'success'
}) => msg ? /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    left: '50%',
    bottom: 90,
    transform: 'translateX(-50%)',
    background: kind === 'success' ? 'var(--hf-bleumarin)' : 'var(--hf-coral)',
    color: '#fff',
    padding: '10px 18px',
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    zIndex: 100,
    boxShadow: 'var(--sh-lg)',
    animation: 'shimmer 600ms var(--ease)',
    whiteSpace: 'nowrap'
  }
}, msg) : null;
Object.assign(window, {
  Icon,
  Dots,
  Sparkle,
  GenGlyph,
  HitFestMark,
  BottomNav,
  Header,
  DaySelector,
  ArtistPhoto,
  ArtistCardCompact,
  Accordion,
  Toast
});
