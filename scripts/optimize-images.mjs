import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMAGE_DIR = 'public/images';
const REWRITE_ROOTS = ['src'];
const MAX_WIDTH = 1800;
const QUALITY = 88;
const SOURCE_EXT = /\.(jpe?g|png)$/i;
const TEXT_EXT = /\.(md|astro|html|ts|js|css)$/i;

function walk(dir, predicate, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, predicate, out);
    else if (predicate(full)) out.push(full);
  }
  return out;
}

const sources = walk(IMAGE_DIR, (file) => SOURCE_EXT.test(file));
if (sources.length === 0) {
  console.log('No JPG/PNG files in public/images — nothing to convert.');
  process.exit(0);
}

const replacements = [];

for (const input of sources) {
  const output = input.replace(SOURCE_EXT, '.webp');
  const img = sharp(input).rotate();
  const meta = await img.metadata();
  const info = await img
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(output);

  const beforeKb = (fs.statSync(input).size / 1024).toFixed(0);
  const afterKb = (info.size / 1024).toFixed(0);
  console.log(
    `${path.relative('.', input)}  ${meta.width}×${meta.height}  ${beforeKb}KB  →  ${info.width}×${info.height}  ${afterKb}KB`
  );

  replacements.push({
    from: path.basename(input),
    to: path.basename(output),
  });
  fs.unlinkSync(input);
}

const textFiles = REWRITE_ROOTS.flatMap((root) => walk(root, (file) => TEXT_EXT.test(file)));
let rewritten = 0;

for (const file of textFiles) {
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const { from, to } of replacements) {
    next = next.split(from).join(to);
  }
  if (next !== text) {
    fs.writeFileSync(file, next);
    rewritten += 1;
    console.log(`updated ${path.relative('.', file)}`);
  }
}

console.log(`Converted ${sources.length} image(s), updated ${rewritten} file(s).`);
