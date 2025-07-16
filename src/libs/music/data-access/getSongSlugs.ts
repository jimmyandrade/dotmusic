import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';
import { slugify } from '@/libs/shared/utils/slugify';

export const getSongSlugs = (): string[] => {
  const dir = join(cwd(), 'content/songs');
  const files = readdirSync(dir).filter((file) => file.endsWith('.json'));
  return files.map((file) => {
    const fileBuffer = readFileSync(join(dir, file));
    const fileContents = fileBuffer.toString();
    const { title } = JSON.parse(fileContents);
    return slugify(title);
  });
};
