# Personal Portfolio — Ambitious High School AI Founder

## Goal
A personal brand site to use in applications (jobs, programs, investors) that presents you as a high school student building an AI startup, with links to your sites and your research project.

## Visual direction: intellectual, warm, bold
- Warm paper background (cream), deep ink text, one bold burnt-orange accent for buttons and highlights.
- Headings in an expressive serif (Fraunces), body in a clean sans (Instrument Sans), small mono labels for dates/tags.
- Large confident headlines, strong action buttons ("View my startup", "Read the research", "Get in touch").

## Pages
- **Home (/)** — big headline intro, one-line mission, 3 highlight cards (Startup, Research, Achievements), buttons to the other pages.
- **Projects (/projects)** — cards for each site/startup: name, one-liner, role, stack, link button.
- **Research (/research)** — title, question, method, findings, links to paper/code/slides.
- **Resume & Contact (/resume)** — timeline of education, experience and awards, resume PDF download, email and social links (GitHub, LinkedIn, X).
- Shared header nav and footer on every page; each page gets its own title/description for link previews.

## Content
You haven't shared your details yet, so I'll use clearly marked placeholder text and links. All content lives in one easy-to-edit file so you (or any AI tool) can swap in your real name, bio, projects and research.

## Working with GitHub and multiple AI tools
- Connect GitHub yourself in Project settings, Git — it creates a repo that stays in two-way sync.
- I'll add an `AGENTS.md` with clear rules (where content lives, design tokens, page structure, don't edit generated files) so Cursor, Claude Code, Copilot, etc. follow the same conventions.
- Tip: when editing outside Lovable, work on a branch and merge to main to avoid conflicts.

## Technical details
- Routes: `index.tsx`, `projects.tsx`, `research.tsx`, `resume.tsx`; layout in `__root.tsx` with Header/Footer.
- Content in `src/content/site.ts` (typed data); resume at `public/resume.pdf` placeholder link.
- Tokens in `src/styles.css` (oklch), fonts via `<link>` in root head.
- Update `AGENTS.md` with structure and conventions.
