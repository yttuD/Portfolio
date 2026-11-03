(() => {
  'use strict';
  const translations = {
    es: {
      'nav.work': 'Proyectos', 'nav.approach': 'Enfoque', 'nav.about': 'Perfil', 'nav.contact': 'Hablemos',
      'hero.kicker': 'FULL STACK DEVELOPER / ARGENTINA', 'hero.line1': 'Lo complejo', 'hero.line2': 'se vuelve', 'hero.line3': 'simple.',
      'hero.desc': 'Soy Carlos Dualibe. Desarrollo soluciones Full Stack, desde interfaces y APIs hasta sistemas de gestión, con una mirada de producto y calidad.',
      'hero.cta': 'Explorar proyectos', 'hero.footer': 'Del concepto al producto.', 'hero.scroll': 'DESLIZA PARA EXPLORAR',
      'work.kicker': '01 / TRABAJO SELECCIONADO', 'work.title': 'Ideas convertidas<br><em>en productos.</em>',
      'work.intro': 'Una selección de plataformas, sistemas y desafíos reales. El código privado y la información de clientes se mantienen protegidos.',
      'work.disclaimer': 'Las visualizaciones son diagramas conceptuales propios, no capturas de productos en producción. Los alcances corresponden a proyectos en diferentes etapas.',
      'rendo.type': 'PLATAFORMA WEB · PROYECTO PROPIO', 'rendo.desc': 'Plataforma inmobiliaria de gestión y publicación de espacios. Diseño de flujos de reserva, roles, administración y experiencia pública.',
      'project.visit': 'Ver aplicación beta', 'project.code': 'Explorar repositorio', 'project.private': 'Caso descriptivo · Código privado',
      'transai.type': 'ACADÉMICO · COLABORATIVO', 'transai.desc': 'Inspección visual asistida por IA local, con revisión humana, trazabilidad, APIs y arquitectura distribuida.',
      'turnos.type': 'GESTIÓN · ACADÉMICO', 'turnos.title': 'Sistema de turnos <span class="compact-arrow">↗</span>',
      'turnos.desc': 'Motor multiempresa para administrar profesionales, pacientes y reservas, con controles para evitar conflictos.',
      'hero.portrait': 'DISEÑO · CÓDIGO · PRODUCTO',
      'wellness.type': 'PRODUCTO PARA CLIENTE · PRIVADO', 'wellness.title': 'Bienestar digital<span class="project-period">.</span>',
      'wellness.desc': 'Desarrollo por etapas de una aplicación web instalable de bienestar: registro de usuarios, consentimientos versionados y experiencia de bienvenida guiada. Proyecto en curso.',
      'wellness.privacy': 'Experiencia profesional anonimizada. Sin código, capturas ni datos del cliente.',
      'offline.type': 'SOFTWARE EMPRESARIAL · TRABAJO PRIVADO', 'offline.title': 'Offline-first<span class="project-period">.</span>',
      'offline.desc': 'Diseño de una solución operativa que conserva información local y sincroniza de forma controlada. Atención a permisos, reglas comerciales y tolerancia a cortes de conexión.',
      'offline.privacy': 'Descripción anonimizada · Sin código ni datos del cliente',
      'approach.kicker': '02 / CÓMO TRABAJO', 'approach.title': 'No solo código.<br><em>Buenas decisiones.</em>',
      'approach.desc': 'Me interesa que una solución sea entendible, mantenible y útil después de publicarse.',
      'approach.one.title': 'Entender antes de construir.', 'approach.one.desc': 'Definir reglas, casos límite y recorridos de usuario antes de sumar complejidad.',
      'approach.two.title': 'Diseñar sistemas, no pantallas sueltas.', 'approach.two.desc': 'Conectar frontend, datos, permisos e integraciones con una arquitectura coherente.',
      'approach.three.title': 'Probar lo que importa.', 'approach.three.desc': 'Validación de comportamientos críticos, estados de error y calidad de la experiencia.',
      'about.kicker': '03 / PERFIL Y HERRAMIENTAS', 'about.title': 'Curiosidad técnica.<br><em>Criterio de producto.</em>',
      'about.p1': 'Soy Carlos Dualibe, desarrollador de software de Argentina. Trabajo con aplicaciones Full Stack, productos digitales y sistemas empresariales; me interesa unir experiencia de usuario, lógica de negocio y calidad técnica.',
      'about.p2': 'Estudio la Tecnicatura Universitaria en Programación en la UTN. Me interesa resolver problemas de negocio con tecnología y mejorar continuamente mi forma de diseñar, programar y validar soluciones.',
      'about.github': 'Mi actividad en GitHub', 'contact.kicker': '04 / CONECTEMOS', 'contact.line1': '¿Tienes una idea', 'contact.line2': 'que construir?',
      'contact.desc': 'Me interesan las oportunidades de desarrollo Full Stack, backend e integración de sistemas. Si mi trabajo conecta con lo que buscas, conversemos.',
      'contact.cta': 'Conocer mi GitHub', 'footer.note': 'DISEÑADO Y DESARROLLADO CON INTENCIÓN.', 'footer.top': 'VOLVER ARRIBA ↑'
    },
    en: {
      'nav.work': 'Work', 'nav.approach': 'Approach', 'nav.about': 'About', 'nav.contact': 'Get in touch',
      'hero.kicker': 'FULL STACK DEVELOPER / ARGENTINA', 'hero.line1': 'Complexity', 'hero.line2': 'made', 'hero.line3': 'simple.',
      'hero.desc': "I'm Carlos Dualibe. I build Full Stack solutions, from interfaces and APIs to management systems, with a focus on product thinking and quality.",
      'hero.cta': 'Explore projects', 'hero.footer': 'From concept to product.', 'hero.scroll': 'SCROLL TO EXPLORE',
      'work.kicker': '01 / SELECTED WORK', 'work.title': 'Ideas turned<br><em>into products.</em>',
      'work.intro': 'A selection of platforms, systems and real-world challenges. Private source code and client information remain protected.',
      'work.disclaimer': 'Project visuals are original conceptual diagrams, not screenshots of production applications. Featured projects are at different stages.',
      'rendo.type': 'WEB PLATFORM · PERSONAL PROJECT', 'rendo.desc': 'Real estate management and listing platform. Reservation workflows, access roles, administration and public-facing UX.',
      'project.visit': 'View beta application', 'project.code': 'Explore repository', 'project.private': 'Project overview · Private source',
      'transai.type': 'ACADEMIC · TEAM PROJECT', 'transai.desc': 'Local AI-assisted visual inspection, with human review, traceability, APIs and a distributed architecture.',
      'turnos.type': 'MANAGEMENT · ACADEMIC', 'turnos.title': 'Appointment system <span class="compact-arrow">↗</span>',
      'turnos.desc': 'Multi-tenant engine for managing practitioners, patients and bookings, with controls to prevent conflicts.',
      'hero.portrait': 'DESIGN · CODE · PRODUCT',
      'wellness.type': 'CLIENT PRODUCT · PRIVATE', 'wellness.title': 'Digital wellness<span class="project-period">.</span>',
      'wellness.desc': 'Phased development of an installable wellness web app: user registration, versioned consent flows and guided onboarding. Project in progress.',
      'wellness.privacy': 'Anonymized professional experience. No client code, screenshots or data.',
      'offline.type': 'BUSINESS SOFTWARE · PRIVATE WORK', 'offline.title': 'Offline-first<span class="project-period">.</span>',
      'offline.desc': 'Architecture for an operational solution that stores data locally and synchronizes in a controlled way. Focus on permissions, business rules and connection resilience.',
      'offline.privacy': 'Anonymized overview · No client code or data',
      'approach.kicker': '02 / HOW I WORK', 'approach.title': 'Beyond code.<br><em>Better decisions.</em>',
      'approach.desc': 'I care about solutions that stay understandable, maintainable and useful long after launch.',
      'approach.one.title': 'Understand before building.', 'approach.one.desc': 'Define rules, edge cases and user flows before introducing complexity.',
      'approach.two.title': 'Design systems, not isolated screens.', 'approach.two.desc': 'Connect frontend, data, permissions and integrations through a coherent architecture.',
      'approach.three.title': 'Test what matters.', 'approach.three.desc': 'Validate critical behaviors, error states and the quality of the user experience.',
      'about.kicker': '03 / BACKGROUND & TOOLSET', 'about.title': 'Technical curiosity.<br><em>Product mindset.</em>',
      'about.p1': "I'm Carlos Dualibe, a software developer based in Argentina. I work on Full Stack applications, digital products and business systems, connecting user experience, business logic and engineering quality.",
      'about.p2': "I'm currently studying Software Development at Universidad Tecnológica Nacional (UTN). I enjoy turning business challenges into usable technology and improving how I design, code and validate solutions.",
      'about.github': 'My work on GitHub', 'contact.kicker': '04 / LET’S CONNECT', 'contact.line1': 'Have an idea', 'contact.line2': 'worth building?',
      'contact.desc': "I'm open to opportunities in Full Stack development, backend and system integration. If my work aligns with what you're looking for, let's connect.",
      'contact.cta': 'Explore my GitHub', 'footer.note': 'DESIGNED AND BUILT WITH INTENTION.', 'footer.top': 'BACK TO TOP ↑'
    }
  };

  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  const languageToggle = document.getElementById('languageToggle');
  const currentLang = document.getElementById('currentLang');
  const otherLang = document.getElementById('otherLang');
  let language = 'es';
  try { if (localStorage.getItem('portfolio-language') === 'en') language = 'en'; } catch (_) {}

  function setLanguage(next) {
    language = next;
    const dict = translations[next];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // All translations are authored locally, not user supplied.
        if (dict[key].includes('<')) el.innerHTML = dict[key];
        else el.textContent = dict[key];
      }
    });
    document.documentElement.lang = next === 'es' ? 'es' : 'en';
    document.title = next === 'es' ? 'Carlos Dualibe® — Desarrollador Full Stack' : 'Carlos Dualibe® — Full Stack Developer';
    document.querySelector('meta[name="description"]').content = next === 'es'
      ? 'Carlos Dualibe — Desarrollador de software Full Stack. Software web, plataformas de negocio e integraciones de IA con atención a los detalles.'
      : 'Carlos Dualibe — Full Stack Developer. Thoughtful software engineering, web platforms and applied AI integrations.';
    currentLang.textContent = next.toUpperCase();
    otherLang.textContent = next === 'es' ? 'EN' : 'ES';
    languageToggle.setAttribute('aria-label', next === 'es' ? 'Switch language to English' : 'Cambiar idioma a español');
    if (mobileToggle) mobileToggle.setAttribute('aria-label', mobileToggle.getAttribute('aria-expanded') === 'true' ? (next === 'es' ? 'Cerrar menú' : 'Close menu') : (next === 'es' ? 'Abrir menú' : 'Open menu')); 
    try { localStorage.setItem('portfolio-language', next); } catch (_) {}
  }
  languageToggle.addEventListener('click', () => setLanguage(language === 'es' ? 'en' : 'es'));
  setLanguage(language);

  function closeMenu() {
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', language === 'es' ? 'Abrir menú' : 'Open menu');
    mobileNav.classList.remove('is-open');
    mobileNav.inert = true;
  }
  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu();
    else {
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileToggle.setAttribute('aria-label', language === 'es' ? 'Cerrar menú' : 'Close menu');
      mobileNav.inert = false;
      mobileNav.classList.add('is-open');
    }
  });
  mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', (event) => { if (event.matches) closeMenu(); });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && 'IntersectionObserver' in window) document.documentElement.classList.add('motion-ready');
  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.06 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else revealItems.forEach((item) => item.classList.add('is-visible'));

  const progressFill = document.getElementById('progressFill');
  let scheduled = false;
  function updateProgress() {
    const available = document.documentElement.scrollHeight - window.innerHeight;
    progressFill.style.width = `${available > 0 ? Math.min(100, Math.max(0, (window.scrollY / available) * 100)) : 0}%`;
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
  document.getElementById('year').textContent = new Date().getFullYear();

  if ('IntersectionObserver' in window) {
    const navLinks = [...document.querySelectorAll('.desktop-nav a')];
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-23% 0px -60% 0px' });
    ['proyectos', 'enfoque', 'perfil'].forEach((id) => navObserver.observe(document.getElementById(id)));
  }
})();
