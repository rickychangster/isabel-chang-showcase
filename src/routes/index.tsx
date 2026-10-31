import { createFileRoute } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight, Sparkles, Asterisk } from 'lucide-react';
import { site, threads, awards, type Thread } from '@/content/site';
import { Button } from '@/components/ui/button';
import { PhotoSpace } from '@/components/PhotoSpace';
import { ContactForm } from '@/components/ContactForm';
export const Route = createFileRoute('/')({
 head:()=>({meta:[{title:site.title},{name:'description',content:site.description},{property:'og:title',content:site.title},{property:'og:description',content:site.description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}],links:[{rel:'canonical',href:site.domain}]}), component:Index,
});
function ThreadSection({thread,index}:{thread:Thread;index:number}){
 const firstPhoto = thread.photos[0];
 const firstProject = thread.projects[0];
 if (!firstPhoto || !firstProject) return null;
 return <section id={thread.id} className={`thread-section tone-${thread.tone}`}><div className="container">
  <div className="thread-heading"><span className="thread-number">0{index+1}</span><div><h3>{thread.title}</h3><p className="thread-intro">“{thread.intro}”</p></div><Asterisk className="thread-asterisk" size={54} strokeWidth={1.5}/></div>
  <div className="thread-feature"><PhotoSpace photo={firstPhoto} className="feature-photo"/><ProjectDetail project={firstProject} featured/></div>
  <div className="project-grid">{thread.projects.slice(1).map(p=><ProjectDetail key={p.name} project={p}/>)}</div>
  <div className={`thread-gallery ${thread.photos.length>2?'gallery-culture':''}`}>{thread.photos.slice(1).map((photo,i)=><PhotoSpace key={photo.caption} photo={photo} className={`gallery-photo gallery-photo-${i}`}/>)}</div>
 </div></section>;
}
function ProjectDetail({project,featured=false}:{project:Thread['projects'][number];featured?:boolean}){
 return <article className={`project-detail ${featured?'featured-project':''}`}><h4>{project.name}</h4>{project.role&&<p className="project-role">{project.role}</p>}{project.body&&<p>{project.body}</p>}{project.points&&<ul>{project.points.map(p=><li key={p}>{p}</li>)}</ul>}{project.quote&&<blockquote>“{project.quote}”</blockquote>}{project.notes?.map(n=><p className="project-note" key={n}>{n}</p>)}{project.link&&(project.link.href?<Button asChild variant="link"><a href={project.link.href}>{project.link.label}<ArrowUpRight/></a></Button>:<p className="pending-link">{site.paperPending}<ArrowUpRight size={15}/></p>)}</article>;
}
function Index(){
 const firstHero = site.hero.photos[0];
 const secondHero = site.hero.photos[1];
 const firstInterest = site.about.interests[0];
 if (!firstHero || !secondHero || !firstInterest) return null;
 return <>
 <section id="introduction" className="intro-section"><div className="container">
  <div className="intro-eyebrow"><span className="eyebrow">{site.hero.label}</span><span className="tiny-star" aria-hidden>✳</span></div>
  <h1><span className="hero-greeting">{site.hero.greeting}</span>{site.hero.title}<br/><span className="hero-emphasis">{site.hero.emphasis}<svg viewBox="0 0 730 24" preserveAspectRatio="none" aria-hidden><path d="M4 16 Q365 -6 726 14 M30 21 Q390 8 697 20"/></svg></span></h1>
  <div className="intro-bottom"><p className="hero-roles">{site.hero.roles.map((r,i)=><span key={r}>{i>0&&<span className="role-dot" aria-hidden>·</span>}{r}</span>)}</p><Button asChild className="portfolio-button"><a href="#built">{site.hero.cta}<ArrowDown size={18}/></a></Button></div>
  <div className="hero-photo-row"><PhotoSpace photo={firstHero}/><PhotoSpace photo={secondHero}/><span className="photo-margin-note" aria-hidden><Sparkles size={26}/>{firstHero.caption}</span></div>
 </div></section>
 <section id="glance" className="glance-section"><div className="container"><div className="section-topline"><p className="eyebrow">{site.glance.label}</p><p>{site.glance.title}</p></div><div className="stats-grid">{site.glance.stats.map((s,i)=><div key={s.number} className={`stat ${i===4?'stat-fundraising':''}`}><p className="stat-number">{s.number}</p><p className="stat-unit">{s.unit}</p><p className="stat-detail">{s.detail}</p></div>)}</div></div></section>
 <section id="thread" className="my-thread"><div className="container"><p className="eyebrow">{site.thread.label}</p><h2>{site.thread.title}<br/><span>{site.thread.subtitle}</span></h2><div className="thread-links">{threads.map((t,i)=><Button asChild variant="outline" key={t.id} className={`thread-link tone-${t.tone}`}><a href={`#${t.id}`}><span className="thread-link-dot"/>{t.title}<ArrowUpRight size={16}/></a></Button>)}</div></div></section>
 <section id="built" className="built-heading"><div className="container"><p className="eyebrow">{site.built.label}</p><h2>{site.built.title}<span className="heading-spark" aria-hidden>✳</span></h2></div></section>
 {threads.map((thread,i)=><ThreadSection key={thread.id} thread={thread} index={i}/>)}
 <section id="honors" className="honors-section"><div className="container"><p className="eyebrow">{site.honors.label}</p><h2>{site.honors.title}</h2><p className="section-subtitle">{site.honors.subtitle}</p><div className="awards-timeline">{awards.map(year=><div className="awards-year" key={year.year}><h3>{year.year}<span className="year-dot"/></h3><div>{year.items.map(a=><article key={a.title} className="award"><div><h4>{a.title}</h4><p>{a.detail}</p></div><span className={`award-scope scope-${a.scope.toLowerCase()}`}>{a.scope}</span></article>)}</div></div>)}</div></div></section>
 <section id="connect" className="connect-section"><div className="container connect-grid"><div><p className="eyebrow">{site.connect.label}</p><h2>{site.connect.title}<span className="connect-star" aria-hidden>✳</span></h2><p className="section-subtitle">{site.connect.body}</p><div className="current-interests">{[site.connect.reading,site.connect.obsessed].map(t=><div key={t}><p className="eyebrow">{t}</p><p>{site.connect.placeholder}</p></div>)}</div></div><ContactForm/></div></section>
 <section id="about" className="about-section"><div className="container"><p className="eyebrow">{site.about.label}</p><h2>{site.about.title}</h2><div className="about-story"><div>{site.about.paragraphs.map((p,i)=><p key={p} className={i===3?'about-manifesto':''}>{p}</p>)}</div><PhotoSpace photo={firstInterest.photo} className="about-portrait"/></div><div className="education-grid"><div><p className="eyebrow">{site.about.educationTitle}</p><h3>{site.about.school}</h3><p>{site.about.location} · {site.about.diploma}</p><p className="education-gpa">{site.about.gpa}</p><p className="eyebrow course-label">{site.about.courseworkTitle}</p><p>{site.about.coursework.join(' · ')}</p></div><div><p className="eyebrow">{site.about.skillsTitle}</p>{site.about.skills.map(s=><p className="skill-line" key={s.label}><strong>{s.label}</strong>{s.text}</p>)}</div></div><h3 className="interests-heading">{site.about.interestsTitle}</h3><div className="interests-grid">{site.about.interests.map(i=><article key={i.title}><PhotoSpace photo={i.photo}/><h4>{i.title}</h4><p>{i.text}</p></article>)}</div></div></section>
 </>}
