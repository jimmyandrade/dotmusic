import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import Link from 'next/link';
import type { FC } from 'react';

const ReleasesPage: FC = () => {
  const dir = path.join(process.cwd(), 'content/press-releases');
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));

  const releases = files.map((file) => {
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(raw);
    const title = data.title || file.replace(/\.(md|mdx)$/, '');
    // slugify title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/gi, '-')
      .replace(/(^-|-$)/g, '');
    return { slug, title };
  });

  return (
    <main class="p-8">
      <h1 class="text-2xl font-bold mb-4">Releases</h1>
      <ul>
        {releases.map(({ slug, title }) => (
          <li key={slug} class="mb-2">
            <Link
              href={`/midia/releases/${slug}`}
              class="text-blue-600 hover:underline"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ReleasesPage;
