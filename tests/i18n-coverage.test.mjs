import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const js = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const match = js.match(/const translations = (\{[\s\S]*?\n  \});/);
assert.ok(match, 'The language dictionary should be present.');
const dict = runInNewContext('(' + match[1] + ')');
const htmlKeys = [...new Set([...html.matchAll(/data-i18n(?:-aria-label|-alt)?="([^"]+)"/g)].map(x => x[1]))];

test('Every visible and accessibility i18n key exists in ES and EN', () => {
  for (const key of htmlKeys) {
    assert.equal(typeof dict.es[key], 'string', 'Spanish missing: ' + key);
    assert.equal(typeof dict.en[key], 'string', 'English missing: ' + key);
    assert.ok(dict.es[key].trim(), 'Empty Spanish: ' + key);
    assert.ok(dict.en[key].trim(), 'Empty English: ' + key);
  }
});
test('Both dictionaries expose exactly the same keys', () => {
  assert.deepEqual(Object.keys(dict.es).sort(), Object.keys(dict.en).sort());
});
test('Previously English-only sections contain Spanish copy', () => {
  const expected = {
    'about.title': 'Curioso',
    'about.p1': 'Soy Carlos',
    'about.p2': 'Estudio',
    'approach.three.desc': 'Distingo',
    'contact.desc': 'Busco',
    'footer.note': 'HECHO',
    'skills.backend': 'SERVIDOR',
    'skills.quality': 'CALIDAD',
    'skills.tools': 'IA aplicada',
    'offline.available': 'DISPONIBLE',
    'decision.bookingsIndex': 'RESERVAS'
  };
  for (const [key, phrase] of Object.entries(expected)) {
    assert.ok(dict.es[key].includes(phrase), key + ' should include: ' + phrase);
  }
});
test('English sections remain translated', () => {
  const expected = {
    'about.title': 'Software engineering',
    'about.p1': 'Carlos Dualibe',
    'approach.three.desc': 'Validate',
    'contact.desc': 'Open to',
    'footer.note': 'DESIGNED',
    'skills.backend': 'BACKEND',
    'skills.tools': 'Applied AI',
    'offline.available': 'AVAILABLE',
    'decision.bookingsIndex': 'BOOKINGS'
  };
  for (const [key, phrase] of Object.entries(expected)) {
    assert.ok(dict.en[key].includes(phrase), key + ' should include: ' + phrase);
  }
});
test('The language switch localizes image labels, metadata and Rendo links', () => {
  assert.ok(js.includes("data-i18n-' + attribute"), 'Image/ARIA localization missing');
  assert.ok(js.includes('meta[property="og:locale"]'), 'Open Graph locale switch missing');
  assert.ok(js.includes("'https://rendo-beta-web.vercel.app/' + next"), 'Rendo locale-aware link missing');
});

test('Browser Gmail action and other email options exist', () => {
  assert.ok(html.includes('https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=carlosdualive%40gmail.com'));
  assert.ok(html.includes('href="mailto:carlosdualive@gmail.com"'));
  assert.ok(html.includes('id="copyEmailButton"'));
  assert.ok(html.includes('id="emailCopyStatus" role="status" aria-live="polite"'));
});
test('Bilingual copy action has success and fallback feedback', () => {
  for (const key of ['contact.cta', 'contact.openApp', 'contact.copy', 'contact.copied', 'contact.copyFailed']) {
    assert.ok(dict.es[key], key + ' absent ES');
    assert.ok(dict.en[key], key + ' absent EN');
  }
  assert.ok(js.includes("emailCopyButton.addEventListener('click'"));
});
test('Mi Ciclo cards describe the product, not its source branch', () => {
  for (const locale of ['es', 'en']) {
    for (const key of ['wellness.monolito', 'wellness.backdropTitle', 'wellness.photoLabel', 'wellness.caption', 'wellness.evidence', 'wellness.privacy', 'a11y.wellnessFigure', 'a11y.wellnessHome', 'a11y.wellnessAlt', 'a11y.wellnessDiscover']) {
      assert.doesNotMatch(dict[locale][key], /Monolito|rama|branch|repositorio|repository/i, locale + ': ' + key);
    }
  }
  assert.ok(html.includes('>MI CICLO</b>'));
});

test('Appointments card does not link to discontinued backend and database', () => {
  assert.ok(!html.includes('https://clinica-san-martin-tpi-self.vercel.app'), 'Discontinued appointment deployment must not be linked');
  assert.ok(html.includes('/assets/turnos-frontend-live.webp'), 'Preserve the historical frontend screenshot');
  assert.ok(html.includes('https://github.com/yttuD/clinica-san-martin-tpi'), 'The public code repository should stay available');
  assert.ok(html.includes('data-i18n="turnos.status"'), 'Visible service status must be present');
  for (const lang of ['es','en']) {
    assert.ok(dict[lang]['turnos.status'], 'Status should be translated');
    assert.ok(dict[lang]['turnos.caption'], 'Historical screenshot label should be translated');
  }
  assert.match(dict.es['turnos.status'], /fuera de servicio/);
  assert.match(dict.en['turnos.status'], /offline/);
});

test('Aromatization manager is named by its business domain in Spanish and English',()=>{
  for(const lang of ['es','en']){
    assert.ok(/aromati|scent/i.test(dict[lang]['offline.title']));
    assert.ok(/aromati|scent/i.test(dict[lang]['offline.desc']));
    assert.ok(/aromati|scent|cliente|client/i.test(dict[lang]['wb.desc.offline']));
    for(const key of ['offline.localKicker','offline.localLabel','offline.remoteLabel','wb.media.offline.n0','wb.media.offline.n1','wb.media.offline.n2']) {
      assert.ok(dict[lang][key],lang+' missing '+key);
    }
    assert.doesNotMatch(dict[lang]['offline.title'],/Offline-first/i);
  }
});
