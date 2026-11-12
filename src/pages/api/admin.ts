import type { APIRoute } from 'astro';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { timingSafeEqual } from 'node:crypto';
import { getEditorial } from '../../lib/editorial';
const dataDir=()=>resolve(process.env.ONTIC_DATA_DIR||'./data');
function authorized(request:Request){const configured=process.env.ADMIN_TOKEN||'';const given=request.headers.get('authorization')?.replace(/^Bearer\s+/i,'')||'';if(!configured||!given)return false;const a=Buffer.from(configured),b=Buffer.from(given);return a.length===b.length&&timingSafeEqual(a,b)}
export const GET:APIRoute=async()=>Response.json(await getEditorial());
export const PUT:APIRoute=async({request})=>{if(!authorized(request))return Response.json({message:'Neautorizat.'},{status:401});let data;try{data=await request.json()}catch{return Response.json({message:'JSON invalid.'},{status:400})}if(!Array.isArray(data.news)||!Array.isArray(data.schedule)||data.news.length>100||data.schedule.length>14)return Response.json({message:'Structura editorială nu este validă.'},{status:400});await mkdir(dataDir(),{recursive:true});await writeFile(resolve(dataDir(),'editorial.json'),JSON.stringify({news:data.news,schedule:data.schedule},null,2),'utf8');return Response.json({message:'Conținut salvat.'})};
