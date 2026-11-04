/* Original visual motions, selectively adapted for portfolio previews.
   Rendo: CityBackground.tsx (mulberry32, skyline, twinkle/growUp).
   Turnos: DNA3D.tsx (16 nodes, r=2.5, step=0.8, Y spin and Z wobble).
   No recorded video, backend, or customer data is loaded. */
(() => {
  'use strict';
  const previews = [...document.querySelectorAll('[data-live-preview]')];
  if (!previews.length) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const saveData = Boolean(navigator.connection && navigator.connection.saveData);
  const SVGNS = 'http://www.w3.org/2000/svg';
  const make = (tag, attrs, parent) => {
    const e = document.createElementNS(SVGNS, tag);
    for (const [k,v] of Object.entries(attrs || {})) e.setAttribute(k, String(v));
    if (parent) parent.append(e);
    return e;
  };
  function mulberry32(seed) {
    return () => {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function mountRendo(container) {
    const sky = document.createElement('div');
    sky.className = 'live-city-scene';
    const stars = document.createElement('div');
    stars.className = 'live-city-stars';
    const starRand = mulberry32(7);
    const starColors = ['#B7904D', '#9FB4FF', '#D8B876'];
    for (let i=0;i<55;i++) {
      const size = 1.5 + starRand()*2;
      const star = document.createElement('span');
      star.className = 'live-city-star';
      star.style.left = (starRand()*100).toFixed(2)+'%';
      star.style.top = (starRand()*85).toFixed(2)+'%';
      star.style.width = size+'px';
      star.style.height = size+'px';
      star.style.backgroundColor = starColors[Math.floor(starRand()*starColors.length)];
      star.style.animationDuration = (3+starRand()*5).toFixed(2)+'s';
      star.style.animationDelay = (-starRand()*6).toFixed(2)+'s';
      stars.append(star);
    }
    sky.append(stars);
    const wrapper = document.createElement('div');
    wrapper.className = 'live-city-skyline';
    const svg = make('svg', { viewBox:'0 0 1650 640', preserveAspectRatio:'xMidYMax slice', 'aria-hidden':'true' });
    const defs = make('defs', {}, svg);
    const pattern = make('pattern',{id:'live-hatch',width:8,height:8,patternTransform:'rotate(45)',patternUnits:'userSpaceOnUse'},defs);
    make('line',{x1:0,y1:0,x2:0,y2:8,stroke:'#D8B876','stroke-width':2},pattern);
    const rand = mulberry32(1337);
    for (let x=-20;x<1650;x+=78) {
      const w=46+rand()*34,h=26+rand()*110;
      make('rect',{x:x+rand()*14,y:520-h,width:w,height:h,class:'live-city-distant'},svg);
    }
    const shapes = [
      ['house',20,70,60],['house',100,60,50],['building',175,95,190,6],
      ['building',280,75,260,8],['house',365,65,55],
      ['building',445,100,150,5],['building',565,80,320,10],
      ['building',665,95,210,7],['house',775,60,50],
      ['building',850,80,180,6],['field',945,360,130],
      ['building',1330,90,240,8],['building',1435,75,160,5],['house',1520,65,55]
    ];
    for (const [type,x,w,h,floors] of shapes) {
      const duration=(5.5+rand()*4).toFixed(2)+'s', delay=(-rand()*9).toFixed(2)+'s',y=520-h,cx=x+w/2;
      const g=make('g',{class:'live-city-structure'},svg);
      g.style.setProperty('--duration',duration);
      g.style.setProperty('--delay',delay);
      const details=make('g',{class:'live-city-details'},g);
      if(type==='building') {
        make('rect',{x,y,width:w,height:h,fill:rand()<.5?'#16213D':'#1C2A4A'},g);
        const cols=Math.max(2,Math.round(w/26)),margin=8,gap=6;
        const ww=(w-2*margin-(cols-1)*gap)/cols,wh=(h-2*margin-(floors-1)*gap)/floors;
        for(let row=0;row<floors;row++)for(let col=0;col<cols;col++) {
          const lit=rand()<.55;
          const rect=make('rect',{x:x+margin+col*(ww+gap),y:y+margin+row*(wh+gap),width:Math.max(2,ww),height:Math.max(2,wh),rx:1,fill:lit?'#D8B876':'#1C2A4A',class:lit?'live-city-lit':''},details);
          if(lit){rect.style.animationDuration=(2.5+rand()*3.5).toFixed(2)+'s';rect.style.animationDelay=(-rand()*4).toFixed(2)+'s';}
        }
      } else if(type==='house') {
        const roof=h*.45;
        make('rect',{x,y:y+roof*.4,width:w,height:h-roof*.4,fill:'#16213D'},g);
        make('polygon',{points:(x-6)+','+(y+roof*.4)+' '+cx+','+(y-roof*.6)+' '+(x+w+6)+','+(y+roof*.4),fill:'#B7904D'},g);
        for(const xx of [x+8,x+w-22]){
          const rect=make('rect',{x:xx,y:y+roof*.4+10,width:14,height:14,fill:'#D8B876',class:'live-city-lit'},details);
          rect.style.animationDuration=(3+rand()*3).toFixed(2)+'s';rect.style.animationDelay=(-rand()*4).toFixed(2)+'s';
        }
      } else {
        make('rect',{x,y,width:w,height:h,fill:'#1C2A4A',rx:4},g);
        make('rect',{x:x+6,y:y+6,width:w-12,height:h-12,fill:'none',stroke:'#D8B876','stroke-width':2},details);
        make('line',{x1:cx,y1:y+6,x2:cx,y2:y+h-6,stroke:'#D8B876','stroke-width':2},details);
        make('circle',{cx,cy:y+h/2,r:h*.22,fill:'none',stroke:'#D8B876','stroke-width':2},details);
      }
      g.append(details);
      const scaffold=make('rect',{x,y,width:w,height:h,fill:'url(#live-hatch)',class:'live-city-scaffold'},g);
      if(type!=='field'){
        const crane=make('g',{class:'live-city-crane'},svg);
        crane.style.setProperty('--duration',duration);crane.style.setProperty('--delay',delay);
        for(const [ax,ay,bx,by] of [[cx-16,520,cx-16,y-55],[cx-16,y-55,cx+34,y-55],[cx-16,y-55,cx-30,y-41],[cx+26,y-55,cx+26,y-39]])
          make('line',{x1:ax,y1:ay,x2:bx,y2:by},crane);
      }
    }
    wrapper.append(svg);sky.append(wrapper);
    const heading=document.createElement('div');
    heading.className='live-city-brand';
    heading.innerHTML='<span>RENDO / PUBLIC BETA</span><strong>Rendo<span>.</span></strong>';
    sky.append(heading);
    container.replaceChildren(sky);
  }
  let turnos=null,loading=null;
  const eligible = root => {
    const panel=root.closest('[data-wb-panel]');
    const rect=root.getBoundingClientRect();
    return (!panel || !panel.hidden) && !document.hidden &&
      rect.bottom>0 && rect.top<innerHeight && !reduced.matches && !saveData;
  };
  function refresh() {
    for(const root of previews){
      const playing=eligible(root);
      root.classList.toggle('is-live-playing',playing);
      if(root.dataset.livePreview==='turnos'){
        if(turnos){if(playing)turnos.start();else turnos.stop();}
        else if(playing&&!loading){
          loading=import('/assets/turnos-native-3d.js').then(mod=>{
            turnos=mod.mountTurnos(root.querySelector('[data-turnos-canvas]'));
            if(turnos.ready){root.classList.add('is-live-ready');root.querySelector('.live-preview-poster')?.classList.add('is-superseded');}
            if(eligible(root))turnos.start();
          }).catch(()=>{root.dataset.fallback='poster';});
        }
      }
    }
  }
  for(const root of previews)if(root.dataset.livePreview==='rendo'){
    const mount=root.querySelector('[data-rendo-canvas]');
    if(mount){mountRendo(mount);root.classList.add('is-live-ready');}
  }
  const observer=('IntersectionObserver' in window)?new IntersectionObserver(refresh,{threshold:[0,.1,.3]}):null;
  previews.forEach(root=>observer?.observe(root));
  document.querySelectorAll('[data-wb-panel]').forEach(panel=>
    new MutationObserver(refresh).observe(panel,{attributes:true,attributeFilter:['hidden']}));
  document.addEventListener('visibilitychange',refresh);
  addEventListener('scroll',refresh,{passive:true});
  addEventListener('resize',refresh,{passive:true});
  reduced.addEventListener?.('change',refresh);
  refresh();
})();

