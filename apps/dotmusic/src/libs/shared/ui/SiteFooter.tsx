import { Box, Flex, Separator, Strong, Text } from '@radix-ui/themes';
import { Container } from './Container';
import { SocialMediaLinks } from '../../social-media-links';

export const SiteFooter = () => (
  <Box asChild>
    <footer itemScope itemType="https://schema.org/WPFooter" role="contentinfo">
      <Separator size="4" />
      <Container>
        <Flex
          direction={{
            initial: 'column',
            sm: 'row',
          }}
          gap="4"
          justify="between"
          py="4"
        >
          <Flex as="div" direction="column" gapY={{ initial: '4', sm: '2' }}>
            <Text asChild size="1">
              <small>
                <time dateTime="2008">2008</time>&ndash;
                <time dateTime="2014">2024</time>&nbsp;
                <Strong>Jimmy&nbsp;Andrade</Strong>
                <br className="sm:hidden" /> Produção Fonográfica, Musical
                e&nbsp;Marketing.
              </small>
            </Text>
            <Text asChild size="1">
              <small>
                Todas as imagens, músicas e material audiovisual relacionados a{' '}
                <Strong>Jimmy&nbsp;Andrade</Strong> são protegidos pela Lei de
                Direitos Autorais.
              </small>
            </Text>
          </Flex>
          <Flex asChild>
            <SocialMediaLinks.Root />
          </Flex>
        </Flex>
      </Container>
    </footer>
  </Box>
);
