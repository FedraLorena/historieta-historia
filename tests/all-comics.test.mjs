import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {chapters} from '../data/chapters.js';
import {questionSets} from '../data/questions.js';
import {sceneSets} from '../data/comic-scenes.js';
import {comicNarrative,narrationChunks,exerciseVisual} from '../comic-reader.js';

test('66 escenas completas: fecha, lugar, imagen y conservación palabra por palabra',()=>{
 let count=0;const ids=[];
 for(const c of chapters){
  const scenes=sceneSets[c.id];assert.equal(scenes.length,c.panels.length);
  const html=comicNarrative(c);assert.equal((html.match(/class="comic-scene /g)||[]).length,6);
  for(const [i,s]of scenes.entries()){
   count++;assert.ok(s.date&&s.place&&s.alt&&s.beat&&s.cue);assert.equal(s.chapter,c.id);assert.equal(s.image,i);
   assert.equal(narrationChunks(c.panels[i][1]).join(' ').replace(/\s+/g,' '),c.panels[i][1].replace(/\s+/g,' '));
   assert.ok(html.includes(`data-art-chapter="${c.id}" data-art-scene="${i}"`));
   const id=`escena-${c.id}-${i}`;assert.ok(html.includes(`id="${id}"`));ids.push(id);
  }
 }
 assert.equal(count,66);assert.equal(new Set(ids).size,66);
});

test('Holocausto y final del Pacífico: ilustrados, sin globos ni efectos cómicos',()=>{
 for(const id of [8,10]){
  const html=comicNarrative(chapters[id-1]);assert.equal((html.match(/class="scene-art /g)||[]).length,6);
  assert.ok(!html.includes('class="speech'));assert.ok(!html.includes('sound-effect'));
  assert.ok(!html.includes('CONTINUARÁ'));assert.ok(html.includes('Contexto y reflexión'));
  for(const s of sceneSets[id])assert.ok(!s.sound&&!s.dialogue);
 }
});

test('Las 110 actividades conservan controles y soluciones separados de la capa visual',()=>{
 questionSets.forEach((set,n)=>set.forEach((q,i)=>{
  const html=exerciseVisual(i,q.type,n+1);assert.ok(html.includes('role="img"'));assert.ok(html.includes(`data-art-chapter="${n+1}"`));
  assert.ok(!html.includes('type="radio"'));assert.ok(!html.includes('name="answer"'));
 }));
});

test('Cada lámina original está incluida y tiene una retícula de tres columnas y dos filas',async()=>{
 for(const c of chapters){
  const data=await readFile(new URL(`../assets/chapter-${c.id}-comic.png`,import.meta.url));
  assert.equal(data.toString('ascii',1,4),'PNG');
  const w=data.readUInt32BE(16),h=data.readUInt32BE(20);
  assert.ok(w>=1500&&h>=1000,`Resolución insuficiente en ${c.id}: ${w}×${h}`);
  assert.ok(Math.abs(w/h-1.5)<.015,`Retícula inesperada en ${c.id}: ${w}×${h}`);
 }
});
