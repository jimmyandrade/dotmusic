import { Card, Grid, Heading, Inset } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { fetchReservaInkProducts } from '../../libs/products/data-access';

export const metadata = {
  title: 'Loja',
  alternates: {
    canonical: '/loja',
  },
};

const StorePage: FC = async () => {
  const products = await fetchReservaInkProducts();

  return (
    <article id={StorePage.name}>
      <PageHeader>
        <PageHeading>Loja</PageHeading>
        <Heading as="h3" mb="4" mt="8">
          Camisetas
        </Heading>
      </PageHeader>

      <Grid
        asChild
        columns={{ initial: '1', xs: '2', md: '2', lg: '4' }}
        gap="4"
        mb="8"
        mt="4"
        px="8"
      >
        <ul>
          {products.map((product, index) => (
            <li key={product.id}>
              <Card asChild>
                <Link
                  href={product.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={product.title}
                >
                  <Inset clip="padding-box" pb="current" side="top">
                    <Image
                      alt={product.description}
                      class="block object-cover w-full"
                      height={820}
                      priority={index < 4}
                      src={product.image_link}
                      width={800}
                    />
                  </Inset>
                  <Heading as="h3" align="center" size="4">
                    {product.title}
                  </Heading>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </Grid>

      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
    </article>
  );
};

export default StorePage;
