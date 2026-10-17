import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { site } from "@/content/site";

const nav = [
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/resume", label: "Resume & Contact" },
] as const;

export function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link to="/" className="font-display text-2xl font-semibold tracking-tight">
        Isabel<span className="text-primary">.</span>
      </Link>
      <nav className="flex gap-5 text-sm md:gap-8">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="link-underline" activeProps={{ className: "text-primary" }}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div className="flex gap-6">
          <a href={`mailto:${site.email}`} className="link-underline">Email</a>
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="link-underline">{s.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({ kicker, title, children }: { kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-12 pb-10 md:pt-20">
      <p className="kicker">{kicker}</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] font-semibold tracking-tight md:text-7xl">{title}</h1>
      {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
    </section>
  );
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "ghost" }) {
  const external = href.startsWith("http");
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={variant === "primary" ? "btn-primary" : "btn-ghost"}>
      {children} <span aria-hidden>→</span>
    </a>
  );
}
