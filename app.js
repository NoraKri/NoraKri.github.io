'use strict';

// ══════════════════════════════════════════════════════════════
// SPRITE PALETTE + DATA
// ══════════════════════════════════════════════════════════════

const SPRITE_PALETTE = {
  K:'#3a2f3a', i:'#2a232a',
  s:'#fbe0c8', S:'#e9b89a', B:'#ff9d8b', m:'#c4647a', e:'#3a2f3a',
  h:'#b88a5a', H:'#8a5e3a',
  t:'#c89a78', T:'#a07550',
  p:'#1f1a22', P:'#3a3140',
  w:'#f6efe0', W:'#c6bba6',
  C:'#fafafa', c:'#d9d2c4', O:'#f4b878', o:'#d49056', n:'#ff9aa2',
  d:'#b88656', D:'#8b6244', x:'#5e4030',
  g:'#7fa07a', G:'#4f7350', l:'#a8c192',
  f:'#ff8a3c', F:'#ffd166', r:'#e64a3a',
  u:'#9ec3d6', U:'#5a8aa6',
  y:'#f4c177', Y:'#caa15a',
  q:'#ead6c0', Q:'#b9a98a',
  z:'#e5989b', Z:'#b5838d',
  v:'#a4b494', V:'#6f8c6c',
  M:'#6d6875',
  '#':'#3a2f3a',
};

const SPR_NORA = [
  '................',
  '.....HHHHHH.....',
  '....HhhhhhhH....',
  '....HhhhhhhH....',
  '...HhsssssshH...',
  '...HssHHsssH....',
  '...HseSSseesH...',
  '...HsBsssBssH...',
  '...HssmmssssH...',
  '....HHHHHHHH....',
  '....tttttttt....',
  '...ttttttttt....',
  '..tttTttttTtt...',
  '..ttttttttttt...',
  '..ttttttttttt...',
  '...tttttttt.....',
  '....ttttttt.....',
  '....pppppp......',
  '....pp..pp......',
  '....pp..pp......',
  '....pp..pp......',
  '....PP..PP......',
  '....ww..ww......',
  '...www..www.....',
];

const SPR_NORA_BLINK = [
  '................',
  '.....HHHHHH.....',
  '....HhhhhhhH....',
  '....HhhhhhhH....',
  '...HhsssssshH...',
  '...HssHHsssH....',
  '...HsKKssKKsH...',
  '...HsBsssBssH...',
  '...HssmmssssH...',
  '....HHHHHHHH....',
  '....tttttttt....',
  '...ttttttttt....',
  '..tttTttttTtt...',
  '..ttttttttttt...',
  '..ttttttttttt...',
  '...tttttttt.....',
  '....ttttttt.....',
  '....pppppp......',
  '....pp..pp......',
  '....pp..pp......',
  '....pp..pp......',
  '....PP..PP......',
  '....ww..ww......',
  '...www..www.....',
];

const SPR_CAT = [
  '................',
  '..OO........OO..',
  '.OoO........OoO.',
  '.OOOOOOOOOOOO...',
  '.OOeOOOOOOeOO...',
  '..OOOOnnOOOOO...',
  '..OCCCOOCCCCC...',
  '.CCCCCCCCCCCC...',
  'CCCCCCCCCCCCCC..',
  'CCcCCCCCCCCcCCC.',
  '.CCCCCCCCCCCCC..',
  '..CC........CC..',
];

const SPR_CAT_BLINK = [
  '................',
  '..OO........OO..',
  '.OoO........OoO.',
  '.OOOOOOOOOOOO...',
  '.OOKOOOOOOKOO...',
  '..OOOOnnOOOOO...',
  '..OCCCOOCCCCC...',
  '.CCCCCCCCCCCC...',
  'CCCCCCCCCCCCCC..',
  'CCcCCCCCCCCcCCC.',
  '.CCCCCCCCCCCCC..',
  '..CC........CC..',
];

const SPR_SEWING = [
  '................',
  '...KKKKKKKKKK...',
  '..KZZZZZZZZZK...',
  '..KZZZZZZZZZK...',
  '..KZZqqKqqZZK...',
  '..KZZqzKqqZZK...',
  '..KKKKKKKKKKK...',
  '..KMMMMMMMMMK...',
  '..KMMzzMMMMMK...',
  '..KMMMMMMMMMK...',
  '..KMMMMMMMMMK...',
  '..KKKKKKKKKKK...',
  '..KdddddddddK...',
  '..KKKKKKKKKKK...',
  '................',
  '................',
];

const SPR_KEYBOARD = [
  '....................',
  '.KKKKKKKKKKKKKKKKKK.',
  '.KxxxxxxxxxxxxxxxxK.',
  '.KxqqxqqxqqxqqxqqxK.',
  '.KxqqxqqxqqxqqxqqxK.',
  '.KxxxxxxxxxxxxxxxxK.',
  '.KxqqxqqxqqxqqxqqxK.',
  '.KxqqxqqxqqxqqxqqxK.',
  '.KxxxxxxxxxxxxxxxxK.',
  '.KxqqqqqqqqqqqqqqxK.',
  '.KxxxxxxxxxxxxxxxxK.',
  '.KKKKKKKKKKKKKKKKKK.',
];

const SPR_MUG = [
  '................',
  '................',
  '...KKKKKKK......',
  '...Kqqqqq.KK....',
  '...KqqqqqK.K....',
  '...Kzzzzz.K.....',
  '...Kzzzzz.K.....',
  '...Kqqqqq.K.....',
  '...Kqqqqq.K.....',
  '...KKKKKKK......',
  '...KMMMMMK......',
  '....KKKKK.......',
  '................',
  '................',
  '................',
  '................',
];

const SPR_BOOKS = [
  '................',
  '................',
  '...KKKKKKKK.....',
  '...KzzzzzzK.....',
  '...KzzyyzzK.....',
  '...KKKKKKKK.....',
  '..KqqqqqqqqK....',
  '..KqqyyyqqqK....',
  '..KKKKKKKKKK....',
  '...KuuuuuuK.....',
  '...KuyuuyuK.....',
  '...KuuuuuuK.....',
  '...KKKKKKKK.....',
  '................',
  '................',
  '................',
];

const SPR_DICE = [
  '................',
  '................',
  '................',
  '....KKKKKKKK....',
  '....KqqqqqqK....',
  '....Kq.z.zqK....',
  '....Kqz.zqqK....',
  '....Kq.z.zqK....',
  '....KqqqqqqK....',
  '....KKKKKKKK....',
  '.KKKKKKKK.......',
  '.KqqqqqqK.......',
  '.Kqz.qqzK.......',
  '.Kqq.z.qK.......',
  '.KKKKKKKK.......',
  '................',
];

const SPR_MONITOR = [
  '................',
  'KKKKKKKKKKKKKKKK',
  'KiiiiiiiiiiiiiK.',
  'KiggvvvvvviiiK.',
  'Kiyy..vvvvviiK.',
  'KivvggggvvviiK.',
  'Kiyyyy..vvviiK.',
  'KivvggvvvvviiK.',
  'KiiiiiiiiiiiK..',
  'KKKKKKKKKKKKKK..',
  '.....KKKK.......',
  '....KdddK.......',
  '...KdddddK......',
  '..KKKKKKKKKK....',
  '................',
  '................',
];

// ══════════════════════════════════════════════════════════════
// CONTENT
// ══════════════════════════════════════════════════════════════

const CONTENT = {
  name: 'Nora',
  location: 'Bergen, Norge',
  tagline: 'Frontend-utvikler om dagen, hobbysamler om kvelden.',
  blurb: 'Jeg lager nettsider til daglig og hundre småting bare for moro skyld — klær jeg faktisk kan gå med, malerier til veggen, små spill til meg selv og venner, og apper som fikser de små hverdagsplagene ingen andre bryr seg om.',
  contacts: [
    { kind: 'GitHub',     handle: 'NoraKri',                    href: 'https://github.com/NoraKri' },
    { kind: 'LinkedIn',   handle: 'NoraKri',                    href: 'https://www.linkedin.com/in/NoraKri' },
    { kind: 'Email',      handle: 'nora.kristiansen@proton.me', href: 'mailto:nora.kristiansen@proton.me' },
    { kind: 'Threadloop', handle: 'NoraKri',                    href: '#' },
  ],
  projects: [
    { name: 'Brewminder',  blurb: 'En liten bryggetimer som husker favorittene dine.',   tag: 'iOS · SwiftUI',  color: 'rose',  detail: 'Velg en te, trykk start, få en mild lyd når den er klar. Husker de fem siste så du kan brygge på nytt med ett trykk. Lagd for meg, brukt av meg hver ettermiddag.' },
    { name: 'Stitchpad',   blurb: 'Mønsternotater med radteller innebygd.',               tag: 'Web · React',    color: 'sage',  detail: 'For når strikke- og søm-PDF-er ikke holder. Frie notater, trykk-for-å-telle-rader, lagre WIP-bilder ved trinnet de hører til.' },
    { name: 'Quietlist',   blurb: 'En todo-app som ikke roper på deg.',                   tag: 'Web · React',    color: 'mauve', detail: 'Ingen streaks, ingen merker, ingen røde prikker. Bare en liste som holder dagens ting og rolig pakker resten vekk til du spør etter dem.' },
    { name: 'Tiny Garden', blurb: 'Et pikselkunst-puslespill om å dyrke urter.',          tag: 'Spill · Pico-8', color: 'gold',  detail: 'Match småplanter fra samme familie for å få dem til å vokse. 30 små brett, et lydspor jeg lagde i BeepBox, og en chill timer-modus for når du ikke vil tenke.' },
  ],
  sewing: [
    { name: 'Linkjole',          note: 'Egendesignet, knapper bak, dype lommer.',         swatch: '#c39477', detail: 'Tungt linstoff i varm sand. Mønstertegning fra bunnen, tre prøver før jeg stolte på snittet. Lommene rommer en pocketbok.' },
    { name: 'Lappeteppe',        note: 'Restebiter fra hvert prosjekt det siste året.',   swatch: '#e5989b', detail: 'Tolv måneder med restebiter fra hvert plagg, sydd sammen til et mykt teppe til lesestolen. Håndsteppet om kveldene mens jeg så på serier.' },
    { name: 'Kordfløyelsbukser', note: 'Vide bein, kontraststikning.',                     swatch: '#8b6f5c', detail: 'Åtte-rifflet kordfløyel, vide bein, sennepsgul stikning på alle sømmer. Det mest innslitte plagget jeg eier.' },
    { name: 'Skråsnitt-bluse',   note: 'Glatt stoff, lærte meg tålmodighet.',               swatch: '#a4b494', detail: 'Salviegrønn rayon klippet på skrå, franske sømmer og rullekant. Kjempet imot på hvert steg. Hadde den på den første varme dagen i mai.' },
  ],
};


// ══════════════════════════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════════════════════════

function slugify(name) {
  return name.toLowerCase()
    .replace(/å/g, 'a').replace(/æ/g, 'ae').replace(/ø/g, 'o')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// Timer registry — cleared on each navigation to stop stale blink loops.
const timers = new Set();
function track(id) { timers.add(id); return id; }
function clearTimers() { timers.forEach(id => clearTimeout(id)); timers.clear(); }

// Keyboard handler for detail page; cleared on navigation.
let _keyHandler = null;
function setKeyHandler(fn) {
  if (_keyHandler) window.removeEventListener('keydown', _keyHandler);
  _keyHandler = fn;
  if (fn) window.addEventListener('keydown', fn);
}

// ══════════════════════════════════════════════════════════════
// PIXEL RENDERER
// ══════════════════════════════════════════════════════════════

function drawSprite(canvas, sprite, palette, scale) {
  if (!canvas || !sprite || !sprite.length) return;
  const rows = sprite.length;
  const cols = sprite[0].length;
  canvas.width  = cols * scale;
  canvas.height = rows * scale;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < rows; y++) {
    const row = sprite[y];
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (ch === '.' || ch === ' ') continue;
      const color = palette[ch];
      if (!color) continue;
      ctx.fillStyle = color;
      ctx.fillRect(x * scale, y * scale, scale, scale);
    }
  }
}

// ══════════════════════════════════════════════════════════════
// ANIMATED SPRITES
// ══════════════════════════════════════════════════════════════

function createNoraIdle(scale) {
  const wrap = document.createElement('div');
  wrap.style.cssText = 'display:inline-block; animation:nora-bob 2.2s ease-in-out infinite;';
  const canvas = document.createElement('canvas');
  canvas.className = 'px';
  wrap.appendChild(canvas);
  drawSprite(canvas, SPR_NORA, SPRITE_PALETTE, scale);

  let cancelled = false;
  function tick() {
    if (cancelled) return;
    drawSprite(canvas, SPR_NORA_BLINK, SPRITE_PALETTE, scale);
    track(setTimeout(() => {
      if (!cancelled) drawSprite(canvas, SPR_NORA, SPRITE_PALETTE, scale);
    }, 140));
    track(setTimeout(tick, 2600 + Math.random() * 2400));
  }
  track(setTimeout(tick, 1800));
  return wrap;
}

function createCatIdle(scale) {
  const wrap = document.createElement('div');
  wrap.style.cssText = 'display:inline-block; animation:cat-bob 3s ease-in-out infinite;';
  const canvas = document.createElement('canvas');
  canvas.className = 'px';
  wrap.appendChild(canvas);
  drawSprite(canvas, SPR_CAT, SPRITE_PALETTE, scale);

  let cancelled = false;
  function tick() {
    if (cancelled) return;
    drawSprite(canvas, SPR_CAT_BLINK, SPRITE_PALETTE, scale);
    track(setTimeout(() => {
      if (!cancelled) drawSprite(canvas, SPR_CAT, SPRITE_PALETTE, scale);
    }, 180));
    track(setTimeout(tick, 3200 + Math.random() * 2600));
  }
  track(setTimeout(tick, 900));
  return wrap;
}

// ══════════════════════════════════════════════════════════════
// SPARKLES
// ══════════════════════════════════════════════════════════════

function createSparkles(count) {
  const wrap = document.createElement('div');
  wrap.setAttribute('aria-hidden', 'true');
  wrap.style.cssText = 'position:absolute; inset:0; pointer-events:none; z-index:1;';

  for (let i = 0; i < count; i++) {
    const x    = 1 + Math.random() * 98;
    const y    = 1 + Math.random() * 98;
    const size = 10 + Math.floor(Math.random() * 10);
    const dur  = (2.0 + Math.random() * 2.4).toFixed(2);
    const del  = (-Math.random() * 4).toFixed(2);
    const rot  = Math.floor(Math.random() * 4) * 22.5;

    const star = document.createElement('div');
    star.style.cssText = `position:absolute;left:${x}%;top:${y}%;width:${size}px;height:${size}px;transform:translate(-50%,-50%) rotate(${rot}deg);color:var(--paper);`;

    const shape = document.createElement('div');
    shape.style.cssText = `width:100%;height:100%;background:currentColor;clip-path:polygon(50% 0,58% 42%,100% 50%,58% 58%,50% 100%,42% 58%,0 50%,42% 42%);animation:twinkle ${dur}s ease-in-out ${del}s infinite;`;

    star.appendChild(shape);
    wrap.appendChild(star);
  }
  return wrap;
}

// ══════════════════════════════════════════════════════════════
// SVG ICONS
// ══════════════════════════════════════════════════════════════

function svgIcon(kind) {
  const s = 28;
  const wrap = document.createElement('div');
  if (kind === 'GitHub') {
    wrap.innerHTML = `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="GitHub"><path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-7a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.3-3.7 1.4a13 13 0 0 0-6.6 0C5.9 1.4 4.7 1.7 4.7 1.7a5 5 0 0 0-.1 3.7A5.4 5.4 0 0 0 3 9c0 5.4 3.2 6.7 6.2 7A3 3 0 0 0 8.3 18v3"/></svg>`;
  } else if (kind === 'LinkedIn') {
    wrap.innerHTML = `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn"><rect x="3" y="9" width="4" height="12" rx="0.5"/><circle cx="5" cy="5" r="2"/><path d="M10 9h3.8v1.8h.05a4.2 4.2 0 0 1 3.75-2C21 8.8 22 11.3 22 14.5V21h-4v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H10z"/></svg>`;
  } else if (kind === 'Email') {
    wrap.innerHTML = `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Email"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`;
  } else if (kind === 'Threadloop') {
    wrap.innerHTML = `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Threadloop"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3"/></svg>`;
  }
  return wrap.firstElementChild;
}

function pinIcon() {
  const wrap = document.createElement('div');
  wrap.innerHTML = `<svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true" style="flex-shrink:0"><path d="M6 0C3 0 1 2 1 5c0 3.5 5 9 5 9s5-5.5 5-9c0-3-2-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"/></svg>`;
  return wrap.firstElementChild;
}

// ══════════════════════════════════════════════════════════════
// HOME PAGE — INTRO
// ══════════════════════════════════════════════════════════════

function buildIntro() {
  const row = document.createElement('div');
  row.className = 'intro-row';

  const left = document.createElement('div');

  const label = document.createElement('div');
  label.className = 'mono intro-label';
  label.textContent = 'nora.kristiansen / homepage';

  const h1 = document.createElement('h1');
  h1.className = 'coiny intro-headline';
  h1.textContent = 'Hei, æ e Nora.';

  const tagline = document.createElement('div');
  tagline.className = 'intro-tagline';
  tagline.textContent = CONTENT.tagline;

  left.appendChild(label);
  left.appendChild(h1);
  left.appendChild(tagline);

  const spriteWrap = document.createElement('div');
  spriteWrap.className = 'intro-sprite-wrap';
  spriteWrap.appendChild(createNoraIdle(5));

  row.appendChild(left);
  row.appendChild(spriteWrap);
  return row;
}

// ══════════════════════════════════════════════════════════════
// HOME PAGE — ABOUT CARD
// ══════════════════════════════════════════════════════════════

function buildSocialTile(contact) {
  const a = document.createElement('a');
  a.className = 'social-tile';
  a.href = contact.href;
  if (!contact.href.startsWith('mailto:') && contact.href !== '#') {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }

  const box = document.createElement('div');
  box.className = 'social-icon-box';
  const icon = svgIcon(contact.kind);
  if (icon) box.appendChild(icon);

  const handle = document.createElement('div');
  handle.className = 'mono social-handle';
  handle.textContent = contact.handle;

  a.appendChild(box);
  a.appendChild(handle);
  return a;
}

function buildAboutCard() {
  const section = document.createElement('section');
  section.className = 'section';

  const card = document.createElement('div');
  card.className = 'card-shell';

  const grid = document.createElement('div');
  grid.className = 'about-grid';

  // Left: cat + caption
  const catCol = document.createElement('div');
  catCol.className = 'about-cat';
  catCol.appendChild(createCatIdle(4));
  const catLabel = document.createElement('div');
  catLabel.className = 'mono about-cat-label';
  catLabel.textContent = 'dette er Sesam';
  catCol.appendChild(catLabel);

  // Right: heading, blurb, socials
  const rightCol = document.createElement('div');

  const headingRow = document.createElement('div');
  headingRow.className = 'about-heading-row';
  const h2 = document.createElement('h2');
  h2.className = 'coiny about-h2';
  h2.textContent = 'Hvem er jeg?';
  const loc = document.createElement('div');
  loc.className = 'mono about-location';
  loc.appendChild(pinIcon());
  loc.appendChild(document.createTextNode(CONTENT.location));
  headingRow.appendChild(h2);
  headingRow.appendChild(loc);

  const blurb = document.createElement('p');
  blurb.className = 'about-blurb';
  blurb.textContent = CONTENT.blurb;

  const divider = document.createElement('div');
  divider.className = 'about-divider';
  const siHei = document.createElement('div');
  siHei.className = 'mono about-si-hei';
  siHei.textContent = 'si hei';
  const socialRow = document.createElement('div');
  socialRow.className = 'social-row';
  CONTENT.contacts.forEach(c => socialRow.appendChild(buildSocialTile(c)));
  divider.appendChild(siHei);
  divider.appendChild(socialRow);

  rightCol.appendChild(headingRow);
  rightCol.appendChild(blurb);
  rightCol.appendChild(divider);

  grid.appendChild(catCol);
  grid.appendChild(rightCol);
  card.appendChild(grid);
  section.appendChild(card);
  return section;
}

// ══════════════════════════════════════════════════════════════
// HOME PAGE — HOBBY CARD (sewing + projects)
// ══════════════════════════════════════════════════════════════

function buildSewingTile(entry) {
  const btn = document.createElement('button');
  btn.className = 'tile';
  btn.setAttribute('aria-label', entry.name);

  const imgWrap = document.createElement('div');
  imgWrap.className = 'tile-img';
  imgWrap.style.background = entry.swatch;
  const stripe = document.createElement('div');
  stripe.className = 'tile-stripe';
  imgWrap.appendChild(stripe);

  const nameRow = document.createElement('div');
  nameRow.className = 'tile-name-row';
  const name = document.createElement('div');
  name.className = 'coiny tile-name';
  name.textContent = entry.name;
  const arrow = document.createElement('div');
  arrow.className = 'coiny tile-arrow';
  arrow.textContent = '→';
  nameRow.appendChild(name);
  nameRow.appendChild(arrow);

  const note = document.createElement('div');
  note.className = 'tile-note';
  note.textContent = entry.note;

  const tag = document.createElement('div');
  tag.className = 'mono tile-tag';
  tag.textContent = 'les mer';

  btn.appendChild(imgWrap);
  btn.appendChild(nameRow);
  btn.appendChild(note);
  btn.appendChild(tag);

  btn.addEventListener('click', () => navigate('sewing', entry));
  return btn;
}

function buildProjectTile(entry) {
  const spriteMap = { rose: SPR_MUG, sage: SPR_BOOKS, mauve: SPR_MONITOR, gold: SPR_DICE };
  const spr = spriteMap[entry.color] || SPR_MONITOR;

  const btn = document.createElement('button');
  btn.className = 'tile';
  btn.setAttribute('aria-label', entry.name);

  const imgWrap = document.createElement('div');
  imgWrap.className = 'tile-img tile-img-project';
  const canvas = document.createElement('canvas');
  canvas.className = 'px';
  drawSprite(canvas, spr, SPRITE_PALETTE, 6);
  imgWrap.appendChild(canvas);

  const nameRow = document.createElement('div');
  nameRow.className = 'tile-name-row';
  const name = document.createElement('div');
  name.className = 'coiny tile-name';
  name.textContent = entry.name;
  const arrow = document.createElement('div');
  arrow.className = 'coiny tile-arrow';
  arrow.textContent = '→';
  nameRow.appendChild(name);
  nameRow.appendChild(arrow);

  const blurb = document.createElement('div');
  blurb.className = 'tile-note';
  blurb.textContent = entry.blurb;

  const tag = document.createElement('div');
  tag.className = 'mono tile-tag';
  tag.textContent = entry.tag + ' · les mer';

  btn.appendChild(imgWrap);
  btn.appendChild(nameRow);
  btn.appendChild(blurb);
  btn.appendChild(tag);

  btn.addEventListener('click', () => navigate('project', entry));
  return btn;
}

function buildHobbyCard(title, subtitle, sprite, entries, kind) {
  const section = document.createElement('section');
  section.className = 'section';

  const card = document.createElement('div');
  card.className = 'card-shell';

  // Header row
  const header = document.createElement('div');
  header.className = 'hobby-header';

  const titleWrap = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.className = 'coiny hobby-title';
  h2.textContent = title;
  const sub = document.createElement('div');
  sub.className = 'mono hobby-subtitle';
  sub.textContent = subtitle;
  titleWrap.appendChild(h2);
  titleWrap.appendChild(sub);

  const headerRight = document.createElement('div');
  headerRight.className = 'hobby-header-right';

  const badge = document.createElement('div');
  badge.className = 'hobby-badge';
  const badgeCanvas = document.createElement('canvas');
  badgeCanvas.className = 'px';
  drawSprite(badgeCanvas, sprite, SPRITE_PALETTE, 3);
  badge.appendChild(badgeCanvas);
  headerRight.appendChild(badge);

  header.appendChild(titleWrap);
  header.appendChild(headerRight);

  // Scroller
  const scroller = document.createElement('div');
  scroller.className = 'hobby-scroller';

  entries.forEach(entry => {
    const cell = document.createElement('div');
    cell.appendChild(kind === 'sewing' ? buildSewingTile(entry) : buildProjectTile(entry));
    scroller.appendChild(cell);
  });

  const scrollerWrap = document.createElement('div');
  scrollerWrap.className = 'hobby-scroller-wrap';
  scrollerWrap.appendChild(scroller);

  const updateFades = () => {
    const atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 4;
    const scrolled = scroller.scrollLeft > 4;
    scrollerWrap.classList.toggle('at-end', atEnd);
    scrollerWrap.classList.toggle('scrolled', scrolled);
  };
  scroller.addEventListener('scroll', updateFades);

  card.appendChild(header);
  card.appendChild(scrollerWrap);
  section.appendChild(card);
  return section;
}

// ══════════════════════════════════════════════════════════════
// DETAIL PAGE
// ══════════════════════════════════════════════════════════════

function buildNavCard(direction, entry, kind) {
  if (!entry) return document.createElement('div');
  const isPrev = direction === 'prev';

  const btn = document.createElement('button');
  btn.className = 'nav-card coiny ' + direction;
  btn.setAttribute('aria-label', (isPrev ? 'Forrige: ' : 'Neste: ') + entry.name);

  const dir = document.createElement('div');
  dir.className = 'mono nav-card-dir';
  dir.textContent = isPrev ? '← forrige' : 'neste →';

  const name = document.createElement('div');
  name.className = 'coiny nav-card-name';
  name.textContent = entry.name;

  const note = document.createElement('div');
  note.className = 'nav-card-note';
  note.textContent = entry.note || entry.blurb;

  btn.appendChild(dir);
  btn.appendChild(name);
  btn.appendChild(note);

  btn.addEventListener('click', () => navigate(kind, entry));
  return btn;
}

function buildDetailPage(kind, entry) {
  const list  = kind === 'sewing' ? CONTENT.sewing : CONTENT.projects;
  const idx   = list.findIndex(e => e.name === entry.name);
  const prev  = idx > 0 ? list[idx - 1] : null;
  const next  = idx < list.length - 1 ? list[idx + 1] : null;
  const label = kind === 'sewing' ? 'Syrommet' : 'Verkstedet';

  const spriteMap = { rose: SPR_MUG, sage: SPR_BOOKS, mauve: SPR_MONITOR, gold: SPR_DICE };

  // Keyboard navigation
  setKeyHandler(e => {
    if (e.key === 'Escape' || e.key === 'Backspace') { e.preventDefault(); navigate(null, null); }
    if (e.key === 'ArrowLeft'  && prev) navigate(kind, prev);
    if (e.key === 'ArrowRight' && next) navigate(kind, next);
  });

  const wrap = document.createElement('div');

  // Top bar: back button + breadcrumb
  const topbar = document.createElement('div');
  topbar.className = 'detail-topbar';

  const backBtn = document.createElement('button');
  backBtn.className = 'coiny back-btn';
  backBtn.textContent = '← tilbake til forsiden';
  backBtn.addEventListener('click', () => navigate(null, null));

  const crumb = document.createElement('div');
  crumb.className = 'mono breadcrumb';
  crumb.textContent = `${label} / ${idx + 1} av ${list.length}`;

  topbar.appendChild(backBtn);
  topbar.appendChild(crumb);

  // Hero card
  const heroSection = document.createElement('section');
  heroSection.style.marginBottom = '60px';

  const heroCard = document.createElement('div');
  heroCard.className = 'card-shell';

  const heroGrid = document.createElement('div');
  heroGrid.className = 'hero-grid';

  // Hero image
  const heroImg = document.createElement('div');
  heroImg.className = 'hero-img';
  if (kind === 'sewing') {
    heroImg.style.background = entry.swatch;
    const stripe = document.createElement('div');
    stripe.className = 'hero-stripe';
    heroImg.appendChild(stripe);
  } else {
    heroImg.style.background = 'var(--bg-2)';
    const canvas = document.createElement('canvas');
    canvas.className = 'px';
    drawSprite(canvas, spriteMap[entry.color] || SPR_MONITOR, SPRITE_PALETTE, 12);
    heroImg.appendChild(canvas);
  }

  // Hero text
  const heroText = document.createElement('div');

  const tagEl = document.createElement('div');
  tagEl.className = 'mono detail-tag';
  tagEl.textContent = kind === 'sewing' ? 'fra syrommet' : (entry.tag || 'prosjekt');

  const h1 = document.createElement('h1');
  h1.className = 'coiny detail-h1';
  h1.textContent = entry.name;

  const noteEl = document.createElement('div');
  noteEl.className = 'detail-note';
  noteEl.textContent = entry.note || entry.blurb;

  const bodyEl = document.createElement('p');
  bodyEl.className = 'detail-body';
  bodyEl.textContent = entry.detail || 'Mer info kommer snart.';

  heroText.appendChild(tagEl);
  heroText.appendChild(h1);
  heroText.appendChild(noteEl);
  heroText.appendChild(bodyEl);

  heroGrid.appendChild(heroImg);
  heroGrid.appendChild(heroText);
  heroCard.appendChild(heroGrid);
  heroSection.appendChild(heroCard);

  // Prev / next
  const prevNext = document.createElement('section');
  const pnGrid = document.createElement('div');
  pnGrid.className = 'prev-next-grid';
  pnGrid.appendChild(buildNavCard('prev', prev, kind));
  pnGrid.appendChild(buildNavCard('next', next, kind));
  prevNext.appendChild(pnGrid);

  // Detail footer
  const footer = document.createElement('footer');
  footer.className = 'mono detail-footer';
  footer.textContent = '← tilbake · esc · piltastene bytter prosjekt';

  wrap.appendChild(topbar);
  wrap.appendChild(heroSection);
  wrap.appendChild(prevNext);
  wrap.appendChild(footer);

  return wrap;
}

// ══════════════════════════════════════════════════════════════
// ROUTER + RENDER
// ══════════════════════════════════════════════════════════════

function parseHash() {
  const hash = location.hash.replace(/^#\/?/, '');
  if (!hash) return { route: 'home' };
  const parts = hash.split('/');
  const kind  = parts[0];
  const slug  = parts[1];
  if (!slug) return { route: 'home' };
  const list  = kind === 'sewing' ? CONTENT.sewing : CONTENT.projects;
  const entry = list.find(e => slugify(e.name) === slug);
  return entry ? { route: 'detail', kind, entry } : { route: 'home' };
}

function navigate(kind, entry) {
  clearTimers();
  setKeyHandler(null);
  window.scrollTo(0, 0);

  if (!kind || !entry) {
    location.hash = '#';
  } else {
    location.hash = `#${kind}/${slugify(entry.name)}`;
  }
}

function render() {
  clearTimers();
  setKeyHandler(null);

  const shell = document.getElementById('shell');
  shell.innerHTML = '';

  // Two sparkle layers (same as reference: primary + 45% secondary)
  shell.appendChild(createSparkles(36));
  shell.appendChild(createSparkles(16));

  const content = document.createElement('div');
  content.id = 'content';

  const state = parseHash();

  if (state.route === 'detail') {
    content.appendChild(buildDetailPage(state.kind, state.entry));
  } else {
    content.appendChild(buildIntro());
    content.appendChild(buildAboutCard());
    content.appendChild(buildHobbyCard('Syrommet',  'ting jeg har klippet, nålet og sydd ferdig', SPR_SEWING,   CONTENT.sewing,    'sewing'));
    content.appendChild(buildHobbyCard('Verkstedet', 'apper og spill jeg diller med',             SPR_KEYBOARD,  CONTENT.projects,  'project'));

    const footer = document.createElement('footer');
    footer.className = 'mono home-footer';
    footer.textContent = `lagd med altfor masse kaffe · © ${CONTENT.name} · ${new Date().getFullYear()}`;
    content.appendChild(footer);
  }

  shell.appendChild(content);
}

// ══════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════

window.addEventListener('hashchange', render);

window.addEventListener('DOMContentLoaded', () => {
  if (!location.hash || location.hash === '#') {
    history.replaceState(null, '', '#');
  }
  render();
});
