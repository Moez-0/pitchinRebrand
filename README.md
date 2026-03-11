This is a Next.js App Router project for the Pitchin website.

## SEO & Indexing Setup

Set these environment variables in production:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
GOOGLE_SITE_VERIFICATION=your-google-search-console-token
```

What is already implemented in this project:

- Dynamic `robots.txt` at `/robots.txt`
- Dynamic sitemap at `/sitemap.xml` including blog, services, and case studies
- Canonical URLs on all main pages
- Open Graph/Twitter metadata and organization structured data

After deployment, in Google Search Console:

1. Verify the correct domain property.
2. Submit `https://your-domain.com/sitemap.xml`.
3. Use URL Inspection and request indexing for the home page and key service pages.
4. Ensure there are no `noindex` warnings under Indexing reports.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
