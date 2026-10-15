import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { loadEnv } from 'vite';

const root = process.cwd();
const output = resolve(root, 'dist');
const html = await readFile(resolve(output, 'index.html'), 'utf8');
const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
const description = html.match(/name="description"\s+content="([^"]+)"/)?.[1];
const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map(([, contents]) => JSON.parse(contents));
const configuredSiteUrl = loadEnv('production', root, 'VITE_').VITE_SITE_URL?.trim();
const siteUrl = configuredSiteUrl?.replace(/\/+$/, '');

assert.equal(title, 'Issotina Abdou Wadoudou | Portfolio Développeur Web');
assert.match(description ?? '', /informatique de gestion/);
assert.match(description ?? '', /Cotonou, Bénin/);
assert.match(html, /<html lang="fr">/);
assert.match(html, /property="og:title"/);
assert.match(html, /property="og:description"/);
assert.match(html, /property="og:type" content="website"/);
assert.match(html, /name="twitter:card"/);
assert.match(html, /<main id="contenu">/);
assert.match(html, /id="hero-title"/);
assert.match(html, /id="projets"/);
assert.match(html, /id="faq"/);
assert.match(html, /Fonctionnalités décrites/);
assert.match(html, /Inscriptions/);
assert.match(html, /Bulletins/);
assert.match(html, /id="contact-name"/);
assert.match(html, /Préparer sur WhatsApp/);
assert.match(html, /Préparer un e-mail/);
assert.match(html, /issotinaabdoulwadoud@gmail\.com/);
assert.match(html, /alt="Portrait d’Issotina Abdou Wadoudou"/);
assert.ok(jsonLd.some((schema) => schema['@type'] === 'Person'));
assert.ok(jsonLd.some((schema) => schema['@type'] === 'WebSite'));
assert.match(await readFile(resolve(output, 'robots.txt'), 'utf8'), /User-agent: \*\s+Allow: \//);
assert.match(await readFile(resolve(output, '404.html'), 'utf8'), /noindex, follow/);
await readFile(resolve(output, 'images/profile.jpeg'));

if (siteUrl) {
  const canonicalUrl = `${siteUrl.replace(/\/+$/, '')}/`;
  const sitemap = await readFile(resolve(output, 'sitemap.xml'), 'utf8');

  assert.ok(html.includes(`<link rel="canonical" href="${canonicalUrl}"`));
  assert.ok(sitemap.includes(`<loc>${canonicalUrl}</loc>`));
  assert.ok((await readFile(resolve(output, 'robots.txt'), 'utf8')).includes(`${siteUrl}/sitemap.xml`));
} else {
  assert.doesNotMatch(html, /rel="canonical"/);
  await assert.rejects(readFile(resolve(output, 'sitemap.xml')), { code: 'ENOENT' });
}

console.log('SEO build checks passed.');
