# Carlos Dualibe — Portfolio

[![GitHub](https://img.shields.io/badge/GitHub-yttuD-171717?logo=github)](https://github.com/yttuD)

Portafolio profesional bilingüe (ES / EN) de **Carlos Dualibe**, desarrollador de software de Argentina especializado en aplicaciones web Full Stack, sistemas de gestión e integraciones. Es una experiencia editorial desarrollada con HTML semántico, CSS y JavaScript, sin dependencias de ejecución.

## Explorar el sitio

- **Trabajo seleccionado:** Rendo (enlace a aplicación pública, no al código), TransAI (proyecto académico colaborativo), sistema multiempresa de turnos y un caso empresarial offline-first anonimizado.
- **Principios:** requisitos, arquitectura, calidad y mantenimiento.
- **Perfil:** tecnologías y enfoque de trabajo.
- **Contacto:** enlace al perfil GitHub. No se exponen correos ni datos personales sin autorización.

> Las ilustraciones de proyectos son representaciones conceptuales originales. No se presentan como capturas auténticas de aplicaciones desplegadas.

## Desarrollo local

```bash
python -m http.server 8080
# abrir http://localhost:8080
```

No requiere instalar dependencias ni API keys. Edición directa de `index.html`, `styles.css` y `app.js`.

## Despliegue en Vercel

1. Importar [yttuD/Portfolio](https://github.com/yttuD/Portfolio) en Vercel.
2. Configurar **Framework Preset: Other**, **Root Directory: /**, sin comando de build ni output personalizado.
3. Elegir `main` como rama de producción y activar despliegues Git automáticos.
4. Confirmar que Production Deployment Protection no solicite autenticación, revisar el sitio en ventana privada.
5. Revisar rutas, navegación móvil, ES/EN, metadatos, enlaces y accesibilidad después de publicar.

No utiliza GitHub Actions.

## Calidad y privacidad

- Diseño responsive y teclado; estados de foco y soporte de `prefers-reduced-motion`.
- Sin métricas de negocio inventadas, credenciales, ni información privada de clientes.
- Rendo se muestra únicamente mediante su aplicación; **no enlazar el código fuente**.
- Orcastrator es un proyecto personal y **no forma parte** de este portafolio.
- Antes de añadir imágenes reales de trabajos privados, solicitar autorización a titulares.
- La responsabilidad y contribuciones en proyectos académicos colaborativos se declaran como tales.

## Estructura

- `index.html` — contenido semántico, navegación y metadatos
- `styles.css` — sistema visual y responsive
- `app.js` — idioma, menú, animaciones, navegación progresiva
- `assets/` — iconos y recursos de identidad originales
- `vercel.json` — cabeceras de seguridad
- `docs/` — decisiones técnicas y auditoría de presentación

## Próximas mejoras

Agregar capturas verificadas de demos, un contacto profesional autorizado, estudios de caso con evidencia y enlace a un CV definitivo. La disponibilidad de la app y pruebas deben verificarse en cada versión publicada.

© 2026 Carlos Dualibe.