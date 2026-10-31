import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowUp, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/content/site';
export function Header() {
 const [open,setOpen] = useState(false);
 const [active,setActive] = useState('introduction');
 const [scrolled,setScrolled] = useState(false);
 useEffect(()=>{
  const update = ()=>setScrolled(window.scrollY>20);
  update(); window.addEventListener('scroll',update,{passive:true});
  const observer = new IntersectionObserver(entries=>{
   for(const entry of entries) if(entry.isIntersecting) setActive(entry.target.id);
  },{rootMargin:'-10% 0px -65% 0px'});
  site.nav.forEach(n=>{const el=document.getElementById(n.id);if(el)observer.observe(el);});
  return ()=>{window.removeEventListener('scroll',update);observer.disconnect();};
 },[]);
 return <header className={`site-header ${scrolled?'is-scrolled':''}`}><div className="header-inner">
  <a href="#introduction" className="wordmark" onClick={()=>setOpen(false)}>{site.name}<span className="brand-dot"/></a>
  <nav className="desktop-nav" aria-label="Main navigation">{site.nav.map(n=><a key={n.id} href={`#${n.id}`} aria-current={active===n.id?'location':undefined}>{n.label}{n.id==='connect'&&<ArrowUpRight size={14}/>}</a>)}</nav>
  <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open?site.menuClose:site.menuOpen} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button>
 </div>{open&&<nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{site.nav.map(n=><a key={n.id} href={`#${n.id}`} onClick={()=>setOpen(false)}>{n.label}<ArrowUpRight size={20}/></a>)}</nav>}</header>;
}
export function Footer(){return <footer className="site-footer"><div className="container footer-inner"><div><p>{site.footer}</p><p className="footer-note">{site.footerNote}</p></div><div className="footer-actions">
 {site.email&&<Button asChild variant="ghost" size="icon"><a href={`mailto:${site.email}`} aria-label={site.emailLabel} title={site.emailLabel}><Mail/></a></Button>}
 {site.pinterest&&<Button asChild variant="ghost" size="icon"><a href={site.pinterest} target="_blank" rel="noreferrer" aria-label={site.pinterestLabel} title={site.pinterestLabel}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2a10 10 0 0 0-3.6 19.3c0-.8 0-1.7.2-2.5l1.3-5.5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.7 1.3 1.5 0 .9-.6 2.1-.9 3.4-.2 1 .5 1.8 1.5 1.8 1.9 0 3.2-2.4 3.2-5.2 0-2.2-1.5-3.8-4.2-3.8-3.1 0-5 2.3-5 4.8 0 .9.3 1.6.7 2.1.2.2.2.3.1.6l-.2.8c-.1.3-.3.4-.6.3-1.4-.6-2-2.2-2-4 0-3 2.5-6.6 7.4-6.6 4 0 6.6 2.9 6.6 6 0 4.1-2.3 7.2-5.6 7.2-1.1 0-2.1-.6-2.4-1.3l-.7 2.8c-.3.8-.7 1.7-1.1 2.4A10 10 0 1 0 12 2z"/></svg></a></Button>}
 <Button asChild variant="ghost" size="icon"><a href="#introduction" aria-label={site.backToTop} title={site.backToTop}><ArrowUp/></a></Button>
 </div></div></footer>}
