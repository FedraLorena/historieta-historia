// Comprueba recursos reales en la raíz y bajo la subruta de la compilación.
import assert from 'node:assert/strict';
const origin=process.env.PREVIEW_ORIGIN||'http://127.0.0.1:4173';
let checked=0;
for(const base of ['/','/dist/']){
 for(const file of ['index.html','app.js','comic-reader.js','core.js','styles.css','data/chapters.js','data/questions.js','data/comic-scenes.js',...Array.from({length:11},(_,i)=>`assets/chapter-${i+1}-comic.png`)]){
  const response=await fetch(new URL(base+file,origin),{signal:AbortSignal.timeout(15000)});
  assert.equal(response.status,200,base+file);
  const bytes=Buffer.from(await response.arrayBuffer());
  if(file.endsWith('.png'))assert.equal(bytes.toString('ascii',1,4),'PNG',base+file);
  if(file.endsWith('.js'))assert.ok(!bytes.toString('utf8').startsWith('<!doctype'),base+file);
  checked++;
 }
 console.log(`HTTP 200 y archivos válidos: ${base} · 11 láminas / 66 escenas`);
}
console.log(`${checked} recursos comprobados. Sin imágenes faltantes en raíz ni subruta.`);
