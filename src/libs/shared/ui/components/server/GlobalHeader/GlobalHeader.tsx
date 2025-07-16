import {
  Box,
  Card,
  Flex,
  type BoxProps as GlobalHeaderProps,
  Theme,
} from '@radix-ui/themes';
import classnames from 'classnames';
import { globalHeaderHeightInPixels } from '../../../constants';
import { Container } from '../Container';

export type { GlobalHeaderProps };

export const GlobalHeader = ({
  asChild = true,
  className = '',
  children,
  height = globalHeaderHeightInPixels,
  id,
  itemScope = true,
  itemType = 'http://schema.org/WPHeader',
  position = 'fixed',
  px,
  role = 'banner',
  top = '-1px',
  width = '100%',
  ...props
}: GlobalHeaderProps) => {
  if (typeof px !== 'undefined') {
    throw new Error(
      'Please do not use the px prop on the GlobalHeader component.',
    );
  }

  return (
    <Theme asChild radius="none">
      <Box
        asChild={asChild}
        className={classnames('z-10', className)}
        height={height}
        id={id ?? GlobalHeader.name}
        position={position}
        top={top}
        width={width}
        {...props}
      >
        <Card asChild className="relative">
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
};
