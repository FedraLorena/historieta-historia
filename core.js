export const KEY = 'historieta-historia-v1';
export const emptyState = () => ({version:1, chapters:{}, final:{answers:{},best:0,certificateDate:null}, last:1});
export function validAnswer(q,value){
 if(q.type==='order') return Array.isArray(value)&&value.length===q.items.length&&new Set(value).size===value.length&&value.every(x=>Number.isInteger(x)&&x>=0&&x<q.items.length);
 if(q.type==='match') return Array.isArray(value)&&value.length===q.pairs.length&&value.every(x=>Number.isInteger(x)&&x>=0&&x<q.pairs.length);
 return Number.isInteger(value)&&value>=0&&value<q.options.length;
}
export function isCorrect(q,value){
 if(!validAnswer(q,value))return false;
 if(q.type==='order'||q.type==='match')return value.every((x,i)=>x===i);
 return q.answer===value;
}
export function score(questions,answers={}){
 const correct=questions.reduce((n,q,i)=>n+(isCorrect(q,answers[i]?.value)?1:0),0);
 const attempted=questions.reduce((n,q,i)=>n+(validAnswer(q,answers[i]?.value)?1:0),0);
 return {correct,attempted,total:questions.length,percent:Math.round(correct/questions.length*100),mastered:correct/questions.length>=.8};
}
export function sanitize(raw,sets,finalQuestions){
 const clean=emptyState();
 if(!raw||raw.version!==1)throw Error('Versión o datos no válidos');
 const take=(source,questions)=>{
  const out={};
  questions.forEach((q,i)=>{const a=source?.[i];if(a&&validAnswer(q,a.value))out[i]={value:a.value,tries:Number.isInteger(a.tries)?Math.min(Math.max(1,a.tries),10000):1};});
  return out;
 };
 sets.forEach((qs,i)=>{const c=raw.chapters?.[i+1];if(c)clean.chapters[i+1]={read:c.read===true,answers:take(c.answers,qs)};});
 clean.final.answers=take(raw.final?.answers,finalQuestions);
 clean.final.best=Number.isFinite(raw.final?.best)?Math.max(0,Math.min(100,raw.final.best)):0;
 clean.final.certificateDate=typeof raw.final?.certificateDate==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(raw.final.certificateDate)?raw.final.certificateDate:null;
 clean.last=Number.isInteger(raw.last)&&raw.last>=1&&raw.last<=11?raw.last:1;
 return clean;
}
export function load(storage,sets,finalQuestions){
 try{const value=storage.getItem(KEY);return {state:value?sanitize(JSON.parse(value),sets,finalQuestions):emptyState(),warning:null};}
 catch{return {state:emptyState(),warning:'No pudimos recuperar el progreso guardado. Podés empezar de nuevo; las lecturas y actividades siguen disponibles.'};}
}
export function save(storage,state){try{storage.setItem(KEY,JSON.stringify(state));return true;}catch{return false;}}
export function areas(questions,answers){
 const result={};
 questions.forEach((q,i)=>{const key=q.chapter;result[key]??={correct:0,total:0};result[key].total++;if(isCorrect(q,answers[i]?.value))result[key].correct++;});
 return result;
}
