This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Main page is situated here `src/app/[lang]/page.tsx`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts family .

## Localization

### Static content (home, contact, request-demo, etc...)

It uses uses next-intl and locaolizations files are in '/src/messages/'.
When adding a new localization file go to 'src/i18n/request.ts'

### Dynamic content (.MDX files)

It uses either "contentlayer" or "@next/mdx".
MDX content files are located in "src/content/[locale]" when using "contentlayer".
When using "@next/mdx", MDX files are in the router (ex: '/src/app/[lang]/(site)/manifesto/en.mdx' and '/src/app/[lang]/(site)/manifesto/ja.mdx')

### Files to edit/check when adding a new language

- src/i18n/routing.ts
- src/components/common/local-switcher/index.tsx

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
