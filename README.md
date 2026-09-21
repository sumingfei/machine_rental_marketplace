# MachineryShare

Peer-to-peer machinery and equipment rental marketplace prototype, built with Next.js, React, TypeScript, Tailwind CSS, Vinext, and Cloudflare Workers.

## Requirements

- Node.js 22.13 or newer
- npm
- A Cloudflare account for deployment

## Local development

```bash
npm ci
npm run dev
```

The development server runs on `http://localhost:5173` by default.

## Production build

```bash
npm run build
```

Vinext produces a Cloudflare Worker at `dist/server/index.js` and browser assets in `dist/client`.

## Cloudflare deployment

Authenticate Wrangler once:

```bash
npx wrangler login
```

Validate the complete upload without publishing:

```bash
npm run cf:check
```

Preview the production Worker locally:

```bash
npm run cf:preview
```

Deploy to Cloudflare Workers:

```bash
npm run cf:deploy
```

The deployment uses [`wrangler.jsonc`](./wrangler.jsonc) as its source of truth. It uploads the server-rendered Vinext Worker and the static client assets together. Static assets are matched before requests fall through to Vinext, ensuring generated CSS and JavaScript are served with their correct content types. `nodejs_compat` is enabled because the generated server bundle uses Node-compatible runtime APIs.

### Cloudflare dashboard deployment

For Git-connected Workers Builds, connect this repository and use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy --config wrangler.jsonc`
- Root directory: `/`
- Node.js version: `22`

No runtime environment variables or storage bindings are currently required. If D1, R2, or secrets are added later, declare their bindings in `wrangler.jsonc` and regenerate types with `npm run cf:types`.

## Useful commands

- `npm run dev` — local development with hot reload
- `npm run build` — production Vinext build
- `npm run start` — preview the generated build using its generated Wrangler configuration
- `npm run cf:preview` — build and preview with the committed Cloudflare configuration
- `npm run cf:check` — build and validate the Cloudflare upload
- `npm run cf:deploy` — build and deploy to Cloudflare Workers
- `npm run lint` — lint the source tree

## Project structure

- `app/` — application routes, metadata, and global styles
- `components/` — marketplace UI and reusable components
- `lib/` — mock marketplace data and TypeScript domain models
- `public/` — static assets and favicon
- `wrangler.jsonc` — Cloudflare Worker and asset configuration
- `.openai/hosting.json` — existing Sites deployment identity; unrelated to direct Cloudflare deployment
