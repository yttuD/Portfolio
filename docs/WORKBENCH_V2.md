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
- Offline-first: arquitectura explicativa anonimizada; sin cliente identificado ni capturas internas.
- Inglés del CV: texto traducido; **no indica un nivel lingüístico autoevaluado**.

## QA
`node --test tests/*.test.mjs`

Verificar con Chromium: viewport 320, 390, 768, 1024 y 1440 px; tabs y flechas, ES/EN, arquitectura, diálogo de imágenes, enlaces PDF, ausencia de errores de JavaScript y de overflow.

## Próximas mejoras basadas en evidencia
- Más capturas reales de Rendo y de funciones representativas, tras revisar permisos de publicación.
- Registrar contribuciones concretas y resultados medibles cuando existan pruebas.
- Revisar el CV con información contractual exacta y experiencia formal cuando el titular la confirme.
