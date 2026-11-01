import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Palette, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/content/site';

export function PalettePreview() {
  const [selected, setSelected] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(true);
  const choices = useRef<Array<HTMLButtonElement | null>>([]);
  const copy = site.palettePreview;

  useEffect(() => {
    if (selected) document.documentElement.dataset.palette = selected;
    else delete document.documentElement.dataset.palette;
    return () => { delete document.documentElement.dataset.palette; };
  }, [selected]);

  return <aside className="palette-preview" aria-label={copy.title}>
    {expanded ? <>
      <div className="palette-preview-heading">
        <span><Palette size={18} aria-hidden="true" />{copy.title}</span>
        <Button variant="ghost" size="icon" aria-label={copy.close} title={copy.close} onClick={() => setExpanded(false)}><ChevronDown /></Button>
      </div>
      <div className="palette-options" role="radiogroup" aria-label={copy.title}>
        {copy.options.map((option, index) => <Button
          key={option.id}
          ref={element => { choices.current[index] = element; }}
          variant="outline"
          role="radio"
          aria-checked={selected === option.id}
          tabIndex={selected === option.id || (!selected && index === 0) ? 0 : -1}
          className={`palette-option palette-swatch-${option.id}`}
          onClick={() => setSelected(option.id)}
          onKeyDown={event => {
            if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
            event.preventDefault();
            const next = event.key === 'Home' ? 0 : event.key === 'End' ? copy.options.length - 1 :
              (index + (['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1) + copy.options.length) % copy.options.length;
            const target = copy.options[next];
            if (!target) return;
            setSelected(target.id);
            choices.current[next]?.focus();
          }}
        >
          <span className="palette-swatches" aria-hidden="true"><i /><i /><i /><i /></span>
          <span className="palette-option-label">{option.label}</span>
          <Check className="palette-check" aria-hidden="true" />
        </Button>)}
      </div>
      <Button variant="ghost" size="sm" className="palette-reset" onClick={() => setSelected(null)} disabled={!selected}><RotateCcw />{copy.original}</Button>
    </> : <Button variant="outline" className="palette-launcher" onClick={() => setExpanded(true)} aria-label={copy.open}><Palette />{copy.title}</Button>}
  </aside>;
}