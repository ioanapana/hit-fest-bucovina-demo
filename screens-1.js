// Hit Fest Bucovina — Screens

const {
  useState: uS,
  useEffect: uE,
  useRef: uR,
  useMemo: uM
} = React;

// ─────────────── Onboarding Step: Code reveal ───────────────
const CodeRevealStep = ({
  onDone
}) => {
  const code = uM(() => getOrCreateUserCode(), []);
  const [revealed, setRevealed] = uS(false);
  const [copied, setCopied] = uS(false);
  uE(() => {
    const t = setTimeout(() => setRevealed(true), 350);
    return () => clearTimeout(t);
  }, []);
  const copy = () => {
    try {
      navigator.clipboard?.writeText(code);
    } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  // Confetti dots — generated once, deterministic
  const confetti = uM(() => Array.from({
    length: 24
  }).map((_, i) => {
    const ang = i / 24 * Math.PI * 2 + Math.random() * 0.4;
    const dist = 90 + Math.random() * 80;
    const colors = ['var(--hf-coral)', 'var(--hf-galben)', 'var(--hf-turcoaz)', 'var(--hf-portocaliu)', 'var(--hf-lime)'];
    return {
      x: Math.cos(ang) * dist,
      y: Math.sin(ang) * dist - 20,
      c: colors[i % colors.length],
      d: 0.05 + i % 6 * 0.04,
      r: 3 + i % 4
    };
  }), []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 30,
      lineHeight: 1,
      textWrap: 'balance'
    }
  }, "CODUL T\u0102U", /*#__PURE__*/React.createElement("br", null), "HIT FEST"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      marginTop: 8,
      textWrap: 'pretty'
    }
  }, "Cu acest cod prime\u0219ti reduceri la ", /*#__PURE__*/React.createElement("strong", null, "parteneri din zon\u0103"), " \u2014 tiroliana, m\u0103n\u0103stiri, restaurante, cazare. E unic pentru tine.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      placeItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, revealed && confetti.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: p.r * 2,
      height: p.r * 2,
      borderRadius: 999,
      background: p.c,
      opacity: 0,
      animation: `hf-confetti 900ms ${p.d}s var(--ease) forwards`,
      '--cx': p.x + 'px',
      '--cy': p.y + 'px'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hf-crem)',
      border: '2.5px dashed var(--hf-coral)',
      borderRadius: 'var(--r-2xl)',
      padding: '28px 24px 26px',
      textAlign: 'center',
      minWidth: 260,
      position: 'relative',
      transform: revealed ? 'scale(1)' : 'scale(0.4) rotate(-8deg)',
      opacity: revealed ? 1 : 0,
      transition: 'transform 600ms cubic-bezier(.34,1.56,.64,1), opacity 220ms var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 2.5,
      color: 'var(--hf-coral)',
      textTransform: 'uppercase'
    }
  }, "EDI\u021AIA 2026"), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 38,
      color: 'var(--hf-bleumarin)',
      letterSpacing: '0.1em',
      marginTop: 10,
      lineHeight: 1
    }
  }, code), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)',
      marginTop: 12,
      lineHeight: 1.4
    }
  }, "Personal \xB7 Salvat pe acest device"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Dots, {
    size: 7
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    className: "hf-btn hf-btn-secondary",
    style: {
      width: '100%',
      borderColor: copied ? 'var(--hf-turcoaz)' : 'var(--hf-coral)',
      color: copied ? 'var(--hf-turcoaz-d)' : 'var(--hf-coral)',
      gap: 8
    }
  }, copied ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: "var(--hf-turcoaz-d)",
    strokeWidth: 3
  }), " COPIAT \xCEN CLIPBOARD") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CopyGlyph, null), " COPIAZ\u0102 CODUL")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onDone({
      tab: 'reduceri'
    }),
    className: "hf-btn hf-btn-primary",
    style: {
      width: '100%'
    }
  }, "VEZI REDUCERILE \u2192"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onDone({
      tab: 'home'
    }),
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--color-text-secondary)',
      fontSize: 13,
      padding: '6px',
      cursor: 'pointer',
      fontFamily: 'var(--ff-body)'
    }
  }, "Sari peste \u2014 exploreaz\u0103 aplica\u021Bia"), /*#__PURE__*/React.createElement("style", null, `
        @keyframes hf-confetti {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
          15% { opacity: 1; }
          100% { opacity: 0; transform: translate(calc(-50% + var(--cx)), calc(-50% + var(--cy))) scale(1); }
        }
      `));
};

// ─────────────── Onboarding ───────────────
const Onboarding = ({
  onDone
}) => {
  const [step, setStep] = uS(-1);
  const [year, setYear] = uS(1995);
  const [revealed, setRevealed] = uS(false);
  const {
    t,
    lang,
    setLang
  } = useT();
  const gen = year < 1990 ? 'casete' : year <= 2000 ? 'cd' : 'mp3';
  const genName = gen === 'casete' ? 'CASETE' : gen === 'cd' ? 'CD' : 'MP3';
  const genDesc = gen === 'casete' ? 'Walkmans, mixtape-uri și veri lungi. Bun venit acasă.' : gen === 'cd' ? 'CD-uri arse pentru drum, eurodance la maxim. Ești în CLUBUL CD.' : 'MP3 player în buzunar, fotografii pe Hi5. Generația MP3.';
  uE(() => {
    if (step === 1 && !revealed) {
      const t = setTimeout(() => setRevealed(true), 250);
      return () => clearTimeout(t);
    }
  }, [step, revealed]);
  return /*#__PURE__*/React.createElement("div", {
    className: "hf-app",
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '64px 24px 32px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 80,
      left: 24
    }
  }, /*#__PURE__*/React.createElement(Dots, {
    size: 12
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 110,
      right: 32,
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    x: 0,
    y: 0,
    size: 20,
    rot: 20,
    color: "var(--hf-galben)"
  })), step === -1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(HitFestMark, {
    size: 1.5,
    accent: "var(--hf-coral)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hf-display",
    style: {
      fontSize: 36,
      color: 'var(--hf-bleumarin)',
      letterSpacing: '0.04em',
      lineHeight: 1,
      textWrap: 'balance'
    }
  }, "ALEGE LIMBA"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-display)',
      fontSize: 12,
      letterSpacing: '0.3em',
      color: 'var(--hf-coral)',
      marginTop: 8
    }
  }, "CHOOSE LANGUAGE \xB7 \u0412\u0418\u0411\u0415\u0420\u0418 \u041C\u041E\u0412\u0423")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, LANGS.map(l => {
    const isActive = lang === l.id;
    return /*#__PURE__*/React.createElement("button", {
      key: l.id,
      onClick: () => setLang(l.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 18px',
        borderRadius: 'var(--r-xl)',
        background: isActive ? 'var(--gen-accent-soft)' : 'var(--hf-paper)',
        border: '2px solid ' + (isActive ? 'var(--gen-accent)' : 'var(--color-border)'),
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all var(--t-fast) var(--ease)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 30,
        lineHeight: 1
      }
    }, l.flag), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--ff-display)',
        fontSize: 18,
        letterSpacing: '0.04em',
        color: 'var(--hf-bleumarin)'
      }
    }, l.native), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--color-text-secondary)',
        letterSpacing: 1,
        marginTop: 2
      }
    }, l.short)), isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 999,
        background: 'var(--gen-accent)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      stroke: "#fff",
      strokeWidth: 3
    })));
  })), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-primary",
    onClick: () => setStep(0),
    style: {
      marginTop: 4
    }
  }, lang === 'en' ? 'Continue' : lang === 'uk' ? 'Продовжити' : 'Continuă', " \u2192")), step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(HitFestMark, {
    size: 1.8,
    accent: "var(--hf-coral)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hf-display",
    style: {
      fontSize: 32,
      color: 'var(--hf-bleumarin)',
      letterSpacing: '0.04em',
      textWrap: 'balance'
    }
  }, "MUZICA ANILOR", /*#__PURE__*/React.createElement("br", null), "'80 \xB7 '90 \xB7 2000"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-display)',
      fontSize: 14,
      letterSpacing: '0.3em',
      color: 'var(--hf-coral)'
    }
  }, "GET IN THE RETRO MOOD")), /*#__PURE__*/React.createElement("div", {
    className: "hf-tape",
    style: {
      width: '88%',
      height: 80,
      borderRadius: 'var(--r-lg)',
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--hf-turcoaz) 0%, var(--hf-coral) 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(GenGlyph, {
    gen: "cd",
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 20,
      letterSpacing: '0.05em'
    }
  }, "7\u20139 AUGUST", /*#__PURE__*/React.createElement("br", null), "BUCOVINA"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      maxWidth: 280,
      lineHeight: 1.5
    }
  }, "Festivalul comunit\u0103\u021Bii care \xEE\u0219i aminte\u0219te cine a fost \u0219i c\xE2t de frumos poate tr\u0103i c\xE2nd muzica \xEEi adun\u0103 la un loc."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '88%',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      background: 'var(--hf-crem)',
      border: '1.5px dashed var(--hf-coral)',
      borderRadius: 'var(--r-lg)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      background: 'var(--hf-coral)',
      flexShrink: 0,
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontFamily: 'var(--ff-display)',
      fontSize: 16,
      letterSpacing: '0.04em'
    }
  }, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.4,
      color: 'var(--hf-coral)',
      textTransform: 'uppercase'
    }
  }, "BONUS \xB7 BILETUL T\u0102U"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-primary)',
      marginTop: 2,
      lineHeight: 1.4
    }
  }, "Cu codul t\u0103u prime\u0219ti reduceri la tirolian\u0103, m\u0103n\u0103stiri, cazare \u0219i restaurante din Bucovina."))), /*#__PURE__*/React.createElement(Dots, {
    size: 10
  }), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-primary",
    onClick: () => setStep(1),
    style: {
      marginTop: 8
    }
  }, "\xCEncepe")), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 32,
      lineHeight: 1,
      textWrap: 'balance'
    }
  }, "\xCEN CE AN", /*#__PURE__*/React.createElement("br", null), "TE-AI N\u0102SCUT?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      marginTop: 8
    }
  }, "Ne ajut\u0103 s\u0103-\u021Bi d\u0103m un fundal pe gustul t\u0103u.")), /*#__PURE__*/React.createElement("div", {
    className: "hf-card",
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1955",
    max: "2012",
    value: year,
    onChange: e => {
      setYear(+e.target.value);
      setRevealed(false);
    },
    onMouseUp: () => setRevealed(true),
    onTouchEnd: () => setRevealed(true),
    style: {
      width: '100%',
      accentColor: 'var(--gen-accent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      fontSize: 11,
      color: 'var(--color-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "1955"), /*#__PURE__*/React.createElement("span", null, "2012")), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      textAlign: 'center',
      fontSize: 56,
      color: 'var(--gen-accent)',
      marginTop: 12,
      letterSpacing: '0.04em',
      transition: 'color var(--t-base) var(--ease)'
    }
  }, year)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gen-accent-soft)',
      borderRadius: 'var(--r-xl)',
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      opacity: revealed ? 1 : 0,
      transform: revealed ? 'translateY(0)' : 'translateY(8px)',
      transition: 'all var(--t-slow) var(--ease)',
      border: '2px dashed var(--gen-accent)'
    }
  }, /*#__PURE__*/React.createElement(GenGlyph, {
    gen: gen,
    size: 52
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--color-text-secondary)'
    }
  }, "E\u0218TI DIN"), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 26,
      color: 'var(--gen-accent)',
      letterSpacing: '0.04em'
    }
  }, "GENERA\u021AIA ", genName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-primary)',
      marginTop: 2,
      lineHeight: 1.4
    }
  }, genDesc))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 11,
      color: 'var(--color-text-secondary)',
      padding: '0 4px',
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5M12 16h.01"
  })), /*#__PURE__*/React.createElement("span", null, "O schimbi oric\xE2nd din meniu \u2192 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--hf-bleumarin)'
    }
  }, "Set\u0103ri"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-primary",
    onClick: () => {
      window.__pickedTheme = gen;
      onDone({
        tab: 'home'
      });
    }
  }, "Intr\u0103 \xEEn aplica\u021Bie")), step === 2 && /*#__PURE__*/React.createElement(DownloadStep, {
    onDone: onDone
  }), false && step === 99 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 30,
      lineHeight: 1,
      textWrap: 'balance'
    }
  }, "DESCARC\u0102", /*#__PURE__*/React.createElement("br", null), "APLICA\u021AIA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      marginTop: 8
    }
  }, "Bilete, hart\u0103, line-up \u0219i schedule-ul t\u0103u \u2014 totul \xEEn buzunar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, var(--hf-turcoaz), var(--hf-bleumarin))',
      borderRadius: 'var(--r-xl)',
      padding: '22px 20px',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -14,
      right: -14,
      opacity: 0.25,
      transform: 'rotate(15deg)'
    }
  }, /*#__PURE__*/React.createElement(GenGlyph, {
    gen: "cd",
    size: 110
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 16,
      background: '#fff',
      color: 'var(--hf-bleumarin)',
      flexShrink: 0,
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 6px 18px rgba(0,0,0,0.25)'
    }
  }, /*#__PURE__*/React.createElement(HitFestMark, {
    size: 0.7,
    color: "var(--hf-bleumarin)",
    accent: "var(--hf-coral)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 18,
      letterSpacing: '0.04em'
    }
  }, "HIT FEST BUCOVINA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.8,
      marginTop: 3
    }
  }, "Aplica\u021Bia oficial\u0103 \xB7 7\u20139 august"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginTop: 6,
      fontSize: 11,
      opacity: 0.95
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hf-galben)'
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, "4.8 \xB7 2.1k rating-uri")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--hf-bleumarin)',
      color: '#fff',
      padding: '12px 16px',
      borderRadius: 'var(--r-lg)',
      textDecoration: 'none',
      cursor: 'pointer',
      boxShadow: 'var(--sh-sm)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.05 12.04c-.03-3.04 2.49-4.5 2.6-4.57-1.42-2.07-3.62-2.36-4.4-2.39-1.88-.19-3.66 1.1-4.6 1.1-.95 0-2.42-1.08-3.97-1.05-2.05.03-3.94 1.19-5 3.02-2.13 3.7-.55 9.18 1.53 12.18 1.02 1.47 2.23 3.12 3.83 3.06 1.54-.06 2.12-1 3.98-1 1.85 0 2.39 1 4.01.97 1.65-.03 2.7-1.5 3.71-2.98 1.17-1.71 1.65-3.37 1.67-3.46-.04-.02-3.21-1.23-3.24-4.88zM14.04 3.04c.84-1.02 1.42-2.44 1.26-3.86-1.22.05-2.7.81-3.58 1.83-.78.9-1.48 2.34-1.29 3.74 1.36.1 2.76-.69 3.61-1.71z"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: 0.75,
      letterSpacing: '0.08em'
    }
  }, "DOWNLOAD ON THE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ff-display)',
      fontSize: 19,
      letterSpacing: '0.02em',
      marginTop: 2
    }
  }, "App Store")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 18,
    stroke: "rgba(255,255,255,0.5)"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--hf-bleumarin)',
      color: '#fff',
      padding: '12px 16px',
      borderRadius: 'var(--r-lg)',
      textDecoration: 'none',
      cursor: 'pointer',
      boxShadow: 'var(--sh-sm)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M3.6 1.2c-.36.38-.56.96-.56 1.72v18.16c0 .76.2 1.34.56 1.72l.06.06L13.78 12.6v-.24L3.66 1.14l-.06.06z",
    transform: "translate(0 -.4)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC04",
    d: "M17.13 16.05l-3.36-3.37v-.36l3.36-3.36.08.04 3.98 2.26c1.14.64 1.14 1.7 0 2.34l-3.98 2.25-.08.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M17.21 15.85L13.77 12.4 3.6 22.6c.38.4.99.44 1.69.06l11.92-6.81"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M17.21 8.96L5.29 2.13c-.7-.4-1.31-.34-1.69.06l10.17 10.17 3.44-3.4z"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: 0.75,
      letterSpacing: '0.08em'
    }
  }, "DISPONIBIL PE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ff-display)',
      fontSize: 19,
      letterSpacing: '0.02em',
      marginTop: 2
    }
  }, "Google Play")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 18,
    stroke: "rgba(255,255,255,0.5)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      background: 'var(--hf-crem)',
      borderRadius: 'var(--r-lg)',
      padding: 12,
      border: '1px dashed var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      background: '#fff',
      borderRadius: 8,
      padding: 4,
      flexShrink: 0,
      border: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 10 10",
    width: "48",
    height: "48",
    "aria-hidden": true
  }, [[0, 0], [1, 0], [2, 0], [0, 1], [2, 1], [0, 2], [1, 2], [2, 2], [7, 0], [8, 0], [9, 0], [7, 1], [9, 1], [7, 2], [8, 2], [9, 2], [0, 7], [1, 7], [2, 7], [0, 8], [2, 8], [0, 9], [1, 9], [2, 9], [4, 1], [5, 3], [6, 2], [4, 4], [5, 5], [6, 4], [4, 6], [7, 5], [8, 6], [9, 7], [5, 8], [6, 9], [8, 8]].map(([x, y], i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: x,
    y: y,
    width: 1,
    height: 1,
    fill: "var(--hf-bleumarin)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 12,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-text-primary)'
    }
  }, "Scaneaz\u0103 cu telefonul"), /*#__PURE__*/React.createElement("br", null), "Te ducem direct \xEEn magazin pe sistemul t\u0103u.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-ghost",
    onClick: onDone
  }, "Continu\u0103 \xEEn browser")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'center',
      marginTop: 16
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: i === step ? 24 : 6,
      height: 6,
      borderRadius: 999,
      background: i === step ? 'var(--gen-accent)' : 'var(--color-border)',
      transition: 'all var(--t-base) var(--ease)'
    }
  }))));
};

// ─────────────── Countdown ───────────────
const Countdown = () => {
  // simulated time-to-festival; static for prototype
  const [t, setT] = uS({
    d: 88,
    h: 14,
    m: 22,
    s: 47
  });
  uE(() => {
    const id = setInterval(() => {
      setT(p => {
        let s = p.s - 1,
          m = p.m,
          h = p.h,
          d = p.d;
        if (s < 0) {
          s = 59;
          m--;
        }
        if (m < 0) {
          m = 59;
          h--;
        }
        if (h < 0) {
          h = 23;
          d--;
        }
        return {
          d,
          h,
          m,
          s
        };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const Cell = ({
    v,
    l
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '12px 6px',
      background: 'var(--hf-paper)',
      borderRadius: 'var(--r-md)',
      textAlign: 'center',
      border: '2px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 32,
      color: 'var(--hf-bleumarin)',
      letterSpacing: '0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(v).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--color-text-secondary)',
      marginTop: 2
    }
  }, l));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hf-turcoaz)',
      padding: '20px 16px',
      borderRadius: 'var(--r-xl)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hf-display",
    style: {
      color: '#fff',
      fontSize: 16,
      letterSpacing: '0.08em'
    }
  }, "MAI SUNT"), /*#__PURE__*/React.createElement(Dots, {
    size: 8
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Cell, {
    v: t.d,
    l: "ZILE"
  }), /*#__PURE__*/React.createElement(Cell, {
    v: t.h,
    l: "ORE"
  }), /*#__PURE__*/React.createElement(Cell, {
    v: t.m,
    l: "MIN"
  }), /*#__PURE__*/React.createElement(Cell, {
    v: t.s,
    l: "SEC"
  })));
};

// ─────────────── Home ───────────────
const HomeScreen = ({
  theme,
  favs,
  hasTicket,
  onTabChange,
  onArtistTap,
  onAddTicket
}) => {
  const genName = theme === 'casete' ? 'CASETE' : theme === 'cd' ? 'CD' : 'MP3';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      paddingBottom: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hf-turcoaz)',
      color: '#fff',
      padding: '8px 20px 28px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -20,
      right: -30,
      opacity: 0.18,
      transform: 'rotate(20deg)'
    }
  }, /*#__PURE__*/React.createElement(GenGlyph, {
    gen: theme,
    size: 180
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 20
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    x: 0,
    y: 0,
    color: "var(--hf-galben)",
    size: 18,
    rot: 15
  }), /*#__PURE__*/React.createElement(Sparkle, {
    x: -30,
    y: 20,
    color: "#fff",
    size: 12,
    rot: -10
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 44,
      lineHeight: 0.92,
      letterSpacing: '0.03em'
    }
  }, "HIT", /*#__PURE__*/React.createElement("br", null), "FEST", /*#__PURE__*/React.createElement("br", null), "BUCOVINA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: 0.9,
      marginTop: 10,
      fontWeight: 500,
      letterSpacing: 0.5
    }
  }, FESTIVAL.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hf-chip hf-chip-galben"
  }, "\uD83D\uDCC5 7\u20139 AUG 2026"), /*#__PURE__*/React.createElement("span", {
    className: "hf-chip",
    style: {
      background: 'rgba(255,255,255,0.95)'
    }
  }, "\uD83D\uDCCD Gura Humorului")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, !hasTicket && /*#__PURE__*/React.createElement("button", {
    onClick: onAddTicket,
    style: {
      padding: 14,
      borderRadius: 'var(--r-xl)',
      background: 'var(--hf-coral)',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      boxShadow: '0 8px 20px rgba(255,107,122,0.32)',
      textAlign: 'left',
      fontFamily: 'var(--ff-body)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -10,
      right: -10,
      opacity: 0.25
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    x: 0,
    y: 0,
    color: "#fff",
    size: 36,
    rot: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'rgba(255,255,255,0.2)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "qr",
    size: 22,
    stroke: "#fff",
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hf-display",
    style: {
      display: 'block',
      fontSize: 17,
      letterSpacing: '0.04em',
      lineHeight: 1.05
    }
  }, "ACTIVEAZ\u0102 CODUL T\u0102U"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      opacity: 0.92,
      marginTop: 3,
      lineHeight: 1.35
    }
  }, "Adaug\u0103 biletul (foto sau QR) \u2192 prime\u0219ti cod de reduceri \xEEn zon\u0103")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 18,
    stroke: "rgba(255,255,255,0.7)"
  })), /*#__PURE__*/React.createElement(Countdown, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 14,
      background: 'var(--gen-accent-soft)',
      borderRadius: 'var(--r-lg)',
      border: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement(GenGlyph, {
    gen: theme,
    size: 42
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1,
      color: 'var(--color-text-secondary)'
    }
  }, "GENERA\u021AIA TA"), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 24,
      letterSpacing: '0.04em',
      color: 'var(--gen-accent)'
    }
  }, genName)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 18,
    stroke: "var(--color-text-secondary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hf-bleumarin)',
      color: '#fff',
      borderRadius: 'var(--r-xl)',
      padding: 18,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -10,
      right: -10,
      opacity: 0.2
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    x: 0,
    y: 0,
    color: "#fff",
    size: 40,
    rot: 0
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1,
      color: 'var(--hf-galben)'
    }
  }, "URMEAZ\u0102"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(ArtistPhoto, {
    name: "HADDAWAY",
    size: 56,
    tone: "var(--hf-coral)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 26,
      letterSpacing: '0.04em'
    }
  }, "HADDAWAY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: 0.85
    }
  }, "7 august \xB7 22:00 \xB7 Scena Principal\u0103"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onArtistTap('haddaway', 7),
    style: {
      marginTop: 14,
      width: '100%',
      padding: '10px',
      background: 'var(--hf-galben)',
      color: 'var(--hf-bleumarin)',
      border: 'none',
      borderRadius: 999,
      fontFamily: 'var(--ff-display)',
      fontSize: 14,
      letterSpacing: '0.08em',
      cursor: 'pointer'
    }
  }, "VEZI ARTISTUL")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-primary",
    onClick: () => onTabChange('lineup'),
    style: {
      width: '100%'
    }
  }, "VEZI LINE-UP COMPLET"), /*#__PURE__*/React.createElement(Dots, {
    size: 9
  }), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-secondary",
    style: {
      width: '100%'
    }
  }, "CUMP\u0102R\u0102 BILET \xB7 240 LEI")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 4
    }
  }, [{
    n: '17',
    l: 'ARTIȘTI'
  }, {
    n: '3',
    l: 'ZILE'
  }, {
    n: favs.length || 0,
    l: 'FAVORIȚI'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: 'center',
      padding: 12,
      background: 'var(--hf-paper)',
      borderRadius: 'var(--r-md)',
      border: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 24,
      color: 'var(--gen-accent)'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 1,
      color: 'var(--color-text-secondary)'
    }
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)',
      textAlign: 'center',
      marginTop: 8
    }
  }, "Prezentat de ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, "Liviu V\xE2rciu"), " \xB7 toate cele 3 zile")));
};

// ─────────────── Line-up ───────────────
const LineupScreen = ({
  favs,
  onFav,
  onArtistTap
}) => {
  const [day, setDay] = uS(7);
  const [q, setQ] = uS('');
  const list = LINEUP[day];
  const ql = q.trim().toLowerCase();
  const filtered = ql ? list.filter(a => a.name.toLowerCase().includes(ql) || (a.hits || []).some(h => h.toLowerCase().includes(ql))) : list;
  const headliners = !ql ? list.filter(a => a.headliner) : [];
  const rest = !ql ? list.filter(a => !a.headliner) : filtered;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      paddingBottom: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 32,
      lineHeight: 1
    }
  }, "FULL LINE-UP"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)',
      marginTop: 4
    }
  }, "17 arti\u0219ti pe 3 zile \xB7 gazd\u0103 Liviu V\xE2rciu"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--color-text-secondary)',
      pointerEvents: 'none',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Caut\u0103 artist sau hit\u2026",
    style: {
      width: '100%',
      padding: '12px 38px 12px 40px',
      borderRadius: 'var(--r-lg)',
      border: '1.5px solid var(--color-border)',
      background: 'var(--hf-crem)',
      fontSize: 14,
      fontFamily: 'var(--ff-body)',
      color: 'var(--color-text-primary)',
      outline: 'none',
      boxSizing: 'border-box'
    }
  }), q && /*#__PURE__*/React.createElement("button", {
    onClick: () => setQ(''),
    "aria-label": "\u0218terge",
    style: {
      position: 'absolute',
      right: 8,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 28,
      height: 28,
      borderRadius: 999,
      border: 'none',
      background: 'var(--color-border)',
      color: 'var(--hf-bleumarin)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12M6 18 18 6"
  }))))), /*#__PURE__*/React.createElement(DaySelector, {
    active: day,
    onChange: setDay
  }), ql && filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 24px',
      textAlign: 'center',
      color: 'var(--color-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      marginBottom: 8
    }
  }, "\uD83D\uDD0D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, "Niciun rezultat pentru \u201E", /*#__PURE__*/React.createElement("strong", null, q), "\" pe ", day, " aug."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQ(''),
    className: "hf-btn hf-btn-secondary",
    style: {
      marginTop: 14,
      fontSize: 13,
      padding: '8px 18px'
    }
  }, "\u0218terge filtrul")), !ql && headliners.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      margin: '4px 0 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hf-display",
    style: {
      fontSize: 16,
      letterSpacing: '0.08em',
      color: 'var(--hf-coral)'
    }
  }, "\u2605 HEADLINERS"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--hf-coral)',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)',
      fontWeight: 600
    }
  }, headliners.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, headliners.sort((a, b) => b.time.localeCompare(a.time)).map(a => /*#__PURE__*/React.createElement(ArtistCardCompact, {
    key: a.id,
    artist: a,
    isFav: favs.includes(a.id),
    onFav: () => onFav(a.id),
    onTap: () => onArtistTap(a.id, day)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      position: 'relative'
    }
  }, !ql && rest.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hf-display",
    style: {
      fontSize: 14,
      letterSpacing: '0.08em',
      color: 'var(--color-text-secondary)'
    }
  }, "TOAT\u0102 SERIA"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--color-border)'
    }
  })), rest.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 28,
      top: 22,
      bottom: 0,
      width: 2,
      background: 'var(--color-border)',
      zIndex: 0
    }
  }), [...rest].sort((a, b) => b.time.localeCompare(a.time)).map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      flexShrink: 0,
      paddingTop: 16,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 14,
      letterSpacing: '0.03em'
    }
  }, a.time), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 999,
      background: i === 0 ? 'var(--hf-coral)' : 'var(--gen-accent)',
      marginLeft: 'auto',
      marginRight: -7,
      marginTop: 4,
      border: '3px solid var(--color-bg-primary)',
      boxShadow: i === 0 ? '0 0 0 4px rgba(255,107,122,0.2)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement(ArtistCardCompact, {
    artist: a,
    isFav: favs.includes(a.id),
    onFav: () => onFav(a.id),
    onTap: () => onArtistTap(a.id, day),
    isPlaying: i === 0 && day === 8 && !ql
  })))), !ql && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 14,
      background: 'var(--hf-galben)',
      borderRadius: 'var(--r-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28
    }
  }, "\uD83C\uDFA4"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Gazd\u0103 \xB7 Liviu V\xE2rciu"), " prezint\u0103 toate cele 3 zile, \xEEntre reprize."))));
};

// ─────────────── Artist Detail ───────────────
const ArtistDetail = ({
  artistId,
  day,
  onBack,
  isFav,
  onFav,
  onArtistTap
}) => {
  const a = LINEUP[day].find(x => x.id === artistId) || LINEUP[7][0];
  // Similar artists: same era → fall back to same day
  const similar = React.useMemo(() => {
    const allDays = [7, 8, 9];
    let pool = [];
    allDays.forEach(d => (LINEUP[d] || []).forEach(x => {
      if (x.id !== a.id) pool.push({
        ...x,
        _day: d
      });
    }));
    const sameEra = pool.filter(x => x.era === a.era);
    const list = sameEra.length >= 3 ? sameEra : [...sameEra, ...pool.filter(x => x.era !== a.era)];
    return list.slice(0, 3);
  }, [a.id]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      paddingBottom: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 360,
      paddingTop: 60,
      background: 'linear-gradient(180deg, var(--hf-coral) 0%, var(--hf-galben) 100%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ArtistPhoto, {
    name: a.name,
    size: 220,
    shape: "rounded",
    tone: "var(--hf-coral)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 4px, transparent 4px 14px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 60,
      left: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hf-btn-icon",
    onClick: onBack,
    style: {
      width: 40,
      height: 40,
      background: 'rgba(255,255,255,0.95)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -1,
      left: 0,
      right: 0,
      height: 32,
      background: 'var(--color-bg-primary)',
      borderRadius: 'var(--r-2xl) var(--r-2xl) 0 0'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, a.headliner && /*#__PURE__*/React.createElement("span", {
    className: "hf-chip hf-chip-coral"
  }, "\u2605 HEADLINER"), /*#__PURE__*/React.createElement("span", {
    className: "hf-chip hf-chip-galben"
  }, "ERA ", a.era), /*#__PURE__*/React.createElement("span", {
    className: "hf-chip"
  }, a.country)), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 44,
      lineHeight: 0.95,
      letterSpacing: '0.03em'
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: 14,
      background: 'var(--hf-bleumarin)',
      color: '#fff',
      borderRadius: 'var(--r-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\uD83C\uDFA4"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13
    }
  }, "C\xE2nt\u0103 pe ", /*#__PURE__*/React.createElement("strong", null, day, " august, ora ", a.time), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.8
    }
  }, "Scena Principal\u0103"))), a.bio && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--color-text-primary)'
    }
  }, a.bio), a.hits && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--color-text-secondary)',
      marginBottom: 8
    }
  }, "HITURI"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, a.hits.map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      padding: '8px 14px',
      background: 'var(--gen-accent-soft)',
      border: '1px solid var(--gen-accent)',
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "music",
    size: 14
  }), h)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--color-text-secondary)',
      marginBottom: 8
    }
  }, "ASCULT\u0102 ACUM"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 12,
      borderRadius: 'var(--r-lg)',
      background: '#1DB95410',
      border: '1.5px solid #1DB95440',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--ff-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: '#1DB954',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "#fff",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.59 14.42c-.18.3-.57.4-.87.21-2.39-1.46-5.4-1.79-8.94-.98-.34.08-.68-.13-.76-.47s.13-.68.47-.76c3.88-.89 7.21-.51 9.89 1.13.3.18.4.57.21.87zm1.22-2.74c-.23.37-.71.49-1.08.25-2.74-1.68-6.91-2.17-10.15-1.18-.41.13-.85-.1-.98-.51s.1-.85.51-.98c3.71-1.13 8.31-.58 11.45 1.34.37.23.49.71.25 1.08zm.11-2.85C14.62 8.95 9.4 8.78 6.3 9.74c-.49.15-1.01-.13-1.16-.62s.13-1.01.62-1.16c3.56-1.08 9.32-.87 13 1.32.44.26.59.83.32 1.27-.26.44-.83.59-1.27.32z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--hf-bleumarin)'
    }
  }, "Spotify"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)',
      marginTop: 2
    }
  }, "Top hituri \xB7 ~3 min")), /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 18,
    stroke: "#1DB954"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 12,
      borderRadius: 'var(--r-lg)',
      background: '#FF000010',
      border: '1.5px solid #FF000040',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--ff-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: '#FF0000',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "#fff",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5 3-5 3z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--hf-bleumarin)'
    }
  }, "YouTube"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)',
      marginTop: 2
    }
  }, "Live clips \xB7 video oficial")), /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 18,
    stroke: "#FF0000"
  })))), /*#__PURE__*/React.createElement("button", {
    className: "hf-btn hf-btn-primary",
    onClick: () => onFav(a.id),
    style: {
      width: '100%',
      marginTop: 8,
      background: isFav ? 'var(--hf-galben)' : 'var(--color-cta)',
      color: isFav ? 'var(--hf-bleumarin)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 18,
    fill: isFav
  }), isFav ? 'ÎN PROGRAMUL TĂU' : 'ADAUGĂ LA FAVORITE'), similar.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--color-text-secondary)',
      marginBottom: 10
    }
  }, "ARTI\u0218TI SIMILARI \xB7 ERA ", a.era), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      paddingBottom: 4,
      scrollSnapType: 'x mandatory',
      margin: '0 -20px',
      padding: '0 20px 4px'
    },
    className: "hf-scroll"
  }, similar.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => onArtistTap && onArtistTap(s.id, s._day),
    style: {
      flexShrink: 0,
      width: 130,
      padding: 10,
      background: 'var(--hf-paper)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--r-lg)',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--ff-body)',
      scrollSnapAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '1/1',
      borderRadius: 'var(--r-md)',
      background: `linear-gradient(135deg, var(--hf-coral), var(--hf-galben))`,
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontFamily: 'var(--ff-display)',
      fontSize: 28,
      letterSpacing: '0.04em',
      overflow: 'hidden',
      marginBottom: 8
    }
  }, s.name.split(' ').map(w => w[0]).join('').slice(0, 2)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--hf-bleumarin)',
      lineHeight: 1.2,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--color-text-secondary)',
      marginTop: 2
    }
  }, s._day, " aug \xB7 ", s.time))))), /*#__PURE__*/React.createElement(Dots, {
    size: 9
  })));
};
window.Onboarding = Onboarding;
window.HomeScreen = HomeScreen;
window.LineupScreen = LineupScreen;
window.ArtistDetail = ArtistDetail;
window.Countdown = Countdown;
