# La historieta completa

Los once capítulos usan `comic-reader.js`. Las 66 escenas tienen fecha, lugar, título, ilustración original, narración completa y una conexión de contexto. La narración se lee de `data/chapters.js`: no se resume ni se copia a una versión reducida.

## Ilustraciones

Cada archivo `assets/chapter-N-comic.png` es una lámina original de seis escenas ordenadas en tres columnas y dos filas. Los encuadres CSS muestran una escena por viñeta, con texto real superpuesto o adyacente. Se conserva la lámina aprobada del capítulo 1 y se incorporan diez nuevas, creadas con ImageGen integrado. Las ilustraciones son recreaciones interpretativas; no son documentos, fotografías ni reconstrucciones exactas. Los globos identifican preguntas del narrador o voces imaginadas.

| Capítulo | Archivo | Escenas |
| --- | --- | --- |
| 1 | `assets/chapter-1-comic.png` | Armisticio, Versalles, inflación, recuperación, crisis y decisiones de 1933 |
| 2 | `assets/chapter-2-comic.png` | Italia, Alemania, URSS, Japón, propaganda y comparación |
| 3 | `assets/chapter-3-comic.png` | Expansión, pacto, protocolo, Polonia, alianzas y exilio |
| 4 | `assets/chapter-4-comic.png` | Coordinación, Noruega, Ardenas, Dunkerque, RAF y resistencia británica |
| 5 | `assets/chapter-5-comic.png` | Ocupación, imprenta, redes, refugio, colaboración y archivo |
| 6 | `assets/chapter-6-comic.png` | Barbarroja, logística, Moscú, Volga, cerco y producción |
| 7 | `assets/chapter-7-comic.png` | China, recursos, Pearl Harbor, entrada estadounidense, industria y Pacífico |
| 8 | `assets/chapter-8-comic.png` | Vidas, exclusión, confinamiento, deportaciones, resistencia y memoria |
| 9 | `assets/chapter-9-comic.png` | Italia, partisanos, Normandía, dos frentes, Berlín y rendición |
| 10 | `assets/chapter-10-comic.png` | Guerra abierta, decisiones tecnológicas, Hiroshima, Manchuria/Nagasaki, rendición y debate |
| 11 | `assets/chapter-11-comic.png` | Desplazamientos, ONU, rivalidad, división alemana, cambios sociales y era nuclear |

Los capítulos 8 y 10 usan ilustraciones sin violencia explícita, una presentación sobria, sin globos, onomatopeyas ni mensajes festivos. El capítulo 11 señala expresamente que la ilustración del Muro corresponde a 1961.

## Conservación y funcionamiento

Se mantienen los archivos de relatos, preguntas, núcleo de progreso y portada, comprobados mediante SHA-256 contra su estado anterior. Se conserva la misma clave y formato de `localStorage`; no hay migración ni reinicio. Las actividades mantienen controles, validadores, soluciones, explicaciones y puntuación separados de la capa visual. El desafío final conserva sus 40 preguntas.

Las láminas se cargan por capítulo: la portada no descarga las once. Los recursos se incluyen en `dist/assets/` durante la compilación y usan rutas relativas compatibles con GitHub Pages bajo subruta.

La dirección de arte y los prompts quedan en `assets/ART-DIRECTION.md` y `assets/CHAPTER-PROMPTS.md`.

## Corrección de escenas sin imagen y revisión final

Se incorporaron los cinco archivos que faltaban (capítulos 3, 7, 9, 10 y 11): restauran 30 escenas. La lámina del pacto se ajustó para mostrar a Molotov y Ribbentrop como firmantes y a Stalin observando. Las once láminas tienen hashes distintos y los 66 encuadres corresponden a celdas diferentes.

Se verificaron 66 escenas en celular (390 px) y 66 en escritorio (1280 px), con imágenes cargadas, decodificadas y con área visible, sin desborde horizontal. También se revisó nuevamente la lámina corregida del capítulo 3. No quedó ninguna escena sin imagen.

`node scripts/check-preview.mjs` comprobó 38 recursos HTTP en la raíz y bajo `/dist/`: 200 y archivos PNG reales. La compilación contiene copias idénticas de las once láminas. El ensayo bajo subcarpeta valida el esquema de rutas relativas para GitHub Pages; no se ha publicado en un repositorio remoto durante este trabajo.

Pruebas: 13 aprobadas. La clave y el esquema de progreso no cambiaron. Evidencias locales en `test-results/image-load-checks.json`.
