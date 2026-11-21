import test from 'node:test';
import assert from 'node:assert/strict';
import {chapters} from '../data/chapters.js';
import {scenes,exerciseScenes} from '../data/chapter-one-scenes.js';
import {narrationChunks,comicNarrative,exerciseVisual} from '../comic-one.js';
test('El piloto conserva cada palabra de las seis viñetas originales y no altera el orden',()=>{
 for(const [,text]of chapters[0].panels)assert.equal(narrationChunks(text).join(' ').replace(/\s+/g,' '),text.replace(/\s+/g,' '));
 const html=comicNarrative(chapters[0]);assert.equal((html.match(/class="comic-scene /g)||[]).length,6);assert.equal(scenes.length,6);
 assert.ok(scenes.every(s=>s.alt&&s.date));assert.ok(html.includes('no son citas de personas reales'));assert.ok(html.includes('sin escala ni fronteras'));
});
test('Cada una de las diez actividades tiene contexto visual sin modificar su validación',()=>{
 assert.equal(exerciseScenes.length,10);for(let i=0;i<10;i++){const html=exerciseVisual(i,'choice');assert.ok(html.includes('role="img"'));assert.ok(html.includes('ACTIVIDAD'));assert.ok(!html.includes('type="radio"'));}
});
