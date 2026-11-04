# CD / Workbench — Implementación 2026-11-04

## Objetivo
Convertir el portafolio en una experiencia de exploración de ingeniería con evidencia real, sin imitar interfaces de otros portafolios ni presentar prototipos como producción.

## Entregables
- Explorador interactivo con cinco pestañas y paneles, navegación por teclado y botones que llevan a páginas individuales.
- Cinco rutas en `/work/{producto}/` con contenido ES/EN, contexto, evidencia, arquitectura por capas, aprendizaje y navegación entre casos.
- Sección de trayectoria sin fechas ni cifras inventadas.
- Dos currículums seleccionables en `/cv/` y PDF A4 descargables en `/assets/`.
- Sin bibliotecas JavaScript, servidor de aplicación ni GitHub Actions.

## Estado y restricciones
- Rendo: beta pública, código privado, una captura del frontend.
- Mi Ciclo: cliente, en desarrollo, dos capturas con datos de prueba; sin rutas privadas ni datos reales.
- TransAI: colaboración académica, diagrama conceptual, no supuestas predicciones.
- Turnos: backend y base de datos descontinuados; captura histórica y enlace solo a GitHub público.
- Gestor de Aromatizantes (ruta histórica `/work/offline/`): software para clientes, equipos, visitas, recargas, inventario, cobros y cierre mensual. En desarrollo; esquema funcional ilustrativo, sin código ni registros reales del cliente.
- Inglés del CV: texto traducido; **no indica un nivel lingüístico autoevaluado**.

## QA
`node --test tests/*.test.mjs`

Verificar con Chromium: viewport 320, 390, 768, 1024 y 1440 px; tabs y flechas, ES/EN, arquitectura, diálogo de imágenes, enlaces PDF, ausencia de errores de JavaScript y de overflow.

## Próximas mejoras basadas en evidencia
- Más capturas reales de Rendo y de funciones representativas, tras revisar permisos de publicación.
- Registrar contribuciones concretas y resultados medibles cuando existan pruebas.
- Revisar el CV con información contractual exacta y experiencia formal cuando el titular la confirme.

## Gestor de Aromatizantes — actualización editorial 2026-11-04

La plataforma para empresas de aromatización se muestra por su **función comercial real**, no por una decisión de almacenamiento. El título visible es Gestor de Aromatizantes / Scent Service Manager; el slug histórico `/work/offline/` se conserva para no romper enlaces.

La portada y el caso explican seis etapas de requisitos aprobados: clientes y equipos, agenda de visitas y controles, registro de intervenciones efectivamente realizadas, inventario trazable de fragancias e insumos, cargos y pagos parciales, y cierre mensual con reportes. La operación sin conexión mediante Windows/SQLite y sincronización con Supabase se explica en arquitectura. Android se mantiene como una fase posterior.

**Transparencia y privacidad:** el proyecto todavía está en desarrollo y no todos los módulos comerciales están terminados. Los diagramas del portfolio son explicativos, no capturas ni pruebas de una entrega productiva. Se mantienen privados el código fuente, las pantallas internas, los datos operativos y la identidad del cliente. No se publican resultados comerciales ficticios.
