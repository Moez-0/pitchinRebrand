export const siteConfig = {
  name: "Pitchin",
  title: "Pitchin | Build Fast, Scale Smart",
  description:
    "Software development and digital marketing agency helping startups and enterprises launch faster and scale smarter.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pitchin.mobi",
  locale: "en_US",
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}