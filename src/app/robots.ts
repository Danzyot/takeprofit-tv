import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Open to everything, with a pointer to the sitemap.
 *
 * There is nothing here to hide from a crawler — the whole site is four
 * pages of public copy — and once a real domain is attached, being
 * findable is the point.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
