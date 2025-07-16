import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { slugify } from '@/libs/shared/utils/slugify';

export interface PressReleaseContent {
  data: {
    title?: string;
  };
  content: string;
  slug: string;
}

export function getPressReleaseContentBySlug(
  slug: string,
): PressReleaseContent | null {
  const dir = path.join(process.cwd(), 'content/press-releases');
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));

  for (const file of files) {
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const title = data.title || file.replace(/\.(md|mdx)$/, '');
    const generatedSlug = slugify(title);
    if (generatedSlug === slug) {
      return { data, content, slug };
    }
  }
  return null;
}
