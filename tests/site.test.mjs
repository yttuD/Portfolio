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

test('contains all main sections, semantic landmarks and accessible menu', () => {
  for (const id of ['main', 'inicio', 'proyectos', 'enfoque', 'perfil', 'contacto']) {
    assert.match(html, new RegExp(`id="${id}"`), `Missing #${id}`);
  }
  assert.match(html, /<main\s/);
  assert.match(html, /<nav\s/);
  assert.match(html, /aria-expanded="false"/);
  assert.match(html, /class="skip-link"/);
});

test('local hash links point to existing anchors', () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  const targets = [...html.matchAll(/\bhref="#([^"]+)"/g)].map((m) => m[1]);
  for (const target of targets) assert.ok(ids.has(target), `Missing target #${target}`);
});

test('references local assets and avoids exposing unapproved repository URLs', () => {
  assert.match(html, /href="\/styles\.css"/);
  assert.match(html, /src="\/app\.js"/);
  assert.match(html, /\/assets\/favicon\.svg/);
  assert.match(html, /\/assets\/og-card\.svg/);
  for (const match of html.matchAll(/href="(https:\/\/github\.com\/yttuD\/[^"/]+)"/g)) {
    assert.equal(match[1], 'https://github.com/yttuD/clinica-san-martin-tpi');
  }
});

test('language, responsive layout and reduced motion are configured', () => {
  assert.match(html, /id="languageToggle"/);
  assert.match(js, /\bes\s*:/);
  assert.match(js, /\ben\s*:/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media/);
});

test('Vercel config exposes conservative response headers', () => {
  const config = JSON.parse(read('vercel.json'));
  const headers = config.headers.flatMap(({ headers }) => headers.map(({ key }) => key));
  assert.ok(headers.includes('X-Content-Type-Options'));
  assert.ok(headers.includes('Referrer-Policy'));
  assert.ok(headers.includes('Permissions-Policy'));
});
