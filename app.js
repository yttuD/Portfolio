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
      'hero.kicker': "DESARROLLADOR FULL STACK / ARGENTINA", 'hero.line1': 'El software', 'hero.line2': 'tiene que', 'hero.line3': 'servir.',
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
      'approach.three.title': 'Mostrar evidencia, no promesas.', 'approach.three.desc': "Distingo prototipos de funciones verificadas y documento qué probé y qué sigue en desarrollo.",
      'about.kicker': '04 / PERFIL Y HERRAMIENTAS', 'about.title': "Curioso con la interfaz.<br><em>Exigente con el fondo.</em>",
      'about.p1': "Soy Carlos Dualibe, desarrollador Full Stack de Argentina. Me entusiasma convertir problemas concretos en aplicaciones que se puedan usar sin adivinar cómo funcionan.",
      'about.p2': "Estudio Programación en la UTN y trabajo en productos propios, desarrollos para clientes y proyectos académicos. Me gusta pensar las reglas, escribir código legible y comprobar los recorridos críticos.",
      'about.github': 'Mi actividad en GitHub', 'contact.kicker': '05 / CONECTEMOS', 'contact.line1': '¿Trabajamos', 'contact.line2': 'juntos?',
      'contact.desc': "Busco sumarme a un equipo de desarrollo y también colaboro en proyectos freelance. Si hay una aplicación que construir, mejorar o hacer más confiable, escribime.",
      'contact.cta': 'Escribirme en Gmail', 'contact.openApp': 'Usar mi aplicación de correo', 'contact.copy': 'Copiar dirección', 'contact.copied': 'Dirección copiada ✓', 'contact.copyFailed': 'No se pudo copiar automáticamente. Seleccioná la dirección que aparece arriba.', 'footer.note': "HECHO CON CRITERIO, NO CON UNA PLANTILLA.", 'footer.top': 'VOLVER ARRIBA ↑',
      'hero.engineering': "INGENIERÍA DE SOFTWARE",
      'ticker.bookings': "RESERVAS SIN COLISIONES",
      'ticker.permissions': "PERMISOS QUE SE CUMPLEN",
      'ticker.offline': "SINCRONIZACIÓN SIN CONEXIÓN",
      'ticker.context': "DATOS CON CONTEXTO",
      'ticker.evidence': "PRUEBAS CON EVIDENCIA",
      'rendo.beta': "Rendo, beta 2026",
      'wellness.monolito': "MI CICLO / MONOLITO",
      'wellness.caption': "Capturas documentadas de Monolito · Datos de prueba",
      'transai.archLabel': "TRANSAI / ARQUITECTURA",
      'transai.academic': "PROYECTO ACADÉMICO",
      'transai.inputLabel': "01 / ENTRADA",
      'transai.input': "Imagen",
      'transai.serviceLabel': "02 / SERVICIO",
      'transai.analysis': "Análisis",
      'transai.reviewLabel': "03 / CONTROL",
      'transai.review': "Revisión",
      'transai.archDesc': "Servicios independientes · trazabilidad · decisión humana",
      'transai.archFooter': "ESQUEMA CONCEPTUAL / NO ES UNA CAPTURA DE PRUEBA",
      'turnos.caption': "Clínica San Martín · Interfaz publicada",
      'offline.topLabel': "PERSISTENCIA Y SINCRONIZACIÓN",
      'offline.diagramLabel': "ESQUEMA DE ARQUITECTURA",
      'offline.available': "DISPONIBLE SIN CONEXIÓN",
      'offline.sync': "SINC.",
      'offline.remote': "REMOTO",
      'offline.reconciliation': "CONCILIACIÓN",
      'decision.bookingsIndex': "01 / RESERVAS",
      'decision.request': "Solicitud",
      'decision.check': "Validar intervalo",
      'decision.confirm': "Confirmar / Rechazar",
      'decision.offlineIndex': "02 / SIN CONEXIÓN",
      'decision.localDB': "SQLite local",
      'decision.sync': "Sincronización",
      'decision.remoteDB': "Autoridad remota",
      'decision.dataIndex': "03 / DATOS",
      'decision.identity': "Identidad",
      'decision.permissions': "Permisos",
      'decision.authorized': "Acceso autorizado",
      'skills.frontend': "01 / FRONTEND",
      'skills.backend': "02 / SERVIDOR Y DATOS",
      'skills.quality': "03 / CALIDAD Y ENTREGA",
      'skills.integrations': "04 / INTEGRACIONES",
      'skills.testing': "Playwright · Git · Docker · Pruebas · Diseño de APIs",
      'skills.tools': "Supabase · Firebase · IA aplicada · Automatización",
      'contact.location': "ARGENTINA / TRABAJO REMOTO",
      'wellness.photoLabel': "CAPTURAS DEL",
      'wellness.backdropTitle': "DESARROLLO MÓVIL<br>CON IDENTIDAD PROPIA",
      'rendo.live': "CAPTURA REAL / BETA PÚBLICA",
      'turnos.live': "CAPTURA REAL / INTERFAZ",
      'rendo.figcaption': "Captura de navegador · Página pública ·",
      'case.challenge': "↳ EL RETO",
      'case.focus': "↳ EL FOCO",
      'case.choice': "↳ LA DECISIÓN",
      'case.inspect': "Ver decisión",
      'case.rendo': "Un alquiler cambia la disponibilidad del anuncio, pero no debe ocultar la unidad del catálogo. El calendario, los permisos y la operación necesitan hablar el mismo idioma.",
      'case.wellness': "La experiencia móvil debe ser cálida, pero también respetar privacidad, consentimientos y la diferencia entre estimaciones del ciclo y diagnósticos.",
      'case.transai': "Separar la inspección automatizada de la revisión humana y conservar trazabilidad del resultado, sin presentar las imágenes de ensayo como predicciones.",
      'case.turnos': "No basta con mostrar espacios libres: el servidor debe rechazar una reserva cuando existe un solapamiento con otro turno.",
      'case.offline': "Guardar el trabajo localmente y tratar la reconciliación remota como un problema de integridad de datos, no como un botón de actualizar.",
      'wellness.screenHome': "01 / INICIO ↗",
      'wellness.screenDiscover': "02 / DESCUBRIR ↗",
      'screen.date': "NOV. 2026",
      'a11y.home': "Carlos Dualibe, ir al inicio",
      'a11y.mainNav': "Navegación principal",
      'a11y.mobileNav': "Navegación móvil",
      'a11y.portrait': "Retrato de Carlos Dualibe",
      'a11y.portraitAlt': "Retrato profesional de Carlos Dualibe, con lentes y barba, sobre fondo gris oscuro",
      'a11y.scroll': "Desplazarse a proyectos",
      'a11y.ticker': "Tecnologías y áreas",
      'a11y.rendoFigure': "Captura real de la portada pública de Rendo beta, noviembre de 2026",
      'a11y.rendoLink': "Visitar la aplicación pública Rendo beta",
      'a11y.rendoAlt': "Captura de la portada de la beta pública de Rendo, plataforma de alquileres y propiedades",
      'a11y.wellnessFigure': "Dos capturas de Mi Ciclo de la rama Monolito, no del prototipo anterior",
      'a11y.wellnessHome': "Abrir captura real del inicio de Mi Ciclo en Monolito",
      'a11y.wellnessAlt': "Captura de Mi Ciclo Monolito con registro diario y seguimiento del ciclo (datos de prueba)",
      'a11y.wellnessDiscover': "Abrir captura real de Descubrir de Mi Ciclo en Monolito",
      'a11y.wellnessDiscoverAlt': "Pantalla Descubrir de Mi Ciclo con un reel y navegación inferior",
      'a11y.transaiDiagram': "Esquema de arquitectura de TransAI: imagen, análisis y revisión humana (no es una predicción)",
      'a11y.turnosFigure': "Captura real del frontend público del sistema de turnos, noviembre de 2026",
      'a11y.turnosLink': "Abrir la demostración pública del sistema de turnos",
      'a11y.turnosAlt': "Captura del inicio del sistema de turnos de Clínica San Martín",
      'a11y.offlineDiagram': "Esquema conceptual de sincronización sin conexión",
      'a11y.footerTop': "Volver arriba",
      'a11y.skip': "Saltar al contenido"
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
      'contact.cta': 'Email via Gmail', 'contact.openApp': 'Use my email app', 'contact.copy': 'Copy email address', 'contact.copied': 'Email address copied ✓', 'contact.copyFailed': 'Could not copy automatically. Select the email address shown above.', 'footer.note': 'DESIGNED AND BUILT WITH INTENTION.', 'footer.top': 'BACK TO TOP ↑',
      'hero.engineering': "SOFTWARE ENGINEERING",
      'ticker.bookings': "NO DOUBLE BOOKINGS",
      'ticker.permissions': "ENFORCED PERMISSIONS",
      'ticker.offline': "OFFLINE SYNCHRONIZATION",
      'ticker.context': "DATA WITH CONTEXT",
      'ticker.evidence': "TESTS WITH EVIDENCE",
      'rendo.beta': "Rendo, beta 2026",
      'wellness.monolito': "MI CICLO / MONOLITO",
      'wellness.caption': "Monolito repository screenshots · Test data",
      'transai.archLabel': "TRANSAI / ARCHITECTURE",
      'transai.academic': "UNIVERSITY PROJECT",
      'transai.inputLabel': "01 / INPUT",
      'transai.input': "Image",
      'transai.serviceLabel': "02 / SERVICE",
      'transai.analysis': "Analysis",
      'transai.reviewLabel': "03 / REVIEW",
      'transai.review': "Human review",
      'transai.archDesc': "Separate services · traceability · human oversight",
      'transai.archFooter': "CONCEPTUAL DIAGRAM / NOT A TEST SCREENSHOT",
      'turnos.caption': "Clínica San Martín · Deployed interface",
      'offline.topLabel': "STORAGE AND SYNCHRONIZATION",
      'offline.diagramLabel': "ARCHITECTURE DIAGRAM",
      'offline.available': "AVAILABLE OFFLINE",
      'offline.sync': "SYNC",
      'offline.remote': "REMOTE",
      'offline.reconciliation': "RECONCILIATION",
      'decision.bookingsIndex': "01 / BOOKINGS",
      'decision.request': "Request",
      'decision.check': "Check time slot",
      'decision.confirm': "Confirm / Reject",
      'decision.offlineIndex': "02 / OFFLINE",
      'decision.localDB': "Local SQLite",
      'decision.sync': "Synchronization",
      'decision.remoteDB': "Remote source of truth",
      'decision.dataIndex': "03 / DATA",
      'decision.identity': "Identity",
      'decision.permissions': "Permissions",
      'decision.authorized': "Authorized access",
      'skills.frontend': "01 / FRONTEND",
      'skills.backend': "02 / BACKEND & DATA",
      'skills.quality': "03 / QUALITY & DELIVERY",
      'skills.integrations': "04 / INTEGRATIONS",
      'skills.testing': "Playwright · Git · Docker · Testing · API design",
      'skills.tools': "Supabase · Firebase · Applied AI · Automation",
      'contact.location': "BASED IN ARGENTINA / REMOTE",
      'wellness.photoLabel': "SCREENSHOTS FROM",
      'wellness.backdropTitle': "MOBILE SOFTWARE<br>WITH ITS OWN IDENTITY",
      'rendo.live': "REAL SCREENSHOT / PUBLIC BETA",
      'turnos.live': "REAL SCREENSHOT / FRONTEND",
      'rendo.figcaption': "Browser capture · Public page ·",
      'case.challenge': "↳ THE CHALLENGE",
      'case.focus': "↳ THE FOCUS",
      'case.choice': "↳ THE DECISION",
      'case.inspect': "View reasoning",
      'case.rendo': "A rental changes availability, but should not remove the property from public listings. The calendar, permissions and operations must stay consistent.",
      'case.wellness': "Mobile UX should feel welcoming while protecting privacy and consent and distinguishing cycle estimates from diagnoses.",
      'case.transai': "Separate automated inspection from human review and preserve traceability without misrepresenting fixture images as predictions.",
      'case.turnos': "Showing free slots is not enough: the server must reject a booking if it overlaps with another appointment.",
      'case.offline': "Save work locally and treat remote reconciliation as a data integrity problem, not simply a refresh button.",
      'wellness.screenHome': "01 / HOME ↗",
      'wellness.screenDiscover': "02 / DISCOVER ↗",
      'screen.date': "NOV 2026",
      'a11y.home': "Carlos Dualibe, go to homepage",
      'a11y.mainNav': "Main navigation",
      'a11y.mobileNav': "Mobile navigation",
      'a11y.portrait': "Portrait of Carlos Dualibe",
      'a11y.portraitAlt': "Professional portrait of Carlos Dualibe wearing glasses against a dark gray background",
      'a11y.scroll': "Scroll to projects",
      'a11y.ticker': "Technical areas",
      'a11y.rendoFigure': "Real screenshot of Rendo public beta homepage, November 2026",
      'a11y.rendoLink': "Visit Rendo public beta",
      'a11y.rendoAlt': "Screenshot of the Rendo public beta homepage, property rental platform",
      'a11y.wellnessFigure': "Two Mi Ciclo screenshots from the Monolito branch, not the previous prototype",
      'a11y.wellnessHome': "Open real Mi Ciclo Monolito home screenshot",
      'a11y.wellnessAlt': "Mi Ciclo Monolito screenshot showing cycle tracking and daily logging (test data)",
      'a11y.wellnessDiscover': "Open Mi Ciclo Monolito Discover screenshot",
      'a11y.wellnessDiscoverAlt': "Mi Ciclo Discover screen with visual content and bottom navigation",
      'a11y.transaiDiagram': "TransAI architecture diagram: image input, analysis and human review (not a prediction)",
      'a11y.turnosFigure': "Real screenshot of the public appointment system frontend, November 2026",
      'a11y.turnosLink': "Open the public appointment system demo",
      'a11y.turnosAlt': "Clínica San Martín appointment system screenshot showing its booking homepage",
      'a11y.offlineDiagram': "Conceptual offline-first synchronization diagram",
      'a11y.footerTop': "Back to top",
      'a11y.skip': "Skip to content"
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
    for (const attribute of ['aria-label', 'alt']) {
      document.querySelectorAll('[data-i18n-' + attribute + ']').forEach((element) => {
        const key = element.getAttribute('data-i18n-' + attribute);
        if (dict[key] !== undefined) element.setAttribute(attribute, dict[key]);
      });
    }
    document.querySelectorAll('a[href^="https://rendo-beta-web.vercel.app/"]').forEach((link) => {
      link.href = 'https://rendo-beta-web.vercel.app/' + next;
    });
    document.documentElement.lang = next === 'es' ? 'es' : 'en';
    document.title = next === 'es' ? 'Carlos Dualibe® — Desarrollador Full Stack' : 'Carlos Dualibe® — Full Stack Developer';
    document.querySelector('meta[name="description"]').content = next === 'es'
      ? 'Carlos Dualibe — Desarrollador de software Full Stack. Software web, plataformas de negocio e integraciones de IA con atención a los detalles.'
      : 'Carlos Dualibe — Full Stack Developer. Thoughtful software engineering, web platforms and applied AI integrations.';
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = document.querySelector('meta[name="description"]').content;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = document.title;
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.content = next === 'es' ? 'es_AR' : 'en_US';
    const structuredData = document.querySelector('script[type="application/ld+json"]');
    if (structuredData) {
      try {
        const person = JSON.parse(structuredData.textContent);
        person.jobTitle = next === 'es' ? 'Desarrollador Full Stack' : 'Full Stack Developer';
        person.description = next === 'es'
          ? 'Desarrollador Full Stack en Argentina, disponible para empleo remoto y proyectos freelance.'
          : 'Full Stack developer based in Argentina, open to remote employment and freelance projects.';
        structuredData.textContent = JSON.stringify(person);
      } catch (_) {}
    }
    currentLang.textContent = next.toUpperCase();
    otherLang.textContent = next === 'es' ? 'EN' : 'ES';
    languageToggle.setAttribute('aria-label', next === 'es' ? 'Switch language to English' : 'Cambiar idioma a español');
    if (mobileToggle) mobileToggle.setAttribute('aria-label', mobileToggle.getAttribute('aria-expanded') === 'true' ? (next === 'es' ? 'Cerrar menú' : 'Close menu') : (next === 'es' ? 'Abrir menú' : 'Open menu')); 
    try { localStorage.setItem('portfolio-language', next); } catch (_) {}
  }
  // Offer a working browser-based compose option without a mailto: handler.
  // Keep the native email-app route and a clipboard alternative.
  const emailCopyButton = document.getElementById('copyEmailButton');
  const emailCopyStatus = document.getElementById('emailCopyStatus');
  const contactEmail = 'carlosdualive@gmail.com';
  async function copyContactEmail() {
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(contactEmail);
        copied = true;
      }
    } catch (_) {}
    if (!copied) {
      const helper = document.createElement('textarea');
      helper.value = contactEmail;
      helper.setAttribute('readonly', '');
      helper.style.position = 'fixed';
      helper.style.left = '-9999px';
      document.body.append(helper);
      helper.select();
      try { copied = document.execCommand('copy'); } catch (_) {}
      helper.remove();
    }
    if (emailCopyStatus) {
      emailCopyStatus.textContent = translations[language][copied ? 'contact.copied' : 'contact.copyFailed'];
    }
  }
  if (emailCopyButton) emailCopyButton.addEventListener('click', copyContactEmail);

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
