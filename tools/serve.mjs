/* Plain static server for _site, used only for verification.
 * Deliberately NOT the Eleventy dev server: that injects a live-reload
 * client, which would pollute the console-error and no-JavaScript checks. */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const ROOT = '_site';
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.woff2': 'font/woff2',
  '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.xml': 'application/xml', '.txt': 'text/plain',
};

createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  try {
    let file = join(ROOT, p);
    const s = await stat(file).catch(() => null);
    if (!s || s.isDirectory()) file = join(ROOT, p, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    const body = await readFile(join(ROOT, '404.html')).catch(() => 'Not found');
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end(body);
  }
}).listen(4180, () => console.log('serving _site on http://localhost:4180'));
