import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/brand";

const routes = [
  "",
  "/about",
  "/services",
  "/home-automation",
  "/custom-electronics",
  "/energy-management",
  "/jetgrid-vision",
  "/projects",
  "/blog",
  "/contact",
  "/en",
  "/en/about",
  "/en/services",
  "/en/home-automation",
  "/en/custom-electronics",
  "/en/energy-management",
  "/en/jetgrid-vision",
  "/en/projects",
  "/en/blog",
  "/en/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
