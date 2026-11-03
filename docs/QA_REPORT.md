# QA / portfolio — 2026-11-03

## Validación ejecutada

- `node --check app.js`: PASS.
- Revisión HTML con BeautifulSoup: referencias internas a anclas existentes: PASS; 55 nodos `data-i18n` con claves en traducciones: PASS.
- Playwright + Chromium 144: render en memoria (`page.set_content`) de la distribución autoincluida, con fuentes remotas desactivadas para evitar el bloqueo de red del entorno.
- Viewports auditados: 1440×900, 1280×720, 768×1024, 390×844 y 320×650.
- Menú móvil: abrir, navegar y cerrar: PASS.
- Cambio ES → EN: PASS, título y documento traducidos.
- Capturas: `desktop-qa.png` (1440) y `mobile-qa.png` (390, versión EN).

## Límites importantes

- El navegador del entorno bloqueó navegación HTTP localhost y `file://` con `ERR_BLOCKED_BY_ADMINISTRATOR`: las pruebas se realizaron mediante render en memoria, que sí ejecuta CSS y JavaScript.
- Google Fonts se eliminó **solo para la prueba**, comprobando el fallback tipográfico; la versión fuente conserva fuentes remotas opcionales.
- **No** se ejecutaron Lighthouse, axe, Impeccable ni una batería completa de Playwright sobre una URL publicada; no se atribuyen notas de rendimiento o accesibilidad inexistentes.
- **No** hay despliegue confirmado: Vercel devolvió HTTP 403 al crear el proyecto y al intentar un despliegue directo en el equipo `dutty`.
- **No** se creó repositorio remoto GitHub: la conexión disponible no ofrece crear un repositorio nuevo. El repositorio Git local está versionado y se exporta en un bundle.

## Publicación pendiente

1. Autorizar la creación de un repo remoto `yttuD/carlos-dualibe-portfolio` y enviar el código.
2. Habilitar permisos de creación de proyectos en el equipo Vercel `dutty`, o importar el nuevo repo manualmente desde Vercel.
3. Comprobar la URL pública, enlaces, capturas con fuentes cargadas, metadatos y pruebas de accesibilidad y rendimiento.
4. Sustituir los diagramas conceptuales por capturas reales *solo* con consentimiento y revisión.
5. Añadir correo de contacto profesional, LinkedIn y CV final aprobado cuando el titular los autorice.

## Actualización de presentación personal — 3 de noviembre de 2026

- La fotografía fue aportada voluntariamente por el titular y optimizada a WebP para el encabezado; conservar el original fuera de GitHub.
- Se incorporó un quinto caso de estudio: PWA de bienestar de cliente, sin nombre comercial, capturas, datos ni enlace al código. Solo se mencionan funcionalidades documentadas como parte de la fase inicial y el proyecto sigue en desarrollo.
- El README público de perfil vive en `yttuD/yttuD` y enlaza una copia pública de la foto desde `yttuD/Portfolio`.
- Antes de asegurar la disponibilidad pública de Vercel, verificar un despliegue READY, su URL y navegación real.
