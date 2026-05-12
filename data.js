// Hit Fest Bucovina — Festival data
const FESTIVAL = {
  name: "HIT FEST BUCOVINA",
  tagline: "Muzica anilor '80 · '90 · 2000",
  subtagline: "GET IN THE RETRO MOOD",
  dates: "7–9 AUGUST 2026",
  location: "GURA HUMORULUI · PARC ARINIȘ",
  host: "Liviu Vârciu"
};
const LINEUP = {
  7: [{
    id: 'haddaway',
    name: 'HADDAWAY',
    time: '22:00',
    era: '90s',
    country: '🇹🇹/🇩🇪',
    headliner: true,
    hits: ['What Is Love', 'Life', 'Rock My Heart'],
    bio: 'Născut în Trinidad, devenit fenomen global din Germania, Haddaway a definit eurodance-ul anilor \'90 cu „What Is Love" — un cântec care nu a încetat să sune la fiecare petrecere de atunci. Vine la Bucovina cu hiturile care ne-au făcut să dansăm o generație întreagă.'
  }, {
    id: 'la',
    name: 'L.A.',
    time: '20:30',
    era: '90s',
    country: '🇷🇴',
    role: 'Trupă'
  }, {
    id: 'denisa',
    name: 'Denisa Puițău',
    time: '19:00',
    era: '00s',
    country: '🇷🇴'
  }, {
    id: 'pedro',
    name: 'DJ Pedro',
    time: '18:00',
    era: '90s',
    country: '🇷🇴',
    role: 'DJ Set'
  }, {
    id: 'campo7',
    name: 'DJ Campo',
    time: '17:00',
    era: '00s',
    country: '🇷🇴',
    role: 'DJ Set'
  }, {
    id: 'stelisse',
    name: 'MC Stelisse',
    time: '16:30',
    era: '00s',
    country: '🇷🇴',
    role: 'MC'
  }, {
    id: 'deeix',
    name: 'MC Deeix & Alyssia',
    time: '16:00',
    era: '00s',
    country: '🇷🇴',
    role: 'MC'
  }],
  8: [{
    id: 'funfactory',
    name: 'FUN FACTORY',
    time: '22:00',
    era: '90s',
    country: '🇩🇪',
    headliner: true,
    hits: ['Close to You', 'I Wanna B With U', 'Doh Wah Diddy'],
    bio: 'Trupa germană care a transformat eurodance-ul într-un summer party permanent. „Close to You" rămâne un anthem absolut.'
  }, {
    id: 'ciro',
    name: 'Ciro De Luca',
    time: '20:30',
    era: '90s',
    country: '🇮🇹'
  }, {
    id: 'rao',
    name: 'Trupa RAO',
    time: '19:00',
    era: '90s',
    country: '🇷🇴',
    role: 'Trupă'
  }, {
    id: 'yannis',
    name: 'Yannis',
    time: '18:00',
    era: '00s',
    country: '🇷🇴'
  }, {
    id: 'sofia',
    name: 'Sofia Vasile',
    time: '17:00',
    era: '00s',
    country: '🇷🇴'
  }, {
    id: 'campo8',
    name: 'DJ Campo',
    time: '16:00',
    era: '00s',
    country: '🇷🇴',
    role: 'DJ Set'
  }],
  9: [{
    id: 'georgiana',
    name: 'GEORGIANA LOBONȚ',
    time: '22:00',
    era: '00s',
    country: '🇷🇴',
    headliner: true,
    hits: ['Manele Hits', 'Petrecere', 'Bucovina'],
    bio: 'Vocea Bucovinei și un fenomen de petrecere — Georgiana închide festivalul cu un show pe care nimeni nu vrea să-l rateze.'
  }, {
    id: 'dony',
    name: 'Dony & Christian D',
    time: '20:30',
    era: '00s',
    country: '🇷🇴'
  }, {
    id: 'provincialii',
    name: 'Provincialii',
    time: '19:00',
    era: '90s',
    country: '🇷🇴',
    role: 'Trupă'
  }, {
    id: 'alovski',
    name: 'DJ Alovski',
    time: '18:00',
    era: '00s',
    country: '🇷🇴',
    role: 'DJ Set'
  }]
};

// viewBox is 400×500. Each zone has a `shape` describing its SVG geometry.
const ZONES = [{
  id: 'main',
  name: 'Scena Principală',
  cat: 'scenă',
  color: 'var(--hf-coral)',
  desc: 'Headliners zilnici · capacitate 8.000 · sunet L-Acoustics K2',
  shape: {
    type: 'rect',
    x: 100,
    y: 70,
    w: 200,
    h: 78,
    r: 14
  }
}, {
  id: 'b80',
  name: 'Bar 80s',
  cat: 'bar',
  color: 'var(--hf-galben)',
  desc: 'Cocktailuri retro · vinyl DJ · prețuri: bere 12 lei, cocktail 25 lei',
  shape: {
    type: 'rect',
    x: 38,
    y: 175,
    w: 84,
    h: 56,
    r: 12
  }
}, {
  id: 'b90',
  name: 'Bar 90s',
  cat: 'bar',
  color: 'var(--hf-turcoaz)',
  desc: 'Beri artizanale · ediția specială Hit Fest · neon + casete VHS',
  shape: {
    type: 'rect',
    x: 278,
    y: 175,
    w: 84,
    h: 56,
    r: 12
  }
}, {
  id: 'b00',
  name: 'Bar 2000s',
  cat: 'bar',
  color: 'var(--hf-portocaliu)',
  desc: 'Shoturi & spritz · neon zone · DJ set între concerte',
  shape: {
    type: 'rect',
    x: 158,
    y: 360,
    w: 84,
    h: 50,
    r: 12
  }
}, {
  id: 'kids',
  name: 'Kids Zone',
  cat: 'family',
  color: '#B8D936',
  desc: '„O Vacanță în Miniatură" · gratuit pentru copii sub 14 ani · supraveghere animatori',
  shape: {
    type: 'rect',
    x: 36,
    y: 268,
    w: 110,
    h: 78,
    r: 14
  }
}, {
  id: 'food',
  name: 'Foodcourt',
  cat: 'food',
  color: '#FFB6A8',
  desc: '12 standuri · bucătărie tradițională Bucovineană · vegan options',
  shape: {
    type: 'rect',
    x: 254,
    y: 268,
    w: 110,
    h: 78,
    r: 14
  }
}, {
  id: 'info',
  name: 'Punct Info',
  cat: 'service',
  color: 'var(--hf-bleumarin)',
  desc: 'Pierdute & găsite · acreditări media · merch oficial',
  shape: {
    type: 'circle',
    cx: 200,
    cy: 178,
    r: 19
  }
}, {
  id: 'med',
  name: 'Prim Ajutor',
  cat: 'service',
  color: '#E94B5A',
  desc: 'Echipă SMURD permanentă · defibrilator · primă intervenție',
  shape: {
    type: 'circle',
    cx: 320,
    cy: 110,
    r: 17
  }
}, {
  id: 'wc-n',
  name: 'Toalete Nord',
  cat: 'service',
  color: '#7C8694',
  desc: 'Toalete ecologice · 16 cabine · accesibile',
  shape: {
    type: 'circle',
    cx: 80,
    cy: 110,
    r: 16
  }
}, {
  id: 'wc-s',
  name: 'Toalete Sud',
  cat: 'service',
  color: '#7C8694',
  desc: 'Toalete ecologice · 12 cabine · cu duș',
  shape: {
    type: 'circle',
    cx: 285,
    cy: 385,
    r: 16
  }
}, {
  id: 'exit-n',
  name: 'Intrare Principală',
  cat: 'service',
  color: '#3A4452',
  desc: 'Intrare festival · control bilete · north gate',
  shape: {
    type: 'chevron',
    x: 200,
    y: 30,
    dir: 'n'
  }
}, {
  id: 'exit-e',
  name: 'Ieșire Est',
  cat: 'service',
  color: '#3A4452',
  desc: 'Ieșire urgență · spre str. Voievod Petru Mușat',
  shape: {
    type: 'chevron',
    x: 378,
    y: 240,
    dir: 'e'
  }
}, {
  id: 'exit-w',
  name: 'Ieșire Vest',
  cat: 'service',
  color: '#3A4452',
  desc: 'Ieșire urgență · spre parcare Primăria',
  shape: {
    type: 'chevron',
    x: 24,
    y: 240,
    dir: 'w'
  }
}, {
  id: 'exit-s',
  name: 'Ieșire Sud (Camping)',
  cat: 'service',
  color: '#3A4452',
  desc: 'Acces zonă camping · trecere peste podețul de lemn',
  shape: {
    type: 'chevron',
    x: 200,
    y: 450,
    dir: 's'
  }
}];
window.FESTIVAL = FESTIVAL;
window.LINEUP = LINEUP;
window.ZONES = ZONES;
