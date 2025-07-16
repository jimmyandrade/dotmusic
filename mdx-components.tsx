import { Button, Heading, Table } from '@radix-ui/themes';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <Heading as="h1" className="pb-6" size="6" {...props} />,
    h2: (props) => <Heading as="h2" className="pb-6" size="5" {...props} />,
    h3: (props) => <Heading as="h3" className="pb-6" size="4" {...props} />,
    h4: (props) => <Heading as="h4" className="pb-6" size="3" {...props} />,
    p: (props) => <p {...props} className="rt-Text" />,
    ul: (props) => <ul {...props} className="rt-List" />,
    ol: (props) => <ol {...props} className="rt-List" />,
    button: (props) => <Button {...props} />,
    table: (props) => <Table.Root {...props} />,
    thead: (props) => <Table.Header {...props} />,
    tbody: (props) => <Table.Body {...props} />,
    tr: (props) => <Table.Row {...props} />,
    th: (props) => <Table.ColumnHeaderCell {...props} />,
    td: (props) => <Table.Cell {...props} />,
  };
}
