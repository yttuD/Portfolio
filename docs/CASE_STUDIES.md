# Evidencias y límites de los casos seleccionados

Este documento contextualiza los proyectos del portafolio sin pretender que todas las funcionalidades estén certificadas en producción. El sitio combina **capturas reales** de las interfaces de Rendo, Mi Ciclo y Turnos con **esquemas explicativos** para TransAI y el sistema offline-first, identificados según su procedencia. Ninguna imagen de demo acredita que la funcionalidad esté publicada en producción.

## Rendo — plataforma de alquileres

**Problema:** organizar unidades, reservas, ocupación, roles administrativos y consulta pública en una experiencia coherente.

**Enfoque técnico documentado:** monorepo TypeScript con Next.js, NestJS, PostgreSQL/Supabase y pruebas de interfaz. Reglas de multiempresa, permisos y pagos forman parte de su diseño.

**Qué se exhibe:** [aplicación pública de demostración](https://rendo-beta-web.vercel.app/es) y un resumen funcional. No se enlaza el código fuente del producto.

**Qué falta acreditar:** verificar la demo en la versión final, los recorridos completos y qué mejoras de ramas están integradas en producción. Evitar estadísticas de negocio inventadas.

<a id="transai"></a>
## TransAI — análisis visual con revisión humana

**Problema:** documentar inspecciones de calidad visual, con trazabilidad y evaluación asistida por IA.

**Enfoque documentado:** Django/DRF como autoridad del dominio; Node.js y servicios auxiliares; FastAPI para evaluación, React para interfaz, y componentes de IA local.

**Autoría:** trabajo académico colaborativo. No se atribuye implementación individual de todos los componentes. Código privado.

**Material mostrado:** diagrama conceptual de arquitectura. No se publica una fotografía de ensayo ni se presenta como predicción real.

**Qué falta acreditar:** reproducir pruebas e inferencia real en el entorno y commit de entrega, vincular evidencia de resultados, y separar heurísticas de métricas calibradas.

## Turnos — reservas multiempresa

**Problema:** administrar disponibilidad y citas para personal y clientes, minimizando conflictos de horarios.

**Enfoque documentado:** React/Vite, NestJS, PostgreSQL, Prisma, Redis, autenticación y validaciones.

**Estado actual:** el backend y la base de datos dejaron de estar desplegados hace meses. La antigua URL de la aplicación no debe presentarse como demo funcional ni enlazarse desde el portafolio.

**Evidencia pública:** [repositorio de código](https://github.com/yttuD/clinica-san-martin-tpi) y captura histórica de la interfaz en el portafolio; esa captura demuestra el aspecto visual del frontend, no la operatividad actual de las reservas.

**Qué falta acreditar:** pruebas E2E actuales, seguridad multiempresa y preparación para producción. El arranque actual requiere eliminar comandos con riesgo de pérdida de datos antes de un uso real.

## Offline-first — arquitectura empresarial anonimizada

**Problema:** operar con conectividad intermitente y reconciliar cambios cuando vuelve la red.

**Enfoque documentado:** lógica de dominio TypeScript compartida, SQLite local y persistencia remota, permisos y sincronización controlada.

**Privacidad:** no se identifica al cliente, no se incluye repositorio, datos ni material de producción.

**Qué falta acreditar:** resultado reproducible de integración extremo a extremo, pruebas de desconexión real y alcance final autorizado por el titular.

## Mi Ciclo — PWA de bienestar para cliente

**Problema:** desarrollar una experiencia web instalable, accesible y cuidadosamente diseñada con registro, consentimientos versionados y onboarding guiado.

**Enfoque documentado:** Next.js, React, TypeScript y Supabase. Trabajo por fases; distinguir lo entregado de lo que permanece en desarrollo.

**Material mostrado:** ícono original de Mi Ciclo y dos capturas documentadas del producto con datos de prueba. Se mantiene su procedencia técnica en `docs/VISUAL_EVIDENCE.md`, sin mostrar nombres de ramas ni estructura de Git en la tarjeta.

**Privacidad:** los repositorios de la aplicación y la demo se mantienen privados. No se publican credenciales, documentos internos o datos de clientas.

## Principio editorial

Presentar decisiones, evidencia y limitaciones. No mezclar wireframes, prototipos, pruebas locales, entregas académicas y software en producción como si fueran lo mismo.
