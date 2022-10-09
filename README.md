# Quikpost - A simple CMS for simple posts

An example SaaS app — and marketing site — made with SvelteKit.

## Development

```bash
npm install
```

### Set up the development database

Change the name of `.env.example` to `.env`, and run the following command. This will create a local database you can use in development.

```bash
npx prisma db push
```

Then run the development server.

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy the app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
