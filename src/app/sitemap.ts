import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** Two pages. Listing them by hand is honest at this size. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/disclosures`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
