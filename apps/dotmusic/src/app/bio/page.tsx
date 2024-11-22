import { Container, Heading } from '@radix-ui/themes';

export default function BioPage() {
  return (
    <article>
      <Container>
        <Heading as="h2">Biografia</Heading>
        <p>
          <strong>Jimmy Andrade</strong> é uma pessoa cantora, compositora e
          produtora musical. Com nascimento em{' '}
          <time dateTime="1989-05-27">27 de maio de 1989</time> em Minas Novs,
          uma cidade localizada na região do Vale do Jequitinhonha, em Minas
          Gerais, conhecida por sua riqueza cultural.
        </p>
      </Container>
    </article>
  );
}
