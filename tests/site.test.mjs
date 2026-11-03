import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(join(root, path), 'utf8');
const html = read('index.html');
const css = read('styles.css');
const js = read('app.js');

test('contains semantic sections and accessible navigation', () => {
  for (const id of ['main', 'inicio', 'proyectos', 'enfoque', 'perfil', 'contacto']) {
    assert.ok(html.includes('id="' + id + '"'), 'Missing #' + id);
  }
  assert.match(html, /<main\s/);
  assert.match(html, /<nav\s/);
  assert.match(html, /aria-expanded="false"/);
  assert.match(html, /class="skip-link"/);
});

test('hash links reference real anchor IDs', () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/\bhref="#([^"]+)"/g)) {
    assert.ok(ids.has(m[1]), 'Missing anchor #' + m[1]);
  }
});

test('assets are local and source links are allowlisted', () => {
  assert.match(html, /href="\/styles\.css"/);
  assert.match(html, /src="\/app\.js"/);
  assert.match(html, /\/assets\/favicon\.svg/);
  assert.match(html, /\/assets\/og-card\.svg/);
  for (const m of html.matchAll(/href="(https:\/\/github\.com\/yttuD\/[^"/]+)"/g)) {
    assert.equal(m[1], 'https://github.com/yttuD/clinica-san-martin-tpi');
  }
});

test('language, responsive layout and reduced motion are implemented', () => {
  assert.match(html, /id="languageToggle"/);
  assert.match(js, /\bes\s*:/);
  assert.match(js, /\ben\s*:/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media/);
});

test('Vercel config contains security response headers', () => {
  const config = JSON.parse(read('vercel.json'));
  const headers = config.headers.flatMap(({ headers }) => headers.map(({ key }) => key));
  for (const key of ['X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) {
    assert.ok(headers.includes(key), 'Missing header ' + key);
  }
});
