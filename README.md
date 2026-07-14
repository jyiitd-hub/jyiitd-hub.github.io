# Jyoti Shakya — researcher portfolio

Static site. No build step.

## Publish on GitHub Pages

1. Create a new **public** repo on GitHub named `jyoti-shakya.github.io` (replace with your username — the repo name must match `<username>.github.io` to get the clean root URL).
2. Upload `index.html`, `style.css`, `script.js`, and the `assets/` folder to the repo root.
   - Browser route: **Add file → Upload files**, drag everything in, then **Commit changes**.
   - Terminal route:
     ```bash
     git init
     git add .
     git commit -m "Portfolio site"
     git branch -M main
     git remote add origin https://github.com/<username>/<username>.github.io.git
     git push -u origin main
     ```
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. Wait ~1 minute. The site goes live at `https://<username>.github.io`.

If you use any other repo name (e.g. `portfolio`), the URL becomes `https://<username>.github.io/portfolio/` — everything still works, the links are all relative.

## Editing

- **Add a publication:** copy any `<li>` inside `<ul class="pubs">` in `index.html`. The `data-t` attribute controls which filters it appears under: `lead`, `device`, `synth`, `spec` (space-separated, multiple allowed).
- **Update stats:** the `<dl class="stats">` block in the header.
- **Colours:** the `:root` block at the top of `style.css`. `--moly` is molybdenum blue, `--sulfur` is the yellow accent.
- **Photo:** replace `assets/jyoti.png`, keep the filename.
