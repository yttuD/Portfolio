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

test('Every case translates section headers in both directions', () => {
  for (const name of cases) {
    const doc = read('work/' + name + '/index.html');
    for (const key of ['contextIndex', 'evidenceIndex', 'architectureIndex', 'takeawaysIndex']) {
      assert.ok(doc.includes('data-case-section-label="' + key + '"'), name + ' missing section label ' + key);
    }
  }
  const code = read('case.js');
  for (const key of ['contextIndex', 'evidenceIndex', 'architectureIndex', 'takeawaysIndex', 'skip', 'navName', 'closeImage']) {
    assert.ok(code.includes(key + ':'), 'Missing translation key ' + key);
  }
});
test('Case studies localize metadata, image descriptions and beta URLs', () => {
  const code = read('case.js');
  assert.ok(code.includes("data.slug==='rendo'"), 'Rendo locale link should be updated');
  assert.ok(code.includes("link.href='https://rendo-beta-web.vercel.app/'+next"));
  assert.ok(code.includes("description.content=txt.summary"));
  assert.ok(code.includes("ogDescription.content=txt.summary"));
  assert.ok(code.includes("querySelectorAll('.case-evidence__viewport img')"));
});

test('Case study screenshots preserve native aspect ratio and use editorial layouts', () => {
  const css = read('case.css');
  assert.match(css, /Evidence gallery v3: proof should be fully readable/);
  assert.match(css, /case-evidence__viewport img/);
  assert.match(css, /height:auto!important/);
  assert.match(css, /object-fit:contain!important/);
  const rendo = read('work/rendo/index.html');
  assert.match(rendo, /case-gallery--editorial/);
  for (const image of ['rendo-home-clear.webp', 'rendo-catalog-detail.webp']) {
    assert.ok(rendo.includes('/assets/' + image), 'Missing Rendo evidence ' + image);
    assert.ok(existsSync(join(root, 'assets', image)), 'Asset not committed: ' + image);
  }
  assert.match(rendo, /evidenceCatalogNote/);
  assert.match(rendo, /case-gallery__details/);
  assert.doesNotMatch(rendo, /class="image-cta"/, 'No overlay should obscure actual screen content');
  const miCiclo = read('work/mi-ciclo/index.html');
  assert.match(miCiclo, /case-gallery--mobile/);
  assert.match(miCiclo, /width="390" height="2047"/, 'Keep full long phone screenshot');
  assert.match(miCiclo, /width="390" height="844"/, 'Keep Discover screen proportions');
  const turnos = read('work/turnos/index.html');
  assert.match(turnos, /case-gallery--single/);
  assert.match(turnos, /height="625"/);
  assert.doesNotMatch(turnos, /clinica-san-martin-tpi-self\.vercel\.app/);
});
test('Evidence captions and specific accessible descriptions are bilingual', () => {
  const code = read('case.js');
  for (const key of ['evidenceHomeTitle','evidenceCatalogTitle','evidenceCatalogNote','evidenceMobileHomeTitle','evidenceMobileDiscoverTitle','evidenceTurnosTitle']) {
    assert.ok(code.includes(key + ':'), 'Missing evidence translation: ' + key);
  }
  assert.ok(code.includes('el.dataset.altEs:el.dataset.altEn'));
  for (const name of ['rendo','mi-ciclo','turnos']) {
    const doc = read('work/' + name + '/index.html');
    assert.match(doc, /data-alt-es=/);
    assert.match(doc, /data-alt-en=/);
    assert.match(doc, /<figcaption/);
  }
});

test('Workbench project previews render full screenshots without legacy cropped banners', () => {
  const styles = read('styles.css');
  const visual = styles.slice(styles.indexOf('/* WORKBENCH VISUAL EVIDENCE v3'));
  assert.ok(visual.includes('.wb-image-mat img'));
  assert.ok(visual.includes('height:auto!important'));
  assert.ok(visual.includes('object-fit:contain!important'));
  assert.doesNotMatch(index, /class="wb-shot"/, 'Legacy fixed-height screenshot preview is still in the page');
  assert.doesNotMatch(index, /class="wb-corner"/, 'A corner badge still covers part of a screenshot');
  for (const name of cases) {
    const variant = name === 'mi-ciclo' ? 'mobile' : name;
    assert.ok(index.includes('wb-preview--' + variant), 'Missing dedicated preview: ' + name);
    assert.ok(index.includes('id="wb-panel-' + name + '"'), 'Missing panel '+name);
  }
  for (const asset of ['rendo-home-clear.webp','rendo-catalog-detail.webp','mi-ciclo-monolito-home.png','mi-ciclo-monolito-descubrir.png','turnos-frontend-live.webp']) {
    assert.ok(index.includes('/assets/' + asset), 'Preview does not reference '+asset);
    assert.ok(existsSync(join(root,'assets',asset)), 'Missing evidence file '+asset);
  }
  assert.ok(index.includes('width="1050" height="656"'), 'Rendo primary screenshot should keep its dimensions');
  assert.ok(index.includes('width="390" height="2047"'), 'Mi Ciclo full-length screenshot must not be cropped');
  assert.ok(index.includes('width="390" height="844"'), 'Mi Ciclo Discover screenshot must not be cropped');
  assert.ok(index.includes('width="1000" height="625"'), 'Turnos screenshot must not be cropped');
});
test('Workbench previews explain genuine cropped details and preserve bilingual accessibility', () => {
  const app = read('app.js');
  const keys = ['wb.media.rendo.altHome','wb.media.rendo.altCatalog','wb.media.rendo.catalogNote',
    'wb.media.mi.altHome','wb.media.mi.altDiscover','wb.media.mi.private','wb.media.turnos.status','wb.media.diagramLabel'];
  for (const key of keys) {
    assert.ok(index.includes('data-i18n="'+key+'"') || index.includes('data-i18n-alt="'+key+'"') || key==='wb.media.mi.private', 'Missing UI key '+key);
    const count = app.split(JSON.stringify(key) + ":").length - 1;
    assert.ok(count >= 2, "Missing ES/EN translation: "+key);
  }
  assert.ok(index.includes('Recorte identificado'), 'Rendo catalog detail must be identified as a crop');
  assert.ok(index.includes('ESQUEMA CONCEPTUAL'), 'Diagrams should not be misrepresented as real screenshots');
  assert.doesNotMatch(index, /href="https:\/\/clinica-san-martin-tpi-self\.vercel\.app/);
});

