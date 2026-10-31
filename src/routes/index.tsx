import { createFileRoute, Link } from "@tanstack/react-router";
import { highlights, site } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isabel Chang — AI Founder & Student Researcher" },
      { name: "description", content: "Isabel Chang is a high school student building an AI startup and doing independent research." },
      { property: "og:title", content: "Isabel Chang — AI Founder & Student Researcher" },
      { property: "og:description", content: "High school student, AI startup founder and researcher." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-20 md:pt-24">
        <p className="kicker">{site.tagline}</p>
        <h1 className="heading-1 mt-6">
          Isabel Chang<span className="text-primary">.</span>
        </h1>
        <p className="heading-4 mt-8 max-w-2xl font-normal italic text-muted-foreground md:text-3xl">
          {site.mission}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/projects" className="btn-primary">View my startup <span aria-hidden>→</span></Link>
          <Link to="/research" className="btn-ghost">Read the research</Link>
          <Link to="/resume" className="btn-ghost">Get in touch</Link>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-3">
        {highlights.map((h, i) => (
          <Link key={h.kicker} to={h.to} className="card-warm group">
            <p className="kicker">0{i + 1} — {h.kicker}</p>
            <h2 className="heading-3 mt-6 group-hover:text-primary">{h.title}</h2>
            <p className="body mt-3 text-muted-foreground">{h.body}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
