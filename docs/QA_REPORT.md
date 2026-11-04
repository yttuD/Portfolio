# Informe de QA — CD / Workbench v2
Fecha: 4 de noviembre de 2026

## Estado de publicación
- Repositorio: `yttuD/Portfolio`, rama `main`.
- Producción: `https://carlos-dualibe.vercel.app/`.
- El despliegue final de las galerías `c593f05` fue verificado en Vercel con estado `READY`.
- No se utilizó GitHub Actions; Vercel despliega automáticamente desde GitHub.

## Resultados verificados
- `node --check app.js` y `node --check case.js`: PASS en el despliegue probado.
- `node --test tests/*.test.mjs`: **23/23 PASS** sobre `c593f05`.
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

## Auditoría final de imágenes — 2026-11-04

- Referencia: commit `c593f05`, Vercel Production `READY`.
- Se reemplazaron las tarjetas de captura con altura fija y `object-fit: cover` por composiciones editoriales con `height: auto` y `object-fit: contain`.
- **Rendo:** portada pública completa de 1050 × 656 px + detalle real del catálogo de 700 × 460 px, identificado como recorte intencional.
- **Mi Ciclo:** capturas verticales completas de 390 × 2047 y 390 × 844 px con datos de prueba.
- **Turnos:** captura histórica completa de 1000 × 625 px, sin redireccionar al despliegue descontinuado.
- Los archivos nuevos se verificaron por su tamaño real en GitHub y Vercel; no se consideran válidos blobs parciales o corruptos.
- **Pruebas de navegador:** 12/12 combinaciones con Chromium en los tres casos y cuatro resoluciones (1440, 768, 390 y 320 px). En todas cargaron las imágenes, se conservó su relación de aspecto y funcionaron idioma ES/EN y ampliación opcional. No se registraron errores JavaScript ni desbordamientos horizontales.
- **Pruebas automatizadas:** 23/23 PASS y `node --check case.js` PASS.
- La documentación detallada de procedencia de cada imagen está en `docs/VISUAL_EVIDENCE.md`.

## Corrección de vistas previas en Workbench — 2026-11-04

**Problema detectado:** en la portada, el explorador seguía usando una tarjeta `wb-shot` con altura fija de 315 px y `object-fit: cover`, pese a la corrección previa de las páginas individuales. Esto recortaba Rendo, Mi Ciclo y Turnos.

**Cambios:** se eliminó `wb-shot` del HTML del explorador y se reemplazó por composiciones según la naturaleza del proyecto:
- **Rendo:** portada auténtica completa (1050 × 656) y detalle real del catálogo (700 × 460, identificado como recorte editorial); las leyendas están fuera de las imágenes.
- **Mi Ciclo:** dos capturas verticales completas (390 × 2047 y 390 × 844), dispuestas como pantallas móviles, con datos de prueba.
- **Turnos:** captura histórica completa (1000 × 625), sin sugerir que exista una demo operativa.
- **TransAI / Offline-first:** diagramas conceptuales claramente identificados, no capturas ficticias.
- Se sumaron textos y alternativas accesibles en ES/EN, manteniendo navegación por teclado, etiquetas del estado del proyecto y rutas a casos de estudio.

**Verificación anterior a publicación:**
- `node --check app.js` y `node --test tests/*.test.mjs`: **25/25 PASS**.
- Chromium local: explorador completo en **1440, 1024, 768, 390 y 320 px**. Cinco proyectos en cada tamaño, carga y decodificación de capturas, relación de aspecto nativa, ausencia de recortes y de desbordamiento horizontal, navegación por teclado, cambio de idioma ES/EN; **PASS**.
- No se añadió ni modificó ninguna ruta a repositorios privados, ni se habilitó un enlace hacia la API descontinuada de Turnos.

## Animaciones auténticas en Rendo y Turnos — publicación validada 2026-11-04

- Repositorio: `yttuD/Portfolio`. Se añadió `motion.js`, `motion.css` y la suite `tests/motion.test.mjs` para mostrar animaciones reales, sin sonidos, con imágenes de respaldo.
- Rendo: `assets/rendo-motion-hero.webm` contiene la animación sutil de estrellas de la portada pública; Turnos: `assets/turnos-motion-hero.webm` contiene la hélice de ADN 3D de su portada histórica.
- Los videos son grabaciones reales, no recreaciones ni demostraciones de sistemas de reserva operativos. El backend y la base de datos de Turnos siguen descontinuados.
- El primer intento de transferencia binaria produjo archivos corruptos: aunque la cabecera WebM era válida y Vercel devolvía HTTP 200, Chromium no podía decodificar los fotogramas. Se reconstruyeron los dos archivos desde los originales y sus **SHA Git de blob** se cotejaron antes de publicar:
  - Rendo: `82d85865832fdbe91323172d264eb7d3fb7b579c`
  - Turnos: `26baa604d1066859f9635d156bf297f0928bd01e`
- Se añadieron verificaciones SHA-256 del archivo completo contra las grabaciones originales, para detectar futuras corrupciones incluso cuando el contenedor WebM parezca válido.
- **QA automatizada final:** `node --check motion.js` y `node --test tests/*.test.mjs` con **30/30 PASS**.
- **Chromium sobre producción:** Rendo y Turnos reprodujeron WebM reales con `currentTime > 0`; la pausa/reanudación manual funcionó; al cambiar de proyecto se pausó el anterior; las notas de Turnos cambiaron correctamente a inglés; con `prefers-reduced-motion: reduce` no hubo reproducción automática, pero sí reproducción iniciada por el usuario. La prueba móvil no detectó desbordamiento horizontal.
- Despliegue Vercel del arreglo de binarios `2ad81c1`: `READY` en producción.
- Los clips se cargan al entrar en pantalla, están silenciados, tienen bucle y ofrecen botón de reproducción/pausa. Los recursos visuales completos continúan disponibles en los casos de estudio.
