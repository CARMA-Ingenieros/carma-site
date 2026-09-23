/** Run after npm run build. No third-party dependencies. */
import { readFile, readdir, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'../public');
const files=(await readdir(root)).filter(x=>x.endsWith('.html'));
assert.equal(files.length,18,'Expected 18 generated HTML pages');
const titles=new Set();let links=0;
for(const file of files){
 const html=await readFile(resolve(root,file),'utf8');
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${file}: one H1`);
 const title=html.match(/<title>([^<]+)<\/title>/)?.[1];assert(title,`${file}: title`);assert(!titles.has(title),`${file}: duplicate title`);titles.add(title);
 assert(html.includes('name="description"'),`${file}: description`);
 assert(html.includes('lang="es-PE"'),`${file}: language`);
 assert(!/<a[^>]+href="#"[ >]/.test(html),`${file}: placeholder link`);
 for(const match of html.matchAll(/(?:href|src|action)="([^"]+)"/g)){
  const url=match[1];if(/^(?:[a-z]+:|\/\/)/i.test(url))continue;
  const [path,fragment]=url.split('#');const target=path.split('?')[0];
  if(target){await access(resolve(root,decodeURIComponent(target)));links++;}
  if(fragment){const targetHTML=target?await readFile(resolve(root,target),'utf8'):html;assert(targetHTML.includes(`id="${fragment}"`),`${file}: missing anchor ${url}`);}
 }
}
const form=await readFile(resolve(root,'contacto.html'),'utf8');
for(const token of ['data-netlify="true"','name="form-name" value="cotizacion-carma"','name="consentimiento"','netlify-honeypot="bot-field"','name="servicio"'])assert(form.includes(token),`Form: ${token}`);
for(const old of ['constructora','ingenieria','analytics'])assert(!files.includes(old+'.html'),`Old page still generated: ${old}`);
console.log(`PASS: ${files.length} pages, ${links} local file references, titles, anchors, form and scope.`);
