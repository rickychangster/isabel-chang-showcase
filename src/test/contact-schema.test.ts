import { describe, it, expect } from 'vitest';
import { contactSchema } from '@/lib/contact-schema';
describe('Contact input validation',()=>{
 const valid = {name:'Portfolio visitor',email:'visitor@example.com',message:'Hello Isabel'};
 it('accepts a complete contact message',()=>expect(contactSchema.safeParse(valid).success).toBe(true));
 it('rejects invalid emails',()=>expect(contactSchema.safeParse({...valid,email:'invalid'}).success).toBe(false));
 it('rejects blank messages',()=>expect(contactSchema.safeParse({...valid,message:' '}).success).toBe(false));
 it('rejects filled spam traps',()=>expect(contactSchema.safeParse({...valid,website:'spam'}).success).toBe(false));
});
