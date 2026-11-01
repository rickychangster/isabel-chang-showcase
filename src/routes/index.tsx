import { createFileRoute } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight, Sparkles, Asterisk } from 'lucide-react';
import { site, categories, awards, type Category } from '@/content/site';
import { Button } from '@/components/ui/button';
import { PhotoSpace } from '@/components/PhotoSpace';
import { ContactForm } from '@/components/ContactForm';
export const Route = createFileRoute('/')({
 head:()=>({meta:[{title:site.title},{name:'description',content:site.description},{property:'og:title',content:site.title},{property:'og:description',content:site.description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}],links:[{rel:'canonical',href:site.domain}]}), component:Index,
});
function CategoryColumn({category,index}:{category:Category;index:number}){
 return <article className={`category-column tone-${category.tone}`}>
  <div className="category-heading"><span className="thread-number">0{index+1}</span><h3>{category.title}</h3><Asterisk className="thread-asterisk" size={30} strokeWidth={1.5}/></div>
  <div className="category-projects">{category.projects.map(p=><ProjectDetail key={p.name} project={p}/>)}</div>
  <div className="category-photos">{category.photos.map(photo=><PhotoSpace key={photo.caption} photo={photo}/>)}</div>
 </article>;
}
function renderLinks(text:string){
 return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part,i)=>{const m=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);return m?<a key={i} href={m[2]} className="inline-link">{m[1]}</a>:part;});
}
function ProjectDetail({project,featured=false}:{project:Category['projects'][number];featured?:boolean}){
 return <article id={project.id} className={`project-detail ${featured?'featured-project':''}`}><h4>{project.name}</h4>{project.role&&<p className="project-role">{project.role}</p>}{project.body&&[project.body].flat().map(t=><p key={t}>{renderLinks(t)}</p>)}{project.points&&<ul>{project.points.map(p=><li key={p}>{p}</li>)}</ul>}{project.notes?.map(n=><p className="project-note" key={n}>{n}</p>)}{project.link&&(project.link.href?<Button asChild variant="link"><a href={project.link.href}>{project.link.label}<ArrowUpRight/></a></Button>:<p className="pending-link">{site.paperPending}<ArrowUpRight size={15}/></p>)}{project.photos&&<div className="project-photos">{project.photos.map(photo=><PhotoSpace key={photo.caption} photo={photo}/>)}</div>}</article>;
}
function Index(){
 const firstHero = site.hero.photos[0];
 const secondHero = site.hero.photos[1];
 const firstInterest = site.about.interests[0];
 if (!firstHero || !secondHero || !firstInterest) return null;
 return <>
 <section id="introduction" className="intro-section"><div className="container">
  <div className="intro-eyebrow"><span className="eyebrow">{site.hero.label}</span><span className="tiny-star" aria-hidden>✳</span></div>
  <h1><span className="hero-greeting">{site.hero.greeting}</span>{site.hero.title}</h1>
  <div className="intro-bottom"><p className="hero-roles">{site.hero.roles.map((r,i)=><span key={r}>{i>0&&<span className="role-dot" aria-hidden>·</span>}{r}</span>)}</p><Button asChild className="portfolio-button"><a href="#next">{site.hero.cta}<ArrowDown size={18}/></a></Button></div>
  <div className="hero-photo-row"><PhotoSpace photo={firstHero}/><PhotoSpace photo={secondHero}/><span className="photo-margin-note" aria-hidden><Sparkles size={26}/>{firstHero.caption}</span></div>
 </div></section>
 <section id="glance" className="glance-section"><div className="container"><div className="section-topline"><p className="eyebrow">{site.glance.label}</p></div><div className="stats-grid">{site.glance.stats.map((s)=><div key={s.number} className="stat"><p className="stat-number">{s.number}</p><p className="stat-unit">{s.unit}</p><p className="stat-detail">{s.detail}</p></div>)}</div></div></section>
 <section id="built" className="built-heading"><div className="container"><h2>{site.built.title}<span className="heading-spark" aria-hidden>✳</span></h2><div className="built-links">{categories.map(c=><Button asChild variant="outline" key={c.id} className={`built-link tone-${c.tone}`}><a href={`#${c.id}`}><span className="built-link-dot"/>{c.title}<ArrowUpRight size={16}/></a></Button>)}</div></div></section>
 <section className="categories-section"><div className="container categories-grid">{categories.map((category,i)=><div id={category.id} key={category.id} className="category-anchor"><CategoryColumn category={category} index={i}/></div>)}</div></section>
 <section id="next" className="next-section"><div className="container"><p className="eyebrow">{site.next.label}</p><h2>{site.next.title}<span className="heading-spark" aria-hidden>✳</span></h2><p className="section-subtitle">{site.next.subtitle}</p><div className="next-cards">{site.next.sections.map(s=><div key={s.heading} className="next-card"><h3 className="next-heading">{s.heading}</h3>{s.paragraphs.map(p=><p key={p} className="next-body">{p}</p>)}</div>)}</div></div></section>
 <section id="honors" className="honors-section"><div className="container"><p className="eyebrow">{site.honors.label}</p><h2>{site.honors.title}</h2><div className="awards-timeline">{awards.map(year=><div className="awards-year" key={year.year}><h3>{year.year}<span className="year-dot"/></h3><div>{year.items.map(a=><article key={a.title} className="award"><div><h4>{a.title}</h4><p>{a.detail}</p></div><span className={`award-scope scope-${a.scope.toLowerCase()}`}>{a.scope}</span></article>)}</div></div>)}</div></div></section>
 <section id="about" className="about-section"><div className="container"><p className="eyebrow">{site.about.label}</p><h2>{site.about.title}</h2><div className="about-story"><div>{site.about.paragraphs.map((p,i)=><p key={p} className={i===3?'about-manifesto':''}>{p}</p>)}</div><PhotoSpace photo={firstInterest.photo} className="about-portrait"/></div><div className="education-grid"><div><p className="eyebrow">{site.about.educationTitle}</p><h3>{site.about.school}</h3><p>{site.about.location} · {site.about.diploma}</p><p className="education-gpa">{site.about.gpa}</p><p className="eyebrow course-label">{site.about.courseworkTitle}</p><p>{site.about.coursework.join(' · ')}</p></div><div><p className="eyebrow">{site.about.skillsTitle}</p>{site.about.skills.map(s=><p className="skill-line" key={s.label}><strong>{s.label}</strong>{s.text}</p>)}</div></div><h3 className="interests-heading">{site.about.interestsTitle}</h3><div className="interests-grid">{site.about.interests.map(i=><article key={i.title}><PhotoSpace photo={i.photo}/><h4>{i.title}</h4><p>{i.text}</p></article>)}</div></div></section>
 <section id="connect" className="connect-section"><div className="container connect-grid"><div><p className="eyebrow">{site.connect.label}</p><h2>{site.connect.title}<span className="connect-star" aria-hidden>✳</span></h2><p className="section-subtitle">{site.connect.body}</p><div className="current-interests">{[site.connect.reading,site.connect.obsessed].map(t=><div key={t}><p className="eyebrow">{t}</p><p>{site.connect.placeholder}</p></div>)}</div></div><ContactForm/></div></section>
 </>}
