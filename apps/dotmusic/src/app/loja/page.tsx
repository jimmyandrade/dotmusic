import { PageHeader, PageHeading } from '@jimmyandrade/ui/server';
import { Card, Grid, Heading, Inset } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { fetchReservaInkProducts } from '../../libs/products/data-access';

export default async function StorePage() {
  const products = await fetchReservaInkProducts();

  return (
    <article id={StorePage.name}>
      <PageHeader>
        <PageHeading>Loja</PageHeading>
      </PageHeader>
      <Grid
        asChild
        columns={{ initial: '1', xs: '2', md: '2', lg: '4' }}
        gap="8"
        mb="8"
        mt="4"
        px="8"
      >
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Card asChild variant="ghost">
                <Link
                  href={product.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={product.title}
                >
                  <Inset clip="padding-box" pb="current" side="top">
                    <Image
                      alt={product.description}
                      className="block object-cover w-full"
                      height={820}
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
}