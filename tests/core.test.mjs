import test from 'node:test';
import assert from 'node:assert/strict';
import {chapters} from '../data/chapters.js';
import {questionSets,finalQuestions} from '../data/questions.js';
import {emptyState,validAnswer,isCorrect,score,load,save,sanitize,areas,KEY} from '../core.js';
const solution=q=>['order','match'].includes(q.type)?(q.items||q.pairs).map((_,i)=>i):q.answer;
test('11 relatos originales de 450–700 palabras y seis viñetas, contexto y cinco ideas',()=>{
 assert.equal(chapters.length,11);assert.equal(questionSets.length,11);
 const seen=new Set();
 for(const c of chapters){const words=c.panels.map(p=>p[1]).join(' ').split(/\s+/).length;assert.ok(words>=450&&words<=700,`Capítulo ${c.id}: ${words} palabras`);assert.ok(c.panels.length>=5&&c.panels.length<=8);assert.equal(c.recap.length,5);assert.ok(c.opening&&c.transition);assert.ok(c.context.people&&c.context.vocab&&c.context.timeline&&c.context.why);for(const [,text]of c.panels){assert.ok(!seen.has(text));seen.add(text);}}
});
test('110 consignas específicas y 40 finales con al menos 15 conexiones múltiples',()=>{
 assert.equal(questionSets.flat().length,110);for(const set of questionSets)assert.equal(set.length,10);
 assert.equal(finalQuestions.length,40);assert.ok(finalQuestions.filter(q=>q.links.length>=2).length>=15);
 assert.equal(new Set(finalQuestions.map(q=>q.chapter)).size,11);
 assert.equal(new Set([...questionSets.flat(),...finalQuestions].map(q=>q.prompt)).size,150);
});
test('Todas las actividades tienen una solución válida, explicación y distractores diferentes',()=>{
 const types=new Set();const positions=new Set();
 for(const q of [...questionSets.flat(),...finalQuestions]){
  types.add(q.type);assert.ok(q.explanation.length>40,q.prompt);assert.ok(validAnswer(q,solution(q)));assert.ok(isCorrect(q,solution(q)));assert.ok(!isCorrect(q,null));
  if(q.options){assert.equal(new Set(q.options).size,q.options.length);for(let i=0;i<q.options.length;i++)assert.equal(isCorrect(q,i),i===q.answer);if(q.options.length===3)positions.add(q.answer);}
  if(q.pairs){assert.equal(new Set(q.pairs.map(p=>p.split('|')[1])).size,q.pairs.length);assert.ok(!isCorrect(q,[1,0,2]));}
  if(q.items){assert.equal(new Set(q.items).size,q.items.length);assert.ok(!validAnswer(q,q.items.map(()=>0)));assert.ok(!isCorrect(q,solution(q).reverse()));}
 }
 assert.ok(types.size>=9);assert.equal(positions.size,3);
});
test('Puntuación usa el total y el umbral real del 80%, también con pendientes',()=>{
 const qs=questionSets[0],answers={};assert.deepEqual(score(qs),{correct:0,attempted:0,total:10,percent:0,mastered:false});
 for(let i=0;i<7;i++)answers[i]={value:solution(qs[i])};assert.equal(score(qs,answers).mastered,false);
 answers[7]={value:solution(qs[7])};assert.equal(score(qs,answers).percent,80);assert.equal(score(qs,answers).mastered,true);
 answers[0]={value:(qs[0].answer+1)%3};assert.equal(score(qs,answers).percent,70);
});
test('Final: 31/40 no alcanza, 32/40 sí; áreas suman el total',()=>{
 const answers={};for(let i=0;i<31;i++)answers[i]={value:solution(finalQuestions[i])};assert.equal(score(finalQuestions,answers).mastered,false);answers[31]={value:solution(finalQuestions[31])};assert.equal(score(finalQuestions,answers).mastered,true);
 const groups=areas(finalQuestions,answers);assert.equal(Object.values(groups).reduce((s,x)=>s+x.total,0),40);assert.equal(Object.values(groups).reduce((s,x)=>s+x.correct,0),32);
});
test('Persistencia conserva lectura, respuestas y mejor resultado',()=>{
 const data=new Map(),storage={getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,v)};
 const s=emptyState();s.last=11;s.chapters[1]={read:true,answers:{0:{value:questionSets[0][0].answer,tries:2}}};s.final.best=85;s.final.certificateDate='2026-11-20';assert.ok(save(storage,s));assert.ok(data.has(KEY));assert.deepEqual(load(storage,questionSets,finalQuestions).state,s);
});
test('Datos corruptos, respuestas inválidas y almacenamiento bloqueado no rompen la misión',()=>{
 for(const value of ['{broken','null','{}','{"version":999}']){const r=load({getItem:()=>value},questionSets,finalQuestions);assert.ok(r.warning);assert.deepEqual(r.state,emptyState());}
 const s=emptyState();s.last=999;s.chapters[1]={read:true,answers:{0:{value:999},1:{value:-1}}};s.final.best=999;const clean=sanitize(s,questionSets,finalQuestions);assert.deepEqual(clean.chapters[1].answers,{});assert.equal(clean.last,1);assert.equal(clean.final.best,100);
 assert.equal(save({setItem(){throw Error('Quota');}},s),false);assert.ok(load({getItem(){throw Error('Privacy');}},questionSets,finalQuestions).warning);
});
