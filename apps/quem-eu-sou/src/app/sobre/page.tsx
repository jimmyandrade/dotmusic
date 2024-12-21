import { Container, Em, Heading, Strong } from '@radix-ui/themes';
import { BrandText } from '../../components/BrandText';
import { PageHeader, PageHeading, ProseText } from '@jimmyandrade/ui/server';

export default function AboutPage() {
  return (
    <article id={AboutPage.name}>
      <PageHeader>
        <PageHeading>O projeto</PageHeading>
      </PageHeader>
      <Container>
        <ProseText as="p">
          Idealizado por <Strong>Jimmy Andrade</Strong>, é um projeto musical e
          artístico que celebra a autenticidade, a pluralidade e o
          autoconhecimento através da música. Nascido da necessidade de
          expressar questões fundamentais sobre identidade e existência, o
          projeto se materializa em diferentes formatos que se complementam e
          ampliam seu alcance. do que um projeto musical, <BrandText /> é uma
          plataforma de diálogo, conscientização e celebração da diversidade.
          Através da música e da arte, buscamos criar espaços de acolhimento,
          representatividade e transformação, onde cada pessoa possa se
          reconhecer e se sentir verdadeiramente livre para ser quem é.
        </ProseText>
        <Heading as="h3">
          O <Em lang="en">single</Em>
        </Heading>
        <ProseText as="p">
          O <Em lang="en">single</Em> <cite>Quem Eu Sou</cite> é a música que dá
          nome ao projeto e foi lançada em{' '}
          <time dateTime="2024-06-28">28 de junho de 2024</time>. A canção
          explora temas como amor próprio, resistência e diversidade, propondo
          uma reflexão profunda sobre a importância de mantermos nossa
          autenticidade em um mundo cada vez mais desafiador.
        </ProseText>
        <Heading as="h3">O show</Heading>
        <ProseText as="p">
          Com duração de uma hora, &ldquo;QUEM EU SOU? - o show&rdquo; é uma
          experiência musical imersiva que vai além da música. Durante a
          apresentação, Jimmy Andrade, artista não-binário nascido no Vale do
          Jequitinhonha, compartilha histórias que inspiraram as letras das
          canções, criando uma conexão única com o público. O espetáculo conta
          com uma banda completa e oferece uma experiência inclusiva, com a
          presença de intérpretes de Libras, garantindo acessibilidade para a
          comunidade surda. Entre uma canção e outra, o público é convidado a
          refletir sobre temas fundamentais para a população LGBTQIAPN+, como
          auto amor, acolhimento, orgulho e a celebração da existência.
        </ProseText>
      </Container>
    </article>
  );
}
