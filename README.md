# Omkar Warghade — Portfolio

A Google-inspired personal portfolio site (Roboto/Google Sans-style type, Material color palette, search-bar hero) built with plain HTML/CSS/JS — no build step required.

## Files
- `index.html` — page content
- `styles.css` — all styling
- `script.js` — nav toggle + hero typing effect
- `assets/omkar-photo.jpg` — your profile photo

## Host it on GitHub Pages
1. Create a new GitHub repo, e.g. `omkrw.github.io` (for a root-level user site) or any name like `portfolio` (for a project site).
2. Upload all files in this folder to the repo root (keep the `assets/` folder structure intact).
3. Go to **Settings → Pages** in the repo.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. GitHub will publish at:
   - `https://<your-username>.github.io/` if the repo is named `<your-username>.github.io`
   - `https://<your-username>.github.io/<repo-name>/` otherwise
6. First deploy can take 1–2 minutes.

## Notes on external logos
Company and certification logos (Citi, Mastercard, Eshopbox, Wissen, TCS, Anthropic, Edureka, Microsoft, LinkedIn, JetBrains) and your college logo are pulled live from public sources (Clearbit's logo API and the college's own site) via `<img>` tags — nothing is stored locally. This keeps the repo small, but it does mean:
- They need an internet connection to display (fine on GitHub Pages).
- If a logo fails to load, the card automatically falls back to a colored letter badge (see the `onerror` handler on each `<img>`), so the layout never breaks.
- If you'd rather self-host the logos (for guaranteed long-term stability), download each logo as a small PNG/SVG into `assets/logos/` and swap the `src` in `index.html`.

## Customizing
- Colors, fonts, and spacing all live in `:root` and the section rules at the top of `styles.css`.
- The rotating hero phrases are in the `phrases` array at the top of `script.js`.
