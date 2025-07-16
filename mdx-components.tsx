import { Button, Heading } from '@radix-ui/themes';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <Heading as="h1" size="4" {...props} />,
    h2: (props) => <Heading as="h2" size="3" {...props} />,
    h3: (props) => <Heading as="h3" size="2" {...props} />,
    h4: (props) => <Heading as="h4" size="1" {...props} />,
    p: (props) => <p {...props} className="rt-Text" />,
    ul: (props) => <ul {...props} className="rt-List" />,
    ol: (props) => <ol {...props} className="rt-List" />,
    button: (props) => <Button {...props} />,
  };
}
