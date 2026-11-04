# Carlos Dualibe — Portfolio

Portafolio de desarrollador Full Stack en español e inglés. Una experiencia editorial e interactiva realizada con HTML semántico, CSS y JavaScript nativo: **sin build, sin APIs externas, sin servicios pagos ni dependencias para funcionar**. Preparado para desplegarse en Vercel.

## Uso local

```bash
python -m http.server 8080
# abrir http://localhost:8080
```

O usar cualquier servidor de archivos estáticos. Abrir `index.html` directamente en el navegador no resuelve siempre rutas absolutas; por eso se recomienda servirlo.

## Contenido y privacidad

- **Rendo**: solo enlace a la demo; no enlace al código. No modificar la visibilidad de su repositorio sin autorización.
- **TransAI**: trabajo académico colaborativo, caso descriptivo; código privado.
- **Sistema de turnos**: enlace a repositorio público existente.
- **Offline-first**: descripción técnica anonimizada. No contiene nombre ni datos del cliente.
- Las visualizaciones de proyecto son **representaciones conceptuales**, identificadas como tales. No se presentan como capturas de producción.
- Se publica únicamente el correo profesional autorizado por el propietario. No se publican teléfonos, claves, métricas inventadas ni información confidencial.

## Cambios editoriales

El contenido bilingüe principal está en `app.js` y las estructuras en `index.html`. Las etiquetas se marcan con `data-i18n`. Se preserva `lang` y se actualizan títulos/descripciones según idioma.

## QA

- Semántica: `main`, `nav`, `section`, etiquetas y encabezados jerárquicos.
- Accesibilidad: navegación por teclado, skip link, menú móvil controlado, `prefers-reduced-motion`, estados de foco.
- UX: animaciones ligeras sin bloquear navegación, layout a 320/375/768/1280/1920, sin dependencias JavaScript externas.
- SEO: meta descripción, Open Graph, JSON-LD Person, robots y favicon SVG.
- Seguridad: sin credenciales ni llamadas a APIs; cabeceras de seguridad Vercel.

## Despliegue

1. Repositorio oficial: [`yttuD/Portfolio`](https://github.com/yttuD/Portfolio).
2. El código está versionado en `main`; Vercel despliega automáticamente desde esa rama.
3. En Windows, se puede usar `./publicar-windows.ps1` con las CLI de GitHub y Vercel autenticadas. Como alternativa, conectar el repositorio en Vercel, framework **Other**, carpeta raíz `/`, sin comando de build y sin directorio de salida.
4. Desactivar protección de despliegue de producción para hacerlo público; verificar en ventana privada.
5. Dominio: https://carlos-dualibe.vercel.app. No se requieren GitHub Actions. **No usar GitHub Actions**; Vercel despliega automáticamente desde Git.

## Decisiones de diseño

Ver [`AGENTS.md`](AGENTS.md), [`docs/DESIGN.md`](docs/DESIGN.md), [`docs/MOTION_PLAN.md`](docs/MOTION_PLAN.md) y [`docs/QA_REPORT.md`](docs/QA_REPORT.md).

## Perfil público de GitHub

El README que aparece en https://github.com/yttuD se administra en el repositorio especial [yttuD/yttuD](https://github.com/yttuD/yttuD). Se actualiza por separado y utiliza el retrato optimizado disponible en `assets/carlos-dualibe.webp`.

## Recursos auténticos exhibidos

- `assets/mi-ciclo-icon.svg`: iconografía original del cliente publicada con su permiso explícito.
- `assets/mi-ciclo-feature-demo.png`: captura del repositorio de demostraciones (prototipo con contenido de ejemplo, no el producto final).
- `assets/transai-fixture-defect.jpg`: fotografía de prueba incluida en los fixtures de TransAI, sin presentar inferencias ni resultados del modelo.
- Los esquemas de Rendo, turnos y sincronización son ilustrativos y se identifican como tales.

**Evidencia de imágenes:** [`docs/VISUAL_EVIDENCE.md`](docs/VISUAL_EVIDENCE.md). Contacto público autorizado: [carlosdualive@gmail.com](mailto:carlosdualive@gmail.com).
