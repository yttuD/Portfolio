/* 3D showcase isolated to Turnos card, ported from DNA3D.tsx.
 * Original geometry: 16 rungs, radius=2.5, heightStep=.8, angleStep=PI/4.
 * Original rotation: y=elapsed*.3; z=sin(elapsed*.2)*.1.
 * Uses Three.js, the underlying renderer of React Three Fiber. */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.185.1/build/three.module.js';

export function mountTurnos(element) {
  if(!element) throw new Error('Missing Turnos stage');
  const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.35;
  element.append(renderer.domElement);
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(50,1,.1,100);
  camera.position.set(0,0,9.5);
  scene.add(new THREE.AmbientLight(0xffffff,.5));
  const cyan=new THREE.SpotLight(0x06b6d4,25,25,Math.PI*.19,.9);
  cyan.position.set(10,10,10);scene.add(cyan);
  const violet=new THREE.SpotLight(0x8b5cf6,25,25,Math.PI*.19,.9);
  violet.position.set(-10,-10,-10);scene.add(violet);
  const white=new THREE.PointLight(0xffffff,15,25);white.position.set(0,0,5);scene.add(white);
  const model=new THREE.Group();model.scale.setScalar(.48);scene.add(model);
  const sphereGeo=new THREE.SphereGeometry(.4,24,24);
  const cylinderGeo=new THREE.CylinderGeometry(.05,.05,5,8);
  const sphereCyan=new THREE.MeshPhysicalMaterial({
    color:'#06b6d4',emissive:'#0891b2',emissiveIntensity:.5,
    roughness:.1,metalness:.8,clearcoat:1,clearcoatRoughness:.1
  });
  const spherePurple=new THREE.MeshPhysicalMaterial({
    color:'#8b5cf6',emissive:'#7c3aed',emissiveIntensity:.5,
    roughness:.1,metalness:.8,clearcoat:1,clearcoatRoughness:.1
  });
  const rungMaterial=new THREE.MeshPhysicalMaterial({
    color:'#8b5cf6',transparent:true,opacity:.5,roughness:.2,
    transmission:.4,thickness:.5
  });
  for(let i=0;i<16;i++){
    const y=(i-16/2)*.8+.4,angle=i*Math.PI/4;
    const rung=new THREE.Group();rung.position.y=y;rung.rotation.y=-angle;model.add(rung);
    const connector=new THREE.Mesh(cylinderGeo,rungMaterial);connector.rotation.z=Math.PI/2;rung.add(connector);
    const a=new THREE.Mesh(sphereGeo,sphereCyan);a.position.x=2.5;rung.add(a);
    const b=new THREE.Mesh(sphereGeo,spherePurple);b.position.x=-2.5;rung.add(b);
  }
  let running=false,frame=0,elapsed=0,last=0;
  function resize(){
    const w=element.clientWidth,h=element.clientHeight;
    if(w<=0||h<=0)return;
    camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);
  }
  const observer=new ResizeObserver(resize);observer.observe(element);resize();
  function animate(time){
    if(!running)return;
    const dt=Math.min((time-last||0)/1000,.05);last=time;elapsed+=dt;
    model.rotation.y=elapsed*.3;
    model.rotation.z=Math.sin(elapsed*.2)*.1;
    model.rotation.x=Math.sin(elapsed*.32)*.09;
    model.position.y=Math.sin(elapsed*2)*.16;
    renderer.render(scene,camera);
    frame=requestAnimationFrame(animate);
  }
  renderer.render(scene,camera);
  return {
    ready:true,
    start(){if(running)return;resize();running=true;last=0;frame=requestAnimationFrame(animate)},
    stop(){if(!running)return;running=false;cancelAnimationFrame(frame)},
    destroy(){running=false;cancelAnimationFrame(frame);observer.disconnect();scene.traverse(x=>{});[sphereGeo,cylinderGeo].forEach(x=>x.dispose());[sphereCyan,spherePurple,rungMaterial].forEach(x=>x.dispose());renderer.dispose();renderer.domElement.remove();}
  };
}

