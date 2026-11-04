import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(root, p), 'utf8');
const home = read('index.html');
const rendo = read('work/rendo/index.html');
const turnos = read('work/turnos/index.html');
const js = read('motion.js');
const css = read('motion.css');

test('Source-recorded motion clips exist as valid WebM EBML files', () => {
  const originalSha256 = {
    rendo: '53796d88b1774e309285b63e919a8435f09a1e5a656054f92da52c779b634f33',
    turnos: '35ea21c7f648cc84a26143c57458d742607d51993af88e1093efe548902afbcb'
  };
  for (const name of ['rendo', 'turnos']) {
    const path = join(root, 'assets', name + '-motion-hero.webm');
    assert.ok(existsSync(path), name + ' clip missing');
    const bytes = readFileSync(path);
    assert.equal(bytes.subarray(0, 4).toString('hex'), '1a45dfa3', name + ' not WebM');
    assert.ok(bytes.length > 5_000 && bytes.length < 200_000, name + ' not lightweight');
    assert.equal(createHash('sha256').update(bytes).digest('hex'), originalSha256[name], name + ' differs from the original captured recording');
  }
});

test('The home Workbench exposes each authentic motion as an inline video with a static poster', () => {
  for (const [name, poster] of [['rendo','rendo-home-clear.webp'],['turnos','turnos-frontend-live.webp']]) {
    const match = home.match(new RegExp('id="wb-panel-' + name + '"[\\s\\S]*?<\\/section>'));
    assert.ok(match, 'missing '+name+' panel');
    assert.match(match[0], /data-motion-root/);
    assert.ok(match[0].includes('data-src="/assets/' + name + '-motion-hero.webm"'));
    assert.ok(match[0].includes('poster="/assets/' + poster + '"'));
    assert.match(match[0], /data-motion-toggle/);
    assert.match(match[0], /muted loop playsinline preload="none"/);
  }
  assert.doesNotMatch(home, /class="wb-shot"/, 'Do not reintroduce cropped screenshots');
});

test('Both individual case studies show motion without removing their full-size still captures', () => {
  assert.match(rendo, /case-gallery--editorial/);
  assert.match(rendo, /rendo-home-clear.webp/);
  assert.match(turnos, /case-gallery--single/);
  assert.match(turnos, /turnos-frontend-live.webp/);
  for (const [name, body] of [['rendo',rendo],['turnos',turnos]]) {
    assert.match(body, /class="case-motion"/);
    assert.ok(body.includes('/assets/' + name + '-motion-hero.webm'));
    assert.match(body, /data-motion-toggle/);
    assert.match(body, /src="\/motion.js"/);
    assert.match(body, /href="\/motion.css"/);
  }
  assert.doesNotMatch(turnos, /clinica-san-martin-tpi-self\.vercel\.app/,'No link to discontinued booking app');
});

test('Motion is muted, reduced-motion aware, load-on-visible and can be paused manually', () => {
  assert.ok(js.includes('prefers-reduced-motion: reduce'));
  assert.ok(js.includes('saveData'));
  assert.ok(js.includes('IntersectionObserver'));
  assert.ok(js.includes("root.dataset.userPaused = 'yes'"));
  assert.ok(js.includes('video.pause()'));
  assert.ok(js.includes('video.play()'));
  assert.ok(js.includes('document.hidden'));
  assert.ok(js.includes('panel.hidden'));
  assert.ok(js.includes('video.dataset.src'));
  assert.ok(css.includes('object-fit: contain !important'));
  assert.ok(css.includes('prefers-reduced-motion: reduce'));
});

test('Recorded motion is described accurately in both languages', () => {
  for (const body of [rendo,turnos]) {
    assert.ok(body.includes('data-motion-es='));
    assert.ok(body.includes('data-motion-en='));
  }
  assert.ok(rendo.includes('no flujos de alquiler verificados'));
  assert.ok(turnos.includes('backend y la base de datos siguen fuera de servicio'));
  assert.ok(js.includes('document.documentElement.lang'));
});
