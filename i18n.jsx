// Hit Fest Bucovina — i18n
// Limbi: ro (default), en, uk (Ukrainian — turiști din nordul granitei)
const HF_LANG_KEY = 'hf_lang';

const LANGS = [
  { id: 'ro', label: 'Română',    flag: '🇷🇴', native: 'Română',    short: 'RO' },
  { id: 'en', label: 'English',   flag: '🇬🇧', native: 'English',   short: 'EN' },
  { id: 'uk', label: 'Українська', flag: '🇺🇦', native: 'Українська', short: 'UA' },
];

const STRINGS = {
  ro: {
    'nav.home': 'Acasă', 'nav.lineup': 'Line-up', 'nav.reduceri': 'Reduceri',
    'nav.photo': 'Photo', 'nav.map': 'Hartă',
    'header.tickets': 'BILETE', 'header.your_gen': 'Generația ta',
    'home.coming_up': 'URMEAZĂ', 'home.see_lineup': 'VEZI LINE-UP COMPLET',
    'home.buy_ticket': 'CUMPĂRĂ BILET · 240 LEI', 'home.artists': 'ARTIȘTI',
    'home.days': 'ZILE', 'home.favorites': 'FAVORIȚI',
    'home.countdown_to': 'MAI SUNT', 'home.host_intro': 'Prezentat de',
    'home.host_all3': 'toate cele 3 zile', 'home.see_artist': 'VEZI ARTISTUL',
    'home.your_gen_label': 'GENERAȚIA TA',
    'count.d': 'ZILE', 'count.h': 'ORE', 'count.m': 'MIN', 'count.s': 'SEC',
    'lineup.full': 'FULL LINE-UP', 'lineup.summary': '17 artiști pe 3 zile · gazdă Liviu Vârciu',
    'lineup.headliner': 'HEADLINER',
    'settings.title': 'SETĂRI', 'settings.language': 'LIMBĂ',
    'settings.theme': 'GENERAȚIA TA', 'settings.about': 'DESPRE',
    'settings.notifications': 'NOTIFICĂRI',
    'settings.notif_lineup': 'Schimbări de program', 'settings.notif_lineup_d': 'Anunț când se schimbă orarul',
    'settings.notif_next': 'Următorul artist', 'settings.notif_next_d': 'Cu 15 min înainte de show',
    'settings.notif_partners': 'Oferte parteneri', 'settings.notif_partners_d': 'Reduceri noi adăugate',
    'settings.reset': 'Resetează aplicația', 'settings.reset_confirm': 'Sigur? Vei pierde codurile și favoritele.',
    'settings.version': 'Hit Fest Bucovina · v1.0', 'settings.edition': 'Ediția 2026',
    'settings.contact': 'Contact organizator',
    'settings.privacy': 'Politica de confidențialitate', 'settings.terms': 'Termeni & condiții',
    'settings.credits': 'Made with ♥ for Bucovina',
    'common.back': 'Înapoi', 'common.close': 'Închide', 'common.save': 'Salvează',
    'theme.casete.label': 'Generația Casete', 'theme.cd.label': 'Generația CD', 'theme.mp3.label': 'Generația MP3',
    'theme.casete.years': 'Născut <1990', 'theme.cd.years': 'Născut 1990–2000', 'theme.mp3.years': 'Născut >2000',
    'lang.label': 'Limba',
    'lang.helper': 'Schimbi limba aplicației — descrierile partenerilor rămân în română.',

    // ── F8 v2 — Reduceri + Ticket validation flow ──
    'discounts.title': 'REDUCERI PARTENERI',
    'discounts.subtitle_count': '{count} parteneri în Bucovina cu oferte exclusive pentru participanții la festival',
    'discounts.tickets_count': 'Bilete adăugate: {count}',
    'discounts.add_one_more': '+ bilet',

    'discounts.empty.title': 'Adaugă-ți biletul pentru a primi codurile',
    'discounts.empty.subtitle': 'Ai cumpărat bilet la Hit Fest? Adaugă-l și primești un cod exclusiv pentru reducerile partenerilor.',
    'discounts.empty.cta': 'Adaugă biletul tău',
    'discounts.empty.skip': 'Nu am bilet încă',
    'discounts.locked.message': 'Adaugă bilet pentru detalii',

    'ticket.add.title': 'Cum vrei să adaugi biletul?',
    'ticket.add.subtitle': 'Alege una din cele 2 opțiuni',
    'ticket.add.photo.title': 'Fă o poză',
    'ticket.add.photo.description': 'Funcționează cu orice bilet — printat, screenshot sau email. Util când QR-ul nu se vede.',
    'ticket.add.photo.badge': 'Backup',
    'ticket.add.qr.title': 'Scanează QR',
    'ticket.add.qr.description': 'Cel mai rapid — sub 5 secunde. Pentru biletele cu cod QR vizibil.',
    'ticket.add.qr.badge': 'Rapid',

    'ticket.photo.source.title': 'De unde luăm biletul?',
    'ticket.photo.source.camera': 'Cameră',
    'ticket.photo.source.gallery': 'Galerie',
    'ticket.preview.title': 'Verifică biletul',
    'ticket.preview.subtitle': 'Detaliile trebuie să fie vizibile pentru partener.',
    'ticket.preview.retake': 'Reface poza',
    'ticket.preview.continue': 'Continuă',

    'ticket.qr.permission.title': 'Permite accesul la cameră',
    'ticket.qr.permission.subtitle': 'Avem nevoie de cameră ca să scanăm QR-ul de pe bilet.',
    'ticket.qr.permission.cta': 'Permite',
    'ticket.qr.scanning.hint': 'Centrează QR-ul în pătrat',
    'ticket.qr.scanning.hint2': 'Funcționează mai bine cu lumină bună',
    'ticket.qr.validated': 'Bilet validat',
    'ticket.qr.invalid': 'Acesta nu e un bilet Hit Fest valid',
    'ticket.qr.failed.title': 'Nu prinde QR-ul',
    'ticket.qr.failed.message': 'Nu am putut citi QR-ul. Vrei să faci o poză în schimb?',
    'ticket.qr.failed.tryPhoto': 'Fac poză',
    'ticket.qr.failed.retry': 'Mai încerc',
    'ticket.qr.mock': 'Simulează scanare',

    'email.capture.title': 'Aproape gata!',
    'email.capture.subtitle': 'Mai avem nevoie de email-ul tău ca să-ți trimitem codul de reducere.',
    'email.capture.label': 'Email-ul tău',
    'email.capture.placeholder': 'exemplu@email.com',
    'email.capture.helper': 'Folosim email-ul doar pentru codul tău și eventuale actualizări Hit Fest. Fără spam.',
    'email.capture.invalid': 'Verifică formatul email-ului.',
    'email.capture.privacy': 'Sunt de acord cu Politica de confidențialitate',
    'email.capture.marketing': 'Vreau să primesc actualizări Hit Fest pe email',
    'email.capture.submit': 'Trimite și obține codul',
    'email.capture.ticket_added': 'Bilet adăugat',
    'email.capture.change_ticket': 'Schimbă',

    'success.title': 'Gata!',
    'success.subtitle': 'Codul tău Hit Fest:',
    'success.email.sent': 'Am trimis codul și pe email la {email}',
    'success.save_hint': 'Îl găsești oricând pe pagina Reduceri.',
    'success.copy': 'Copiază codul',
    'success.copied': 'Cod copiat',
    'success.cta.discounts': 'Vezi reducerile',
    'success.cta.another': 'Adaugă alt bilet',

    'tickets.title': 'BILETELE MELE',
    'tickets.added_count': '{count} bilete adăugate',
    'tickets.added_count_one': '1 bilet adăugat',
    'tickets.tag.photo': 'Foto',
    'tickets.tag.qr': 'QR',
    'tickets.added_on': 'Adăugat',
    'tickets.delete': 'Șterge bilet',
    'tickets.delete_confirm': 'Sigur ștergi acest bilet? Codul de reducere asociat dispare.',
    'tickets.empty': 'Nu ai bilete adăugate.',
    'tickets.add_more': '+ Adaugă alt bilet',
    'tickets.view': 'Vezi bilet',

    'settings.code.section': 'CODUL TĂU',
    'settings.code.empty': 'Adaugă bilet ca să primești cod de reducere',
    'settings.code.copy': 'Copiază',
    'settings.code.see_tickets': 'Vezi biletele mele',
    'settings.email.section': 'EMAIL',
    'settings.email.none': 'Nici un email salvat încă',
    'settings.email.change': 'Schimbă email',
    'settings.email.delete_data': 'Șterge datele mele',
    'settings.email.delete_confirm': 'Vei pierde codurile, biletele, email-ul și favoritele. Acțiunea nu poate fi anulată.',

    'home.buy_external': 'CUMPĂRĂ BILET PE LIVETICKETS.RO',
    'home.buy_external_short': 'Cumpără pe livetickets.ro',
    'common.back': 'Înapoi', 'common.close': 'Închide', 'common.cancel': 'Renunță',
    'common.delete': 'Șterge', 'common.continue': 'Continuă',
    'common.add': 'Adaugă', 'common.change': 'Schimbă',
    'buy.cta': 'Cumpără bilet pe livetickets.ro',
    'tickets.tag.photo.label': 'Foto bilet',
    'mytickets.empty.title': 'Nu ai încă bilete adăugate',
    'mytickets.empty.subtitle': 'Adaugă biletul tău și primești un cod exclusiv pentru reducerile partenerilor.',
    'mytickets.empty.cta': 'Adaugă bilet',
    'mytickets.empty.divider': 'sau',
    'mytickets.code.label': 'CODUL TĂU DE REDUCERE',
    'mytickets.code.hint': 'Folosește-l la oricare dintre partenerii Hit Fest.',
    'mytickets.code.cta': 'Vezi partenerii',
    'mytickets.list.title': 'BILETELE TALE',
    'mytickets.list.add': 'Adaugă',
    'mytickets.buy.hint': 'Nu ai bilet de festival încă? Cumpără-l pe livetickets.ro și apoi adaugă-l aici.',
    'settings.account.title': 'CONTUL TĂU',
    'settings.account.code': 'Cod reducere',
    'settings.account.email': 'Email',
    'settings.account.no_email': 'Nici un email salvat',
    'settings.account.wipe': 'ȘTERGE DATELE MELE',
    'settings.account.wipe_hint': 'Vei pierde codul, biletele și email-ul. Acțiunea nu poate fi anulată.',
  },
  en: {
    'nav.home': 'Home', 'nav.lineup': 'Line-up', 'nav.reduceri': 'Deals',
    'nav.photo': 'Photo', 'nav.map': 'Map',
    'header.tickets': 'TICKETS', 'header.your_gen': 'Your generation',
    'home.coming_up': 'COMING UP', 'home.see_lineup': 'SEE FULL LINE-UP',
    'home.buy_ticket': 'BUY TICKET · 240 LEI', 'home.artists': 'ARTISTS',
    'home.days': 'DAYS', 'home.favorites': 'FAVORITES',
    'home.countdown_to': 'COUNTDOWN', 'home.host_intro': 'Hosted by',
    'home.host_all3': 'all 3 days', 'home.see_artist': 'SEE ARTIST',
    'home.your_gen_label': 'YOUR GENERATION',
    'count.d': 'DAYS', 'count.h': 'HRS', 'count.m': 'MIN', 'count.s': 'SEC',
    'lineup.full': 'FULL LINE-UP', 'lineup.summary': '17 artists across 3 days · hosted by Liviu Vârciu',
    'lineup.headliner': 'HEADLINER',
    'settings.title': 'SETTINGS', 'settings.language': 'LANGUAGE',
    'settings.theme': 'YOUR GENERATION', 'settings.about': 'ABOUT',
    'settings.notifications': 'NOTIFICATIONS',
    'settings.notif_lineup': 'Schedule changes', 'settings.notif_lineup_d': 'Get notified when times shift',
    'settings.notif_next': 'Next artist', 'settings.notif_next_d': '15 min before each show',
    'settings.notif_partners': 'Partner offers', 'settings.notif_partners_d': 'New discounts added',
    'settings.reset': 'Reset the app', 'settings.reset_confirm': 'Sure? You will lose codes and favorites.',
    'settings.version': 'Hit Fest Bucovina · v1.0', 'settings.edition': '2026 Edition',
    'settings.contact': 'Contact organizer',
    'settings.privacy': 'Privacy policy', 'settings.terms': 'Terms & conditions',
    'settings.credits': 'Made with ♥ for Bucovina',
    'common.back': 'Back', 'common.close': 'Close', 'common.save': 'Save',
    'common.add': 'Add', 'common.change': 'Change',
    'common.cancel': 'Cancel', 'common.delete': 'Delete', 'common.continue': 'Continue',
    'buy.cta': 'Buy ticket on livetickets.ro',
    'tickets.tag.photo.label': 'Photo of ticket',
    'mytickets.empty.title': 'No tickets added yet',
    'mytickets.empty.subtitle': 'Add your ticket and unlock an exclusive code for partner discounts.',
    'mytickets.empty.cta': 'Add ticket',
    'mytickets.empty.divider': 'or',
    'mytickets.code.label': 'YOUR DISCOUNT CODE',
    'mytickets.code.hint': 'Use it with any Hit Fest partner.',
    'mytickets.code.cta': 'See partners',
    'mytickets.list.title': 'YOUR TICKETS',
    'mytickets.list.add': 'Add',
    'mytickets.buy.hint': 'No ticket yet? Buy on livetickets.ro and add it here.',
    'settings.account.title': 'YOUR ACCOUNT',
    'settings.account.code': 'Discount code',
    'settings.account.email': 'Email',
    'settings.account.no_email': 'No email saved',
    'settings.account.wipe': 'DELETE MY DATA',
    'settings.account.wipe_hint': 'You will lose your code, tickets and email. This cannot be undone.',
    'tickets.tag.photo': 'Photo', 'tickets.tag.qr': 'QR',
    'theme.casete.label': 'Cassette Generation', 'theme.cd.label': 'CD Generation', 'theme.mp3.label': 'MP3 Generation',
    'theme.casete.years': 'Born <1990', 'theme.cd.years': 'Born 1990–2000', 'theme.mp3.years': 'Born >2000',
    'lang.label': 'Language',
    'lang.helper': 'Changes the app language — partner descriptions remain in Romanian.',

    'discounts.title': 'PARTNER DISCOUNTS',
    'discounts.subtitle_count': '{count} partners in Bucovina with exclusive offers for festival-goers',
    'discounts.tickets_count': 'Tickets added: {count}',
    'discounts.add_one_more': '+ ticket',

    'discounts.empty.title': 'Add your ticket to unlock the codes',
    'discounts.empty.subtitle': "Bought a Hit Fest ticket? Add it and you'll get an exclusive code for partner discounts.",
    'discounts.empty.cta': 'Add your ticket',
    'discounts.empty.skip': "I don't have a ticket yet",
    'discounts.locked.message': 'Add a ticket to unlock details',

    'ticket.add.title': 'How do you want to add it?',
    'ticket.add.subtitle': 'Pick one of the two options',
    'ticket.add.photo.title': 'Take a photo',
    'ticket.add.photo.description': 'Works with any ticket — printed, screenshot or email. Use when the QR isn’t visible.',
    'ticket.add.photo.badge': 'Backup',
    'ticket.add.qr.title': 'Scan the QR',
    'ticket.add.qr.description': 'Fastest — under 5 seconds. For tickets with a visible QR code.',
    'ticket.add.qr.badge': 'Fast',

    'ticket.photo.source.title': 'Where from?',
    'ticket.photo.source.camera': 'Camera',
    'ticket.photo.source.gallery': 'Gallery',
    'ticket.preview.title': 'Check the ticket',
    'ticket.preview.subtitle': 'Details must be readable for the partner.',
    'ticket.preview.retake': 'Retake',
    'ticket.preview.continue': 'Continue',

    'ticket.qr.permission.title': 'Allow camera access',
    'ticket.qr.permission.subtitle': 'We need the camera to scan the QR on your ticket.',
    'ticket.qr.permission.cta': 'Allow',
    'ticket.qr.scanning.hint': 'Center the QR in the square',
    'ticket.qr.scanning.hint2': 'Works best in good light',
    'ticket.qr.validated': 'Ticket validated',
    'ticket.qr.invalid': "This isn't a valid Hit Fest ticket",
    'ticket.qr.failed.title': "Can't grab the QR",
    'ticket.qr.failed.message': "Couldn't read the QR. Want to take a photo instead?",
    'ticket.qr.failed.tryPhoto': 'Take a photo',
    'ticket.qr.failed.retry': 'Try again',
    'ticket.qr.mock': 'Simulate scan',

    'email.capture.title': 'Almost done!',
    'email.capture.subtitle': "We need your email so we can send you your discount code.",
    'email.capture.label': 'Your email',
    'email.capture.placeholder': 'example@email.com',
    'email.capture.helper': 'We use your email only for your code and possible Hit Fest updates. No spam.',
    'email.capture.invalid': 'Check the email format.',
    'email.capture.privacy': 'I agree with the Privacy Policy',
    'email.capture.marketing': 'I want Hit Fest email updates',
    'email.capture.submit': 'Submit and get my code',
    'email.capture.ticket_added': 'Ticket added',
    'email.capture.change_ticket': 'Change',

    'success.title': 'Done!',
    'success.subtitle': 'Your Hit Fest code:',
    'success.email.sent': 'We also sent the code to {email}',
    'success.save_hint': "You can find it anytime on the Discounts page.",
    'success.copy': 'Copy code',
    'success.copied': 'Code copied',
    'success.cta.discounts': 'See discounts',
    'success.cta.another': 'Add another ticket',

    'tickets.title': 'MY TICKETS',
    'tickets.added_count': '{count} tickets added',
    'tickets.added_count_one': '1 ticket added',
    'tickets.tag.photo': 'Photo',
    'tickets.tag.qr': 'QR',
    'tickets.added_on': 'Added',
    'tickets.delete': 'Delete ticket',
    'tickets.delete_confirm': 'Delete this ticket? The linked discount code will be lost.',
    'tickets.empty': 'No tickets added.',
    'tickets.add_more': '+ Add another ticket',
    'tickets.view': 'View ticket',

    'settings.code.section': 'YOUR CODE',
    'settings.code.empty': 'Add a ticket to get a discount code',
    'settings.code.copy': 'Copy',
    'settings.code.see_tickets': 'See my tickets',
    'settings.email.section': 'EMAIL',
    'settings.email.none': 'No email saved yet',
    'settings.email.change': 'Change email',
    'settings.email.delete_data': 'Delete my data',
    'settings.email.delete_confirm': "You'll lose codes, tickets, email and favourites. This can't be undone.",

    'home.buy_external': 'BUY TICKET ON LIVETICKETS.RO',
    'home.buy_external_short': 'Buy on livetickets.ro',
    'common.back': 'Back', 'common.close': 'Close', 'common.cancel': 'Cancel',
    'common.delete': 'Delete', 'common.continue': 'Continue',
  },
  uk: {
    'nav.home': 'Головна', 'nav.lineup': 'Лайн-ап', 'nav.reduceri': 'Знижки',
    'nav.photo': 'Фото', 'nav.map': 'Мапа',
    'header.tickets': 'КВИТКИ', 'header.your_gen': 'Твоє покоління',
    'home.coming_up': 'ДАЛІ', 'home.see_lineup': 'ПОВНИЙ ЛАЙН-АП',
    'home.buy_ticket': 'КУПИТИ КВИТОК · 240 LEI', 'home.artists': 'АРТИСТИ',
    'home.days': 'ДНІ', 'home.favorites': 'ОБРАНІ',
    'home.countdown_to': 'ЗАЛИШИЛОСЬ', 'home.host_intro': 'Ведучий',
    'home.host_all3': 'усі 3 дні', 'home.see_artist': 'ПЕРЕГЛЯНУТИ',
    'home.your_gen_label': 'ТВОЄ ПОКОЛІННЯ',
    'count.d': 'ДНІ', 'count.h': 'ГОД', 'count.m': 'ХВ', 'count.s': 'СЕК',
    'lineup.full': 'ПОВНИЙ ЛАЙН-АП', 'lineup.summary': '17 артистів за 3 дні · ведучий Лівіу Вирчу',
    'lineup.headliner': 'ХЕДЛАЙНЕР',
    'settings.title': 'НАЛАШТУВАННЯ', 'settings.language': 'МОВА',
    'settings.theme': 'ТВОЄ ПОКОЛІННЯ', 'settings.about': 'ПРО ДОДАТОК',
    'settings.notifications': 'СПОВІЩЕННЯ',
    'settings.notif_lineup': 'Зміни розкладу', 'settings.notif_lineup_d': 'Сповіщати про зміни часу',
    'settings.notif_next': 'Наступний артист', 'settings.notif_next_d': 'За 15 хв до виступу',
    'settings.notif_partners': 'Пропозиції партнерів', 'settings.notif_partners_d': 'Нові знижки',
    'settings.reset': 'Скинути додаток', 'settings.reset_confirm': 'Точно? Втратиш коди та обране.',
    'settings.version': 'Hit Fest Bucovina · v1.0', 'settings.edition': 'Видання 2026',
    'settings.contact': "Зв'язатись з організатором",
    'settings.privacy': 'Політика конфіденційності', 'settings.terms': 'Умови використання',
    'settings.credits': 'Зроблено з ♥ для Буковини',
    'common.back': 'Назад', 'common.close': 'Закрити', 'common.save': 'Зберегти',
    'theme.casete.label': 'Покоління Касет', 'theme.cd.label': 'Покоління CD', 'theme.mp3.label': 'Покоління MP3',
    'theme.casete.years': 'Рік <1990', 'theme.cd.years': '1990–2000', 'theme.mp3.years': '>2000',
    'lang.label': 'Мова',
    'lang.helper': 'Змінює мову інтерфейсу — описи партнерів залишаються румунською.',
  },
};

const loadLang = () => {
  try { return localStorage.getItem(HF_LANG_KEY) || 'ro'; } catch (e) { return 'ro'; }
};
const saveLang = (id) => {
  try { localStorage.setItem(HF_LANG_KEY, id); } catch (e) {}
};

// Simple translator: t('key') -> string in current lang, falls back to RO, then key.
const _LangContext = React.createContext({ lang: 'ro', setLang: () => {} });
const useT = () => {
  const ctx = React.useContext(_LangContext);
  const t = (key) => {
    const tbl = STRINGS[ctx.lang] || STRINGS.ro;
    return tbl[key] || STRINGS.ro[key] || key;
  };
  return { t, lang: ctx.lang, setLang: ctx.setLang };
};
const LangProvider = ({ children, initial = 'ro' }) => {
  const [lang, setLangState] = React.useState(initial);
  React.useEffect(() => { setLangState(loadLang()); }, []);
  const setLang = (id) => { setLangState(id); saveLang(id); };
  return React.createElement(_LangContext.Provider, { value: { lang, setLang } }, children);
};

// ─────────────── LanguageToggle (compact pill button) ───────────────
// Shows current flag + short code; opens a small menu.
const LanguageToggle = ({ variant = 'compact' }) => {
  const { lang, setLang } = useT();
  const [open, setOpen] = React.useState(false);
  const current = LANGS.find(l => l.id === lang) || LANGS[0];

  if (variant === 'inline') {
    return (
      <div style={{ display: 'flex', gap: 6 }}>
        {LANGS.map(l => {
          const isActive = lang === l.id;
          return (
            <button key={l.id} onClick={() => setLang(l.id)}
              style={{
                flex: 1, padding: '12px 8px',
                background: isActive ? 'var(--gen-accent)' : 'var(--hf-paper)',
                color: isActive ? '#fff' : 'var(--color-text-primary)',
                border: '2px solid ' + (isActive ? 'var(--gen-accent)' : 'var(--color-border)'),
                borderRadius: 'var(--r-lg)', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                fontFamily: 'var(--ff-body)',
                transition: 'all var(--t-fast) var(--ease)',
              }}>
              <span style={{ fontSize: 24, lineHeight: 1 }}>{l.flag}</span>
              <span style={{ fontFamily: 'var(--ff-display)', fontSize: 12,
                letterSpacing: '0.06em', fontWeight: 700 }}>
                {l.short}
              </span>
            </button>
          );
        })}
      </div>
    );
  }
  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', gap: 4,
          background: 'var(--hf-crem-2)', color: 'var(--hf-bleumarin)',
          border: 'none', padding: '6px 10px 6px 8px', borderRadius: 999,
          fontFamily: 'var(--ff-body)', fontSize: 12, fontWeight: 700,
          cursor: 'pointer', letterSpacing: 0.5,
        }}>
        <span style={{ fontSize: 14, lineHeight: 1 }}>{current.flag}</span>
        <span>{current.short}</span>
      </button>
      {open && (
        <>
          <div onClick={() => setOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 60 }} />
          <div style={{
            position: 'absolute', top: 'calc(100% + 6px)', right: 0,
            background: 'var(--hf-paper)', borderRadius: 'var(--r-lg)',
            boxShadow: 'var(--sh-lg)', padding: 4, minWidth: 150, zIndex: 70,
            border: '1px solid var(--color-border)',
          }}>
            {LANGS.map(l => (
              <button key={l.id} onClick={() => { setLang(l.id); setOpen(false); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  width: '100%', padding: '8px 10px',
                  background: lang === l.id ? 'var(--gen-accent-soft)' : 'transparent',
                  border: 'none', borderRadius: 'var(--r-md)', cursor: 'pointer',
                  fontFamily: 'var(--ff-body)', textAlign: 'left',
                }}>
                <span style={{ fontSize: 18 }}>{l.flag}</span>
                <span style={{ flex: 1, fontWeight: 600, fontSize: 13 }}>{l.native}</span>
                {lang === l.id && <Icon name="check" size={14} stroke="var(--gen-accent)" strokeWidth={3} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

Object.assign(window, { LANGS, STRINGS, useT, LangProvider, LanguageToggle, loadLang, saveLang });
