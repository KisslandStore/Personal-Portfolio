# Deploying to Cloudflare Pages

This portfolio is a Vite + React static site and is ready for Cloudflare Pages.

## Cloudflare Pages Settings

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: use the default, or set `NODE_VERSION` to `20` or newer if Cloudflare asks.

No environment variables are required.

## Deploy From GitHub

1. Push this project to a GitHub repository.
2. Open Cloudflare Dashboard and go to **Workers & Pages**.
3. Choose **Create application**.
4. Select **Pages** and connect your GitHub repository.
5. Use the settings above:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Click **Save and Deploy**.

## SPA Refresh Support

The file `public/_redirects` is included so Cloudflare serves `index.html` for app routes:

```txt
/* /index.html 200
```

This prevents refresh/back-button issues if routes are added later.

## Before Launch

Replace the placeholder domain in `index.html`:

```html
https://your-domain.com/
```

Use your final portfolio domain so canonical, Open Graph, Twitter, and JSON-LD URLs are correct.
