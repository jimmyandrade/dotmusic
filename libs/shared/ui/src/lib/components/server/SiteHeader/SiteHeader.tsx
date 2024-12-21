import {
  Box,
  Card,
  Flex,
  Theme,
  type BoxProps as SiteHeaderProps,
} from '@radix-ui/themes';
import { Container } from '../Container';

export { SiteHeaderProps };

export const SiteHeader = ({
  asChild = true,
  className,
  children,
  itemScope = true,
  itemType = 'http://schema.org/WPHeader',
  position = 'fixed',
  role = 'banner',
  top = '-1px',
  width = '100%',
  ...props
}: SiteHeaderProps) => (
  <Theme asChild radius="none">
    <Box
      asChild={asChild}
      className={`z-10 ${className}`}
      position={position}
      top={top}
      width={width}
      {...props}
    >
      <Card
        asChild
        className="relative"
        size={{
          initial: '1',
          sm: '2',
          md: '3',
          lg: '4',
        }}
      >
        <header itemScope={itemScope} itemType={itemType} role={role}>
          <Container>
            <Flex justify="between" align="center">
              {children}
            </Flex>
          </Container>
        </header>
      </Card>
    </Box>
  </Theme>
);
