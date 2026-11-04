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
