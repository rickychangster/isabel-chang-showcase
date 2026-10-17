import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, PageIntro } from "@/components/SiteLayout";
import { projects } from "@/content/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Isabel Chang" },
      { name: "description", content: "The startup, sites and initiatives Isabel Chang has built and led." },
      { property: "og:title", content: "Projects — Isabel Chang" },
      { property: "og:description", content: "Startup, sites and initiatives built by Isabel Chang." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageIntro kicker="Projects" title={<>Things I've <em className="text-primary">built</em> and shipped.</>}>
        From my AI startup to side projects and communities I lead.
      </PageIntro>
      <section className="mx-auto max-w-6xl space-y-5 px-6">
        {projects.map((p) => (
          <article key={p.name} className="card-warm grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="kicker">{p.year} · {p.role}</p>
              <h2 className="mt-3 font-display text-4xl font-semibold">{p.name}</h2>
              <p className="mt-2 max-w-xl text-lg text-muted-foreground">{p.oneLiner}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
            <ButtonLink href={p.href}>Visit site</ButtonLink>
          </article>
        ))}
      </section>
    </>
  );
}
