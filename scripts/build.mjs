import {mkdir,copyFile,cp,access} from 'node:fs/promises';
// No producir una publicación incompleta si falta alguna lámina.
for(let id=1;id<=11;id++)await access(`assets/chapter-${id}-comic.png`);
await mkdir('dist',{recursive:true});
for(const file of ['index.html','styles.css','app.js','core.js','icon.svg','comic-one.js','comic-reader.js'])await copyFile(file,`dist/${file}`);
await cp('data','dist/data',{recursive:true});
await cp('assets','dist/assets',{recursive:true});
await copyFile('index.html','dist/404.html');
await copyFile('.nojekyll','dist/.nojekyll');
console.log('Build listo: dist/ · HTML, CSS y módulos estáticos, sin dependencias.');
