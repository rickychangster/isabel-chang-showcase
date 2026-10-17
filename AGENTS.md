<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project rules (for every AI coding tool)

- Stack: TanStack Start + React 19 + Tailwind v4; no other router — keeps SSR/SEO working on Lovable hosting.
- All site text and links live in `src/content/site.ts`; pages only render it — content edits never touch layout code.
- One route file per page in `src/routes/` (index, projects, research, resume), each with its own `head()` metadata — every page needs unique share previews.
- Shared header/footer/buttons live in `src/components/SiteLayout.tsx` and are mounted in `src/routes/__root.tsx` — one place for site chrome.
- Colors, fonts and component styles are tokens/`@utility` classes in `src/styles.css`; never hardcode colors in components — keeps the design consistent across tools.
- Never edit `src/routeTree.gen.ts`; it is generated.
- Work on a feature branch and merge into the synced branch; keep it building.
