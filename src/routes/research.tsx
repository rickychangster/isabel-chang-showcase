import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, PageIntro } from "@/components/SiteLayout";
import { research } from "@/content/site";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Isabel Chang" },
      { name: "description", content: "Isabel Chang's research project: the question, method, findings and links to the paper and code." },
      { property: "og:title", content: "Research — Isabel Chang" },
      { property: "og:description", content: "Question, method and findings from Isabel Chang's research." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Research,
});

function Research() {
  return (
    <>
      <PageIntro kicker="Research" title={research.title} />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="kicker">The question</p>
          <p className="heading-4 mt-3">{research.question}</p>
        </div>
        <div>
          <p className="kicker">The method</p>
          <p className="heading-4 mt-3">{research.method}</p>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-6">
        <p className="kicker">Findings</p>
        <ol className="mt-4 divide-y divide-border border-y border-border">
          {research.findings.map((f, i) => (
            <li key={f} className="flex gap-6 lead py-6">
              <span className="font-display text-primary">{String(i + 1).padStart(2, "0")}</span>{f}
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap gap-3">
          {research.links.map((l, i) => (
            <ButtonLink key={l.label} href={l.href} variant={i === 0 ? "primary" : "ghost"}>{l.label}</ButtonLink>
          ))}
        </div>
      </section>
    </>
  );
}
