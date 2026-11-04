(()=>{
'use strict';
const data=JSON.parse(document.getElementById('caseData').textContent);
const labels={
es:{back:"← VOLVER A PROYECTOS",cv:"CV",contact:"CONTACTO",selected:"CD / TRABAJO SELECCIONADO",explore:"EXPLORAR PROYECTO ↗",context:"01 / CONTEXTO",evidenceNav:"02 / EVIDENCIA",architectureNav:"03 / ARQUITECTURA",lessonsNav:"04 / APRENDIZAJES",approachLabel:"EL ENFOQUE",visualTitle:"Lo que se puede ver.",architectureTitle:"Debajo de la interfaz.",architectureDesc:"Seleccioná una pieza para explorar su responsabilidad dentro del sistema.",layerResponsibility:"RESPONSABILIDAD DE ESTA PIEZA",architectureDisclaimer:"Modelo explicativo basado en la arquitectura documentada.",lessonsTitle:"Las decisiones importan.",statusLabel:"ESTADO ACTUAL",next:"SIGUIENTE PROYECTO",footer:"SOFTWARE PENSADO PARA USARSE",cvLong:"LEER MI CV ↗",view:"AMPLIAR ↗",diagramNote:"ESQUEMA CONCEPTUAL · NO ES UNA CAPTURA"},
en:{back:"← BACK TO PROJECTS",cv:"RÉSUMÉ",contact:"CONTACT",selected:"CD / SELECTED WORK",explore:"EXPLORE PROJECT ↗",context:"01 / CONTEXT",evidenceNav:"02 / EVIDENCE",architectureNav:"03 / ARCHITECTURE",lessonsNav:"04 / TAKEAWAYS",approachLabel:"THE APPROACH",visualTitle:"What can actually be seen.",architectureTitle:"Behind the interface.",architectureDesc:"Select a layer to explore its responsibility within the system.",layerResponsibility:"WHAT THIS LAYER DOES",architectureDisclaimer:"Illustrative model based on documented architecture.",lessonsTitle:"Engineering decisions matter.",statusLabel:"CURRENT STATUS",next:"NEXT PROJECT",footer:"SOFTWARE BUILT TO BE USED",cvLong:"READ MY RÉSUMÉ ↗",view:"OPEN ↗",diagramNote:"CONCEPTUAL DIAGRAM · NOT A SCREENSHOT"}
};
let lang='es';
try{if(localStorage.getItem('portfolio-language')==='en')lang='en'}catch(_){}
const queryLang=new URLSearchParams(location.search).get('lang');if(queryLang==='en'||queryLang==='es')lang=queryLang;
const langButton=document.getElementById('switchCaseLanguage');
const layerBtns=[...document.querySelectorAll('[data-layer]')];let selected=0;
function setLanguage(next){
  lang=next;const txt=data[next],ui=labels[next];document.documentElement.lang=next;
  document.title=data.name+' — '+(next==='es'?'Caso de estudio':'Case study')+' | Carlos Dualibe';
  for(const [id,key] of [['caseCategory','tag'],['caseSummary','summary'],['caseStatus','state'],['caseRole','role'],['caseProblem','problem'],['caseSolution','solution'],['caseEvidence','evidence'],['caseCurrent','evidence'],['caseTakeaway','takeaway'],['caseStatusDetail','evidence']]){const el=document.getElementById(id);if(el)el.textContent=txt[key]}
  document.getElementById('caseProblemTitle').textContent=next==='es'?'El problema real.':'The real problem.';
  document.querySelectorAll('[data-i18n-case]').forEach(el=>{const key=el.dataset.i18nCase;if(ui[key])el.textContent=ui[key]});
  layerBtns.forEach((b,i)=>{b.querySelector('strong').textContent=txt.layers[i][0]});
  document.getElementById('layerTitle').textContent=txt.layers[selected][0];
  document.getElementById('layerDescription').textContent=txt.layers[selected][1];
  if(data.source){const link=document.getElementById('sourceAction');if(link)link.textContent=data.source[next]}
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
  img.src=btn.dataset.src;img.alt=data[lang].evidence;
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