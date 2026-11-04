(() => {
  'use strict';
  const translations = {
    es: {
      "wb.live.open": "EXPLORAR CASO ↗",
      "wb.live.beta": "VISITAR BETA REAL ↗",
      "wb.live.case": "VER CASO ↗",
      "wb.live.rendo.aria": "Abrir caso de estudio de Rendo",
      "wb.live.turnos.aria": "Abrir caso de estudio del sistema de turnos",
      "wb.media.rendo.altHome": "Portada completa de la beta pública de Rendo, sin recortes",
      "wb.media.rendo.altCatalog": "Detalle del catálogo público de Rendo, recortado intencionalmente",
      "wb.media.rendo.home": "01 / PORTADA PÚBLICA",
      "wb.media.rendo.homeNote": "Pantalla principal completa de la beta",
      "wb.media.rendo.catalog": "02 / CATÁLOGO DE UNIDADES",
      "wb.media.rendo.catalogNote": "Detalle auténtico del catálogo · recorte intencional",
      "wb.media.rendo.insight": "De la presentación a la exploración.",
      "wb.media.rendo.insightNote": "La portada presenta el producto y el catálogo muestra sus unidades. Son capturas reales, no maquetas creadas para el portafolio.",
      "wb.media.mi.altHome": "Pantalla completa de inicio de Mi Ciclo con seguimiento y datos de prueba",
      "wb.media.mi.altDiscover": "Pantalla completa Descubrir de Mi Ciclo",
      "wb.media.mi.home": "01 / INICIO",
      "wb.media.mi.homeNote": "Seguimiento y registro diario · datos de prueba",
      "wb.media.mi.discover": "02 / DESCUBRIR",
      "wb.media.mi.discoverNote": "Contenido y navegación móvil",
      "wb.media.mi.insight": "Una experiencia pensada para el teléfono.",
      "wb.media.mi.insightNote": "Las dos pantallas conservan su formato vertical completo, sin cortar contenido ni divulgar datos personales.",
      "wb.media.mi.private": "EN DESARROLLO · CÓDIGO PRIVADO",
      "wb.media.turnos.alt": "Captura histórica completa del sistema de turnos Clínica San Martín, con backend descontinuado",
      "wb.media.turnos.title": "01 / FRONTEND HISTÓRICO",
      "wb.media.turnos.note": "Captura completa · API y base de datos fuera de servicio",
      "wb.media.turnos.status": "El frontend se muestra como experiencia académica; no se ofrece una demo operativa.",
      "wb.media.diagramLabel": "ESQUEMA CONCEPTUAL · NO ES UNA CAPTURA",
      "wb.media.transai.n0": "Interfaz",
      "wb.media.transai.n1": "Servicios",
      "wb.media.transai.n2": "Revisión humana",
      "wb.media.transai.desc": "Inspección visual asistida por IA con servicios separados y revisión humana.",
      "wb.media.offline.n0": "Clientes y equipos",
      "wb.media.offline.n1": "Visitas y consumos",
      "wb.media.offline.n2": "Cobros y reportes",
      "wb.media.offline.desc": "Equipos instalados, visitas, recargas, inventario y cobranza. El diseño contempla trabajo de campo sin conexión.",
      'wb.type.rendo': "Beta pública",
      'wb.type.mi-ciclo': "Cliente · En desarrollo",
      'wb.type.transai': "Académico · Colaborativo",
      'wb.type.turnos': "Frontend histórico",
      'wb.type.offline': "Cliente · En desarrollo",
      'wb.desc.rendo': "Disponibilidad, propiedades y reservas dentro de una misma plataforma.",
      'wb.open': "VER CASO DE ESTUDIO ↗",
      'wb.desc.mi-ciclo': "Bienestar, seguimiento y experiencia móvil con privacidad.",
      'wb.desc.transai': "Servicios de inspección visual y revisión humana.",
      'wb.desc.turnos': "Reservas y validación de disponibilidad; backend fuera de servicio.",
      'wb.desc.offline': "Gestión de clientes, equipos, visitas, insumos y cobros para servicios de aromatización.",
      'wb.title': "Elegí un producto.<br>Entendé cómo funciona.",
      'wb.subtitle': "Un recorrido interactivo por cinco trabajos. Capturas auténticas cuando existen y decisiones técnicas donde importa.",
      'wb.detail': "VER HISTORIA Y ARQUITECTURA ↗",
      'journey.title': "Aprender. Construir. Entregar.",
      'journey.intro': "Mi experiencia combina formación, productos propios y trabajo real para clientes.",
      'journey.university': "Formación en programación",
      'journey.universityDesc': "Estudio Programación en la UTN y desarrollo proyectos integradores colaborativos.",
      'journey.clients': "Software para clientes",
      'journey.clientsDesc': "Proyectos con necesidades reales, revisiones, privacidad y decisiones de producto.",
      'journey.engineer': "De la interfaz a los datos",
      'journey.engineerDesc': "Me interesa conectar APIs, permisos, datos, experiencia y pruebas.",
      'journey.cv': "EXPLORAR MI CV ↗",
      'journey.available': "DISPONIBLE PARA EMPLEO REMOTO Y FREELANCE",
      'wb.cv': "Mi CV ↗",

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
      'turnos.status': "Estado actual: API y base de datos fuera de servicio. Se muestra una captura histórica del frontend, no una demo funcional.",
      'turnos.evidence': "Frontend histórico · Código público",
      'offline.evidence': 'Flujo funcional documentado · Código privado',
      'wellness.evidence': 'Capturas de la aplicación', 'wellness.view': 'Ver captura completa ↗', 'transai.view': 'Ver prueba ↗',
      'rendo.type': 'PLATAFORMA WEB · PROYECTO PROPIO', 'rendo.desc': 'Una reserva afecta más que un calendario. En Rendo trabajo en conectar publicaciones, disponibilidad, roles y operaciones de alquiler para que el sistema tenga reglas coherentes de punta a punta.',
      'project.visit': 'Abrir aplicación beta', 'project.code': 'Explorar repositorio', 'project.private': 'Leer caso técnico ↗',
      'transai.type': 'ACADÉMICO · COLABORATIVO', 'transai.desc': '¿Cómo integrar visión artificial sin quitarle el control a quien revisa? En TransAI trabajamos con servicios separados para análisis, trazabilidad y validación humana. Proyecto académico colaborativo.',
      'turnos.type': 'GESTIÓN · ACADÉMICO', 'turnos.title': 'Sistema de turnos <span class="compact-arrow">↗</span>',
      'turnos.desc': "Proyecto académico de reservas y gestión de turnos, diseñado para validar disponibilidad y prevenir horarios superpuestos. El backend y la base de datos ya no están desplegados.",
      'hero.portrait': 'LÓGICA · INTERFAZ · PRODUCTO',
      'wellness.type': 'PRODUCTO PARA CLIENTE · PRIVADO', 'wellness.title': 'Mi Ciclo<span class="project-period">.</span>',
      'wellness.desc': 'Un producto móvil en desarrollo con seguimiento del ciclo, registro cotidiano y comunidad. Trabajo con Next.js, Supabase y Capacitor en flujos sensibles: consentimiento, privacidad, estados y experiencia mobile-first.',
      'wellness.privacy': 'Imágenes de la aplicación con datos de prueba · Código privado',
      'offline.type': 'GESTIÓN DE AROMATIZACIÓN · CLIENTE', 'offline.title': 'Gestor de Aromatizantes<span class="project-period">.</span>',
      'offline.desc': 'Software para organizar clientes, equipos de aromatización, visitas de mantenimiento, consumos de fragancias, inventario, cobros y cierres mensuales. Diseñado para trabajar también sin conexión.',
      'offline.privacy': 'Proyecto de cliente · En desarrollo · Código privado',
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
      'wellness.monolito': "MI CICLO / BIENESTAR DIGITAL",
      'wellness.caption': "Interfaz de Mi Ciclo · Datos de prueba",
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
      'turnos.caption': "Clínica San Martín · Captura de interfaz",
      'offline.topLabel': "GESTIÓN DE SERVICIOS DE AROMATIZACIÓN",
      'offline.diagramLabel': "ESQUEMA FUNCIONAL · NO ES CAPTURA",
      'offline.available': "EQUIPOS Y FRAGANCIAS", 'offline.localKicker': "SERVICIO", 'offline.localLabel': "Visitas", 'offline.remoteLabel': "Stock y cobros",
      'offline.sync': "REGISTROS",
      'offline.remote': "GESTIÓN",
      'offline.reconciliation': "CIERRE MENSUAL",
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
      'wellness.photoLabel': "PANTALLAS DE",
      'wellness.backdropTitle': "SEGUIMIENTO<br>Y BIENESTAR",
      'rendo.live': "CAPTURA REAL / BETA PÚBLICA",
      'turnos.live': "CAPTURA HISTÓRICA / FRONTEND",
      'rendo.figcaption': "Captura de navegador · Página pública ·",
      'case.challenge': "↳ EL RETO",
      'case.focus': "↳ EL FOCO",
      'case.choice': "↳ LA DECISIÓN",
      'case.inspect': "Ver decisión",
      'case.rendo': "Un alquiler cambia la disponibilidad del anuncio, pero no debe ocultar la unidad del catálogo. El calendario, los permisos y la operación necesitan hablar el mismo idioma.",
      'case.wellness': "La experiencia móvil debe ser cálida, pero también respetar privacidad, consentimientos y la diferencia entre estimaciones del ciclo y diagnósticos.",
      'case.transai': "Separar la inspección automatizada de la revisión humana y conservar trazabilidad del resultado, sin presentar las imágenes de ensayo como predicciones.",
      'case.turnos': "No basta con mostrar espacios libres: el servidor debe rechazar una reserva cuando existe un solapamiento con otro turno.",
      'case.offline': "Una visita programada no equivale a un servicio realizado: consumos, cargos y cobros requieren hechos confirmados, sin duplicaciones al sincronizar.",
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
      'a11y.wellnessFigure': "Dos capturas de la aplicación Mi Ciclo con datos de prueba",
      'a11y.wellnessHome': "Abrir captura de la pantalla de inicio de Mi Ciclo",
      'a11y.wellnessAlt': "Pantalla de Mi Ciclo con seguimiento del ciclo y registro diario (datos de prueba)",
      'a11y.wellnessDiscover': "Abrir captura de la pantalla Descubrir de Mi Ciclo",
      'a11y.wellnessDiscoverAlt': "Pantalla Descubrir de Mi Ciclo con un reel y navegación inferior",
      'a11y.transaiDiagram': "Esquema de arquitectura de TransAI: imagen, análisis y revisión humana (no es una predicción)",
      'a11y.turnosFigure': "Captura histórica del frontend del sistema de turnos; no representa un servicio actualmente operativo",
      'a11y.turnosAlt': "Captura histórica del frontend del sistema de turnos Clínica San Martín, actualmente sin backend operativo",
      'a11y.offlineDiagram': "Esquema funcional del gestor de aromatizantes: visitas, inventario y cobros",
      'a11y.footerTop': "Volver arriba",
      'a11y.skip': "Saltar al contenido"
    },

    en: {
      "wb.live.open": "EXPLORE CASE ↗",
      "wb.live.beta": "VISIT LIVE BETA ↗",
      "wb.live.case": "VIEW CASE ↗",
      "wb.live.rendo.aria": "Open Rendo case study",
      "wb.live.turnos.aria": "Open appointment system case study",
      "wb.media.rendo.altHome": "Complete, uncropped screenshot of Rendo's public beta homepage",
      "wb.media.rendo.altCatalog": "Authentic, intentionally cropped detail of Rendo's public property catalog",
      "wb.media.rendo.home": "01 / PUBLIC HOMEPAGE",
      "wb.media.rendo.homeNote": "Complete public beta homepage",
      "wb.media.rendo.catalog": "02 / PROPERTY CATALOG",
      "wb.media.rendo.catalogNote": "Authentic catalog detail · intentionally cropped",
      "wb.media.rendo.insight": "From introduction to exploration.",
      "wb.media.rendo.insightNote": "The homepage introduces the product and the catalog shows available listings. Both are real screenshots, not invented mockups.",
      "wb.media.mi.altHome": "Full-length Mi Ciclo home screenshot featuring tracking and test data",
      "wb.media.mi.altDiscover": "Complete Mi Ciclo Discover screen",
      "wb.media.mi.home": "01 / HOME",
      "wb.media.mi.homeNote": "Cycle tracking and daily logging · test data",
      "wb.media.mi.discover": "02 / DISCOVER",
      "wb.media.mi.discoverNote": "Content and mobile navigation",
      "wb.media.mi.insight": "Designed for the phone.",
      "wb.media.mi.insightNote": "Both screens retain their complete original portrait layout, with no cropped content or personal records.",
      "wb.media.mi.private": "IN DEVELOPMENT · PRIVATE SOURCE CODE",
      "wb.media.turnos.alt": "Complete historical screenshot of Clínica San Martín's appointment interface with backend offline",
      "wb.media.turnos.title": "01 / HISTORICAL FRONTEND",
      "wb.media.turnos.note": "Full screenshot · backend API and database offline",
      "wb.media.turnos.status": "The frontend documents university work; it is not presented as a functioning demo.",
      "wb.media.diagramLabel": "CONCEPTUAL DIAGRAM · NOT A SCREENSHOT",
      "wb.media.transai.n0": "Interface",
      "wb.media.transai.n1": "Services",
      "wb.media.transai.n2": "Human review",
      "wb.media.transai.desc": "AI-assisted visual inspection with separate services and human oversight.",
      "wb.media.offline.n0": "Clients & devices",
      "wb.media.offline.n1": "Visits & supplies",
      "wb.media.offline.n2": "Billing & reports",
      "wb.media.offline.desc": "Installed devices, scheduled maintenance, scent refills, inventory and collections, with offline field workflows in the design.",
      'wb.type.rendo': "Public beta",
      'wb.type.mi-ciclo': "Client · In development",
      'wb.type.transai': "University · Team project",
      'wb.type.turnos': "Historical frontend",
      'wb.type.offline': "Client · In development",
      'wb.desc.rendo': "Availability, properties and bookings inside a coherent product.",
      'wb.open': "VIEW CASE STUDY ↗",
      'wb.desc.mi-ciclo': "Wellness, personal tracking and a privacy-conscious mobile UX.",
      'wb.desc.transai': "Visual inspection services with human review.",
      'wb.desc.turnos': "Booking and availability; backend no longer online.",
      'wb.desc.offline': "Clients, devices, visits, supplies and payment management for scent services.",
      'wb.title': "Choose a product.<br>See how it works.",
      'wb.subtitle': "Explore five projects. Real screenshots when available, engineering decisions where they matter.",
      'wb.detail': "EXPLORE STORY AND ARCHITECTURE ↗",
      'journey.title': "Learn. Build. Ship.",
      'journey.intro': "My work combines education, personal products and client software.",
      'journey.university': "Programming education",
      'journey.universityDesc': "I study programming at UTN and build collaborative university projects.",
      'journey.clients': "Client software",
      'journey.clientsDesc': "Work with real needs, iteration, privacy constraints and product decisions.",
      'journey.engineer': "From UI to data",
      'journey.engineerDesc': "I connect APIs, permissions, data, user experience and testing.",
      'journey.cv': "EXPLORE MY RÉSUMÉ ↗",
      'journey.available': "OPEN TO REMOTE WORK & FREELANCE",
      'wb.cv': "My résumé ↗",

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
      'turnos.status': "Current status: backend API and database are offline. This is a historical frontend screenshot, not a working demo.",
      'turnos.evidence': "Archived frontend · Public code",
      'offline.evidence': 'Documented business workflow · Private code',
      'wellness.evidence': 'Mi Ciclo application screenshots', 'wellness.view': 'Open full screenshot ↗', 'transai.view': 'View test image ↗',
      'rendo.type': 'WEB PLATFORM · PERSONAL PROJECT', 'rendo.desc': 'A booking affects more than a calendar. In Rendo, I work on connecting listings, availability, roles and rental operations into consistent end-to-end product rules.',
      'project.visit': 'Open live beta', 'project.code': 'Explore repository', 'project.private': 'Read technical case ↗',
      'transai.type': 'ACADEMIC · TEAM PROJECT', 'transai.desc': 'How do you add computer vision without removing human oversight? In TransAI our university team built around separate services for analysis, traceability and human review.',
      'turnos.type': 'MANAGEMENT · ACADEMIC', 'turnos.title': 'Appointment system <span class="compact-arrow">↗</span>',
      'turnos.desc': "Academic appointment management project designed to validate availability and prevent overlapping bookings. The backend and database are no longer deployed.",
      'hero.portrait': 'LOGIC · INTERFACE · PRODUCT',
      'wellness.type': 'CLIENT PRODUCT · PRIVATE', 'wellness.title': 'Mi Ciclo<span class="project-period">.</span>',
      'wellness.desc': 'An evolving mobile product for cycle tracking, daily logging and community. I work with Next.js, Supabase and Capacitor on sensitive flows: consent, privacy, state and mobile-first experience.',
      'wellness.privacy': 'Application screenshots with test data · Private source code',
      'offline.type': 'SCENT SERVICE OPERATIONS · CLIENT PROJECT', 'offline.title': 'Scent Service Manager<span class="project-period">.</span>',
      'offline.desc': 'Business software for clients, scent devices, maintenance visits, fragrance consumption, inventory, collections and monthly reports — including offline field work.',
      'offline.privacy': 'Client project · In development · Private source',
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
      'wellness.monolito': "MI CICLO / WELLNESS APP",
      'wellness.caption': "Mi Ciclo interface · Test data",
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
      'turnos.caption': "Clínica San Martín · UI screenshot",
      'offline.topLabel': "SCENT SERVICE OPERATIONS",
      'offline.diagramLabel': "BUSINESS WORKFLOW · NOT A SCREENSHOT",
      'offline.available': "DEVICES & FRAGRANCES", 'offline.localKicker': "SERVICE", 'offline.localLabel': "Visits", 'offline.remoteLabel': "Stock & billing",
      'offline.sync': "RECORDS",
      'offline.remote': "MANAGEMENT",
      'offline.reconciliation': "MONTHLY CLOSE",
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
      'wellness.photoLabel': "SCREENS FROM",
      'wellness.backdropTitle': "CYCLE TRACKING<br>WITH CARE",
      'rendo.live': "REAL SCREENSHOT / PUBLIC BETA",
      'turnos.live': "HISTORICAL SCREENSHOT / FRONTEND",
      'rendo.figcaption': "Browser capture · Public page ·",
      'case.challenge': "↳ THE CHALLENGE",
      'case.focus': "↳ THE FOCUS",
      'case.choice': "↳ THE DECISION",
      'case.inspect': "View reasoning",
      'case.rendo': "A rental changes availability, but should not remove the property from public listings. The calendar, permissions and operations must stay consistent.",
      'case.wellness': "Mobile UX should feel welcoming while protecting privacy and consent and distinguishing cycle estimates from diagnoses.",
      'case.transai': "Separate automated inspection from human review and preserve traceability without misrepresenting fixture images as predictions.",
      'case.turnos': "Showing free slots is not enough: the server must reject a booking if it overlaps with another appointment.",
      'case.offline': "A scheduled visit is not a completed service: supplies, charges and payments require confirmed events, without duplication during synchronization.",
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
      'a11y.wellnessFigure': "Two Mi Ciclo application screenshots with test data",
      'a11y.wellnessHome': "Open Mi Ciclo home screen screenshot",
      'a11y.wellnessAlt': "Mi Ciclo screen with cycle tracking and daily logging (test data)",
      'a11y.wellnessDiscover': "Open Mi Ciclo Discover screen screenshot",
      'a11y.wellnessDiscoverAlt': "Mi Ciclo Discover screen with visual content and bottom navigation",
      'a11y.transaiDiagram': "TransAI architecture diagram: image input, analysis and human review (not a prediction)",
      'a11y.turnosFigure': "Historical screenshot of the appointment system frontend; the service is no longer operational",
      'a11y.turnosAlt': "Historical screenshot of Clínica San Martín appointment frontend, with no active backend",
      'a11y.offlineDiagram': "Business workflow diagram for scent service visits, inventory and collections",
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
  const wbTabs=[...document.querySelectorAll('[data-wb-id]')];
  const wbPanels=[...document.querySelectorAll('[data-wb-panel]')];
  function selectWorkbench(id,focus=false){
    wbTabs.forEach(tab=>{const on=tab.dataset.wbId===id;tab.classList.toggle('is-active',on);tab.setAttribute('aria-selected',String(on));tab.tabIndex=on?0:-1;if(on&&focus)tab.focus()});
    wbPanels.forEach(panel=>{panel.hidden=panel.dataset.wbPanel!==id});
  }
  wbTabs.forEach((tab,i)=>{
    tab.addEventListener('click',()=>selectWorkbench(tab.dataset.wbId));
    tab.addEventListener('keydown',e=>{
      let next=null;if(['ArrowRight','ArrowDown'].includes(e.key))next=(i+1)%wbTabs.length;
      if(['ArrowLeft','ArrowUp'].includes(e.key))next=(i-1+wbTabs.length)%wbTabs.length;
      if(e.key==='Home')next=0;if(e.key==='End')next=wbTabs.length-1;
      if(next!==null){e.preventDefault();selectWorkbench(wbTabs[next].dataset.wbId,true)}
    });
  });
  if(wbTabs.length)selectWorkbench(wbTabs[0].dataset.wbId);
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
