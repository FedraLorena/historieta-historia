import {exerciseScenes} from './data/chapter-one-scenes.js';
import {sceneSets,exerciseSceneIndices,chapterBridges} from './data/comic-scenes.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function narrationChunks(text){
 const sentences=text.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g)||[text];
 const groups=[];let chunk='';
 for(const sentence of sentences){chunk+=sentence;if(chunk.trim().split(/\s+/).length>=23){groups.push(chunk.trim());chunk='';}}
 if(chunk.trim())groups.push(chunk.trim());return groups;
}
function art(s){return `<div class="scene-art art-${s.image}" data-art-chapter="${s.chapter}" data-art-scene="${s.image}" role="img" aria-label="${esc(s.alt)}"><img src="./assets/chapter-${s.chapter}-comic.png" alt="" loading="lazy" decoding="async"></div>`;}
const spatial=()=>`<figure class="versailles-sketch"><figcaption>LEÉ EL ESPACIO · CAMBIOS TERRITORIALES DE 1919</figcaption><div><span>Francia<small>Alsacia y Lorena</small></span><b aria-label="territorios devueltos a Francia">←</b><span>Alemania<small>Pérdidas al oeste y al este</small></span><b aria-label="territorios cedidos a Polonia">→</b><span>Polonia<small>Parte de los territorios del este</small></span></div><p>Esquema de relaciones, sin escala ni fronteras. No muestra todas las cesiones territoriales.</p></figure>`;
export function comicNarrative(chapter){
 const scenes=sceneSets[chapter.id];
 if(!scenes||scenes.length!==chapter.panels.length)throw Error('Faltan escenas ilustradas para el capítulo '+chapter.id);
 const sober=chapter.sober;
 const note=sober?'Las ilustraciones son recreaciones interpretativas, sin imágenes explícitas. El relato conserva el contexto y las responsabilidades históricas. Podés leer con pausas y volver cuando quieras.':'Seguí las fechas y las voces del narrador. Las ilustraciones son recreaciones originales; los globos señalados como imaginados no son citas de personas reales.';
 return `<div class="comic-reader-note"><span class="comic-tag">${sober?'LECTURA HISTÓRICA Y MEMORIA':'UN RELATO EN SEIS ESCENAS'}</span><p>${note}</p></div><nav class="comic-timeline" aria-label="Saltar a una escena del capítulo ${chapter.id}">${scenes.map((s,i)=>`<a href="#escena-${chapter.id}-${i}" data-scene-jump="${i}" data-scene-chapter="${chapter.id}"><b>${s.date}</b><span>${esc(chapter.panels[i][0])}</span></a>`).join('')}</nav><div class="comic-pages">${scenes.map((s,i)=>`<section class="comic-scene scene-${i}" id="escena-${chapter.id}-${i}" aria-labelledby="scene-title-${chapter.id}-${i}"><header class="scene-slate"><span>ESCENA ${String(i+1).padStart(2,'0')}</span><strong>${s.date}</strong></header><div class="scene-picture">${art(s)}<span class="scene-location">${esc(s.place)}</span>${s.dialogue&&!sober?`<div class="speech speech-${i}"><p>${esc(s.dialogue)}</p><small>${esc(s.voice)}</small></div>`:''}${s.sound&&!sober?`<div class="sound-effect" aria-label="${esc(s.soundNote)}">${s.sound}<small>${esc(s.soundNote)}</small></div>`:''}${(i===0||i===5)&&(!s.dialogue||sober)?`<p class="scene-caption"><small>NARRADOR</small>${esc(s.beat)}</p>`:''}</div><div class="scene-story"><h2 id="scene-title-${chapter.id}-${i}">${esc(chapter.panels[i][0])}</h2>${(i===0||i===5)&&(!s.dialogue||sober)?'':`<p class="scene-beat">${esc(s.beat)}</p>`}<div class="narration-grid">${narrationChunks(chapter.panels[i][1]).map((text,j)=>`<p class="narrator narrator-${j}"><span class="sr-only">Narrador: </span>${esc(text)}</p>`).join('')}</div></div>${chapter.id===1&&i===1?spatial():''}<details class="scene-connection"><summary>${sober?'Contexto y reflexión':'Conectá la escena'}</summary><p>${esc(s.cue)}</p></details></section>`).join('')}</div><div class="comic-bridge"><span>${sober?'EL RELATO CONTINÚA':chapter.id===11?'CONECTÁ LA HISTORIA':'CONTINUARÁ…'}</span><p>${esc(chapterBridges[chapter.id])}</p></div>`;
}
const typeHints={
 choice:['LEÉ LOS INDICIOS','Compará las opciones y buscá la explicación mejor fundamentada.'],
 boolean:['REVISÁ LA AFIRMACIÓN','Pensá si la afirmación se sostiene en el contexto histórico.'],
 error:['DETECTIVE DE LAS CAUSAS','Prestá atención a las fechas, las generalizaciones y las responsabilidades.'],
 fill:['COMPLETÁ LA CONEXIÓN','Buscá la opción que mantiene el sentido histórico de la frase.'],
 text:['INTERPRETÁ EL DOCUMENTO','Distinguí lo que el texto permite concluir de lo que no demuestra.'],
 decision:['EL ESCRITORIO DEL HISTORIADOR','Analizá las decisiones con la información y las condiciones de su época.'],
 alliance:['EL TABLERO CAMBIA','La fecha importa para ubicar la posición de cada país.'],
 map:['LEÉ EL ESPACIO','Relacioná geografía, distancias y recursos con los acontecimientos.'],
 order:['RECONSTRUÍ LA SECUENCIA','Mové los hechos: el más antiguo va primero.'],
 match:['CONECTÁ LAS PIEZAS','Relacioná cada elemento con su efecto, fecha o significado.']
};
export function exerciseVisual(index,type,chapterId=1){
 const scenes=sceneSets[chapterId];if(!scenes)return '';
 const [label,hint]=typeHints[type]||typeHints.choice;
 const meta=chapterId===1?exerciseScenes[index]:{scene:exerciseSceneIndices[chapterId]?.[index]??0,label,hint};
 if(!meta)return '';
 const sober=chapterId===8||chapterId===10;
 return `<aside class="exercise-dossier dossier-${type}" aria-label="Contexto visual de la actividad">${art(scenes[meta.scene])}<div><span class="comic-tag">ACTIVIDAD ${String(index+1).padStart(2,'0')}</span><h2>${sober?'COMPRENSIÓN HISTÓRICA':esc(meta.label)}</h2><p>${sober?'Situá la consigna en su contexto y fundamentá tu respuesta.':esc(meta.hint)}</p>${type==='order'?'<span class="exercise-track" aria-hidden="true">PASADO <b>··········</b> DESPUÉS</span>':''}${type==='match'?'<span class="exercise-track" aria-hidden="true">CONCEPTO <b>↔</b> RELACIÓN</span>':''}</div></aside>`;
}
export function bindSceneJumps(root){root.querySelectorAll('[data-scene-jump]').forEach(a=>a.onclick=e=>{e.preventDefault();const section=root.querySelector(`#escena-${a.dataset.sceneChapter}-${a.dataset.sceneJump}`);section.tabIndex=-1;section.focus({preventScroll:true});section.scrollIntoView({block:'start',behavior:'instant'});});}
