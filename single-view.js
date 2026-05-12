const PHONE_W = 402;
const PHONE_H = 874;
const SingleView = () => {
  const isNarrow = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 460px)').matches;
  if (isNarrow) {
    return /*#__PURE__*/React.createElement("div", {
      className: "demo-stage",
      style: {
        width: '100vw',
        height: '100vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "demo-device",
      style: {
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(HitFestApp, {
      initialTheme: "cd",
      skipOnboarding: false
    })));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "demo-stage",
    style: {
      width: PHONE_W,
      height: PHONE_H
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "demo-device",
    style: {
      width: PHONE_W,
      height: PHONE_H,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "demo-island",
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(HitFestApp, {
    initialTheme: "cd",
    skipOnboarding: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: 'rgba(0,0,0,0.25)'
    }
  }))));
};
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(LangProvider, null, React.createElement(SingleView)));
