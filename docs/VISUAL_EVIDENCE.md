# Evidencia visual — Portfolio

Fecha de revisión: 2026-11-04. No confundir una captura de interfaz con verificación de todas las funciones.

| Recurso público | Origen verificado | Qué demuestra | Limitación |
|---|---|---|---|
| `assets/rendo-beta-live.webp` | Captura de Chromium de `https://rendo-beta-web.vercel.app/es` (1440 × 900, 2026-11-04), reescalada a WebP | Apariencia real de la portada de la beta pública | No verifica funciones de administración ni disponibilidad |
| `assets/turnos-frontend-live.webp` | Captura de Chromium de `https://clinica-san-martin-tpi-self.vercel.app/` (1440 × 900, 2026-11-04), reescalada a WebP | Captura histórica del frontend de Clínica San Martín | Backend y base de datos descontinuados; no es una demo operativa, no enlazar al despliegue |
| `assets/mi-ciclo-monolito-home.png` | Repo privado `yttuD/Mi-Ciclo-App`, rama `Monolito`, `docs/capturas/migracion-vistas/verificado-hoy.png`, SHA blob `4de212c89303cc0d82b72fb5cb6b6ce459be0896` | Vista Hoy documentada con datos de prueba | Captura de repositorio, no ejecución viva ni prueba de la última compilación |
| `assets/mi-ciclo-monolito-descubrir.png` | Mismo repositorio y rama, `docs/capturas/migracion-vistas/verificado-descubrir.png`, SHA blob `66297c67cd4acde940ddb5ec1f1541cf693752b8` | Vista Descubrir documentada | No implica publicación pública del producto |
| `assets/mi-ciclo-icon.svg` | Ícono del proyecto Mi Ciclo (recurso visual de marca, no datos de usuarios) | Elemento de identidad | No permite redistribuir el código privado |
| `assets/carlos-dualibe.webp` | Retrato proporcionado expresamente por el titular | Foto profesional | No implica cambios en identidad facial |

TransAI aparece mediante un **diagrama CSS de arquitectura**, no una fotografía de prueba. El antiguo asset `transai-fixture-defect.jpg` se retira de la página y del repositorio. Los diagramas de sincronización y de decisiones son esquemas explicativos, nunca capturas.

No publicar logs, identificadores personales, registros de pacientes, información de cuentas, métricas sin respaldo ni fuentes privadas.

## Presentación editorial de las capturas — revisión 2026-11-04

La galería anterior imponía `height: 490px` y `object-fit: cover` a las evidencias. Esa composición **recortaba la portada de Rendo y la captura larga de Mi Ciclo**, ocultando partes de las interfaces reales.

La nueva galería muestra imágenes con dimensiones proporcionales (`width: 100%`, `height: auto`, `object-fit: contain`). El botón de ampliación es secundario, no es necesario para ver el encuadre completo.

| Archivo nuevo | Procedencia | Uso | Límites |
| --- | --- | --- | --- |
| `assets/rendo-home-clear.webp` | Captura de Chromium de la portada pública `https://rendo-beta-web.vercel.app/es`, 2026-11-04, comprimida a 1050 × 656 | Imagen principal completa y sin superposiciones del caso Rendo | El encuadre corresponde a un viewport, no a toda la página con scroll; no verifica operaciones internas |
| `assets/rendo-catalog-detail.webp` | Captura de Chromium de `https://rendo-beta-web.vercel.app/es/unidades`, 2026-11-04, recorte deliberado de la zona del catálogo, escalado a 700 × 460 | Vista complementaria del catálogo público de unidades | Se describe explícitamente como *detalle/recorte*, nunca como captura de página completa |

En Mi Ciclo las capturas (390 × 2047 y 390 × 844) mantienen su proporción original. Turnos conserva su fotografía histórica del frontend (1000 × 625), sin redirigir a la aplicación descontinuada.

La interfaz separa el medio de sus leyendas y permite ampliar opcionalmente. Los títulos y las alternativas accesibles se traducen a español e inglés.
