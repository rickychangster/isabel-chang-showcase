// Single source of truth for all site content. Replace placeholders marked [TODO].
export const site = {
  name: "Isabel Chang",
  domain: "https://isabelchang.com",
  tagline: "High school student. AI founder. Researcher.",
  mission:
    "I build AI tools that make hard problems feel approachable — and I study why they work. [TODO: your one-line mission]",
  email: "hello@isabelchang.com",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
  ],
  resumeUrl: "/resume.pdf",
};

export const highlights = [
  { kicker: "Startup", title: "[TODO] Startup name", body: "Founder building an AI product for [audience].", to: "/projects" as const },
  { kicker: "Research", title: "[TODO] Research title", body: "Independent study on [topic] with [mentor/lab].", to: "/research" as const },
  { kicker: "Recognition", title: "Awards & programs", body: "[TODO] Competitions, fellowships and press.", to: "/resume" as const },
];

export const projects = [
  { name: "[TODO] Startup", oneLiner: "AI assistant that helps [who] do [what].", role: "Founder & CEO", stack: ["Next-gen LLMs", "TypeScript", "Python"], href: "https://example.com", year: "2026" },
  { name: "[TODO] Side project", oneLiner: "A tool or site you built and shipped.", role: "Builder", stack: ["React", "Design"], href: "https://example.com", year: "2025" },
  { name: "[TODO] Community", oneLiner: "Club, hackathon or initiative you lead.", role: "Organizer", stack: ["Leadership"], href: "https://example.com", year: "2025" },
];

export const research = {
  title: "[TODO] Research project title",
  question: "What question are you trying to answer, and why does it matter?",
  method: "How you approached it: data, models, experiments, mentors.",
  findings: [
    "Key finding one, stated plainly.",
    "Key finding two, with a number if you have one.",
    "What it means and what comes next.",
  ],
  links: [
    { label: "Read the paper", href: "https://example.com" },
    { label: "View the code", href: "https://github.com/" },
    { label: "See the slides", href: "https://example.com" },
  ],
};

export const timeline = [
  { when: "2026 — now", what: "Founder, [TODO] Startup", where: "Building with early users" },
  { when: "2025 — now", what: "Independent researcher", where: "[TODO] Lab / mentor" },
  { when: "2023 — 2027", what: "Student", where: "[TODO] High School" },
  { when: "2025", what: "[TODO] Award or competition", where: "Placement / recognition" },
];
