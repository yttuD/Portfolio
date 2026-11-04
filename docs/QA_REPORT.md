# Informe de QA — CD / Workbench v2
Fecha: 4 de noviembre de 2026

## Estado de publicación
- Repositorio: `yttuD/Portfolio`, rama `main`.
- Producción: `https://carlos-dualibe.vercel.app/`.
- El despliegue `0e11e51` fue verificado en Vercel con estado `READY`.
- No se utilizó GitHub Actions; Vercel despliega automáticamente desde GitHub.

## Resultados verificados
- `node --check app.js` y `node --check case.js`: PASS en el despliegue probado.
- `node --test tests/*.test.mjs`: **21/21 PASS** sobre `61c7d5d`.
- HTTP 200 de la portada y ambas descargas PDF. Las rutas con barra final redireccionan de forma canónica según configuración `cleanUrls`.
- CV ES y EN: PDF A4 de una página. Los símbolos no soportados de listas se reemplazaron por guiones ASCII y se mantuvieron los contenidos sin nivel de inglés inventado.
- Cinco rutas `/work/`: Rendo, Mi Ciclo, TransAI, Turnos y Offline-first.
- Navegador Chromium sobre la web pública, antes de la corrección final de rotulación:
  - Portada en 320, 390, 768, 1024 y 1440 px: cinco casos seleccionables, navegación por teclado, alternancia ES/EN, sin errores JavaScript ni desbordamiento horizontal.
  - Cada caso en 1440 y 390 px: arquitectura interactiva y alternancia de idioma; diálogos de imágenes donde corresponde; sin errores JavaScript ni desbordamiento horizontal.
- Se añadió cobertura estática permanente para las traducciones de los encabezados técnicos y metadatos de casos en `tests/workbench.test.mjs`.
- Auditoría final en Chromium sobre producción (`61c7d5d`): portada en 1440, 390 y 320 px; cada caso en 1440 y 390 px; estados del explorador, idiomas y encabezados traducidos, arquitectura y enlaces de Rendo según idioma, sin desbordamientos ni errores JavaScript.
- Desde Chromium se descargaron ambos CV: HTTP 200, firma `%PDF-` correcta, tamaños 4823 bytes (ES) y 4800 bytes (EN).

## Exactitud de contenido
- Rendo: se presenta como beta pública con código privado; no se atribuye el funcionamiento de todas las capacidades futuras.
- Mi Ciclo: trabajo para cliente en desarrollo; capturas con datos de prueba, sin exposición del código.
- TransAI: proyecto académico colaborativo, diagrama conceptual; no se muestran inferencias como resultados verificados.
- Turnos: el backend y la base de datos están descontinuados. La captura es histórica y el enlace se dirige exclusivamente al repositorio público.
- Offline-first: caso empresarial anonimizado, sin datos ni identidad del cliente.

## Límites de las verificaciones
- No se ejecutó Lighthouse ni una auditoría externa de accesibilidad WCAG. No se afirman puntuaciones.
- Las capturas de aplicaciones son evidencia visual, no garantía de disponibilidad o funcionamiento de cada flujo.
- Los CV son borradores profesionales basados en los proyectos documentados. Falta incorporar fechas y antecedentes laborales exactos cuando estén verificados.
- Queda pendiente confirmar el nivel de inglés con una prueba antes de declararlo en el CV.

Para convenciones y la arquitectura del portafolio, ver `docs/WORKBENCH_V2.md` y `docs/VISUAL_EVIDENCE.md`.
