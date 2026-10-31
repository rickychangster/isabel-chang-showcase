import { Camera, ArrowUpRight } from 'lucide-react';
import { site, type Photo } from '@/content/site';
export function PhotoSpace({ photo, className = '' }: { photo: Photo; className?: string }) {
 return <figure className={`photo-space ${className}`}>
  {photo.src ? <img src={photo.src} alt={photo.alt} loading="lazy" /> : <div className="photo-empty" role="img" aria-label={photo.detail}>
   <span className="photo-corner" aria-hidden><ArrowUpRight size={19} /></span>
   <Camera size={30} strokeWidth={1.2} aria-hidden />
   <span className="photo-empty-title">{photo.detail}</span><span className="photo-pending">{site.photoLabel}</span>
  </div>}
  <figcaption>{photo.caption}</figcaption>
 </figure>;
}
