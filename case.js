(()=>{
'use strict';
const data=JSON.parse(document.getElementById('caseData').textContent);
const labels={
es:{skip:"Saltar al contenido",figureAlt:"Captura de pantalla del proyecto",navName:"Navegación del caso",closeImage:"Cerrar imagen",conceptAlt:"Esquema conceptual, no una captura real",contextIndex:"01 / CONTEXTO",evidenceIndex:"02 / EVIDENCIA",architectureIndex:"03 / ARQUITECTURA",takeawaysIndex:"04 / APRENDIZAJES",back:"← VOLVER A PROYECTOS",cv:"CV",contact:"CONTACTO",selected:"CD / TRABAJO SELECCIONADO",explore:"EXPLORAR PROYECTO ↗",context:"01 / CONTEXTO",evidenceNav:"02 / EVIDENCIA",architectureNav:"03 / ARQUITECTURA",lessonsNav:"04 / APRENDIZAJES",approachLabel:"EL ENFOQUE",visualTitle:"Lo que se puede ver.",architectureTitle:"Debajo de la interfaz.",architectureDesc:"Seleccioná una pieza para explorar su responsabilidad dentro del sistema.",layerResponsibility:"RESPONSABILIDAD DE ESTA PIEZA",architectureDisclaimer:"Modelo explicativo basado en la arquitectura documentada.",lessonsTitle:"Las decisiones importan.",statusLabel:"ESTADO ACTUAL",next:"SIGUIENTE PROYECTO",footer:"SOFTWARE PENSADO PARA USARSE",cvLong:"LEER MI CV ↗",view:"AMPLIAR ↗",diagramNote:"ESQUEMA CONCEPTUAL · NO ES UNA CAPTURA",evidenceHomeTitle:"01 / PORTADA PÚBLICA",evidenceHomeNote:"Pantalla completa de la beta. Ningún elemento visual queda recortado.",evidenceCatalogTitle:"02 / CATÁLOGO DE UNIDADES",evidenceCatalogNote:"Detalle real de la pantalla de exploración; recorte intencional de la zona de unidades.",evidenceInsightKicker:"03 / DEL PRODUCTO AL RECORRIDO",evidenceInsightTitle:"De la presentación a la exploración.",evidenceInsightCopy:"La portada introduce la plataforma; el catálogo presenta unidades publicadas y opciones de búsqueda. Son dos pantallas públicas auténticas, no maquetas creadas para el portafolio.",evidenceInsightFoot:"BETA PÚBLICA · CÓDIGO PRIVADO",evidenceMobileHomeTitle:"01 / INICIO Y REGISTRO DIARIO",evidenceMobileHomeNote:"Pantalla vertical completa con datos de prueba; sin cortar el contenido.",evidenceMobileDiscoverTitle:"02 / DESCUBRIR",evidenceMobileDiscoverNote:"Pantalla de la aplicación en su formato de teléfono original.",evidenceTurnosTitle:"01 / INTERFAZ DEL SISTEMA DE TURNOS",evidenceTurnosNote:"Captura histórica completa. El backend y la base de datos ya no están desplegados."},
en:{skip:"Skip to content",figureAlt:"Project interface screenshot",navName:"Case study navigation",closeImage:"Close image",conceptAlt:"Conceptual diagram, not an actual screenshot",contextIndex:"01 / CONTEXT",evidenceIndex:"02 / EVIDENCE",architectureIndex:"03 / ARCHITECTURE",takeawaysIndex:"04 / TAKEAWAYS",back:"← BACK TO PROJECTS",cv:"RÉSUMÉ",contact:"CONTACT",selected:"CD / SELECTED WORK",explore:"EXPLORE PROJECT ↗",context:"01 / CONTEXT",evidenceNav:"02 / EVIDENCE",architectureNav:"03 / ARCHITECTURE",lessonsNav:"04 / TAKEAWAYS",approachLabel:"THE APPROACH",visualTitle:"What can actually be seen.",architectureTitle:"Behind the interface.",architectureDesc:"Select a layer to explore its responsibility within the system.",layerResponsibility:"WHAT THIS LAYER DOES",architectureDisclaimer:"Illustrative model based on documented architecture.",lessonsTitle:"Engineering decisions matter.",statusLabel:"CURRENT STATUS",next:"NEXT PROJECT",footer:"SOFTWARE BUILT TO BE USED",cvLong:"READ MY RÉSUMÉ ↗",view:"OPEN ↗",diagramNote:"CONCEPTUAL DIAGRAM · NOT A SCREENSHOT",evidenceHomeTitle:"01 / PUBLIC HOMEPAGE",evidenceHomeNote:"Complete beta homepage. No interface elements are cropped.",evidenceCatalogTitle:"02 / PROPERTY CATALOG",evidenceCatalogNote:"Real catalog screen detail; the listings area is intentionally cropped.",evidenceInsightKicker:"03 / FROM PRODUCT TO JOURNEY",evidenceInsightTitle:"From introduction to discovery.",evidenceInsightCopy:"The homepage introduces the platform; the catalog displays public listings and search options. Both are authentic public interfaces, not mockups invented for this portfolio.",evidenceInsightFoot:"PUBLIC BETA · PRIVATE CODE",evidenceMobileHomeTitle:"01 / HOME AND DAILY LOG",evidenceMobileHomeNote:"Full-length mobile screenshot using test data; no content cut off.",evidenceMobileDiscoverTitle:"02 / DISCOVER",evidenceMobileDiscoverNote:"Complete application screen in its original phone proportions.",evidenceTurnosTitle:"01 / APPOINTMENT SYSTEM FRONTEND",evidenceTurnosNote:"Full historical screenshot. The backend and database are no longer deployed."}
};
let lang='es';
try{if(localStorage.getItem('portfolio-language')==='en')lang='en'}catch(_){}
const queryLang=new URLSearchParams(location.search).get('lang');if(queryLang==='en'||queryLang==='es')lang=queryLang;
const langButton=document.getElementById('switchCaseLanguage');
const layerBtns=[...document.querySelectorAll('[data-layer]')];let selected=0;
function setLanguage(next){
  lang=next;const txt=data[next],ui=labels[next];document.documentElement.lang=next;
  const caseName=txt.name||data.name;
  document.title=caseName+' — '+(next==='es'?'Caso de estudio':'Case study')+' | Carlos Dualibe';
  const productName=document.getElementById('caseProductName');
  if(productName)productName.textContent=caseName;
  if(Array.isArray(txt.steps))document.querySelectorAll('[data-aroma-step]').forEach(el=>{
    const step=txt.steps[Number(el.dataset.aromaStep)];
    if(step){el.querySelector('h3').textContent=step[0];el.querySelector('p').textContent=step[1];}
  });
  if(Array.isArray(txt.flow))document.querySelectorAll('[data-aroma-flow]').forEach(el=>{
    el.textContent=txt.flow[Number(el.dataset.aromaFlow)]||el.textContent;
  });
  const process=document.querySelector('.aroma-process');
  if(process&&txt.processLabel)process.setAttribute('aria-label',txt.processLabel);
  for(const [id,key] of [['caseCategory','tag'],['caseSummary','summary'],['caseStatus','state'],['caseRole','role'],['caseProblem','problem'],['caseSolution','solution'],['caseEvidence','evidence'],['caseCurrent','evidence'],['caseTakeaway','takeaway'],['caseStatusDetail','evidence']]){const el=document.getElementById(id);if(el)el.textContent=txt[key]}
  document.getElementById('caseProblemTitle').textContent=next==='es'?'El problema real.':'The real problem.';
  document.querySelectorAll('[data-i18n-case]').forEach(el=>{const key=el.dataset.i18nCase;if(ui[key])el.textContent=ui[key]});
  layerBtns.forEach((b,i)=>{b.querySelector('strong').textContent=txt.layers[i][0]});
  document.getElementById('layerTitle').textContent=txt.layers[selected][0];
  document.getElementById('layerDescription').textContent=txt.layers[selected][1];
  if(data.source){
    const link=document.getElementById('sourceAction');
    if(link){
      link.textContent=data.source[next];
      if(data.slug==='rendo')link.href='https://rendo-beta-web.vercel.app/'+next;
    }
  }
  const accessibleText=[
    ['.skip','textContent',ui.skip],
    ['.case-local-nav','aria-label',ui.navName],
    ['#closeLightbox','aria-label',ui.closeImage],
    ['.case-diagram','aria-label',txt.diagramAlt||ui.conceptAlt]
  ];
  for(const [selector,attribute,value] of accessibleText){
    const element=document.querySelector(selector);
    if(!element)continue;
    if(attribute==='textContent')element.textContent=value;else element.setAttribute(attribute,value);
  }
  document.querySelectorAll('.case-evidence__viewport img').forEach(el=>{
    el.alt=(next==='es'?el.dataset.altEs:el.dataset.altEn)||txt.evidence;
  });
  document.querySelectorAll('.case-image-trigger').forEach(el=>{
    const description=(next==='es'?el.dataset.altEs:el.dataset.altEn)||ui.figureAlt;
    el.setAttribute('aria-label',(next==='es'?'Ampliar imagen: ':'Open image: ')+description);
  });
  document.querySelectorAll('[data-case-section-label]').forEach(el=>{
    const key=el.getAttribute('data-case-section-label');
    if(ui[key])el.textContent=ui[key];
  });
  const description=document.querySelector('meta[name="description"]');
  if(description)description.content=txt.summary;
  const ogDescription=document.querySelector('meta[property="og:description"]');
  if(ogDescription)ogDescription.content=txt.summary;
  langButton.textContent=next==='es'?'ES / EN':'EN / ES';
  langButton.setAttribute('aria-label',next==='es'?'Cambiar al inglés':'Switch to Spanish');
  const og=document.querySelector('meta[property="og:locale"]');if(og)og.content=next==='es'?'es_AR':'en_US';
  try{localStorage.setItem('portfolio-language',next)}catch(_){}
}
langButton.addEventListener('click',()=>setLanguage(lang==='es'?'en':'es'));
layerBtns.forEach((b,i)=>b.addEventListener('click',()=>{
 selected=i;
 layerBtns.forEach((other,n)=>{const on=n===i;other.classList.toggle('is-active',on);other.setAttribute('aria-pressed',String(on))});
 document.getElementById('layerTitle').textContent=data[lang].layers[i][0];
 document.getElementById('layerNumber').textContent=String(i+1).padStart(2,'0');
 document.getElementById('layerDescription').textContent=data[lang].layers[i][1];
}));
const dialog=document.getElementById('caseLightbox'),img=document.getElementById('lightboxImg'),close=document.getElementById('closeLightbox');
let focusReturn=null;
document.querySelectorAll('.case-image-trigger').forEach(btn=>{
 btn.addEventListener('click',()=>{
  focusReturn=btn;
  img.src=btn.dataset.src;img.alt=(lang==='es'?btn.dataset.altEs:btn.dataset.altEn)||data[lang].evidence;
  dialog.showModal();
 });
});
close.addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
dialog.addEventListener('close',()=>{img.removeAttribute('src');focusReturn?.focus()});
const progress=document.getElementById('progressBar');let ticking=false;
window.addEventListener('scroll',()=>{
 if(ticking)return;ticking=true;
 requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?100*scrollY/max:0)+'%';ticking=false})
},{passive:true});
setLanguage(lang);
})();