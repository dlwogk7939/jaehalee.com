# Jaeha Lee — Portfolio

A responsive, accessible personal portfolio for software engineering applications. The site is intentionally dependency-free and uses semantic HTML, CSS, and lightweight JavaScript so it can be served directly by Cloudflare Pages or any static host.

## Local development

From the repository root:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

The site also works when `index.html` is opened directly, although a local server more closely matches production.

## Production build

No compile step is required. The repository root is the production artifact.

For Cloudflare Pages:

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `.`

## Structure

- `index.html` — semantic page structure and metadata
- `content.js` — normalized portfolio content
- `app.js` — data rendering, theme, navigation, motion, and project dialogs
- `style.css` — responsive design system and light/dark themes
- `assets/documents/` — downloadable resume
- `assets/projects/` — local project media

Professional content is derived from the current resume and LinkedIn export. Private export data is not rendered or referenced by the public site.
