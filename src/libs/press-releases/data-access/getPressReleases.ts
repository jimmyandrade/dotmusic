import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';
import type { PressRelease } from '../model/PressRelease';

export function getPressReleases(): PressRelease[] {
  const dir = path.join(process.cwd(), 'content/press-releases');
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));

  return files.map((file) => {
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(raw);
    const title = data.title || file.replace(/\.(md|mdx)$/, '');
    const slug = title
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '') // remove diacritics (accents)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return { slug, title };
  });
}
