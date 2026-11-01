import { expect, it } from 'vitest';
import { site, categories, awards } from '@/content/site';
it('preserves the supplied nonprofit fundraising total',()=>expect(site.glance.stats[2]?.number).toBe('$14,300'));
it('preserves the supplied student reach',()=>expect(site.glance.stats[1]?.number).toBe('150+'));
it('preserves the supplied student debaters served',()=>expect(site.glance.stats[3]?.number).toBe('450+'));
it('preserves the supplied monthly Pinterest impressions',()=>expect(site.glance.stats[4]?.number).toBe('90k+'));
it('preserves the expected diploma year',()=>expect(site.about.diploma).toBe('Expected Diploma: 2027'));
it('organizes What I’ve Built into the supplied categories with debate in Serving',()=>{
 expect(categories.map(c=>c.id)).toEqual(['creating','service']);
 expect(categories.find(c=>c.id==='service')?.projects.map(p=>p.name)).toContain('Competitive Debate');
 expect(categories.flatMap(c=>c.projects.map(p=>p.name))).not.toContain('Badminton Captain');
});
it('keeps the Teleios vision in What’s Next',()=>expect(site.next.sections.at(-1)?.heading).toBe('Introducing Teleios'));
it('preserves the supplied recognition years',()=>expect(awards.map(a=>a.year)).toEqual(['2026','2024','2023']));
it('does not expose an invented email address',()=>expect(site.email).toBeUndefined());
