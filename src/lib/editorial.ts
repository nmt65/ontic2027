import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { news as defaultNews, schedule as defaultSchedule } from '../content/site';
export type Result = { position?: number; code: string; participant?: string; name?: string; section: string; grade: string; county: string; school: string; score: number; award: string };
const dataDir = () => resolve(process.env.ONTIC_DATA_DIR || './data');
async function load<T>(name:string,fallback:T):Promise<T>{try{return JSON.parse(await readFile(resolve(dataDir(),name),'utf8')) as T}catch{return fallback}}
export async function getEditorial(){const saved=await load<{news?:typeof defaultNews;schedule?:typeof defaultSchedule}>('editorial.json',{});return {news:saved.news||defaultNews,schedule:saved.schedule||defaultSchedule}}
export async function getResults():Promise<{updatedAt:string|null;results:Result[]}>{return load('results.json',{updatedAt:null,results:[]})}
