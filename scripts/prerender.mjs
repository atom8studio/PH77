import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const dist = resolve('dist');
const template = await readFile(resolve(dist, 'index.html'), 'utf8');
const pages = {
  robin: ['Robin | Your Admin, Handled | Atom8 Studio', 'Robin turns messages into completed work, from appointments and reminders to expenses, customer requests and follow-ups.'],
};

for (const [route, [title, description]] of Object.entries(pages)) {
  const canonical = `https://atom8studio.com/${route}`;
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`);
  const output = resolve(dist, route, 'index.html');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}
