const fs = require("fs");
const baseUrl = "https://bootup-254.web.app";

const routes = [
  "/",
  "/app",
  "/new-app",
  "/testing",
  "/sequence",
  "/filters",
  "/threads",
];

const generateSitemap = () => {
  const date = new Date().toISOString().split("T")[0];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap, "utf8");
  console.log("✅ Sitemap generated!");
};

generateSitemap();
