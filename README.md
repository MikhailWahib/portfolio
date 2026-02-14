## Portfolio Website (Astro)

Static portfolio built with Astro, TypeScript, and Tailwind CSS.

## Run locally

```bash
pnpm install
pnpm dev
```

App runs at `http://localhost:4321`.

## Scripts

- `pnpm dev`: start local dev server
- `pnpm build`: create production build in `dist/`
- `pnpm preview`: preview production build locally
- `pnpm check`: run Astro type/content checks

## Environment

Set your resume URL in `.env`:

```bash
PUBLIC_RESUME_URL="https://example.com/your-resume.pdf"
```

The `/resume` page redirects to this URL.
