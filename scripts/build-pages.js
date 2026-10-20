/* Generates work/<slug>.html (indexable stubs that open the case on the
 * homepage) and sitemap.xml from assets/js/projects.js.
 * Run after editing projects:  node scripts/build-pages.js */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const SITE = "https://mujtabaazhar.github.io";

global.window = {};
require(path.join(ROOT, "assets/js/projects.js"));
const projects = window.PROJECTS;

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const outDir = path.join(ROOT, "work");
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir);

for (const p of projects) {
  const target = `../#/work/${p.slug}`;
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.en.title)} · Mujtaba Azhar</title>
<meta name="description" content="${esc(p.en.tagline)}">
<link rel="canonical" href="${SITE}/work/${p.slug}">
<meta property="og:title" content="${esc(p.en.title)} · Mujtaba Azhar">
<meta property="og:description" content="${esc(p.en.tagline)}">
<meta property="og:image" content="${SITE}/assets/og.png">
<link rel="icon" href="../assets/brand/favicon-64.png" type="image/png" sizes="64x64">
<meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace(${JSON.stringify(target)} + "");</script>
<style>body{font:16px/1.6 system-ui,sans-serif;background:#07090d;color:#e9edf4;max-width:680px;margin:60px auto;padding:0 16px}a{color:#3cf0b4}small{color:#8f9aad}</style>
</head>
<body>
<p><a href="${target}">← Mujtaba Azhar · portfolio</a></p>
<h1>${esc(p.en.title)}</h1>
<p><strong>${esc(p.en.tagline)}</strong></p>
<h2>The problem</h2><p>${esc(p.en.problem)}</p>
<h2>What I built</h2><p>${esc(p.en.built)}</p>
<h2>The outcome</h2><p>${esc(p.en.outcome)}</p>
<p><small>${esc(p.stack.join(" · "))}</small></p>
<div dir="rtl" lang="ar"><h2>${esc(p.ar.title)}</h2><p>${esc(p.ar.tagline)}</p></div>
</body>
</html>
`;
  fs.writeFileSync(path.join(outDir, `${p.slug}.html`), html);
}

const today = new Date().toISOString().slice(0, 10);
const urls = [`${SITE}/`, ...projects.map((p) => `${SITE}/work/${p.slug}`)];
fs.writeFileSync(
  path.join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u, i) => `<url><loc>${u}</loc><lastmod>${today}</lastmod><priority>${i ? "0.7" : "1.0"}</priority></url>`).join("\n") +
    `\n</urlset>\n`
);
console.log(`wrote ${projects.length} work pages + sitemap (${urls.length} urls)`);
