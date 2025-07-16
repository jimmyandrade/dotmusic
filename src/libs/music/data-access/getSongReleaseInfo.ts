import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';

export interface SongReleaseInfo {
  title: string;
  releaseDateFormatted?: string;
  releaseDateRaw?: string;
}

export function getSongReleaseInfo(
  slug: string,
  locale: string = 'pt-BR',
): SongReleaseInfo {
  const filePath = join(cwd(), 'content/songs', `${slug}.json`);
  let title = slug;
  let releaseDateFormatted: string | undefined;
  let releaseDateRaw: string | undefined;
  if (existsSync(filePath)) {
    const fileBuffer = readFileSync(filePath);
    const fileContents = fileBuffer.toString();
    const data = JSON.parse(fileContents);
    title = data.title ?? slug;
    if (data.releaseDate) {
      releaseDateRaw = data.releaseDate;
      const dateObj = new Date(data.releaseDate);
      if (!Number.isNaN(dateObj.getTime())) {
        releaseDateFormatted = new Intl.DateTimeFormat(locale, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(dateObj);
      }
    }
  }
  return { title, releaseDateFormatted, releaseDateRaw };
}
