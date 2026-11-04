(() => {
  'use strict';
  const translations = {
    es: {
      'decisions.note': 'Esquemas explicativos de decisiones técnicas; no son capturas ni pruebas de ejecución.',
      'decisions.three.desc': 'En productos con información sensible, los permisos viven también en los datos y sus reglas de acceso.',
      'decisions.three.title': 'La privacidad también se diseña.',
      'decisions.two.desc': 'Un sistema offline-first obliga a pensar qué se guarda, cuándo se sincroniza y cómo se tratan los conflictos.',
      'decisions.two.title': 'El trabajo no debería perderse.',
      'decisions.one.desc': 'La disponibilidad tiene que validarse en el servidor, no quedar librada al calendario que ve la persona.',
      'decisions.one.title': 'La agenda no decide sola.',
      'decisions.intro': 'Tres decisiones que aparecen en proyectos distintos, pero responden a la misma pregunta: ¿qué pasa cuando el uso real se complica?',
      'decisions.title': 'La interfaz importa.<br><em>La lógica la sostiene.</em>',
      'decisions.kicker': '02 / LA PARTE QUE NO SE VE',
      'nav.work': 'Proyectos', 'nav.approach': 'Enfoque', 'nav.about': 'Perfil', 'nav.contact': 'Hablemos',
      'hero.kicker': 'FULL STACK DEVELOPER / ARGENTINA', 'hero.line1': 'El software', 'hero.line2': 'tiene que', 'hero.line3': 'servir.',
      'hero.desc': 'Soy Carlos Dualibe. Trabajo donde una buena interfaz se encuentra con lo difícil: permisos, datos, reglas de negocio y esos casos que no aparecen en una demo.',
      'hero.cta': 'Ver trabajo real', 'hero.footer': 'Del primer boceto al último caso límite.', 'hero.scroll': 'DESLIZA PARA EXPLORAR',
      'work.kicker': '01 / PROYECTOS CON CONTEXTO', 'work.title': 'Cada proyecto<br><em>tiene un porqué.</em>',
      'work.intro': 'No solo tecnologías: qué problema había, qué decisiones tomé y qué parte del trabajo se puede ver.',
      'work.disclaimer': 'Las fotografías y capturas están identificadas según su origen. Los esquemas restantes explican conceptos técnicos; no simulan resultados de producción.',
      
      'rendo.evidence': 'Demo pública · Captura real del frontend',
      'transai.evidence': 'Proyecto académico · Arquitectura',
      'turnos.evidence': 'Frontend real · Código público',
      'offline.evidence': 'Arquitectura y datos privados',
      'wellness.evidence': 'Capturas del repositorio · Rama Monolito', 'wellness.view': 'Ver captura completa ↗', 'transai.view': 'Ver prueba ↗',
      'rendo.type': 'PLATAFORMA WEB · PROYECTO PROPIO', 'rendo.desc': 'Una reserva afecta más que un calendario. En Rendo trabajo en conectar publicaciones, disponibilidad, roles y operaciones de alquiler para que el sistema tenga reglas coherentes de punta a punta.',
      'project.visit': 'Abrir aplicación beta', 'project.code': 'Explorar repositorio', 'project.private': 'Leer caso técnico ↗',
      'transai.type': 'ACADÉMICO · COLABORATIVO', 'transai.desc': '¿Cómo integrar visión artificial sin quitarle el control a quien revisa? En TransAI trabajamos con servicios separados para análisis, trazabilidad y validación humana. Proyecto académico colaborativo.',
      'turnos.type': 'GESTIÓN · ACADÉMICO', 'turnos.title': 'Sistema de turnos <span class="compact-arrow">↗</span>',
      'turnos.desc': 'El desafío no es dibujar una agenda: es validar disponibilidad en el backend para evitar turnos superpuestos, incluso cuando dos personas intentan reservar el mismo horario.',
      'hero.portrait': 'LÓGICA · INTERFAZ · PRODUCTO',
      'wellness.type': 'PRODUCTO PARA CLIENTE · PRIVADO', 'wellness.title': 'Mi Ciclo<span class="project-period">.</span>',
      'wellness.desc': 'Un producto móvil en desarrollo con seguimiento del ciclo, registro cotidiano y comunidad. Trabajo con Next.js, Supabase y Capacitor en flujos sensibles: consentimiento, privacidad, estados y experiencia mobile-first.',
      'wellness.privacy': 'Capturas documentadas de Monolito con datos de prueba · No son pantallas de producción · Código privado',
      'offline.type': 'SOFTWARE EMPRESARIAL · TRABAJO PRIVADO', 'offline.title': 'Offline-first<span class="project-period">.</span>',
      'offline.desc': 'En una operación de campo, quedarse sin internet no puede detener el trabajo. Diseñé el flujo alrededor de datos locales en SQLite y sincronización con una autoridad remota.',
      'offline.privacy': 'Caso profesional · Sin datos del cliente',
      'approach.kicker': '03 / CÓMO TRABAJO', 'approach.title': 'Primero lo que importa.<br><em>Después lo que luce.</em>',
      'approach.desc': 'Me interesa que una interfaz sea clara, pero también lo que no se ve: permisos consistentes, estados difíciles, persistencia y pruebas.',
      'approach.one.title': 'Entender el borde del problema.', 'approach.one.desc': 'Reservas simultáneas, permisos, formularios incompletos: los casos límite también son producto.',
      'approach.two.title': 'Conectar las piezas.', 'approach.two.desc': 'Diseño cómo se hablan la interfaz, los datos, la API y los procesos que sostienen cada operación.',
      'approach.three.title': 'Mostrar evidencia, no promesas.', 'approach.three.desc': 'I separate prototypes from verified features and document what is tested versus what is still in progress.',
      'about.kicker': '04 / PERFIL Y HERRAMIENTAS', 'about.title': 'Curious about UX.<br><em>Serious about the internals.</em>',
      'about.p1': 'I\'m Carlos Dualibe, a Full Stack developer from Argentina. I enjoy turning specific problems into applications people can use without guessing how they work.',
      'about.p2': 'I study Software Development at UTN and work on personal products, client work and academic projects. I care about clear rules, readable code and tested critical flows.',
      'about.github': 'Mi actividad en GitHub', 'contact.kicker': '05 / CONECTEMOS', 'contact.line1': '¿Trabajamos', 'contact.line2': 'juntos?',
      'contact.desc': 'I\'m open to joining an engineering team and taking on freelance projects. If you need to build, improve or make an application more reliable, get in touch.',
      'contact.cta': 'Escribirme por correo', 'footer.note': 'BUILT WITH JUDGMENT, NOT A TEMPLATE.', 'footer.top': 'VOLVER ARRIBA ↑'
    },
    en: {
      'decisions.note': 'Explanatory diagrams of technical decisions; not screenshots or execution evidence.',
      'decisions.three.desc': 'With sensitive data, access rules must live in the data layer too.',
      'decisions.three.title': 'Privacy is a design decision.',
      'decisions.two.desc': 'Offline-first forces you to design storage, synchronization and conflict handling deliberately.',
      'decisions.two.title': 'Work should never disappear.',
      'decisions.one.desc': 'Availability must be enforced on the server, not entrusted to the calendar on screen.',
      'decisions.one.title': 'The calendar cannot decide alone.',
      'decisions.intro': 'Three choices from different projects that answer the same question: what happens when real-world usage gets messy?',
      'decisions.title': 'The interface matters.<br><em>The logic supports it.</em>',
      'decisions.kicker': '02 / THE WORK YOU DON’T SEE',
      'approach.three.title': 'Show evidence, not promises.',
      'nav.work': 'Work', 'nav.approach': 'Approach', 'nav.about': 'About', 'nav.contact': 'Get in touch',
      'hero.kicker': 'FULL STACK DEVELOPER / ARGENTINA', 'hero.line1': 'Software', 'hero.line2': 'must', 'hero.line3': 'deliver.',
      'hero.desc': 'I\'m Carlos Dualibe. I work where good interfaces meet the hard parts: permissions, data, business rules and the edge cases that never appear in a demo.',
      'hero.cta': 'Explore my work', 'hero.footer': 'From first sketch to the last edge case.', 'hero.scroll': 'SCROLL TO EXPLORE',
      'work.kicker': '01 / WORK WITH CONTEXT', 'work.title': 'Every project<br><em>has a reason.</em>',
      'work.intro': 'Not just a tech stack: the problem, the decisions, and what you can actually inspect.',
      'work.disclaimer': 'Photos and screenshots are labeled with their source. Other illustrations explain technical ideas; none pretend to be production results.',
      
      'rendo.evidence': 'Public beta · Real frontend screenshot',
      'transai.evidence': 'University project · Architecture',
      'turnos.evidence': 'Real frontend · Public code',
      'offline.evidence': 'Private architecture and data',
      'wellness.evidence': 'Screenshots from repository · Monolito branch', 'wellness.view': 'Open full screenshot ↗', 'transai.view': 'View test image ↗',
      'rendo.type': 'WEB PLATFORM · PERSONAL PROJECT', 'rendo.desc': 'A booking affects more than a calendar. In Rendo, I work on connecting listings, availability, roles and rental operations into consistent end-to-end product rules.',
      'project.visit': 'Open live beta', 'project.code': 'Explore repository', 'project.private': 'Read technical case ↗',
      'transai.type': 'ACADEMIC · TEAM PROJECT', 'transai.desc': 'How do you add computer vision without removing human oversight? In TransAI our university team built around separate services for analysis, traceability and human review.',
      'turnos.type': 'MANAGEMENT · ACADEMIC', 'turnos.title': 'Appointment system <span class="compact-arrow">↗</span>',
      'turnos.desc': 'The challenge is not drawing a calendar: it is validating availability on the server to prevent double bookings, even when two people request the same slot.',
      'hero.portrait': 'LOGIC · INTERFACE · PRODUCT',
      'wellness.type': 'CLIENT PRODUCT · PRIVATE', 'wellness.title': 'Mi Ciclo<span class="project-period">.</span>',
      'wellness.desc': 'An evolving mobile product for cycle tracking, daily logging and community. I work with Next.js, Supabase and Capacitor on sensitive flows: consent, privacy, state and mobile-first experience.',
      'wellness.privacy': 'Documented Monolito screenshots with test data · Not production screens · Private source code',
      'offline.type': 'BUSINESS SOFTWARE · PRIVATE WORK', 'offline.title': 'Offline-first<span class="project-period">.</span>',
      'offline.desc': 'Field work cannot stop because a connection drops. I designed the workflow around local SQLite data and synchronization with a remote source of truth.',
      'offline.privacy': 'Professional case · No client data',
      'approach.kicker': '03 / HOW I WORK', 'approach.title': 'Substance first.<br><em>Then polish.</em>',
      'approach.desc': 'I care about clear interfaces—and the invisible work behind them: consistent permissions, edge cases, persistence and testing.',
      'approach.one.title': 'Understand the edge cases.', 'approach.one.desc': 'Concurrent bookings, access control, incomplete forms: edge cases are part of the product.',
      'approach.two.title': 'Connect the pieces.', 'approach.two.desc': 'I design how the interface, data, APIs and processes work together.',
      'approach.three.title': 'Test what matters.', 'approach.three.desc': 'Validate critical behaviors, error states and the quality of the user experience.',
      'about.kicker': '04 / ABOUT & TOOLKIT', 'about.title': 'Software engineering.<br><em>Product thinking.</em>',
      'about.p1': "I'm Carlos Dualibe, a software developer based in Argentina. I work on Full Stack applications, digital products and business systems, connecting user experience, business logic and engineering quality.",
      'about.p2': "I'm currently studying Software Development at Universidad Tecnológica Nacional (UTN). I enjoy turning business challenges into usable technology and improving how I design, code and validate solutions.",
      'about.github': 'My work on GitHub', 'contact.kicker': '05 / GET IN TOUCH', 'contact.line1': 'Shall we work', 'contact.line2': 'together?',
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
