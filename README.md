# Weiner Pest Services

Marketing site for Weiner Pest Services, Inc. — Vue 3 + Vite + Tailwind CSS v4.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → build/
npm run preview  # serve the production build
```

## Where things live

- `src/data/site.js` — phone numbers, email, license, EmailJS keys
- `src/data/pests.js` — every pest page (copy, image, summary); adding an entry adds the route, nav item, and card
- `src/data/services.js` — residential / commercial copy
- `src/styles/main.css` — Tailwind theme tokens (brand palette) and shared component classes
- `public/_redirects` — SPA fallback for Netlify
