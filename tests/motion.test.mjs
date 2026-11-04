import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root=join(dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>readFileSync(join(root,p),'utf8');
const home=read('index.html');
const native=read('preview-native.js');
const css=read('preview-native.css');
const helix=read('assets/turnos-native-3d.js');

test('Workbench uses live source-derived animations, not compressed videos',()=>{
  assert.equal((home.match(/data-live-preview=/g)||[]).length,2);
  for(const name of ['rendo','turnos']){
    assert.ok(home.includes('data-live-preview="'+name+'"'));
    const panel=home.match(new RegExp('id="wb-panel-'+name+'"[\\s\\S]*?<\\/section>'));
    assert.ok(panel,'Missing '+name+' Workbench card');
    assert.ok(panel[0].includes('href="/work/'+name+'/"'),'Click should open '+name+' case');
    assert.ok(!panel[0].includes('<video'),'No video player permitted');
    assert.ok(!panel[0].includes('.webm'),'No lossy video clips permitted');
  }
  assert.ok(home.includes('rendo-beta-web.vercel.app/es'),'Rendo real beta link missing');
  assert.ok(home.includes('src="/preview-native.js"'));
  assert.ok(home.includes('href="/preview-native.css"'));
  assert.doesNotMatch(home, /src="\/motion\.js"/);
  assert.doesNotMatch(home, /href="\/motion\.css"/);
});

test('Rendo CityBackground procedural source values retained',()=>{
  for(const value of ['mulberry32(7)','mulberry32(1337)','i<55','live-city-structure','live-city-lit','live-city-crane','live-city-twinkle']){
    assert.ok((native+css).includes(value),'Missing Rendo procedural element: '+value);
  }
  assert.match(css,/animation-play-state:paused!important/);
});

test('Turnos geometry and 3D source values retained',()=>{
  for(const value of ['i<16','Math.PI/4','camera.position.set(0,0,9.5)','rotation.y=elapsed*.3','rotation.z=Math.sin(elapsed*.2)*.1',
    '#06b6d4','#8b5cf6','SphereGeometry','CylinderGeometry','WebGLRenderer']){
    assert.ok(helix.includes(value),'Missing DNA3D-derived value '+value);
  }
  assert.match(helix,/requestAnimationFrame/);
  assert.match(native,/import\('\/assets\/turnos-native-3d\.js'\)/);
});

test('Work only animates visible panels and respects reduced motion',()=>{
  assert.match(native,/prefers-reduced-motion: reduce/);
  assert.match(native,/saveData/);
  assert.match(native,/panel.hidden/);
  assert.match(native,/document.hidden/);
  assert.match(native,/IntersectionObserver/);
  assert.match(native,/turnos.stop\(\)/);
  assert.match(native,/data-rendo-canvas/);
});

test('Case study pages retain screenshots but no longer have duplicate motion media',()=>{
  for(const [name,poster] of [['rendo','rendo-home-clear.webp'],['turnos','turnos-frontend-live.webp']]){
    const doc=read('work/'+name+'/index.html');
    assert.ok(doc.includes('/assets/'+poster));
    assert.doesNotMatch(doc,/case-motion/);
    assert.doesNotMatch(doc,/motion\.js|motion\.css|<video/);
  }
  assert.match(read('work/turnos/index.html'),/backend y la base de datos/);
});

test('Turnos retains the complete original landing screenshot while only the DNA vitrine animates',()=>{
  const start=home.indexOf('id="wb-panel-turnos"');
  const end=home.indexOf('id="wb-panel-offline"',start);
  assert.ok(start>=0 && end>start,'Turnos Workbench panel missing');
  const panel=home.slice(start,end);
  assert.ok(panel.includes('class="live-preview-poster" src="/assets/turnos-frontend-live.webp"'));
  assert.ok(panel.includes('class="live-native-stage live-turnos-stage" data-turnos-canvas'));
  assert.ok(css.includes('.wb-native-preview[data-live-preview="turnos"] .live-native-stage{'));
  assert.ok(css.includes('top:8.8%') && css.includes('left:46%'));
  // Width/height:100% on .live-turnos-stage used to push the WebGL scene
  // 46% beyond the card, leaving most of the rotating DNA offscreen.
  const vitrineRule=css.split('.wb-native-preview[data-live-preview="turnos"] .live-native-stage{')[1]?.split('}')[0];
  assert.ok(vitrineRule, 'Missing the scoped Turnos vitrine');
  assert.match(vitrineRule,/width:auto;/);
  assert.match(vitrineRule,/height:auto;/);
  assert.match(vitrineRule,/left:46%;/);
  assert.match(vitrineRule,/right:0;/);
  assert.match(vitrineRule,/top:8\\.8%;/);
  assert.match(vitrineRule,/bottom:0;/);
  assert.ok(css.includes('mask-image:linear-gradient(to right'));
  assert.ok(css.includes('.wb-native-preview[data-live-preview="turnos"] .live-preview-poster{\n  opacity:1;'));
  assert.ok(!native.includes("querySelector('.live-preview-poster')?.classList.add('is-superseded')"));
  assert.ok(native.includes('if(turnos.ready){') && native.includes("root.classList.add('is-live-ready')"));
});
