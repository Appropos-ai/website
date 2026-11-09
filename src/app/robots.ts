import type { MetadataRoute } from "next";

// Required so `output: 'export'` emits out/robots.txt at build time.
export const dynamic = "force-static";

const BASE_URL = "https://appropos.ai";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
