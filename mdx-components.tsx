import {
  Button,
  type ButtonProps,
  Heading,
  type HeadingProps,
  Table,
  Text,
  type TextProps,
} from '@radix-ui/themes';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps } from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props: Readonly<HeadingProps>) => (
      <Heading as="h1" className="pb-6" size="6" {...props} />
    ),
    h2: (props: Readonly<HeadingProps>) => (
      <Heading as="h2" className="pb-6" size="5" {...props} />
    ),
    h3: (props: Readonly<HeadingProps>) => (
      <Heading as="h3" className="pb-6" size="4" {...props} />
    ),
    h4: (props: Readonly<HeadingProps>) => (
      <Heading as="h4" className="pb-6" size="3" {...props} />
    ),
    p: (props: Readonly<TextProps>) => <Text as="p" {...props} />,
    ul: (props: ComponentProps<'ul'>) => <ul {...props} />,
    ol: (props: ComponentProps<'ol'>) => <ol {...props} />,
    button: (props: Readonly<ButtonProps>) => <Button {...props} />,
    table: (props: Readonly<Table.RootProps>) => <Table.Root {...props} />,
    thead: (props: Readonly<Table.HeaderProps>) => <Table.Header {...props} />,
    tbody: (props: Readonly<Table.BodyProps>) => <Table.Body {...props} />,
    tr: (props: Readonly<Table.RowProps>) => <Table.Row {...props} />,
    th: (props: Readonly<Table.ColumnHeaderCellProps>) => (
      <Table.ColumnHeaderCell {...props} />
    ),
    td: (props: Readonly<Table.CellProps>) => <Table.Cell {...props} />,
  };
}
