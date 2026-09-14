# SNEPPX Website - Organization Site

Static marketing site for the SneppX org: product index, roadmap, sponsors
and contact.

> **Live:** https://sneppx.github.io/sneppx-website/ (GitHub Pages, published from `main`).

## Layout
- `index.html` - landing page (product grid, sponsor CTA, contact)
- `donate.html` - checkout / sponsor tiers (Lemon Squeezy buttons or GitHub
  Sponsors fallback)
- `assets/style.css` - dark-theme stylesheet

## Running locally
```
cd sneppx-website
python -m http.server 8080
```
Open http://localhost:8080.

## Lemon Squeezy setup
1. Sign up at https://lemonsqueezy.com and create a store.
2. Create a product / variant for each tier (coffee, supporter, license).
3. Copy each product's "Buy button" ID (the long id string in the
   `lemonsqueezy.com/checkout/buy/{id}` URL).
4. In `donate.html`, fill in the CONFIG object:
   ```js
   const CONFIG = {
     store: "sneppx",                               // your store slug
     products: { coffee: "abc123", supporter: "def456", license: "ghi789" }
   };
   ```
5. Commit + push. Buttons will redirect to Lemon Squeezy checkout instead of
   GitHub Sponsors.

Until configured, buttons fall back to the GitHub Sponsors page
(https://github.com/sponsors/ammar49-cyber).

## Roadmap
- [x] deployment (GitHub Pages)
- [x] product grid (alg/shield/forge/dist/edge/academy/audits)
- [x] sponsor button + newsletter
- [x] donate / checkout page (Lemon Squeezy)

Part of the SneppX ecosystem.