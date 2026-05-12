// Hit Fest Bucovina — F8 v2 integration:
//   MyTicketsScreen (replaces in-app buy flow), AccountSettingsBlock, BuyOnLiveticketsCTA.
// External tickets purchase always goes to livetickets.ro now.

const LIVETICKETS_URL = 'https://livetickets.ro/event/hit-fest-bucovina-2026';
const openLivetickets = () => {
  try {
    window.open(LIVETICKETS_URL, '_blank', 'noopener');
  } catch (e) {}
};

// ─────────────── BuyOnLiveticketsCTA — used everywhere instead of in-app buy ───────────────
const BuyOnLiveticketsCTA = ({
  variant = 'primary',
  size = 'lg',
  label,
  fullWidth = true
}) => {
  const {
    t
  } = useT();
  const txt = label || t('buy.cta');
  return /*#__PURE__*/React.createElement("button", {
    onClick: openLivetickets,
    className: 'hf-btn ' + (variant === 'primary' ? 'hf-btn-primary' : 'hf-btn-secondary'),
    style: {
      width: fullWidth ? '100%' : 'auto',
      padding: size === 'lg' ? '14px 18px' : '10px 14px',
      fontSize: size === 'lg' ? 14 : 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ticket",
    size: size === 'lg' ? 18 : 14,
    stroke: "#fff"
  }), /*#__PURE__*/React.createElement("span", null, txt), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7,
      fontSize: '0.85em'
    }
  }, "\u2197"));
};

// ─────────────── MyTicketsScreen ───────────────
// Replaces the old TicketsScreen. Shows added tickets + buy CTA (external).
const MyTicketsScreen = ({
  tickets,
  onAddTicket,
  onChange,
  onPartnerTap
}) => {
  const {
    t
  } = useT();
  const user = loadUser();
  const userCode = user.userCode;
  if (!tickets || tickets.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 18px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(MascotSVG, {
      size: 140
    }), /*#__PURE__*/React.createElement("div", {
      className: "hf-display",
      style: {
        fontSize: 24,
        lineHeight: 1.1,
        color: 'var(--hf-bleumarin)',
        letterSpacing: '0.02em',
        textWrap: 'balance'
      }
    }, t('mytickets.empty.title')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--color-text-secondary)',
        lineHeight: 1.55,
        maxWidth: 300
      }
    }, t('mytickets.empty.subtitle')), /*#__PURE__*/React.createElement("button", {
      className: "hf-btn hf-btn-primary",
      onClick: onAddTicket,
      style: {
        marginTop: 6,
        width: '100%',
        padding: '14px 18px',
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18,
      stroke: "#fff"
    }), t('mytickets.empty.cta')), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontSize: 11,
        color: 'var(--color-text-secondary)'
      }
    }, t('mytickets.empty.divider')), /*#__PURE__*/React.createElement(BuyOnLiveticketsCTA, {
      variant: "secondary"
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gen-accent-soft)',
      border: '2px solid var(--gen-accent)',
      borderRadius: 'var(--r-xl)',
      padding: 18,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--gen-accent)',
      textTransform: 'uppercase'
    }
  }, t('mytickets.code.label')), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 36,
      lineHeight: 1,
      color: 'var(--hf-bleumarin)',
      letterSpacing: '0.04em',
      marginTop: 6
    }
  }, userCode), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.5
    }
  }, t('mytickets.code.hint')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      padding: '8px 10px',
      background: 'var(--hf-paper)',
      borderRadius: 'var(--r-md)',
      border: '1px dashed var(--color-border)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 14,
    stroke: "var(--color-text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      lineHeight: 1.45,
      color: 'var(--color-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-text-primary)'
    }
  }, "1 cont = 1 cod."), ' ', "Po\u021Bi ad\u0103uga mai multe bilete (familie, prieteni) sub acela\u0219i cod \u2014 reducerile r\u0103m\xE2n personale, codul nu se cumuleaz\u0103.")), /*#__PURE__*/React.createElement("button", {
    onClick: onPartnerTap,
    style: {
      marginTop: 12,
      padding: '8px 14px',
      fontSize: 12,
      background: 'var(--gen-accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      cursor: 'pointer',
      fontWeight: 700,
      fontFamily: 'var(--ff-display)',
      letterSpacing: '0.08em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ticket",
    size: 14,
    stroke: "#fff"
  }), t('mytickets.code.cta'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--color-text-secondary)',
      textTransform: 'uppercase'
    }
  }, t('mytickets.list.title'), " \xB7 ", tickets.length), /*#__PURE__*/React.createElement("button", {
    onClick: onAddTicket,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--hf-coral)',
      fontSize: 12,
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--ff-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    stroke: "var(--hf-coral)"
  }), t('mytickets.list.add'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, tickets.map(tk => /*#__PURE__*/React.createElement(TicketRow, {
    key: tk.id,
    ticket: tk,
    onDelete: () => {
      const u = removeTicketFromUser(tk.id);
      onChange(u.tickets);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: 14,
      background: 'var(--hf-crem-2)',
      borderRadius: 'var(--r-lg)',
      border: '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ticket",
    size: 22,
    stroke: "var(--hf-bleumarin)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 12,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.5
    }
  }, t('mytickets.buy.hint'))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(BuyOnLiveticketsCTA, {
    variant: "secondary",
    size: "md"
  })));
};
const TicketRow = ({
  ticket,
  onDelete
}) => {
  const {
    t
  } = useT();
  const [confirming, setConfirming] = React.useState(false);
  const [fullView, setFullView] = React.useState(false);
  const isPhoto = ticket.type === 'photo';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: 10,
      background: 'var(--hf-paper)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--r-lg)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setFullView(true),
    "aria-label": "Vezi biletul m\u0103rit",
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--r-md)',
      background: isPhoto && ticket.photoUri ? `url(${ticket.photoUri}) center/cover` : 'var(--hf-bleumarin)',
      flexShrink: 0,
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      position: 'relative'
    }
  }, !isPhoto && /*#__PURE__*/React.createElement(Icon, {
    name: "qr",
    size: 26,
    stroke: "#fff",
    strokeWidth: 2.2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 3,
      right: 3,
      width: 18,
      height: 18,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.95)',
      color: 'var(--hf-bleumarin)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 10,
      fontWeight: 700
    }
  }, "\u2922")), fullView && /*#__PURE__*/React.createElement("div", {
    onClick: () => setFullView(false),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(10,37,64,0.92)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      cursor: 'zoom-out',
      animation: 'shimmer 200ms var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setFullView(false);
    },
    "aria-label": "\xCEnchide",
    style: {
      position: 'absolute',
      top: 56,
      right: 20,
      width: 40,
      height: 40,
      borderRadius: 999,
      border: 'none',
      background: 'rgba(255,255,255,0.18)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 20,
    stroke: "#fff",
    strokeWidth: 2.4
  })), isPhoto && ticket.photoUri ? /*#__PURE__*/React.createElement("img", {
    src: ticket.photoUri,
    alt: "Bilet",
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: '100%',
      maxHeight: '70vh',
      borderRadius: 'var(--r-lg)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      cursor: 'default'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--hf-paper)',
      borderRadius: 'var(--r-xl)',
      padding: '28px 24px',
      textAlign: 'center',
      cursor: 'default',
      maxWidth: 340,
      width: '100%',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--color-text-secondary)',
      marginBottom: 14
    }
  }, "COD QR \xB7 BILET FESTIVAL"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      height: 220,
      margin: '0 auto',
      background: '#fff',
      padding: 12,
      borderRadius: 'var(--r-md)',
      border: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 21 21",
    width: "100%",
    height: "100%",
    shapeRendering: "crispEdges"
  }, Array.from({
    length: 21 * 21
  }).map((_, i) => {
    const seed = (ticket.qrData || ticket.id || 'x').charCodeAt(i * 7 % (ticket.qrData || ticket.id || 'x').length || 1);
    const on = (i * 31 + seed) % 7 < 3;
    const x = i % 21,
      y = Math.floor(i / 21);
    const corner = x < 7 && y < 7 || x > 13 && y < 7 || x < 7 && y > 13;
    if (corner) {
      const inEye = (cx, cy) => x >= cx && x < cx + 7 && y >= cy && y < cy + 7 && !((x === cx + 1 || x === cx + 5) && y >= cy + 1 && y <= cy + 5 || (y === cy + 1 || y === cy + 5) && x >= cx + 1 && x <= cx + 5);
      const isEye = inEye(0, 0) || inEye(14, 0) || inEye(0, 14);
      return isEye ? /*#__PURE__*/React.createElement("rect", {
        key: i,
        x: x,
        y: y,
        width: "1",
        height: "1",
        fill: "#0A2540"
      }) : null;
    }
    return on ? /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: x,
      y: y,
      width: "1",
      height: "1",
      fill: "#0A2540"
    }) : null;
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 16,
      color: 'var(--hf-bleumarin)',
      marginTop: 14,
      letterSpacing: '0.04em'
    }
  }, (ticket.qrData || '').replace(/^https?:\/\//, '') || ticket.id), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)',
      marginTop: 6
    }
  }, "Acesta este codul scanat de la bilet. La intrare folose\u0219te biletul original.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 12,
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Atinge oriunde pentru a \xEEnchide")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 1.2,
      padding: '2px 7px',
      borderRadius: 999,
      background: isPhoto ? 'var(--hf-turcoaz)' : 'var(--hf-coral)',
      color: '#fff',
      textTransform: 'uppercase'
    }
  }, t('tickets.tag.' + ticket.type)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)'
    }
  }, new Date(ticket.addedAt).toLocaleDateString())), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--hf-bleumarin)',
      marginTop: 3,
      fontWeight: 600,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, isPhoto ? t('tickets.tag.photo.label') : (ticket.qrData || '').replace(/^https?:\/\//, ''))), !confirming ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirming(true),
    "aria-label": "Delete",
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--color-text-secondary)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 16,
    stroke: "var(--color-text-secondary)"
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirming(false),
    style: {
      padding: '6px 10px',
      fontSize: 11,
      fontWeight: 600,
      background: 'var(--hf-crem-2)',
      border: 'none',
      borderRadius: 999,
      cursor: 'pointer',
      color: 'var(--hf-bleumarin)'
    }
  }, t('common.cancel')), /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    style: {
      padding: '6px 10px',
      fontSize: 11,
      fontWeight: 700,
      background: 'var(--hf-coral)',
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      cursor: 'pointer'
    }
  }, t('common.delete'))));
};

// ─────────────── AccountSettingsBlock — drops into SettingsScreen ───────────────
const AccountSettingsBlock = ({
  onWipe
}) => {
  const {
    t
  } = useT();
  const [user, setUserState] = React.useState(loadUser());
  const [editingEmail, setEditingEmail] = React.useState(false);
  const [draftEmail, setDraftEmail] = React.useState(user.email || '');
  const [verifyingEmail, setVerifyingEmail] = React.useState(null);
  const [confirmWipe, setConfirmWipe] = React.useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(draftEmail);
  const save = () => {
    // Same email → no reverification
    if (draftEmail === user.email) {
      setEditingEmail(false);
      return;
    }
    setVerifyingEmail(draftEmail);
    setEditingEmail(false);
  };
  const confirmVerify = () => {
    const u = setUserEmail(verifyingEmail, user.marketingConsent);
    setUserState(u);
    setVerifyingEmail(null);
  };
  const wipeAll = () => {
    clearUser();
    setUserState(loadUser());
    setConfirmWipe(false);
    if (onWipe) onWipe();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hf-paper)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--r-xl)',
      padding: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: 'var(--color-text-secondary)',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, t('settings.account.title')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)'
    }
  }, t('settings.account.code')), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 16,
      color: 'var(--hf-bleumarin)',
      letterSpacing: '0.04em',
      marginTop: 2
    }
  }, user.userCode || '—'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 0',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)'
    }
  }, t('settings.account.email')), !editingEmail ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hf-bleumarin)',
      marginTop: 2,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, user.email || t('settings.account.no_email')) : /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: draftEmail,
    onChange: e => setDraftEmail(e.target.value),
    placeholder: "you@example.com",
    style: {
      width: '100%',
      padding: '6px 8px',
      fontSize: 13,
      marginTop: 4,
      border: '1.5px solid var(--color-border)',
      borderRadius: 8,
      fontFamily: 'var(--ff-body)',
      background: 'var(--hf-paper)',
      color: 'var(--hf-bleumarin)',
      boxSizing: 'border-box'
    }
  })), !editingEmail ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditingEmail(true),
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--hf-coral)',
      fontSize: 12,
      fontWeight: 700
    }
  }, user.email ? t('common.change') : t('common.add')) : /*#__PURE__*/React.createElement("button", {
    onClick: save,
    disabled: !valid,
    style: {
      background: valid ? 'var(--hf-coral)' : 'var(--color-border)',
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      padding: '6px 12px',
      fontSize: 11,
      fontWeight: 700,
      cursor: valid ? 'pointer' : 'not-allowed'
    }
  }, t('common.save'))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirmWipe(true),
    style: {
      marginTop: 12,
      width: '100%',
      padding: '10px 12px',
      background: 'transparent',
      border: '1.5px solid var(--hf-coral)',
      color: 'var(--hf-coral)',
      borderRadius: 999,
      cursor: 'pointer',
      fontFamily: 'var(--ff-display)',
      fontSize: 12,
      letterSpacing: '0.08em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 14,
    stroke: "var(--hf-coral)"
  }), t('settings.account.wipe')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 11,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.5
    }
  }, t('settings.account.wipe_hint')), verifyingEmail && /*#__PURE__*/React.createElement(ConfirmOverlay, {
    onDismiss: () => setVerifyingEmail(null)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 16,
      background: 'var(--hf-turcoaz)15',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 12px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 28,
    stroke: "var(--hf-turcoaz)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 22,
      lineHeight: 1.1,
      color: 'var(--hf-bleumarin)',
      letterSpacing: '0.02em',
      textWrap: 'balance'
    }
  }, "VERIFIC\u0102 NOUA ADRES\u0102"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 13,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.5
    }
  }, "\u021Ai-am trimis un link de confirmare la", ' ', /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-text-primary)'
    }
  }, verifyingEmail), ". P\xE2n\u0103 confirmi, p\u0103str\u0103m vechea adres\u0103."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: confirmVerify,
    className: "hf-btn hf-btn-primary",
    style: {
      padding: '12px 16px',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: "#fff",
    strokeWidth: 2.5
  }), "AM CONFIRMAT LINK-UL"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setVerifyingEmail(null),
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--color-text-secondary)',
      fontSize: 12,
      padding: 8,
      fontFamily: 'var(--ff-body)',
      textDecoration: 'underline'
    }
  }, "Anuleaz\u0103 schimbarea"))), confirmWipe && /*#__PURE__*/React.createElement(ConfirmOverlay, {
    onDismiss: () => setConfirmWipe(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 16,
      background: 'var(--hf-coral)15',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 12px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 28,
    stroke: "var(--hf-coral)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hf-display",
    style: {
      fontSize: 22,
      lineHeight: 1.1,
      color: 'var(--hf-bleumarin)',
      letterSpacing: '0.02em',
      textWrap: 'balance'
    }
  }, "\u015ETERGE DATELE LOCAL?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 13,
      color: 'var(--color-text-primary)',
      lineHeight: 1.55,
      textAlign: 'left'
    }
  }, "\u015Eterg de pe acest telefon:", /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '6px 0 10px',
      paddingLeft: 18,
      color: 'var(--color-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("li", null, "codul t\u0103u + biletele ad\u0103ugate"), /*#__PURE__*/React.createElement("li", null, "email \u0219i preferin\u021Be"), /*#__PURE__*/React.createElement("li", null, "favorite \u0219i istoricul de reduceri folosite")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: 'var(--hf-turcoaz)10',
      border: '1px solid var(--hf-turcoaz)40',
      borderRadius: 'var(--r-md)',
      fontSize: 12,
      color: 'var(--hf-bleumarin)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Biletul real r\u0103m\xE2ne valid."), " \xCEl adaugi din nou oric\xE2nd \u2014 prime\u0219ti acela\u0219i cod legat de email-ul t\u0103u.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirmWipe(false),
    style: {
      flex: 1,
      padding: '12px 14px',
      fontSize: 13,
      background: 'var(--hf-crem-2)',
      color: 'var(--hf-bleumarin)',
      border: 'none',
      borderRadius: 999,
      cursor: 'pointer',
      fontWeight: 700,
      fontFamily: 'var(--ff-body)'
    }
  }, "Anuleaz\u0103"), /*#__PURE__*/React.createElement("button", {
    onClick: wipeAll,
    style: {
      flex: 1.2,
      padding: '12px 14px',
      fontSize: 13,
      background: 'var(--hf-coral)',
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      cursor: 'pointer',
      fontFamily: 'var(--ff-display)',
      letterSpacing: '0.06em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 14,
    stroke: "#fff"
  }), "\u015ETERGE LOCAL"))));
};
const ConfirmOverlay = ({
  children,
  onDismiss
}) => /*#__PURE__*/React.createElement("div", {
  onClick: onDismiss,
  style: {
    position: 'fixed',
    inset: 0,
    zIndex: 100,
    background: 'rgba(10,37,64,0.55)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 16,
    animation: 'hf-flow-in 200ms var(--ease)'
  }
}, /*#__PURE__*/React.createElement("div", {
  onClick: e => e.stopPropagation(),
  style: {
    background: 'var(--hf-paper)',
    borderRadius: 'var(--r-2xl)',
    padding: '22px 18px 20px',
    width: '100%',
    maxWidth: 380,
    textAlign: 'center',
    boxShadow: '0 16px 40px rgba(0,0,0,0.25)'
  }
}, children));
Object.assign(window, {
  LIVETICKETS_URL,
  openLivetickets,
  BuyOnLiveticketsCTA,
  MyTicketsScreen,
  TicketRow,
  AccountSettingsBlock
});
