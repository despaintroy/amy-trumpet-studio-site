const fs = require("fs");

const URLs = ["http://www.amysmusicstudio.troydespain.com"];
const DATE = new Date().toISOString();

const contents = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...URLs.map(
    (url) => `<url><loc>${url}</loc><lastmod>${DATE}</lastmod></url>`
  ),
  "</urlset>",
].join("\n");

fs.writeFileSync("../Sitemapx.xml", contents);
