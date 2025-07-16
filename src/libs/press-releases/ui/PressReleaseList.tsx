import { Card, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import type { PressRelease } from '../model/PressRelease';

interface PressReleaseListProps {
  releases: PressRelease[];
}

export function PressReleaseList({ releases }: PressReleaseListProps) {
  return (
    <ul>
      {releases.map(({ slug, title }) => (
        <li key={slug}>
          <Card asChild>
            <Link href={`/midia/releases/${slug}`}>
              <Flex gap="1">
                <i lang="en">{title}</i>
              </Flex>
            </Link>
          </Card>
        </li>
      ))}
    </ul>
  );
}
