(() => {
  'use strict';
  const translations = {
    es: {
      'nav.work': 'Proyectos', 'nav.approach': 'Enfoque', 'nav.about': 'Perfil', 'nav.contact': 'Hablemos',
      'hero.kicker': 'FULL STACK DEVELOPER / ARGENTINA', 'hero.line1': 'Lo complejo', 'hero.line2': 'se vuelve', 'hero.line3': 'simple.',
      'hero.desc': 'Soy Carlos Dualibe. Diseño y desarrollo aplicaciones web, APIs y sistemas de gestión; del problema real a un producto que se pueda usar.',
      'hero.cta': 'Explorar proyectos', 'hero.footer': 'Del concepto al producto.', 'hero.scroll': 'DESLIZA PARA EXPLORAR',
      'work.kicker': '01 / TRABAJO SELECCIONADO', 'work.title': 'Software que resuelve<br><em>problemas reales.</em>',
      'work.intro': 'Cinco proyectos: plataformas, aplicaciones de clientes y sistemas de negocio. Qué resolví, con qué tecnologías y qué podés explorar.',
      'work.disclaimer': 'Las fotografías y capturas están identificadas según su origen. Los esquemas restantes explican conceptos técnicos; no simulan resultados de producción.',
      
      'rendo.evidence': 'Beta pública · Plataforma en evolución',
      'transai.evidence': 'Proyecto académico · Imagen de ensayo',
      'turnos.evidence': 'Código público · Reglas de agenda',
      'offline.evidence': 'Arquitectura y datos privados',
      'wellness.evidence': 'Demo anterior + producto en desarrollo', 'wellness.view': 'Ver captura completa ↗', 'transai.view': 'Ver prueba ↗',
      'rendo.type': 'PLATAFORMA WEB · PROYECTO PROPIO', 'rendo.desc': 'Una plataforma inmobiliaria en beta para publicar unidades y organizar reservas, roles y administración. El objetivo: conectar la experiencia pública con las operaciones del propietario.',
      'project.visit': 'Abrir aplicación beta', 'project.code': 'Explorar repositorio', 'project.private': 'Leer caso técnico ↗',
      'transai.type': 'ACADÉMICO · COLABORATIVO', 'transai.desc': 'Inspección de defectos textiles con IA local, un flujo de revisión humana y servicios separados para análisis, trazabilidad y administración. Proyecto académico en equipo.',
      'turnos.type': 'GESTIÓN · ACADÉMICO', 'turnos.title': 'Sistema de turnos <span class="compact-arrow">↗</span>',
      'turnos.desc': 'Agenda multiempresa para administrar pacientes y profesionales. La lógica del backend controla disponibilidad y evita reservas superpuestas.',
      'hero.portrait': 'DISEÑO · CÓDIGO · PRODUCTO',
      'wellness.type': 'PRODUCTO PARA CLIENTE · PRIVADO', 'wellness.title': 'Mi Ciclo<span class="project-period">.</span>',
      'wellness.desc': 'Desarrollo por fases de una PWA de bienestar para un cliente: registro, consentimiento versionado y onboarding guiado. La imagen pertenece a una demo anterior de funcionalidades, no a la app final.',
      'wellness.privacy': 'Producto en desarrollo · Captura de demo con datos ficticios · Repositorio privado',
      'offline.type': 'SOFTWARE EMPRESARIAL · TRABAJO PRIVADO', 'offline.title': 'Offline-first<span class="project-period">.</span>',
      'offline.desc': 'Un sistema de gestión pensado para funcionar incluso sin internet: operaciones locales en SQLite y sincronización controlada al recuperar conexión, con reglas de negocio y permisos.',
      'offline.privacy': 'Caso profesional · Sin datos del cliente',
      'approach.kicker': '02 / CÓMO TRABAJO', 'approach.title': 'Primero el problema.<br><em>Después el código.</em>',
      'approach.desc': 'Mi trabajo va más allá de una interfaz: traduzco requisitos en flujos, modelos de datos, permisos, integraciones y pruebas.',
      'approach.one.title': 'Entender antes de construir.', 'approach.one.desc': 'Definir reglas, casos límite y recorridos de usuario antes de sumar complejidad.',
      'approach.two.title': 'Diseñar sistemas, no pantallas sueltas.', 'approach.two.desc': 'Conectar frontend, datos, permisos e integraciones con una arquitectura coherente.',
      'approach.three.title': 'Probar lo que importa.', 'approach.three.desc': 'Validación de comportamientos críticos, estados de error y calidad de la experiencia.',
      'about.kicker': '03 / PERFIL Y HERRAMIENTAS', 'about.title': 'Construyo software.<br><em>Pienso en producto.</em>',
      'about.p1': 'Soy Carlos Dualibe, desarrollador de software de Argentina. Trabajo con aplicaciones Full Stack, productos digitales y sistemas empresariales; me interesa unir experiencia de usuario, lógica de negocio y calidad técnica.',
      'about.p2': 'Estudio la Tecnicatura Universitaria en Programación en la UTN. Me interesa resolver problemas de negocio con tecnología y mejorar continuamente mi forma de diseñar, programar y validar soluciones.',
      'about.github': 'Mi actividad en GitHub', 'contact.kicker': '04 / CONECTEMOS', 'contact.line1': '¿Trabajamos', 'contact.line2': 'juntos?',
      'contact.desc': 'Disponible para equipos de desarrollo y proyectos freelance. Si buscás alguien para construir, mejorar o mantener un producto web, conversemos.',
      'contact.cta': 'Escribirme por correo', 'footer.note': 'DISEÑADO Y DESARROLLADO CON INTENCIÓN.', 'footer.top': 'VOLVER ARRIBA ↑'
    },
    en: {
      'nav.work': 'Work', 'nav.approach': 'Approach', 'nav.about': 'About', 'nav.contact': 'Get in touch',
      'hero.kicker': 'FULL STACK DEVELOPER / ARGENTINA', 'hero.line1': 'Complexity', 'hero.line2': 'made', 'hero.line3': 'simple.',
      'hero.desc': "I'm Carlos Dualibe. I design and build web applications, APIs and business systems—from a real problem to a product people can use.",
      'hero.cta': 'Explore projects', 'hero.footer': 'From concept to product.', 'hero.scroll': 'SCROLL TO EXPLORE',
      'work.kicker': '01 / SELECTED WORK', 'work.title': 'Software built for<br><em>real problems.</em>',
      'work.intro': 'Five projects across web platforms, client products and business systems. What I built, the tools I used and what you can explore.',
      'work.disclaimer': 'Photos and screenshots are labeled with their source. Other illustrations explain technical ideas; none pretend to be production results.',
      
      'rendo.evidence': 'Public beta · Product in progress',
      'transai.evidence': 'University project · Test fixture',
      'turnos.evidence': 'Public code · Scheduling rules',
      'offline.evidence': 'Private architecture and data',
      'wellness.evidence': 'Earlier demo + ongoing project', 'wellness.view': 'Open full screenshot ↗', 'transai.view': 'View test image ↗',
      'rendo.type': 'WEB PLATFORM · PERSONAL PROJECT', 'rendo.desc': 'A real estate platform in beta to publish units and organize bookings, access roles and management—connecting the public experience with owner operations.',
      'project.visit': 'Open live beta', 'project.code': 'Explore repository', 'project.private': 'Read technical case ↗',
      'transai.type': 'ACADEMIC · TEAM PROJECT', 'transai.desc': 'Textile defect inspection with local AI, human review and services for analysis, traceability and administration. A team university project.',
      'turnos.type': 'MANAGEMENT · ACADEMIC', 'turnos.title': 'Appointment system <span class="compact-arrow">↗</span>',
      'turnos.desc': 'Multi-tenant scheduling for patients and practitioners, with backend availability checks to prevent overlapping appointments.',
      'hero.portrait': 'DESIGN · CODE · PRODUCT',
      'wellness.type': 'CLIENT PRODUCT · PRIVATE', 'wellness.title': 'Mi Ciclo<span class="project-period">.</span>',
      'wellness.desc': 'Phased development of a client wellness PWA: sign-up, versioned consent and guided onboarding. The image is from an earlier feature demo, not the final app.',
      'wellness.privacy': 'In development · Feature demo screenshot with sample data · Private source',
      'offline.type': 'BUSINESS SOFTWARE · PRIVATE WORK', 'offline.title': 'Offline-first<span class="project-period">.</span>',
      'offline.desc': 'A business system designed to keep working offline: local SQLite storage and controlled synchronization on reconnection, with business rules and permissions.',
      'offline.privacy': 'Professional case · No client data',
      'approach.kicker': '02 / HOW I WORK', 'approach.title': 'Understand first.<br><em>Then build.</em>',
      'approach.desc': 'Beyond the interface: I translate requirements into workflows, data models, access controls, integrations and tests.',
      'approach.one.title': 'Understand before building.', 'approach.one.desc': 'Define rules, edge cases and user flows before introducing complexity.',
      'approach.two.title': 'Design systems, not isolated screens.', 'approach.two.desc': 'Connect frontend, data, permissions and integrations through a coherent architecture.',
      'approach.three.title': 'Test what matters.', 'approach.three.desc': 'Validate critical behaviors, error states and the quality of the user experience.',
      'about.kicker': '03 / BACKGROUND & TOOLSET', 'about.title': 'Software engineering.<br><em>Product thinking.</em>',
      'about.p1': "I'm Carlos Dualibe, a software developer based in Argentina. I work on Full Stack applications, digital products and business systems, connecting user experience, business logic and engineering quality.",
      'about.p2': "I'm currently studying Software Development at Universidad Tecnológica Nacional (UTN). I enjoy turning business challenges into usable technology and improving how I design, code and validate solutions.",
      'about.github': 'My work on GitHub', 'contact.kicker': '04 / LET’S CONNECT', 'contact.line1': 'Shall we work', 'contact.line2': 'together?',
      'contact.desc': "Open to engineering roles and freelance projects. If you're looking for someone to build, improve or maintain a web product, let's talk.",
      'contact.cta': 'Email me', 'footer.note': 'DESIGNED AND BUILT WITH INTENTION.', 'footer.top': 'BACK TO TOP ↑'
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
