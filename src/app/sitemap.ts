import type { MetadataRoute } from "next";

// Required so `output: 'export'` emits out/sitemap.xml at build time.
export const dynamic = "force-static";

const BASE_URL = "https://appropos.ai";

// Every page on the site. Trailing slashes match `trailingSlash: true` in next.config.ts.
// Add new pages here.
const PATHS = ["/", "/book/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({ url: `${BASE_URL}${path}` }));
}
