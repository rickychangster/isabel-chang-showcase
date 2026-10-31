import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import { contactSchema } from './contact-schema';
import type { Database } from '@/integrations/supabase/types';

export const submitContact = createServerFn({ method: 'POST' })
 .inputValidator((input: unknown) => contactSchema.parse(input))
 .handler(async ({ data }) => {
  const url = process.env['SUPABASE_URL'];
  const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
  if (!url || !key) return { ok: false };
  const client = createClient<Database>(url, key, {
   auth: { persistSession: false, autoRefreshToken: false },
   global: { fetch: (input, init) => {
    const headers = new Headers(init?.headers);
    if (key.startsWith('sb_') && headers.get('Authorization') === `Bearer ${key}`) headers.delete('Authorization');
    headers.set('apikey', key);
    return fetch(input, { ...init, headers });
   } },
  });
  const { error } = await client.from('contact_submissions').insert({ name: data.name, email: data.email, message: data.message });
  return { ok: !error };
 });
