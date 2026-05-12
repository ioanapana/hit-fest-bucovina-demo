// Hit Fest Bucovina — Settings screen
const {
  useState: sS
} = React;
const SettingsScreen = ({
  theme,
  onThemeChange,
  onResetApp
}) => {
  const {
    t,
    lang,
    setLang
  } = useT();
  const [notif, setNotif] = sS({
    lineup: true,
    next: true,
    partners: false
  });
  const [showConfirm, setShowConfirm] = sS(false);
  const themes = [{
    id: 'casete',
    glyph: '📼',
    label: t('theme.casete.label'),
    desc: t('theme.casete.years')
  }, {
    id: 'cd',
    glyph: '💿',
    label: t('theme.cd.label'),
    desc: t('theme.cd.years')
  }, {
    id: 'mp3',
    glyph: '🎧',
    label: t('theme.mp3.label'),
    desc: t('theme.mp3.years')
  }];
  const Section = ({
    title,
    children
  }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--color-text-secondary)',
      marginBottom: 10,
      textTransform: 'uppercase',
      paddingLeft: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hf-paper)',
      borderRadius: 'var(--r-xl)',
      border: '1px solid var(--color-border)',
      overflow: 'hidden',
      boxShadow: 'var(--sh-sm)'
    }
  }, children));
  const Row = ({
    children,
    onClick,
    last
  }) => /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      padding: '14px 16px',
      borderBottom: last ? 'none' : '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: onClick ? 'pointer' : 'default'
    }
  }, children);
  const Toggle = ({
    on,
    onChange
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(!on),
    style: {
      width: 44,
      height: 26,
      borderRadius: 999,
      background: on ? 'var(--hf-turcoaz)' : 'var(--color-border)',
      border: 'none',
      cursor: 'pointer',
      position: 'relative',
      transition: 'background var(--t-fast) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 20 : 2,
      width: 22,
      height: 22,
      borderRadius: 999,
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
      transition: 'left var(--t-fast) var(--ease)'
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 100px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 32,
      letterSpacing: '0.04em'
    }
  }, t('settings.title'))), /*#__PURE__*/React.createElement(AccountSettingsBlock, {
    onWipe: onResetApp
  }), /*#__PURE__*/React.createElement(Section, {
    title: t('settings.language')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(LanguageToggle, {
    variant: "inline"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)',
      marginTop: 10,
      lineHeight: 1.5
    }
  }, t('lang.helper')))), /*#__PURE__*/React.createElement(Section, {
    title: t('settings.theme')
  }, themes.map((th, i) => /*#__PURE__*/React.createElement(Row, {
    key: th.id,
    onClick: () => onThemeChange(th.id),
    last: i === themes.length - 1
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, th.glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, th.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)'
    }
  }, th.desc)), theme === th.id && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
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
  }))))), /*#__PURE__*/React.createElement(Section, {
    title: t('settings.notifications')
  }, [{
    key: 'lineup',
    label: t('settings.notif_lineup'),
    desc: t('settings.notif_lineup_d')
  }, {
    key: 'next',
    label: t('settings.notif_next'),
    desc: t('settings.notif_next_d')
  }, {
    key: 'partners',
    label: t('settings.notif_partners'),
    desc: t('settings.notif_partners_d')
  }].map((n, i, arr) => /*#__PURE__*/React.createElement(Row, {
    key: n.key,
    last: i === arr.length - 1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, n.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)'
    }
  }, n.desc)), /*#__PURE__*/React.createElement(Toggle, {
    on: notif[n.key],
    onChange: v => setNotif(s => ({
      ...s,
      [n.key]: v
    }))
  })))), /*#__PURE__*/React.createElement(Section, {
    title: t('settings.about')
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, t('settings.version')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)'
    }
  }, t('settings.edition'), " \xB7 7\u20139 august"))), /*#__PURE__*/React.createElement(Row, {
    onClick: () => {}
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    stroke: "var(--hf-bleumarin)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 500
    }
  }, t('settings.contact')), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 16,
    stroke: "var(--color-text-secondary)"
  })), /*#__PURE__*/React.createElement(Row, {
    onClick: () => window.__hfShowPolicy && window.__hfShowPolicy('privacy')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18,
    stroke: "var(--hf-bleumarin)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 500
    }
  }, t('settings.privacy')), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 16,
    stroke: "var(--color-text-secondary)"
  })), /*#__PURE__*/React.createElement(Row, {
    onClick: () => window.__hfShowPolicy && window.__hfShowPolicy('terms'),
    last: true
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18,
    stroke: "var(--hf-bleumarin)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 500
    }
  }, t('settings.terms')), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 16,
    stroke: "var(--color-text-secondary)"
  }))), !showConfirm ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowConfirm(true),
    style: {
      background: 'transparent',
      border: '1.5px solid var(--hf-coral)',
      color: 'var(--hf-coral)',
      padding: '12px 18px',
      borderRadius: 999,
      fontFamily: 'var(--ff-display)',
      fontSize: 13,
      letterSpacing: '0.06em',
      cursor: 'pointer',
      alignSelf: 'center'
    }
  }, t('settings.reset').toUpperCase()) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: 'rgba(255,107,122,0.12)',
      border: '2px solid var(--hf-coral)',
      borderRadius: 'var(--r-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-primary)',
      lineHeight: 1.5
    }
  }, t('settings.reset_confirm')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowConfirm(false),
    style: {
      flex: 1,
      padding: 10,
      border: '1.5px solid var(--color-border)',
      background: 'var(--hf-paper)',
      borderRadius: 999,
      cursor: 'pointer',
      fontWeight: 600,
      fontSize: 13
    }
  }, t('common.close')), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onResetApp();
      setShowConfirm(false);
    },
    style: {
      flex: 1,
      padding: 10,
      border: 'none',
      background: 'var(--hf-coral)',
      color: '#fff',
      borderRadius: 999,
      cursor: 'pointer',
      fontFamily: 'var(--ff-display)',
      fontSize: 13,
      letterSpacing: '0.04em'
    }
  }, t('settings.reset').toUpperCase()))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)',
      textAlign: 'center',
      marginTop: 4,
      fontStyle: 'italic'
    }
  }, t('settings.credits')));
};
window.SettingsScreen = SettingsScreen;
