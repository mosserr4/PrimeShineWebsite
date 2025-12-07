# Prime & Shine — Eleventy migration (branch: elevent-migration)

This branch contains a minimal Eleventy static site scaffold and a homepage built to match the assets and layout you provided.

Image mapping (placeholders already prepared):
- src/assets/images/logo.png        -> Image 4 (logo)
- src/assets/images/jeep.jpg        -> Image 2 (Jeep - exterior detail)
- src/assets/images/interior.jpg    -> Image 5 (striped interior - interior detail)
- src/assets/images/portfolio1.jpg  -> Image 1 (silhouette)
- src/assets/images/portfolio2.jpg  -> Image 3 (black Lexus)

Quick start (once files are pushed):
1. npm install
2. npm run start
3. Open http://localhost:8080 (or use Codespaces forwarded port)

Contact form:
- The form in the site is set to a placeholder Formspree endpoint. If you want submissions delivered directly to ian.moser7@icloud.com via Formspree, create a Formspree form and replace the action URL in src/_includes/contact-form.njk.
