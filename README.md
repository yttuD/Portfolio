# Carlos Dualibe — Portfolio

Portafolio de desarrollador Full Stack en español e inglés. Una experiencia editorial e interactiva realizada con HTML semántico, CSS y JavaScript nativo: **sin build, sin APIs externas, sin servicios pagos ni dependencias para funcionar**. Preparado para desplegarse en Vercel.

## Nueva experiencia Workbench

- **Explorador de proyectos** en la portada, con pestañas accesibles y navegación con teclado.
- **Cinco casos bilingües** en `/work/{rendo|mi-ciclo|transai|turnos|offline}/`, incluyendo decisiones y límites de cada evidencia.
- **Trayectoria profesional** y currículums de una página en `/cv/` (PDF español e inglés).
- **Estado honesto**: Turnos conserva una captura histórica, pero no enlaza una API descontinuada.
- **Sin código de clientes**: los recursos publicados son capturas seleccionadas y esquemas técnicos.

Ver documentación: [Workbench v2](docs/WORKBENCH_V2.md).

## Uso local

```bash
python -m http.server 8080
# abrir http://localhost:8080
```

O usar cualquier servidor de archivos estáticos. Abrir `index.html` directamente en el navegador no resuelve siempre rutas absolutas; por eso se recomienda servirlo.

## Contenido y privacidad

- **Rendo**: beta pública y caso de estudio propio, sin enlace al código privado. No modificar la visibilidad de su repositorio sin autorización.
- **TransAI**: trabajo académico colaborativo, caso descriptivo; código privado.
- **Sistema de turnos**: enlace a repositorio público existente.
- **Gestor de Aromatizantes** (`/work/offline/`): descripción de clientes, equipos instalados, mantenimiento, fragancias, inventario, cobros y reportes, sin código ni información confidencial del cliente. Offline-first es un componente arquitectónico.
- Rendo muestra una captura pública actual de su beta. Turnos muestra una captura histórica del frontend, **sin enlace a una demo funcional** porque su backend y su base de datos ya no están desplegados. TransAI y el Gestor de Aromatizantes muestran diagramas explicativos (no capturas de una aplicación terminada). Cada imagen está etiquetada con su procedencia.
- Se publica únicamente el correo profesional autorizado por el propietario. No se publican teléfonos, claves, métricas inventadas ni información confidencial.

## Cambios editoriales

El contenido bilingüe principal está en `app.js` y las estructuras en `index.html`. Las etiquetas se marcan con `data-i18n`. Se preserva `lang` y se actualizan títulos/descripciones según idioma.

## QA

Validar con `node --test tests/*.test.mjs`. Las páginas individuales usan `case.js` y `case.css` compartidos, sin dependencias externas de JavaScript.



- Semántica: `main`, `nav`, `section`, etiquetas y encabezados jerárquicos.
- Accesibilidad: navegación por teclado, skip link, menú móvil controlado, `prefers-reduced-motion`, estados de foco.
- UX: animaciones ligeras sin bloquear navegación, layout a 320/375/768/1280/1920, sin dependencias JavaScript externas.
- SEO: meta descripción, Open Graph, JSON-LD Person, robots y favicon SVG.
- Seguridad: sin credenciales ni llamadas a APIs; cabeceras de seguridad Vercel.

## Despliegue

1. Repositorio oficial: [`yttuD/Portfolio`](https://github.com/yttuD/Portfolio).
2. El código está versionado en `main`; Vercel despliega automáticamente desde esa rama.
3. El proyecto `portfolio` ya está conectado a Vercel (framework **Other**, raíz `/`, sin comando de build).
4. Desactivar protección de despliegue de producción para hacerlo público; verificar en ventana privada.
5. Dominio: https://carlos-dualibe.vercel.app. No se requieren GitHub Actions. **No usar GitHub Actions**; Vercel despliega automáticamente desde Git.

## Decisiones de diseño

Ver [`AGENTS.md`](AGENTS.md), [`docs/DESIGN.md`](docs/DESIGN.md), [`docs/MOTION_PLAN.md`](docs/MOTION_PLAN.md) y [`docs/QA_REPORT.md`](docs/QA_REPORT.md).

## Perfil público de GitHub

El README que aparece en https://github.com/yttuD se administra en el repositorio especial [yttuD/yttuD](https://github.com/yttuD/yttuD). Se actualiza por separado y utiliza el retrato optimizado disponible en `assets/carlos-dualibe.webp`.

## Recursos auténticos exhibidos

- `assets/mi-ciclo-icon.svg`: iconografía del proyecto cliente usada con autorización para mostrarla en el portafolio.
- `assets/mi-ciclo-monolito-home.png` y `assets/mi-ciclo-monolito-descubrir.png`: capturas documentadas de la rama `Monolito`, con datos de prueba; no de la demo inicial.
- `assets/rendo-beta-live.webp` y `assets/turnos-frontend-live.webp`: capturas públicas de Chromium tomadas el 4/11/2026 y optimizadas para web.
- TransAI se presenta mediante un diagrama de arquitectura elaborado con CSS, sin la fotografía de ensayo anterior.
- Los esquemas del gestor de aromatización y la sección de decisiones son visualizaciones explicativas, no evidencia de producción.

**Evidencia de imágenes:** [`docs/VISUAL_EVIDENCE.md`](docs/VISUAL_EVIDENCE.md). Contacto público autorizado: [carlosdualive@gmail.com](mailto:carlosdualive@gmail.com).


## Identidad y procedencia visual (2026-11-04)

- El portafolio presenta decisiones concretas, limitaciones y casos técnicos en lugar de métricas inventadas.
- Las capturas **Mi Ciclo / Monolito** provienen de `Mi-Ciclo-App`, rama `Monolito`, de los recursos `docs/capturas/migracion-vistas/verificado-hoy.png` y `docs/capturas/migracion-vistas/verificado-descubrir.png`. Son evidencias visuales almacenadas en esa rama con datos de ejemplo, **no** una afirmación de que representan el último build en producción.
- Se retiró del sitio la captura desactualizada de `Demo-MiCiclo`. El repositorio del cliente sigue privado.
- Los diagramas de arquitectura son representaciones explicativas, no capturas de la app.

## Actualización visual — 4 de noviembre de 2026

- Mensaje principal y casos reescritos para describir problemas y decisiones técnicas, no frases genéricas.
- Rendo y Turnos: **capturas reales de sus interfaces públicas**, con procedencia y fecha documentadas.
- Mi Ciclo: imágenes de la rama `Monolito`, nunca de la demo antigua. La fuente mantiene código privado.
- TransAI: eliminada la fotografía de prueba del material presentado; se muestra arquitectura, sin atribuirle resultados inexistentes.
- El código fuente continúa en `yttuD/Portfolio` y la producción se despliega desde `main` en Vercel, sin GitHub Actions.
- Cada captura y sus limitaciones están detalladas en `docs/VISUAL_EVIDENCE.md`.
