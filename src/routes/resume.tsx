import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, PageIntro } from "@/components/SiteLayout";
import { site, timeline } from "@/content/site";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume & Contact — Isabel Chang" },
      { name: "description", content: "Isabel Chang's experience, education and awards, plus how to get in touch." },
      { property: "og:title", content: "Resume & Contact — Isabel Chang" },
      { property: "og:description", content: "Experience, education, awards and contact for Isabel Chang." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <>
      <PageIntro kicker="Resume & Contact" title={<>Let's build something <em className="text-primary">ambitious</em>.</>}>
        Open to internships, research collaborations, accelerators and conversations with founders.
      </PageIntro>
      <section className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${site.email}`}>Email me</ButtonLink>
          <ButtonLink href={site.resumeUrl} variant="ghost">Download resume</ButtonLink>
          {site.socials.map((s) => <ButtonLink key={s.label} href={s.href} variant="ghost">{s.label}</ButtonLink>)}
        </div>
        <ol className="mt-16 divide-y divide-border border-y border-border">
          {timeline.map((t) => (
            <li key={t.what} className="grid gap-2 py-6 md:grid-cols-[200px_1fr_auto] md:items-baseline">
              <span className="kicker">{t.when}</span>
              <span className="font-display text-2xl font-semibold">{t.what}</span>
              <span className="text-muted-foreground">{t.where}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
