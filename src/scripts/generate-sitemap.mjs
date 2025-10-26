import { writeFileSync } from 'fs';
import { join } from 'path';

const pages = [
    '/',
    '/privacy-policy',
    '/terms-of-use',
    '/assessment',
    '/contacts',
    '/services/admission-support',
    '/services/visa-support',
    '/services/test-preparations',
    '/services/course-guidance',
    '/services/post-departure',
    '/services/future-pathways',
    '/study-abroad/newzealand'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>https://agigateway.co.nz${page === '/' ? '' : page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`).join('')}
</urlset>`;

writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemap.trim());
console.log('✅ sitemap.xml generated');