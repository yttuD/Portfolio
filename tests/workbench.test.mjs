import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(join(root, path), 'utf8');
const index = read('index.html');
const app = read('app.js');
const cases = ['rendo', 'mi-ciclo', 'transai', 'turnos', 'offline'];

test('Workbench lists every case and preserves accessible tab controls', () => {
  assert.ok(index.includes('role="tablist"'));
  assert.ok(app.includes('ArrowRight'));
  assert.ok(app.includes("selectWorkbench"));
  for (const name of cases) {
    assert.ok(index.includes('data-wb-id="' + name + '"'));
    assert.ok(index.includes('data-wb-panel="' + name + '"'));
    assert.ok(index.includes('href="/work/' + name + '/"'));
  }
});
test('Five public case studies have bilingual data, architecture and status', () => {
  for (const name of cases) {
    const path = 'work/' + name + '/index.html';
    assert.ok(existsSync(join(root, path)));
    const doc = read(path);
    assert.ok(doc.includes('id="caseData"'));
    assert.ok(doc.includes('id="caseStatus"'));
    assert.ok(doc.includes('id="layerDescription"'));
    const json = doc.match(/<script type="application\/json" id="caseData">([\s\S]+?)<\/script>/);
    assert.ok(json, name + ' missing structured case data');
    const data = JSON.parse(json[1]);
    for (const language of ['es', 'en']) {
      for (const key of ['summary', 'problem', 'solution', 'evidence', 'takeaway', 'role', 'state']) {
        assert.ok(data[language][key], name + ' missing ' + language + '.' + key);
      }
      assert.equal(data[language].layers.length, 4);
    }
    for (const src of data.images) assert.ok(existsSync(join(root, src.slice(1))), name + ' screenshot missing ' + src);
  }
});
test('Discontinued appointment project has no broken demo link', () => {
  const doc = read('work/turnos/index.html');
  assert.doesNotMatch(doc, /clinica-san-martin-tpi-self\.vercel\.app/);
  assert.match(doc, /Backend fuera de servicio/);
  assert.match(doc, /github\.com\/yttuD\/clinica-san-martin-tpi/);
});
test('Client project source is not leaked to public case pages', () => {
  for (const name of ['mi-ciclo', 'offline', 'rendo']) {
    const doc = read('work/' + name + '/index.html');
    assert.doesNotMatch(doc, /github\.com\/yttuD\/(Mi-Ciclo-App|AromatizantesDemarchi|Rendo)/i);
  }
});
test('Bilingual CV files are single-page PDF assets', () => {
  assert.ok(existsSync(join(root, 'cv/index.html')));
  for (const lang of ['ES', 'EN']) {
    const content = readFileSync(join(root, 'assets/CV_Carlos_Dualibe_' + lang + '.pdf'));
    assert.equal(content.subarray(0, 5).toString('latin1'), '%PDF-');
    assert.ok(content.length > 2500);
    const text = content.toString('latin1');
    assert.match(text, /Carlos Dualibe/);
    assert.match(text, /\/Count 1/);
  }
});
