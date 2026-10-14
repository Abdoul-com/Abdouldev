import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer, loadEnv } from 'vite';

const projectDirectory = process.cwd();
const outputDirectory = resolve(projectDirectory, 'dist');
const publicSiteUrl = loadEnv('production', projectDirectory, 'VITE_').VITE_SITE_URL?.trim();

function normalizePublicSiteUrl(value) {
  let url;

  try {
    url = new URL(value);
  } catch {
    throw new Error('VITE_SITE_URL doit être une URL publique HTTPS valide.');
  }

  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) {
    throw new Error(
      'VITE_SITE_URL doit être une URL publique HTTPS, sans identifiants, paramètres ni fragment.',
    );
  }

  return url.href.replace(/\/+$/, '');
}

function addPublicUrlToStructuredData(html, siteUrl) {
  return html.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    (script, json) => {
      const data = JSON.parse(json);
      const profileUrl = `${siteUrl}/`;

      if (data['@type'] === 'Person') {
        data['@id'] = `${profileUrl}#person`;
        data.url = profileUrl;
        data.image = `${profileUrl}images/profile.jpeg`;
      }

      if (data['@type'] === 'WebSite') {
        data['@id'] = `${profileUrl}#website`;
        data.url = profileUrl;
        data.publisher = { '@id': `${profileUrl}#person` };
      }

      return `<script type="application/ld+json">${JSON.stringify(data).replaceAll('<', '\\u003c')}</script>`;
    },
  );
}

async function generatePublicSeoFiles(siteUrl) {
  const robotsFile = resolve(outputDirectory, 'robots.txt');
  const sitemapUrl = `${siteUrl}/sitemap.xml`;
  const sitemapContents = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n  </url>\n</urlset>\n`;

  await Promise.all([
    writeFile(robotsFile, `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`, 'utf8'),
    writeFile(resolve(outputDirectory, 'sitemap.xml'), sitemapContents, 'utf8'),
  ]);
}

async function main() {
  const siteUrl = publicSiteUrl ? normalizePublicSiteUrl(publicSiteUrl) : undefined;
  const vite = await createServer({
    appType: 'custom',
    configFile: resolve(projectDirectory, 'vite.config.js'),
    mode: 'production',
    server: { middlewareMode: true },
  });

  try {
    const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
    const htmlFile = resolve(outputDirectory, 'index.html');
    let html = await readFile(htmlFile, 'utf8');
    const renderedApp = renderToString(React.createElement(App));

    if (!html.includes('<div id="root"></div>')) {
      throw new Error('Impossible de trouver le conteneur React à pré-rendre dans dist/index.html.');
    }

    html = html.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`);

    if (siteUrl) {
      const canonicalUrl = `${siteUrl}/`;
      const socialImageUrl = `${canonicalUrl}images/profile.jpeg`;
      const canonicalTags = [
        `<link rel="canonical" href="${canonicalUrl}" data-generated-seo="true" />`,
        `<meta property="og:url" content="${canonicalUrl}" data-generated-seo="true" />`,
        `<meta property="og:image" content="${socialImageUrl}" data-generated-seo="true" />`,
        '<meta property="og:image:type" content="image/jpeg" data-generated-seo="true" />',
        '<meta property="og:image:width" content="1024" data-generated-seo="true" />',
        '<meta property="og:image:height" content="1280" data-generated-seo="true" />',
        '<meta property="og:image:alt" content="Portrait d’Issotina Abdou Wadoudou" data-generated-seo="true" />',
        `<meta name="twitter:image" content="${socialImageUrl}" data-generated-seo="true" />`,
      ].join('\n    ');

      html = html.replace('</head>', `    ${canonicalTags}\n  </head>`);
      html = addPublicUrlToStructuredData(html, siteUrl);
    } else {
      console.info(
        'VITE_SITE_URL non défini : le contenu est pré-rendu, mais aucun canonical, sitemap ou URL publique ne sera inventé.',
      );
    }

    await writeFile(htmlFile, html, 'utf8');

    if (siteUrl) {
      await generatePublicSeoFiles(siteUrl);
    }
  } finally {
    await vite.close();
  }
}

main().catch((error) => {
  console.error('Échec du pré-rendu ou de la génération SEO du site.', error);
  process.exitCode = 1;
});
