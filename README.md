# Omkar Warghade — Portfolio

A single-page portfolio styled after google.com: Google Sans/Roboto type, the
four Google brand colors, a functioning Material-style search bar that jumps
to sections or skills, and an "I'm Feeling Lucky" button that highlights a
random accomplishment.

## Files
- `index.html` — page structure and content (pulled from your resume)
- `style.css` — all styling (Google-style tokens live at the top as CSS variables)
- `script.js` — search/autosuggest and the Lucky button
- `resume.pdf` — **not included**. Add your resume PDF to this folder with
  this exact filename so the "Résumé" button in the top nav works.

## Preview locally
No build step needed. Just open `index.html` in a browser, or run a local server:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a new GitHub repo, e.g. `omkrw.github.io` (for a root user site) or
   any name (for a project site under `/reponame/`).
2. Push these files to the repo root:
   ```
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from a branch → `main` /
   `root`** → Save.
4. Your site goes live at `https://<your-username>.github.io/` (root repo)
   or `https://<your-username>.github.io/<repo-name>/` (project repo) within
   a minute or two.

## Customizing
- **Colors/fonts**: edit the `:root` variables at the top of `style.css`.
- **Content**: all copy lives directly in `index.html`, organized by section
  (`#about`, `#experience`, `#skills`, `#projects`, `#contact`).
- **Search index**: to add more searchable terms (e.g. new projects), extend
  the `index` array at the top of `script.js`.
