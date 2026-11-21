# HISTORIETA HISTORIA

Aplicación educativa estática para Pedro: **Segunda Guerra Mundial — El mundo en llamas**. Sin dependencias, claves, backend ni cuentas. Funciona en GitHub Pages, también dentro de una subruta de repositorio.

## Relato ilustrado completo

Los once capítulos cuentan con seis escenas ilustradas originales cada uno: 66 en total. Conservan el relato íntegro, sus actividades y el progreso existente. El lector compartido es `comic-reader.js`; las fechas, lugares y conexiones visuales están en `data/comic-scenes.js`. Los capítulos del Holocausto y del final del Pacífico usan una presentación sobria sin globos ni efectos cómicos. Consultá `ILUSTRACIONES.md` para conocer los recursos y la conservación del contenido.

## Abrir localmente

Necesitás Node.js 20 o posterior. Desde esta carpeta:

```powershell
node scripts/serve.mjs
```

Abrí `http://127.0.0.1:4173` en el navegador. No abras el HTML con doble clic: los módulos de JavaScript necesitan un servidor HTTP. Para cambiar el puerto, definí `PORT` antes de iniciar.

## Comprobar y compilar

```powershell
node --test
node scripts/build.mjs
```

Si tenés npm, también podés usar `npm test`, `npm run build` y `npm run dev`. No hace falta ejecutar `npm install`. La salida publicable queda en `dist/`.

Para revisar esa salida:

```powershell
node scripts/serve.mjs --dist
```

## Publicar en GitHub Pages

1. Creá un repositorio en GitHub y subí estos archivos a su rama `main` o `master`.
2. En **Settings → Pages → Build and deployment**, elegí **GitHub Actions** como Source.
3. El workflow `.github/workflows/pages.yml` ejecutará pruebas, compilará y publicará `dist/` cuando hagas push. También puede lanzarse desde **Actions → Publicar HISTORIETA HISTORIA → Run workflow**.
4. Esperá a que finalice el job `deploy`; GitHub mostrará la URL publicada. Habitualmente tendrá el formato `https://USUARIO.github.io/REPOSITORIO/`.

Las rutas internas usan fragmentos (`#capitulo/1`) y los recursos usan rutas relativas. No requieren configurar un dominio, una base URL ni redirecciones de un servidor. Alternativamente, podés publicar la raíz mediante **Deploy from a branch**, porque el código fuente también es estático; el workflow es la opción recomendada.

Este proyecto todavía no se subió a GitHub: el repositorio local no tiene un remoto configurado. No se creó un servicio de hosting alternativo.

## Qué incluye

- 11 relatos originales, de 450–700 palabras cada uno, distribuidos en seis viñetas.
- Aperturas y transiciones conectadas; personajes, vocabulario, cronologías, recapitulaciones de cinco ideas y esquemas espaciales.
- 10 actividades por capítulo: 110 en total, con soluciones y explicaciones.
- Selección múltiple, verdadero/falso, cronología con controles de teclado, relaciones, completar, análisis de errores, decisiones contextualizadas, alianzas e interpretación.
- Desafío final de 40 preguntas nuevas; las últimas 20 conectan varios capítulos. Balance por tema, repaso de errores y pendientes y repetición.
- Meta del 80% que nunca bloquea lecturas. Holocausto sin insignias y con presentación sobria; el capítulo del final del Pacífico también tiene tratamiento visual sobrio.
- Certificado «Historiador de la Misión» para Pedro al responder las 40 preguntas y alcanzar al menos 80%. Imprimible o guardable como PDF mediante el navegador.
- Progreso en `localStorage`, manejo de contenido corrupto o acceso bloqueado y reinicio con confirmación.
- Contenido esencial local, sin fuentes web, imágenes o servicios externos necesarios. La sección Fuentes incluye referencias para ampliar lecturas.
- Diseño adaptable, foco visible, enlaces de salto, controles etiquetados y respeto por `prefers-reduced-motion`.

## Archivos

| Archivo | Función |
| --- | --- |
| `index.html` | Estructura, navegación principal y entrada |
| `styles.css`, `icon.svg` | Identidad visual, adaptación e impresión |
| `app.js` | Vistas, controles de práctica, transiciones y certificado |
| `core.js` | Validación de respuestas, puntuación y persistencia |
| `data/chapters.js` | Narraciones, recuadros y recapitulaciones |
| `data/questions.js` | 110 actividades y 40 preguntas integradoras |
| `tests/core.test.mjs` | Pruebas de contenido, soluciones, dominio y almacenamiento |
| `scripts/serve.mjs`, `scripts/build.mjs` | Servidor local y empaquetado sin dependencias |
| `.github/workflows/pages.yml`, `.nojekyll` | Publicación en GitHub Pages |

## Progreso y privacidad

La clave es `historieta-historia-v1`. El nombre Pedro está fijado en el contenido, no se solicita ni transmite información personal. El progreso pertenece a cada navegador y origen: el sitio local y GitHub Pages tendrán guardados separados. Borrar datos del navegador elimina el progreso. Si el navegador bloquea almacenamiento, la aplicación lo informa y permite continuar en memoria durante la sesión.

La práctica registra la última respuesta y la cantidad de intentos por actividad. Repetir una práctica completa reemplaza sus respuestas después de confirmarlo. El desafío final conserva el mejor porcentaje y la fecha de obtención del certificado. Reiniciar todo elimina también esos datos después de una confirmación.

## Validación realizada

Se ejecutaron `node --test` (13 pruebas aprobadas), las comprobaciones de sintaxis y `node scripts/build.mjs`. Se verifica la conservación palabra por palabra de los relatos, las 66 escenas, la existencia y resolución de las once láminas, las 110 actividades, las 40 preguntas finales, la puntuación y la persistencia. `node scripts/check-preview.mjs` comprueba 38 recursos HTTP en raíz y bajo `/dist/`, incluidos los archivos PNG reales.

Se revisaron las 66 escenas en navegador a 390 y 1280 píxeles bajo la subruta de la compilación: imágenes cargadas y decodificadas, con área visible y sin desbordes horizontales. Los resultados están en `test-results/` (excluido de Git). La impresión del certificado no se volvió a verificar en esta revisión de ilustraciones. No se ha desplegado todavía en un GitHub Pages real; se comprobó la compilación estática con las mismas rutas relativas bajo subcarpeta.

Las referencias institucionales están en la sección Fuentes de la aplicación. Son materiales educativos originales; una revisión docente adicional puede ayudar a ajustar vocabulario y ritmo a Pedro.
