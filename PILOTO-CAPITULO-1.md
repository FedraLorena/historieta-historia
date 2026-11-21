# Piloto visual: capítulo 1

> Registro de la muestra inicial aprobada. La ampliación posterior a los once capítulos está documentada en `ILUSTRACIONES.md`.

Revisión local: `http://127.0.0.1:4173/#capitulo/1`.

La portada y los capítulos 2–11 mantienen su presentación. Los archivos `data/chapters.js`, `data/questions.js`, `core.js` e `index.html` permanecen idénticos a los del comienzo de este cambio (comprobación SHA-256). No se alteraron el progreso, las soluciones ni el desafío final.

## Dirección de la muestra

- Seis escenas originales con fechas, ilustración, globos y narrador. El texto del relato se distribuye automáticamente sin omitir ni reescribir palabras.
- Dos escenas panorámicas abren y cierran; las escenas intermedias se presentan por pares en escritorio y en secuencia vertical en celular.
- Las voces imaginadas y preguntas dramatizadas se identifican. Las ilustraciones son recreaciones interpretativas, no testimonios ni imágenes documentales.
- Cronología navegable por teclado, esquema de cesiones territoriales y conexiones desplegables. El contenido histórico principal siempre está visible.
- «¡CRAC!» representa el quiebre financiero de 1929; no acompaña imágenes de muertes ni persecución.
- Las diez actividades conservan consignas, soluciones y explicaciones; incorporan contexto ilustrado, tarjetas de respuesta, fichas cronológicas y relaciones visuales.

## Archivos de esta mejora

`comic-one.js`, `data/chapter-one-scenes.js`, `assets/chapter-1-comic.png`, `assets/ART-DIRECTION.md`, estilos limitados a `.comic-pilot` y `.comic-practice` en `styles.css`, integración condicional en `app.js`, copia de recursos en `scripts/build.mjs` y pruebas en `tests/comic.test.mjs`.

La imagen se creó con ImageGen integrado. El prompt completo está en `assets/ART-DIRECTION.md`.

## Comprobaciones

Pruebas de lógica y contenido, conservación íntegra del relato al dividirlo, diez contextos visuales, sintaxis y compilación. HTTP 200 para los nuevos recursos. Revisión visual en 1280 y 390 píxeles: seis escenas, seis enlaces de cronología y sin desborde horizontal en el ancho móvil. En navegador se probaron respuesta incorrecta con explicación, reintento correcto y avance a la actividad siguiente usando `localhost`, un origen separado del progreso de Pedro en `127.0.0.1`.

Este es un piloto para revisar el estilo. La extensión a los otros capítulos queda pendiente de aprobación.
