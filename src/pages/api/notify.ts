import type { APIRoute } from 'astro';
const hits = new Map<string, number[]>();
function limited(ip:string){const now=Date.now(), windowMs=10*60*1000;const times=(hits.get(ip)||[]).filter(x=>now-x<windowMs);if(times.length>=5)return true;times.push(now);hits.set(ip,times);return false}
export const POST: APIRoute = async ({ request }) => {
  const form=await request.formData(); const email=String(form.get('email')||'').trim().toLowerCase();
  if(form.get('website')) return Response.json({message:'Mulțumim! Dacă adresa este validă, vei primi o notificare.'});
  if(limited(request.headers.get('x-forwarded-for')?.split(',')[0]||'unknown')) return Response.json({message:'Prea multe încercări. Încearcă din nou în câteva minute.'},{status:429});
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||form.get('consent')!=='yes') return Response.json({message:'Introdu o adresă validă și acordă consimțământul.'},{status:400});
  const secret=process.env.TURNSTILE_SECRET_KEY;const token=String(form.get('cf-turnstile-response')||'');
  if(secret){const verify=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({secret,response:token,remoteip:request.headers.get('x-forwarded-for')?.split(',')[0]||''})});const result=await verify.json();if(!result.success)return Response.json({message:'Verificarea anti-spam nu a reușit. Reîncarcă pagina și încearcă din nou.'},{status:400})}
  const key=process.env.RESEND_API_KEY;const audience=process.env.RESEND_AUDIENCE_ID;const to=process.env.CONTACT_EMAIL; const from=process.env.RESEND_FROM_EMAIL;
  if(!key||!audience||!to||!from) return Response.json({message:'Formularul este în curs de configurare. Te rugăm să revii în curând.'},{status:503});
  const add=await fetch('https://api.resend.com/contacts',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({email, audience_id:audience, unsubscribed:false})});
  if(!add.ok && add.status!==409) return Response.json({message:'Nu am putut salva solicitarea. Încearcă din nou.'},{status:502});
  await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[to],subject:'Înscriere la notificarea datei ONTIC 2027',text:`Adresă: ${email}\nConsimțământ explicit pentru notificarea despre publicarea datei.\nȘtergere la cerere.`})});
  return Response.json({message:'Mulțumim! Te anunțăm când data este publicată. Poți cere ștergerea adresei oricând.'});
};
