import { useState, type FormEvent } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { ArrowUpRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/content/site';
import { contactSchema } from '@/lib/contact-schema';
import { submitContact } from '@/lib/contact.functions';
export function ContactForm() {
 const send = useServerFn(submitContact);
 const [state, setState] = useState<'idle'|'sending'|'success'>('idle');
 const [error, setError] = useState('');
 async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form));
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) { setError(site.connect.validation); return; }
  setState('sending'); setError('');
  try {
   const result = await send({data:parsed.data});
   if (!result.ok) throw new Error('Not saved');
   setState('success'); form.reset();
  } catch { setError(site.connect.error); setState('idle'); }
 }
 if (state === 'success') return <div className="contact-success" role="status"><Check size={36}/><h3>{site.connect.success}</h3><Button variant="outline" onClick={()=>setState('idle')}>{site.connect.again}</Button></div>;
 return <form className="contact-form" onSubmit={onSubmit}>
  <div className="form-pair"><label>{site.connect.fields.name}<input name="name" autoComplete="name" required maxLength={100}/></label><label>{site.connect.fields.email}<input name="email" type="email" autoComplete="email" required maxLength={255}/></label></div>
  <label>{site.connect.fields.message}<textarea name="message" rows={4} required maxLength={5000}/></label>
  <div className="honeypot" aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" aria-label="Website"/></div>
  {error && <p className="text-destructive" role="alert">{error}</p>}
  <Button type="submit" className="portfolio-button" disabled={state==='sending'}>{state==='sending'?site.connect.sending:site.connect.submit}<ArrowUpRight/></Button>
 </form>;
}
