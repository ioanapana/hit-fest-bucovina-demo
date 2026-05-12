// Hit Fest Bucovina — Screens part 2: Photo, Map, Info, MySchedule
const {
  useState: u2S,
  useRef: u2R
} = React;

// ─────────────── Retro Photo Frames ───────────────
// Photo subject placeholder — faux portrait silhouette with tinted backdrop
const PhotoSubject = ({
  tint = 0
}) => {
  const bgs = [['#FF8FA5', '#FFD27A'], ['#7ABFE0', '#C7E0A0'], ['#FFC36B', '#FF8C7A'], ['#B8A8E0', '#FFB0CC']];
  const [a, b] = bgs[tint % 4];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: `linear-gradient(135deg, ${a}, ${b})`,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "ps-light",
    cx: "60%",
    cy: "30%",
    r: "60%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#fff",
    stopOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#fff",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100",
    height: "100",
    fill: "url(#ps-light)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M -5,100 Q 10,68 35,68 Q 50,68 55,80 Q 60,68 78,68 Q 105,68 110,100 Z",
    fill: "rgba(40,30,55,0.6)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "32",
    cy: "50",
    rx: "13",
    ry: "16",
    fill: "rgba(70,50,75,0.7)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "70",
    cy: "48",
    rx: "12",
    ry: "15",
    fill: "rgba(60,42,70,0.72)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 19,46 Q 24,32 32,33 Q 42,34 45,48 Q 40,42 32,42 Q 24,43 19,46 Z",
    fill: "rgba(20,10,30,0.85)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 60,42 Q 67,30 75,32 Q 81,38 82,46 Q 76,40 70,41 Q 64,42 60,42 Z",
    fill: "rgba(25,15,30,0.85)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 28,57 Q 32,60 36,57",
    stroke: "rgba(80,40,50,0.7)",
    strokeWidth: "0.8",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 66,55 Q 70,58 74,55",
    stroke: "rgba(80,40,50,0.7)",
    strokeWidth: "0.8",
    fill: "none",
    strokeLinecap: "round"
  })));
};

// ─── Frame styles ─── each integrates the festival mark differently
const FRAMES = [{
  id: 'polaroid',
  label: 'Polaroid',
  desc: 'Instant clasic'
}, {
  id: 'vhs',
  label: 'VHS',
  desc: 'Captură \'94'
}, {
  id: 'ticket',
  label: 'Ticket',
  desc: 'Stub de concert'
}, {
  id: 'mag',
  label: 'Magazine',
  desc: 'Cover \'90s'
}, {
  id: 'cassette',
  label: 'Cassette',
  desc: 'J-Card insert'
}, {
  id: 'neon',
  label: 'Neon',
  desc: 'Poster disco'
}];
const Polaroid = ({
  tint
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: '#fafaf6',
    padding: '14px 14px 70px',
    boxShadow: '0 12px 30px rgba(10,37,64,0.22), 0 2px 6px rgba(10,37,64,0.1)',
    borderRadius: 3,
    position: 'relative',
    maxWidth: 300,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: '1',
    background: '#000',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.15)'
  }
}, /*#__PURE__*/React.createElement(PhotoSubject, {
  tint: tint
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    bottom: 18,
    left: 14,
    right: 14,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--ff-script)',
    fontSize: 22,
    color: '#1a1a1a',
    lineHeight: 1
  }
}, "Hit Fest"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--ff-display)',
    fontSize: 10,
    letterSpacing: '0.18em',
    color: '#666',
    marginTop: 4
  }
}, "BUCOVINA \xB7 AUG 2026")), /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--hf-coral)',
    color: '#fff',
    padding: '3px 6px',
    fontFamily: 'ui-monospace, monospace',
    fontSize: 9,
    fontWeight: 700,
    transform: 'rotate(-3deg)'
  }
}, "08\xB726")));
const VHS = ({
  tint
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: '#0E0E12',
    padding: 8,
    position: 'relative',
    boxShadow: '0 14px 28px rgba(0,0,0,0.4)',
    maxWidth: 320,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: '4/3',
    position: 'relative',
    overflow: 'hidden',
    filter: 'saturate(1.4) contrast(1.05) hue-rotate(-8deg)'
  }
}, /*#__PURE__*/React.createElement(PhotoSubject, {
  tint: tint
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.28) 0 1px, transparent 1px 3px)'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background: 'linear-gradient(180deg, transparent 45%, rgba(255,77,163,0.18) 50%, transparent 55%)'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    top: 8,
    left: 10,
    color: '#fff',
    fontFamily: 'ui-monospace, monospace',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1,
    textShadow: '1px 1px 0 rgba(0,0,0,0.8)',
    display: 'flex',
    alignItems: 'center',
    gap: 6
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: '#E94B5A',
    boxShadow: '0 0 6px #E94B5A'
  }
}), "REC \xB7 SP"), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    top: 8,
    right: 10,
    color: '#fff',
    fontFamily: 'ui-monospace, monospace',
    fontSize: 10,
    fontWeight: 700,
    textShadow: '1px 1px 0 rgba(0,0,0,0.8)'
  }
}, "08\xB708\xB726  21:47"), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'var(--hf-galben)',
    fontFamily: 'var(--ff-display)',
    textShadow: '1px 1px 0 rgba(0,0,0,0.8)'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 14,
    fontWeight: 800,
    letterSpacing: '0.18em'
  }
}, "\u25B6 HIT FEST '26"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 10,
    fontFamily: 'ui-monospace, monospace'
  }
}, "CH 01"))));
const Ticket = ({
  tint
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    maxWidth: 340,
    margin: '0 auto',
    boxShadow: '0 14px 28px rgba(10,37,64,0.2)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    background: 'var(--hf-crem)',
    padding: 12,
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--ff-display)',
    fontWeight: 800,
    color: 'var(--hf-bleumarin)',
    lineHeight: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 20,
    letterSpacing: '0.04em'
  }
}, "HIT FEST"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 10,
    letterSpacing: '0.22em',
    color: 'var(--hf-coral)',
    marginTop: 3
  }
}, "BUCOVINA \xB7 2026")), /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: 'right',
    fontFamily: 'ui-monospace, monospace',
    fontSize: 9,
    color: 'var(--hf-bleumarin)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 700
  }
}, "N\xB0 0826\xB747"), /*#__PURE__*/React.createElement("div", {
  style: {
    opacity: 0.7
  }
}, "SEAT GA"))), /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: '5/3',
    overflow: 'hidden',
    border: '1px solid rgba(10,37,64,0.15)'
  }
}, /*#__PURE__*/React.createElement(PhotoSubject, {
  tint: tint
})), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 8,
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'var(--ff-display)',
    letterSpacing: '0.1em',
    fontSize: 10,
    color: 'var(--hf-bleumarin)'
  }
}, /*#__PURE__*/React.createElement("span", null, "SUCEAVA \xB7 ARINI\u0218"), /*#__PURE__*/React.createElement("span", null, "7\u20139 \xB7 AUG \xB7 2026"))), /*#__PURE__*/React.createElement("div", {
  style: {
    width: 70,
    background: 'var(--hf-coral)',
    color: '#fff',
    padding: '12px 8px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderLeft: '2px dashed rgba(255,255,255,0.5)',
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--ff-display)',
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: '0.2em',
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    margin: '0 auto'
  }
}, "ADMIT ONE"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'ui-monospace, monospace',
    fontSize: 8,
    opacity: 0.85,
    marginTop: 8
  }
}, "#0826")));
const Magazine = ({
  tint
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: '#fff',
    maxWidth: 300,
    margin: '0 auto',
    boxShadow: '0 14px 30px rgba(10,37,64,0.22)',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--hf-coral)',
    color: '#fff',
    padding: '10px 14px 8px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--ff-display)',
    fontWeight: 900,
    fontSize: 32,
    letterSpacing: '-0.02em',
    lineHeight: 0.9
  }
}, "HIT", /*#__PURE__*/React.createElement("br", null), "FEST"), /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: 'right',
    fontFamily: 'ui-monospace, monospace',
    fontSize: 9,
    opacity: 0.95,
    lineHeight: 1.3
  }
}, "Vol 26", /*#__PURE__*/React.createElement("br", null), "Issue 08", /*#__PURE__*/React.createElement("br", null), "50 LEI")), /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: '4/5',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement(PhotoSubject, {
  tint: tint
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    left: 0,
    bottom: 14,
    background: 'var(--hf-galben)',
    color: 'var(--hf-bleumarin)',
    padding: '4px 12px 4px 14px',
    fontFamily: 'var(--ff-display)',
    fontWeight: 800,
    fontSize: 14,
    letterSpacing: '0.04em',
    transform: 'rotate(-2deg)'
  }
}, "YOU WERE THERE"), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    right: 8,
    top: 8,
    background: 'rgba(10,37,64,0.85)',
    color: '#fff',
    padding: '4px 8px',
    fontFamily: 'var(--ff-display)',
    fontSize: 10,
    letterSpacing: '0.1em'
  }
}, "+ ALDEA, PARTIZAN, AURA")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 12px',
    borderTop: '2px solid var(--hf-bleumarin)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 1.5
  }
}, [2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 3, 1, 2, 3, 1].map((w, i) => /*#__PURE__*/React.createElement("span", {
  key: i,
  style: {
    width: w,
    height: 22,
    background: 'var(--hf-bleumarin)'
  }
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'ui-monospace, monospace',
    fontSize: 9,
    color: 'var(--hf-bleumarin)'
  }
}, "BUCOVINA \xB7 7\u20139 AUG")));
const Cassette = ({
  tint
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    maxWidth: 340,
    margin: '0 auto',
    background: '#fff',
    boxShadow: '0 14px 28px rgba(10,37,64,0.2)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 28,
    background: 'var(--hf-bleumarin)',
    color: 'var(--hf-galben)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--ff-display)',
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: '0.3em',
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)'
  }
}, "HIT FEST \xB7 SIDE A \xB7 90 MIN")), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    padding: 10,
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--hf-galben)',
    color: 'var(--hf-bleumarin)',
    padding: '5px 8px',
    marginBottom: 8,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'var(--ff-display)',
    fontWeight: 800,
    letterSpacing: '0.08em',
    fontSize: 11
  }
}, /*#__PURE__*/React.createElement("span", null, "\u2605 HIT FEST '26 MIXTAPE \u2605"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'ui-monospace, monospace',
    fontSize: 9
  }
}, "C-90")), /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: '4/3',
    overflow: 'hidden',
    border: '2px solid var(--hf-bleumarin)'
  }
}, /*#__PURE__*/React.createElement(PhotoSubject, {
  tint: tint
})), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 8,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2px 12px',
    fontFamily: 'ui-monospace, monospace',
    fontSize: 9,
    color: 'var(--hf-bleumarin)'
  }
}, ['01 ALDEA', '02 PARTIZAN', '03 AURA', '04 KOSHKA', '05 — YOU —', '06 NEȘTIUT'].map(t => /*#__PURE__*/React.createElement("div", {
  key: t,
  style: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("span", null, t), /*#__PURE__*/React.createElement("span", {
  style: {
    opacity: 0.5
  }
}, "3:24"))))));
const Neon = ({
  tint
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: '#0B0420',
    padding: 14,
    maxWidth: 300,
    margin: '0 auto',
    boxShadow: '0 0 40px rgba(255,77,163,0.4), 0 14px 30px rgba(0,0,0,0.4)',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none",
  style: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    opacity: 0.55
  }
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
  id: "ng",
  cx: "50%",
  cy: "40%",
  r: "60%"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#FF1F8F",
  stopOpacity: "0.9"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#0B0420",
  stopOpacity: "0"
}))), /*#__PURE__*/React.createElement("rect", {
  width: "100",
  height: "100",
  fill: "url(#ng)"
}), Array.from({
  length: 18
}).map((_, i) => /*#__PURE__*/React.createElement("line", {
  key: i,
  x1: "50",
  y1: "40",
  x2: 50 + Math.cos(i * 20 * Math.PI / 180) * 80,
  y2: 40 + Math.sin(i * 20 * Math.PI / 180) * 80,
  stroke: "#FFE53B",
  strokeWidth: "0.4",
  opacity: "0.6"
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    textAlign: 'center',
    fontFamily: 'var(--ff-display)',
    fontWeight: 900,
    letterSpacing: '0.04em',
    color: '#FFE53B',
    textShadow: '0 0 8px #FF1F8F, 0 0 16px #FF1F8F',
    fontSize: 26,
    lineHeight: 1,
    marginBottom: 8
  }
}, "HIT FEST"), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    aspectRatio: '4/5',
    border: '3px solid #FF1F8F',
    overflow: 'hidden',
    boxShadow: '0 0 12px #FF1F8F, inset 0 0 10px rgba(0,0,0,0.4)'
  }
}, /*#__PURE__*/React.createElement(PhotoSubject, {
  tint: tint
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    textAlign: 'center',
    marginTop: 10,
    color: '#00D4FF',
    fontFamily: 'var(--ff-display)',
    letterSpacing: '0.2em',
    fontSize: 11,
    fontWeight: 800,
    textShadow: '0 0 6px #00D4FF'
  }
}, "\u2605 BUCOVINA \xB7 7\u20139 AUG '26 \u2605"));
const FRAME_COMPONENTS = {
  polaroid: Polaroid,
  vhs: VHS,
  ticket: Ticket,
  mag: Magazine,
  cassette: Cassette,
  neon: Neon
};
const SHARE_TARGETS = [{
  id: 'ig',
  label: 'Instagram',
  color: '#E1306C',
  icon: 'M 7 2 H 17 A 5 5 0 0 1 22 7 V 17 A 5 5 0 0 1 17 22 H 7 A 5 5 0 0 1 2 17 V 7 A 5 5 0 0 1 7 2 Z M 12 8 A 4 4 0 1 0 12 16 A 4 4 0 1 0 12 8 Z M 18 5.5 A 0.5 0.5 0 1 0 18 6.5'
}, {
  id: 'wa',
  label: 'WhatsApp',
  color: '#25D366',
  icon: 'M 12 3 A 9 9 0 0 0 4 16 L 3 21 L 8 20 A 9 9 0 1 0 12 3 Z'
}, {
  id: 'tt',
  label: 'TikTok',
  color: '#000',
  icon: 'M 14 4 V 14.5 A 3 3 0 1 1 11 11.5 V 8 A 6 6 0 0 0 17 14 V 11'
}, {
  id: 'dl',
  label: 'Salvează',
  color: 'var(--hf-bleumarin)',
  icon: 'M 12 4 V 16 M 7 12 L 12 17 L 17 12 M 4 20 H 20'
}];
const FrameThumb = ({
  id
}) => {
  const styles = {
    polaroid: {
      bg: '#fafaf6',
      accent: '#1a1a1a'
    },
    vhs: {
      bg: '#0E0E12',
      accent: '#FFE53B'
    },
    ticket: {
      bg: 'var(--hf-crem)',
      accent: 'var(--hf-coral)'
    },
    mag: {
      bg: '#fff',
      accent: 'var(--hf-coral)'
    },
    cassette: {
      bg: '#fff',
      accent: 'var(--hf-galben)'
    },
    neon: {
      bg: '#0B0420',
      accent: '#FF1F8F'
    }
  }[id] || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: styles.bg,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, id === 'mag' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: styles.accent,
      color: '#fff',
      fontFamily: 'var(--ff-display)',
      fontWeight: 900,
      fontSize: 8,
      padding: '2px 4px',
      lineHeight: 1
    }
  }, "HIT FEST"), id === 'vhs' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 2,
      left: 3,
      color: '#fff',
      fontSize: 6,
      fontFamily: 'ui-monospace, monospace'
    }
  }, "\u25CF REC"), id === 'ticket' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: 14,
      background: styles.accent,
      color: '#fff',
      fontSize: 6,
      fontFamily: 'var(--ff-display)',
      fontWeight: 800,
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      letterSpacing: '0.2em'
    }
  }, "HF '26"), id === 'cassette' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 8,
      background: 'var(--hf-bleumarin)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      margin: id === 'ticket' ? '3px 18px 3px 3px' : id === 'cassette' ? '3px 3px 3px 11px' : 3,
      background: 'linear-gradient(135deg,#FF8FA5,#FFD27A)',
      borderRadius: 1,
      border: id === 'neon' ? `1.5px solid ${styles.accent}` : 'none'
    }
  }), id === 'polaroid' && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--ff-script)',
      fontSize: 8,
      color: styles.accent
    }
  }, "Hit Fest"), id === 'neon' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 1,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: styles.accent,
      fontSize: 6,
      fontFamily: 'var(--ff-display)',
      fontWeight: 800,
      textShadow: '0 0 3px currentColor'
    }
  }, "HIT FEST"));
};
const PhotoScreen = () => {
  const [frame, setFrame] = u2S('polaroid');
  const [tint, setTint] = u2S(0);
  const [hasPhoto, setHasPhoto] = u2S(false);
  const Frame = FRAME_COMPONENTS[frame];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 16px 100px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 30
    }
  }, "CADRE RETRO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)',
      marginTop: 4
    }
  }, "Pune-\u021Bi poza \xEEntr-un cadru Hit Fest \u0219i share-uie\u0219te amintirea.")), !hasPhoto ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement(Frame, {
    tint: 0
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-primary",
    style: {
      fontSize: 15,
      padding: 14
    },
    onClick: () => setHasPhoto(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "camera",
    size: 16,
    stroke: "#fff"
  }), " F\u0102 POZA ACUM"), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-secondary",
    onClick: () => setHasPhoto(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    size: 16
  }), " \xCENCARC\u0102 DIN GALERIE")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: 'var(--hf-crem)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--r-md)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      fontSize: 12,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 14,
    stroke: "var(--hf-bleumarin)"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--hf-bleumarin)'
    }
  }, "Func\u021Bioneaz\u0103 cel mai bine pe telefon."), ' ', "Pe desktop nu avem camer\u0103 \u2014 \xEEncarc\u0103 o poz\u0103 din galerie sau deschide aplica\u021Bia pe telefon.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)',
      textAlign: 'center',
      padding: '4px 24px'
    }
  }, "6 cadre cu logo-ul festivalului integrat \u2014 preview-ul de mai sus se schimb\u0103 cu poza ta.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement(Frame, {
    tint: tint
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--color-text-secondary)'
    }
  }, "CADRU"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)'
    }
  }, FRAMES.find(f => f.id === frame)?.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      margin: '0 -16px',
      padding: '0 16px 6px'
    },
    className: "hf-scroll"
  }, FRAMES.map(f => {
    const active = frame === f.id;
    return /*#__PURE__*/React.createElement("button", {
      key: f.id,
      onClick: () => setFrame(f.id),
      style: {
        flexShrink: 0,
        width: 84,
        padding: 6,
        background: active ? 'var(--gen-accent)' : 'var(--hf-paper)',
        color: active ? '#fff' : 'var(--color-text-primary)',
        border: '2px solid ' + (active ? 'var(--gen-accent)' : 'var(--color-border)'),
        borderRadius: 'var(--r-md)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 60,
        height: 44,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2
      }
    }, /*#__PURE__*/React.createElement(FrameThumb, {
      id: f.id
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--ff-display)',
        fontSize: 11,
        letterSpacing: '0.06em',
        fontWeight: 700
      }
    }, f.label.toUpperCase()));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--color-text-secondary)',
      marginBottom: 8
    }
  }, "VARIANT\u0102"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setTint(i),
    style: {
      flex: 1,
      height: 36,
      padding: 0,
      cursor: 'pointer',
      border: '2px solid ' + (tint === i ? 'var(--gen-accent)' : 'var(--color-border)'),
      borderRadius: 'var(--r-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: ['linear-gradient(135deg,#FF8FA5,#FFD27A)', 'linear-gradient(135deg,#7ABFE0,#C7E0A0)', 'linear-gradient(135deg,#FFC36B,#FF8C7A)', 'linear-gradient(135deg,#B8A8E0,#FFB0CC)'][i]
    }
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--color-text-secondary)',
      marginBottom: 10
    }
  }, "SHARE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 8
    }
  }, SHARE_TARGETS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      padding: '10px 4px',
      background: 'var(--hf-paper)',
      border: '1.5px solid var(--color-border)',
      borderRadius: 'var(--r-md)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: t.color,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: t.icon
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, t.label))))), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-secondary",
    onClick: () => setHasPhoto(false)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh",
    size: 14
  }), " REF\u0102 POZA")));
};

// ─────────────── Map ───────────────
// Stylized aerial of Parcul Ariniș: viewBox 0 0 400 500
// — organic park outline, Moldova river bend along the south
// — wooded alder clusters (the park name "Ariniș" = alder grove)
// — dashed walking paths + the central N-S axis
// — clickable zones rendered as real SVG shapes

const ZoneShape = ({
  z,
  active,
  onClick
}) => {
  const s = z.shape;
  const stroke = active ? 'var(--hf-bleumarin)' : 'rgba(255,255,255,0.85)';
  const sw = active ? 3 : 1.6;
  const common = {
    onClick,
    style: {
      cursor: 'pointer',
      transition: 'all .18s var(--ease)'
    },
    filter: 'url(#hf-zone-shadow)'
  };
  if (s.type === 'rect') {
    return /*#__PURE__*/React.createElement("g", common, /*#__PURE__*/React.createElement("rect", {
      x: s.x,
      y: s.y,
      width: s.w,
      height: s.h,
      rx: s.r,
      fill: z.color,
      stroke: stroke,
      strokeWidth: sw
    }));
  }
  if (s.type === 'circle') {
    return /*#__PURE__*/React.createElement("g", common, /*#__PURE__*/React.createElement("circle", {
      cx: s.cx,
      cy: s.cy,
      r: s.r,
      fill: z.color,
      stroke: stroke,
      strokeWidth: sw
    }));
  }
  if (s.type === 'chevron') {
    const dirs = {
      n: '↑',
      s: '↓',
      e: '→',
      w: '←'
    };
    return /*#__PURE__*/React.createElement("g", common, /*#__PURE__*/React.createElement("circle", {
      cx: s.x,
      cy: s.y,
      r: 15,
      fill: z.color,
      stroke: "var(--hf-galben)",
      strokeWidth: sw + 0.5
    }), /*#__PURE__*/React.createElement("text", {
      x: s.x,
      y: s.y + 5,
      textAnchor: "middle",
      fontSize: 16,
      fontWeight: 800,
      fill: "var(--hf-galben)",
      style: {
        pointerEvents: 'none'
      }
    }, dirs[s.dir]));
  }
  return null;
};
const ZoneLabel = ({
  z
}) => {
  const s = z.shape;
  if (s.type === 'rect') {
    const cx = s.x + s.w / 2;
    const cy = s.y + s.h / 2;
    const lightOn = ['main', 'b00'].includes(z.id);
    const fontSize = z.id === 'main' ? 14 : 11;
    const lines = z.name.toUpperCase().split(' ');
    return /*#__PURE__*/React.createElement("g", {
      style: {
        pointerEvents: 'none'
      }
    }, lines.length === 1 ? /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy + fontSize / 3,
      textAnchor: "middle",
      fontFamily: "var(--ff-display)",
      fontSize: fontSize,
      letterSpacing: "0.04em",
      fontWeight: 800,
      fill: lightOn ? '#fff' : 'var(--hf-bleumarin)'
    }, lines[0]) : lines.map((ln, i) => /*#__PURE__*/React.createElement("text", {
      key: i,
      x: cx,
      y: cy + (i - (lines.length - 1) / 2) * (fontSize + 1) + fontSize / 3,
      textAnchor: "middle",
      fontFamily: "var(--ff-display)",
      fontSize: fontSize,
      letterSpacing: "0.04em",
      fontWeight: 800,
      fill: lightOn ? '#fff' : 'var(--hf-bleumarin)'
    }, ln)));
  }
  if (s.type === 'circle') {
    const glyphs = {
      info: 'i',
      med: '+',
      'wc-n': 'WC',
      'wc-s': 'WC'
    };
    const g = glyphs[z.id] || '•';
    return /*#__PURE__*/React.createElement("text", {
      x: s.cx,
      y: s.cy + 5,
      textAnchor: "middle",
      fontFamily: "var(--ff-display)",
      fontWeight: 800,
      fontSize: g.length > 1 ? 11 : 18,
      fill: "#fff",
      style: {
        pointerEvents: 'none'
      }
    }, g);
  }
  return null;
};
const MapScreen = () => {
  const [open, setOpen] = u2S(null);
  const [filter, setFilter] = u2S('all');
  const cats = [{
    id: 'all',
    label: 'Toate'
  }, {
    id: 'scenă',
    label: 'Scenă'
  }, {
    id: 'bar',
    label: 'Baruri'
  }, {
    id: 'food',
    label: 'Mâncare'
  }, {
    id: 'family',
    label: 'Family'
  }, {
    id: 'service',
    label: 'Servicii'
  }];
  const visible = ZONES.filter(z => filter === 'all' || z.cat === filter);
  const zone = ZONES.find(z => z.id === open);
  const trees = [[55, 60], [75, 75], [100, 50], [320, 55], [345, 80], [365, 130], [40, 250], [25, 320], [50, 370], [365, 250], [375, 320], [355, 380], [130, 250], [180, 232], [220, 232], [270, 250], [115, 415], [155, 430], [250, 425], [295, 415]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 100px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 30
    }
  }, "HARTA"), /*#__PURE__*/React.createElement("span", {
    className: "hf-chip hf-chip-galben",
    style: {
      fontSize: 11
    }
  }, "\uD83D\uDCE1 OFFLINE")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)'
    }
  }, "Parcul Arini\u0219 \xB7 Gura Humorului \xB7 18 hectare"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--hf-crem)',
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      border: '2px solid var(--color-border)',
      boxShadow: 'var(--sh-md)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 500",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "hf-lawn",
    cx: "50%",
    cy: "40%",
    r: "70%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#D8EAB8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "#B6D88A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#92BD6A"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "hf-river",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#9BCDEC"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#6FAFD5"
  })), /*#__PURE__*/React.createElement("pattern", {
    id: "hf-grass",
    width: "6",
    height: "6",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3,1 L3,5",
    stroke: "#8BB867",
    strokeWidth: "0.4",
    opacity: "0.35"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "hf-zone-shadow",
    x: "-20%",
    y: "-20%",
    width: "140%",
    height: "140%"
  }, /*#__PURE__*/React.createElement("feDropShadow", {
    dx: "0",
    dy: "2",
    stdDeviation: "2",
    floodColor: "#0A2540",
    floodOpacity: "0.18"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "400",
    height: "500",
    fill: "var(--hf-crem-2)"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: "0.55"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,30 L400,30",
    stroke: "#E8DFCB",
    strokeWidth: "14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,475 L400,475",
    stroke: "#E8DFCB",
    strokeWidth: "14"
  }), /*#__PURE__*/React.createElement("text", {
    x: "14",
    y: "22",
    fontFamily: "var(--ff-display)",
    fontSize: "8",
    fill: "#9C8E6E",
    letterSpacing: "0.15em"
  }, "STR. \u0218TEFAN CEL MARE"), /*#__PURE__*/React.createElement("text", {
    x: "14",
    y: "494",
    fontFamily: "var(--ff-display)",
    fontSize: "8",
    fill: "#9C8E6E",
    letterSpacing: "0.15em"
  }, "STR. VOIEVOD PETRU MU\u0218AT")), /*#__PURE__*/React.createElement("path", {
    d: "M -10,440 Q 60,420 120,448 Q 200,478 280,452 Q 350,432 410,460 L 410,500 L -10,500 Z",
    fill: "url(#hf-river)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M -10,440 Q 60,420 120,448 Q 200,478 280,452 Q 350,432 410,460",
    stroke: "#5F9BBE",
    strokeWidth: "1",
    fill: "none",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 40,455 Q 60,450 80,455",
    stroke: "#fff",
    strokeWidth: "0.8",
    fill: "none",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 180,468 Q 200,463 220,468",
    stroke: "#fff",
    strokeWidth: "0.8",
    fill: "none",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 320,455 Q 340,450 360,455",
    stroke: "#fff",
    strokeWidth: "0.8",
    fill: "none",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("text", {
    x: "350",
    y: "488",
    fontFamily: "var(--ff-display)",
    fontSize: "9",
    fill: "#5F9BBE",
    letterSpacing: "0.1em",
    fontStyle: "italic"
  }, "r. Moldova"), /*#__PURE__*/React.createElement("path", {
    d: "M 30,48 Q 80,32 150,38 Q 230,32 300,42 Q 360,52 378,108 Q 388,200 372,290 Q 380,370 340,422 Q 260,448 180,440 Q 90,448 36,408 Q 18,340 22,250 Q 18,140 30,48 Z",
    fill: "url(#hf-lawn)",
    stroke: "#7AA84F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 30,48 Q 80,32 150,38 Q 230,32 300,42 Q 360,52 378,108 Q 388,200 372,290 Q 380,370 340,422 Q 260,448 180,440 Q 90,448 36,408 Q 18,340 22,250 Q 18,140 30,48 Z",
    fill: "url(#hf-grass)"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: "0.85"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22,55 Q 50,40 90,52 Q 130,48 130,90 Q 100,110 60,100 Q 28,95 22,55 Z",
    fill: "#7BAE52"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 280,52 Q 320,42 360,58 Q 380,80 372,115 Q 340,128 305,118 Q 278,100 280,52 Z",
    fill: "#7BAE52"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 20,300 Q 30,265 65,260 Q 85,280 75,330 Q 55,360 30,355 Q 14,335 20,300 Z",
    fill: "#7BAE52"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 340,300 Q 380,275 380,330 Q 370,365 340,365 Q 318,335 340,300 Z",
    fill: "#7BAE52"
  })), trees.map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x + 1,
    cy: y + 2,
    r: "4",
    fill: "#3D6B2A",
    opacity: "0.25"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: "4.5",
    fill: "#4F8A3A"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x - 1.2,
    cy: y - 1.2,
    r: "1.5",
    fill: "#7CBA5A"
  }))), /*#__PURE__*/React.createElement("g", {
    stroke: "#F4ECD3",
    strokeWidth: "9",
    strokeLinecap: "round",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 200,30 L 200,148"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 200,148 L 200,275"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 200,275 L 200,440"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 24,240 Q 110,250 200,250 Q 290,250 376,240"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 200,360 L 158,385"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 200,360 L 242,385"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "#C9B98C",
    strokeWidth: "9.6",
    strokeLinecap: "round",
    fill: "none",
    opacity: "0.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 200,30 L 200,148",
    pathLength: "100",
    strokeDasharray: "0 9.6 1 9.6"
  })), /*#__PURE__*/React.createElement("ellipse", {
    cx: "170",
    cy: "320",
    rx: "14",
    ry: "8",
    fill: "url(#hf-river)",
    opacity: "0.7"
  }), visible.map(z => /*#__PURE__*/React.createElement(ZoneShape, {
    key: z.id,
    z: z,
    active: open === z.id,
    onClick: () => setOpen(z.id)
  })), visible.map(z => /*#__PURE__*/React.createElement(ZoneLabel, {
    key: z.id + '-l',
    z: z
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(355, 60)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "18",
    fill: "#fff",
    stroke: "var(--hf-bleumarin)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,-13 L4,0 L0,3 L-4,0 Z",
    fill: "var(--hf-coral)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,13 L4,0 L0,-3 L-4,0 Z",
    fill: "var(--hf-bleumarin)",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("text", {
    y: "-4",
    textAnchor: "middle",
    fontFamily: "var(--ff-display)",
    fontSize: "8",
    fontWeight: "800",
    fill: "var(--hf-bleumarin)"
  }, "N")), /*#__PURE__*/React.createElement("g", {
    transform: "translate(24, 460)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "60",
    height: "4",
    fill: "var(--hf-bleumarin)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    width: "30",
    height: "4",
    fill: "var(--hf-galben)"
  }), /*#__PURE__*/React.createElement("text", {
    y: "14",
    fontFamily: "var(--ff-display)",
    fontSize: "8",
    fill: "var(--hf-bleumarin)",
    letterSpacing: "0.1em"
  }, "100 m")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      fontSize: 11,
      color: 'var(--color-text-secondary)'
    }
  }, [['var(--hf-coral)', 'Scenă'], ['var(--hf-galben)', 'Bar 80s'], ['var(--hf-turcoaz)', 'Bar 90s'], ['var(--hf-portocaliu)', 'Bar 00s'], ['#B8D936', 'Kids'], ['#FFB6A8', 'Food']].map(([c, l]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: c,
      border: '1px solid rgba(0,0,0,0.1)'
    }
  }), l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      overflowX: 'auto',
      paddingBottom: 4
    },
    className: "hf-scroll"
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setFilter(c.id),
    className: "hf-chip" + (filter === c.id ? ' hf-chip-active' : ''),
    style: {
      flexShrink: 0,
      cursor: 'pointer'
    }
  }, c.label))), zone && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(10,37,64,0.4)',
      zIndex: 80
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 90,
      background: 'var(--hf-paper)',
      borderRadius: 'var(--r-2xl) var(--r-2xl) 0 0',
      padding: '16px 20px 32px',
      boxShadow: 'var(--sh-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      background: 'var(--color-border)',
      borderRadius: 999,
      margin: '0 auto 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: zone.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 22
    }
  }, zone.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: 600
    }
  }, zone.cat)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(null),
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      border: 'none',
      background: 'var(--hf-crem-2)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 14,
      color: 'var(--color-text-primary)',
      lineHeight: 1.5
    }
  }, zone.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: 10,
      background: 'var(--hf-crem)',
      borderRadius: 'var(--r-md)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 12,
      color: 'var(--color-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 14,
    stroke: "var(--hf-coral)"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--hf-bleumarin)'
    }
  }, "~120 m"), " \xB7 2 min de la intrarea principal\u0103")), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-primary",
    style: {
      width: '100%',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 16
  }), " NAVIGHEAZ\u0102 AICI"))));
};

// ─────────────── Info / FAQ ───────────────
const InfoScreen = () => {
  const [filter, setFilter] = u2S('all');
  const cats = [{
    id: 'all',
    label: 'Toate'
  }, {
    id: 'transport',
    label: 'Transport'
  }, {
    id: 'kids',
    label: 'Kids'
  }, {
    id: 'reguli',
    label: 'Reguli'
  }, {
    id: 'bilete',
    label: 'Bilete'
  }, {
    id: 'camping',
    label: 'Camping'
  }];
  const faq = [{
    cat: 'reguli',
    q: 'Pot intra cu mâncare sau băuturi?',
    a: 'Nu — conform regulamentului, mâncarea și băutura proprii nu sunt permise. În incinta festivalului ai 12 standuri culinare și 3 baruri (80s, 90s, 2000s) cu prețuri prietenoase.'
  }, {
    cat: 'reguli',
    q: 'Ce facem dacă plouă?',
    a: 'Festivalul are loc indiferent de vreme. Vino echipat — îți recomandăm pelerină subțire de ploaie (nu umbrelă, deoarece blochează vizibilitatea).'
  }, {
    cat: 'kids',
    q: 'Copiii sub 14 ani plătesc?',
    a: 'Acces gratuit pentru copii sub 14 ani însoțiți de un adult cu bilet valid. Avem și o Kids Zone dedicată — „O Vacanță în Miniatură" — cu activități supravegheate.'
  }, {
    cat: 'transport',
    q: 'Există parcare?',
    a: 'Da, parcarea Primăria Gura Humorului (gratuită) și parcările amenajate la 5 minute de mers de festival. Recomandăm car-pooling pentru weekend.'
  }, {
    cat: 'reguli',
    q: 'Pot face poze?',
    a: 'Da, dar fără camere foto cu obiectiv detașabil sau echipament profesional. Telefonul mobil este permis fără restricții. Pentru acreditări media: contact@hitfestbucovina.ro.'
  }, {
    cat: 'bilete',
    q: 'Ce bilete există?',
    a: 'Abonament 3 zile — 240 lei · Bilet o zi — 120 lei · Family pack (2 adulți + copil) — 380 lei. Toate biletele dau acces la toate scenele.'
  }, {
    cat: 'camping',
    q: 'Există camping?',
    a: 'Da, camping organizat în zona dedicată, cu duș, toalete și pază 24/7. 50 lei/noapte/cort. Rezervare separată în secțiunea Bilete.'
  }];
  const visible = filter === 'all' ? faq : faq.filter(f => f.cat === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 100px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 30
    }
  }, "INFORMA\u021AII UTILE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      overflowX: 'auto',
      paddingBottom: 4
    },
    className: "hf-scroll"
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setFilter(c.id),
    className: "hf-chip" + (filter === c.id ? ' hf-chip-active' : ''),
    style: {
      flexShrink: 0,
      cursor: 'pointer'
    }
  }, c.label))), /*#__PURE__*/React.createElement(Accordion, {
    items: visible
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: 18,
      background: 'var(--hf-bleumarin)',
      color: '#fff',
      borderRadius: 'var(--r-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 20,
      color: 'var(--hf-galben)'
    }
  }, "CONTACT & URGEN\u021AE"), [{
    icon: 'phone',
    l: 'WhatsApp suport',
    v: '+40 748 999 444',
    sub: 'răspuns ~15 min · L-D 9-22'
  }, {
    icon: 'info',
    l: 'Email',
    v: 'contact@hitfestbucovina.ro'
  }, {
    icon: 'warn',
    l: 'Urgențe',
    v: '112'
  }, {
    icon: 'pin',
    l: 'Prim ajutor',
    v: 'Lângă Punct Info'
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 0',
      borderTop: i ? '1px solid rgba(255,255,255,0.1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.12)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 16,
    stroke: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      letterSpacing: 1,
      fontWeight: 600,
      textTransform: 'uppercase'
    }
  }, c.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, c.v), c.sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.6,
      marginTop: 2
    }
  }, c.sub)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => e.preventDefault(),
    className: "hf-btn",
    style: {
      flex: 1,
      background: '#25D366',
      color: '#fff',
      border: 'none',
      fontSize: 13,
      padding: '12px 8px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "#fff",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 22c-1.74 0-3.4-.45-4.86-1.31L2 22l1.34-4.94C2.45 15.54 2 13.81 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"
  })), "DESCHIDE WHATSAPP"), /*#__PURE__*/React.createElement("button", {
    onClick: e => e.preventDefault(),
    className: "hf-btn",
    style: {
      flex: 1,
      background: 'var(--hf-galben)',
      color: 'var(--hf-bleumarin)',
      border: 'none',
      fontSize: 13,
      padding: '12px 8px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    stroke: "var(--hf-bleumarin)",
    strokeWidth: 2.5
  }), "SUN\u0102"))));
};

// ─────────────── My Schedule ───────────────
const MyScheduleScreen = ({
  favs,
  onFav,
  onArtistTap,
  onTabChange
}) => {
  const all = [];
  for (const d of [7, 8, 9]) {
    LINEUP[d].filter(a => favs.includes(a.id)).forEach(a => all.push({
      ...a,
      day: d
    }));
  }
  const conflicts = [];
  for (let i = 0; i < all.length; i++) {
    for (let j = i + 1; j < all.length; j++) {
      if (all[i].day === all[j].day && all[i].time === all[j].time) {
        conflicts.push([all[i], all[j]]);
      }
    }
  }
  const byDay = {
    7: [],
    8: [],
    9: []
  };
  all.forEach(a => byDay[a.day].push(a));
  for (const d in byDay) byDay[d].sort((a, b) => a.time.localeCompare(b.time));
  if (all.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '60px 20px 100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 16,
        minHeight: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hf-display",
      style: {
        fontSize: 30
      }
    }, "SCHEDULE-UL MEU"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 120,
        height: 120,
        borderRadius: 999,
        background: 'var(--gen-accent-soft)',
        display: 'grid',
        placeItems: 'center',
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 48,
      stroke: "var(--gen-accent)",
      strokeWidth: 1.5
    })), /*#__PURE__*/React.createElement("div", {
      className: "hf-display",
      style: {
        fontSize: 22,
        marginTop: 12
      }
    }, "\xCENC\u0102 NICIUN PREFERAT"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--color-text-secondary)',
        maxWidth: 260,
        lineHeight: 1.5
      }
    }, "Mergi la Line-up \u0219i apas\u0103 \u2B50 la arti\u0219tii pe care \xEEi vrei la festival. \xCEi adun\u0103m aici pe zile."), /*#__PURE__*/React.createElement("button", {
      className: "hf-btn hf-btn-primary",
      style: {
        marginTop: 8
      },
      onClick: () => onTabChange('lineup')
    }, "VEZI LINE-UP"), /*#__PURE__*/React.createElement(Dots, {
      size: 9
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 100px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 30
    }
  }, "SCHEDULE-UL MEU"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)',
      marginTop: 4
    }
  }, "Arti\u0219tii pe care \xEEi vrei la festival (", all.length, ")")), /*#__PURE__*/React.createElement("button", {
    onClick: e => e.preventDefault(),
    className: "hf-btn",
    style: {
      background: 'var(--hf-bleumarin)',
      color: '#fff',
      border: 'none',
      fontSize: 13,
      padding: '12px 16px',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 18,
    stroke: "#fff"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "EXPORT \xCEN CALENDAR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      fontWeight: 400,
      marginTop: 2
    }
  }, ".ics \xB7 Google \xB7 Apple \xB7 Outlook"))), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 18,
    stroke: "#fff"
  })), conflicts.map(([a, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 14,
      background: 'rgba(255,107,122,0.12)',
      border: '2px solid var(--hf-coral)',
      borderRadius: 'var(--r-lg)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "warn",
    size: 20,
    stroke: "var(--hf-coral)",
    strokeWidth: 2.5,
    fill: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Conflict de orar"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, a.name, " \u0219i ", b.name, " c\xE2nt\u0103 \xEEn acela\u0219i timp (", a.time, ", ", a.day, " aug).")))), [7, 8, 9].map(d => byDay[d].length > 0 && /*#__PURE__*/React.createElement("div", {
    key: d
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hf-display",
    style: {
      fontSize: 24,
      padding: '4px 12px',
      background: d === 8 ? 'var(--hf-turcoaz)' : 'var(--hf-galben)',
      color: d === 8 ? '#fff' : 'var(--hf-bleumarin)',
      borderRadius: 'var(--r-md)',
      letterSpacing: '0.05em'
    }
  }, d, " AUG"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)',
      fontWeight: 600
    }
  }, byDay[d].length, " arti\u0219ti")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, byDay[d].map(a => /*#__PURE__*/React.createElement(ArtistCardCompact, {
    key: a.id,
    artist: a,
    isFav: true,
    onFav: () => onFav(a.id),
    onTap: () => onArtistTap(a.id, d)
  }))))));
};

// ─────────────── Tickets ───────────────
const TICKET_DB = {
  'HFB-2026-A91X': {
    type: '3day',
    name: 'Andrei Popescu',
    days: '7–9 aug',
    used: false
  },
  'HFB-2026-B47Z': {
    type: '1day',
    name: 'Maria Iliescu',
    days: '8 aug',
    used: false
  },
  'HFB-2026-F22Q': {
    type: 'family',
    name: 'Familia Munteanu',
    days: '7–9 aug',
    used: false,
    pax: '2 adulți + 1 copil'
  },
  'HFB-2026-U03K': {
    type: '3day',
    name: 'Cristian Vasile',
    days: '7–9 aug',
    used: true
  }
};
const TICKET_TYPES = {
  '3day': {
    label: 'Abonament 3 zile',
    short: 'PASS 3 ZILE',
    price: 240,
    color: 'var(--hf-coral)',
    perks: ['Acces toate scenele', 'Toate cele 3 zile', 'Reintrare nelimitată', 'Discount foodcourt 10%']
  },
  '1day': {
    label: 'Bilet o zi',
    short: 'PASS 1 ZI',
    price: 120,
    color: 'var(--hf-turcoaz)',
    perks: ['Acces toate scenele', 'Ziua aleasă de tine', 'Reintrare nelimitată']
  },
  'family': {
    label: 'Family Pack',
    short: 'FAMILY',
    price: 380,
    color: 'var(--hf-galben)',
    perks: ['2 adulți + 1 copil', 'Toate cele 3 zile', 'Acces prioritar Kids Zone', '20% reducere foodcourt']
  }
};
const MiniQR = ({
  size = 100
}) => {
  const cells = [];
  for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) {
    const corner = x < 7 && y < 7 || x > 13 && y < 7 || x < 7 && y > 13;
    const edge = (x === 0 || x === 6 || y === 0 || y === 6) && x < 7 && y < 7;
    const re = (x === 14 || x === 20 || y === 0 || y === 6) && x > 13 && y < 7;
    const le = (x === 0 || x === 6 || y === 14 || y === 20) && x < 7 && y > 13;
    const inner = x > 1 && x < 5 && y > 1 && y < 5 || x > 15 && x < 19 && y > 1 && y < 5 || x > 1 && x < 5 && y > 15 && y < 19;
    const on = inner || edge || re || le || !corner && (x * 7 + y * 13 + (x ^ y)) % 3 === 0;
    if (on) cells.push({
      x,
      y
    });
  }
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 21 21",
    width: size,
    height: size,
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("rect", {
    width: "21",
    height: "21",
    fill: "#fff"
  }), cells.map((c, i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: c.x,
    y: c.y,
    width: "1",
    height: "1",
    fill: "var(--hf-bleumarin)"
  })));
};
const TicketsScreen = ({
  tickets = [],
  onTicketsChange = () => {},
  initialMode = 'mine'
}) => {
  const [mode, setMode] = uS(initialMode);
  const [code, setCode] = uS('');
  const [scanning, setScanning] = uS(false);
  const [result, setResult] = uS(null);
  const [buying, setBuying] = uS(null);
  const [purchased, setPurchased] = uS(null);
  const [copiedId, setCopiedId] = uS(null);
  const submit = c => {
    const norm = (c || code).trim().toUpperCase();
    if (!norm) return;
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      const t = TICKET_DB[norm];
      if (!t) setResult({
        ok: false,
        code: norm,
        reason: 'invalid'
      });else if (t.used) setResult({
        ok: false,
        code: norm,
        reason: 'used',
        ticket: t
      });else setResult({
        ok: true,
        code: norm,
        ticket: t
      });
    }, 1100);
  };
  const reset = () => {
    setResult(null);
    setCode('');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 100px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 30
    }
  }, "BILETE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'var(--hf-crem)',
      borderRadius: 999,
      padding: 4,
      gap: 4
    }
  }, [{
    id: 'mine',
    label: 'Biletele mele'
  }, {
    id: 'buy',
    label: 'Cumpără'
  }, {
    id: 'verify',
    label: 'Verifică'
  }].map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    onClick: () => {
      setMode(m.id);
      reset();
      setPurchased(null);
      setBuying(null);
    },
    style: {
      flex: 1,
      padding: '10px 8px',
      borderRadius: 999,
      border: 'none',
      background: mode === m.id ? 'var(--hf-bleumarin)' : 'transparent',
      color: mode === m.id ? '#fff' : 'var(--color-text-secondary)',
      fontFamily: 'var(--ff-display)',
      fontSize: 12,
      letterSpacing: '0.04em',
      cursor: 'pointer',
      transition: 'all var(--t-fast) var(--ease)'
    }
  }, m.label.toUpperCase()))), mode === 'mine' && tickets.length === 0 && /*#__PURE__*/React.createElement(EmptyTicketsState, {
    onBuyTap: () => setMode('buy')
  }), mode === 'mine' && tickets.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)'
    }
  }, tickets.length, " ", tickets.length === 1 ? 'bilet înregistrat' : 'bilete înregistrate', " \xB7 fiecare cu propriul cod de reduceri."), tickets.map(t => {
    const meta = TICKET_KIND_META[t.kind] || TICKET_KIND_META['3day'];
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      style: {
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
        background: 'var(--hf-paper)',
        border: '2px solid ' + meta.color,
        boxShadow: 'var(--sh-md)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: meta.color,
        color: t.kind === 'family' ? 'var(--hf-bleumarin)' : '#fff',
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 1.5,
        opacity: 0.85
      }
    }, "HIT FEST BUCOVINA"), /*#__PURE__*/React.createElement("div", {
      className: "hf-display",
      style: {
        fontSize: 17,
        letterSpacing: '0.04em'
      }
    }, meta.short)), /*#__PURE__*/React.createElement(MiniQR, {
      size: 56
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 1,
        color: 'var(--color-text-secondary)'
      }
    }, "SERIAL"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'ui-monospace, monospace',
        fontSize: 12,
        color: 'var(--hf-bleumarin)',
        marginTop: 1
      }
    }, t.serial)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 1,
        color: 'var(--color-text-secondary)'
      }
    }, "VALID"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--hf-bleumarin)',
        marginTop: 1
      }
    }, "7\u20139 aug 2026"))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px dashed var(--color-border)',
        paddingTop: 10
      }
    }, /*#__PURE__*/React.createElement(TicketCodeCard, {
      ticket: t,
      variant: "compact",
      onCopy: tk => {
        try {
          navigator.clipboard?.writeText(tk.code);
        } catch (e) {}
        setCopiedId(tk.id);
        setTimeout(() => setCopiedId(null), 1600);
      },
      copied: copiedId === t.id
    }))));
  }), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-secondary",
    onClick: () => setMode('buy'),
    style: {
      marginTop: 4
    }
  }, "+ ADAUG\u0102 \xCEnc\u0102 UN BILET")), mode === 'verify' && !result && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      borderRadius: 'var(--r-xl)',
      background: 'var(--hf-bleumarin)',
      position: 'relative',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: 0.08
    }
  }, [20, 40, 60, 80].map(n => /*#__PURE__*/React.createElement("line", {
    key: 'h' + n,
    x1: "0",
    x2: "100",
    y1: n,
    y2: n,
    stroke: "#fff",
    strokeWidth: "0.3"
  })), [20, 40, 60, 80].map(n => /*#__PURE__*/React.createElement("line", {
    key: 'v' + n,
    x1: n,
    x2: n,
    y1: "0",
    y2: "100",
    stroke: "#fff",
    strokeWidth: "0.3"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '64%',
      aspectRatio: '1/1'
    }
  }, ['tl', 'tr', 'bl', 'br'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      position: 'absolute',
      width: 28,
      height: 28,
      borderColor: 'var(--hf-galben)',
      borderStyle: 'solid',
      borderWidth: 0,
      borderTopWidth: c[0] === 't' ? 4 : 0,
      borderBottomWidth: c[0] === 'b' ? 4 : 0,
      borderLeftWidth: c[1] === 'l' ? 4 : 0,
      borderRightWidth: c[1] === 'r' ? 4 : 0,
      top: c[0] === 't' ? 0 : 'auto',
      bottom: c[0] === 'b' ? 0 : 'auto',
      left: c[1] === 'l' ? 0 : 'auto',
      right: c[1] === 'r' ? 0 : 'auto',
      borderTopLeftRadius: c === 'tl' ? 12 : 0,
      borderTopRightRadius: c === 'tr' ? 12 : 0,
      borderBottomLeftRadius: c === 'bl' ? 12 : 0,
      borderBottomRightRadius: c === 'br' ? 12 : 0
    }
  })), scanning && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 8,
      right: 8,
      height: 3,
      background: 'linear-gradient(90deg, transparent, var(--hf-coral), transparent)',
      boxShadow: '0 0 14px var(--hf-coral)',
      animation: 'hf-scan 1.2s ease-in-out infinite',
      top: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '18%',
      background: '#fff',
      padding: 10,
      borderRadius: 12,
      opacity: scanning ? 0.4 : 0.85,
      transition: 'opacity var(--t-base) var(--ease)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(MiniQR, {
    size: "100%"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 14,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'var(--hf-galben)',
      fontFamily: 'var(--ff-display)',
      fontSize: 12,
      letterSpacing: '0.12em'
    }
  }, scanning ? 'SE SCANEAZĂ…' : 'POZIȚIONEAZĂ QR-UL ÎN CADRU')), /*#__PURE__*/React.createElement("style", null, `@keyframes hf-scan { 0%{top:8%}50%{top:88%}100%{top:8%} }`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'var(--color-text-secondary)'
    }
  }, "Sau introdu codul manual"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: code,
    onChange: e => setCode(e.target.value),
    placeholder: "HFB-2026-XXXX",
    style: {
      flex: 1,
      padding: '12px 14px',
      borderRadius: 'var(--r-lg)',
      border: '1.5px solid var(--color-border)',
      background: 'var(--hf-paper)',
      fontFamily: 'ui-monospace, monospace',
      fontSize: 14,
      letterSpacing: '0.05em',
      color: 'var(--color-text-primary)',
      outline: 'none',
      textTransform: 'uppercase'
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-primary",
    disabled: !code.trim() || scanning,
    onClick: () => submit(),
    style: {
      minWidth: 96,
      opacity: !code.trim() || scanning ? 0.5 : 1
    }
  }, scanning ? '...' : 'VERIFICĂ'))), /*#__PURE__*/React.createElement("details", {
    style: {
      background: 'var(--hf-crem)',
      borderRadius: 'var(--r-md)',
      padding: '10px 14px',
      fontSize: 12,
      color: 'var(--color-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      cursor: 'pointer',
      fontWeight: 600
    }
  }, "\uD83D\uDCA1 Coduri demo (tap pentru a \xEEncerca)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginTop: 8
    }
  }, Object.keys(TICKET_DB).map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => {
      setCode(c);
      submit(c);
    },
    style: {
      textAlign: 'left',
      padding: '8px 10px',
      background: 'var(--hf-paper)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--r-sm)',
      cursor: 'pointer',
      fontFamily: 'ui-monospace, monospace',
      fontSize: 12,
      color: 'var(--hf-bleumarin)'
    }
  }, c, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-secondary)',
      fontFamily: 'var(--ff-body)'
    }
  }, "\u2014 ", TICKET_TYPES[TICKET_DB[c].type].label, TICKET_DB[c].used ? ' (folosit)' : ''))), /*#__PURE__*/React.createElement("button", {
    onClick: () => submit('HFB-2026-FAKE'),
    style: {
      textAlign: 'left',
      padding: '8px 10px',
      background: 'var(--hf-paper)',
      border: '1px dashed var(--hf-coral)',
      borderRadius: 'var(--r-sm)',
      cursor: 'pointer',
      fontFamily: 'ui-monospace, monospace',
      fontSize: 12,
      color: 'var(--hf-coral)'
    }
  }, "HFB-2026-FAKE ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-body)'
    }
  }, "\u2014 cod invalid"))))), mode === 'verify' && result && /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      border: '2px solid ' + (result.ok ? 'var(--hf-turcoaz)' : 'var(--hf-coral)'),
      background: 'var(--hf-paper)',
      boxShadow: 'var(--sh-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: result.ok ? 'var(--hf-turcoaz)' : result.reason === 'used' ? 'var(--hf-portocaliu)' : 'var(--hf-coral)',
      color: '#fff',
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.22)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: result.ok ? 'check' : 'warn',
    size: 24,
    stroke: "#fff",
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 22,
      letterSpacing: '0.04em'
    }
  }, result.ok ? 'BILET VALID' : result.reason === 'used' ? 'DEJA FOLOSIT' : 'BILET INVALID'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.9
    }
  }, result.ok ? 'Bun venit la festival 🎉' : result.reason === 'used' ? 'A fost scanat anterior la intrare' : 'Codul nu există în sistem'))), result.ticket && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 18px 0',
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      background: TICKET_TYPES[result.ticket.type].color,
      padding: 6,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement(MiniQR, {
    size: 84
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: TICKET_TYPES[result.ticket.type].color,
      textTransform: 'uppercase'
    }
  }, TICKET_TYPES[result.ticket.type].short), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 19,
      lineHeight: 1.1,
      marginTop: 2,
      color: 'var(--hf-bleumarin)'
    }
  }, result.ticket.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)',
      marginTop: 4
    }
  }, result.ticket.days, result.ticket.pax ? ' · ' + result.ticket.pax : ''))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      fontFamily: 'ui-monospace, monospace',
      fontSize: 11,
      color: 'var(--color-text-secondary)',
      borderTop: '1px dashed var(--color-border)',
      marginTop: 12,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "COD: ", result.code), /*#__PURE__*/React.createElement("span", null, "HIT FEST \xB7 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: 'var(--hf-crem)',
      display: 'flex',
      gap: 10
    }
  }, !result.ok && result.reason === 'invalid' && /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-primary",
    style: {
      flex: 1
    },
    onClick: () => setMode('buy')
  }, "CUMP\u0102R\u0102 BILET"), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-secondary",
    style: {
      flex: 1
    },
    onClick: reset
  }, result.ok ? 'SCANEAZĂ ALTUL' : 'ÎNCEARCĂ DIN NOU'))), mode === 'buy' && !purchased && !buying && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)'
    }
  }, "Alege biletul potrivit pentru tine. Plata securizat\u0103 Stripe."), Object.entries(TICKET_TYPES).map(([id, tt]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    style: {
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      background: 'var(--hf-paper)',
      border: '1.5px solid var(--color-border)',
      boxShadow: 'var(--sh-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: tt.color,
      color: id === 'family' ? 'var(--hf-bleumarin)' : '#fff',
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 18,
      letterSpacing: '0.04em'
    }
  }, tt.short), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hf-display",
    style: {
      fontSize: 28
    }
  }, tt.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      opacity: 0.85
    }
  }, "lei"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--hf-bleumarin)',
      marginBottom: 8
    }
  }, tt.label), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, tt.perks.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 13,
      color: 'var(--color-text-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    stroke: tt.color,
    strokeWidth: 3
  }), /*#__PURE__*/React.createElement("span", null, p)))), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-primary",
    onClick: () => setBuying(id),
    style: {
      marginTop: 14,
      width: '100%',
      background: tt.color,
      color: id === 'family' ? 'var(--hf-bleumarin)' : '#fff'
    }
  }, "CUMP\u0102R\u0102"))))), mode === 'buy' && buying && !purchased && /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--r-xl)',
      background: 'var(--hf-paper)',
      border: '1.5px solid var(--color-border)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hf-display",
    style: {
      fontSize: 18
    }
  }, "FINALIZARE COMAND\u0102"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setBuying(null),
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      border: 'none',
      background: 'var(--hf-crem-2)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 12
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: TICKET_TYPES[buying].color,
      color: buying === 'family' ? 'var(--hf-bleumarin)' : '#fff',
      padding: '12px 14px',
      borderRadius: 'var(--r-lg)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-display)',
      letterSpacing: '0.04em',
      fontSize: 14
    }
  }, TICKET_TYPES[buying].short), /*#__PURE__*/React.createElement("span", {
    className: "hf-display",
    style: {
      fontSize: 22
    }
  }, TICKET_TYPES[buying].price, " lei")), ['Nume complet', 'Email', 'Telefon'].map(l => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'var(--color-text-secondary)'
    }
  }, l), /*#__PURE__*/React.createElement("input", {
    placeholder: l,
    style: {
      width: '100%',
      marginTop: 4,
      padding: '11px 14px',
      borderRadius: 'var(--r-md)',
      border: '1.5px solid var(--color-border)',
      background: 'var(--hf-paper)',
      fontSize: 14,
      outline: 'none'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hf-crem)',
      borderRadius: 'var(--r-md)',
      padding: 12,
      fontSize: 12,
      color: 'var(--color-text-secondary)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, "Demo prototype \u2014 f\u0103r\u0103 plat\u0103 real\u0103. Biletul se genereaz\u0103 instant.")), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-primary",
    onClick: () => {
      const t = addUserTicket(buying, '');
      onTicketsChange(loadUserTickets());
      setPurchased({
        ticket: t
      });
      setBuying(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: "#fff",
    strokeWidth: 3
  }), " PL\u0102TE\u0218TE ", TICKET_TYPES[buying].price, " LEI")), mode === 'buy' && purchased && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'center',
      padding: '20px 4px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 999,
      background: 'var(--hf-turcoaz)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 36,
    stroke: "#fff",
    strokeWidth: 3.5
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 24
    }
  }, "BILET GENERAT \uD83C\uDF89"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)',
      marginTop: 4
    }
  }, "\u021Ai l-am trimis \u0219i pe email. Codul de reduceri e \xEEn aplica\u021Bie.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      background: 'var(--hf-paper)',
      border: '2px solid ' + TICKET_TYPES[purchased.ticket.kind].color,
      boxShadow: 'var(--sh-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: TICKET_TYPES[purchased.ticket.kind].color,
      color: purchased.ticket.kind === 'family' ? 'var(--hf-bleumarin)' : '#fff',
      padding: '14px 18px',
      textAlign: 'left',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 1.5,
      opacity: 0.85
    }
  }, "HIT FEST BUCOVINA"), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 18,
      letterSpacing: '0.04em'
    }
  }, TICKET_TYPES[purchased.ticket.kind].short)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: '4px 8px',
      background: 'rgba(255,255,255,0.25)',
      borderRadius: 999,
      fontWeight: 700,
      letterSpacing: 0.5
    }
  }, "NOU")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(MiniQR, {
    size: 108
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)',
      fontWeight: 700,
      letterSpacing: 1
    }
  }, "SERIAL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'ui-monospace, monospace',
      fontSize: 14,
      color: 'var(--hf-bleumarin)',
      marginTop: 2
    }
  }, purchased.ticket.serial), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)',
      fontWeight: 700,
      letterSpacing: 1,
      marginTop: 10
    }
  }, "COD REDUCERI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ff-display)',
      fontSize: 15,
      color: 'var(--hf-coral)',
      marginTop: 2,
      letterSpacing: '0.06em'
    }
  }, purchased.ticket.code)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-secondary",
    style: {
      flex: 1
    },
    onClick: () => {
      setPurchased(null);
      setMode('mine');
    }
  }, "VEZI BILETELE"), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-primary",
    style: {
      flex: 1
    },
    onClick: () => setPurchased(null)
  }, "MAI CUMP\u0102R UNUL"))));
};
window.PhotoScreen = PhotoScreen;
window.MapScreen = MapScreen;
window.InfoScreen = InfoScreen;
window.MyScheduleScreen = MyScheduleScreen;
window.TicketsScreen = TicketsScreen;
