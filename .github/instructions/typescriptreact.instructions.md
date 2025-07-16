---
applyTo: "**/*.tsx"
---

# Instructions for TypeScript React files (.tsx)

## UI Components: Radix Themes and Tailwind CSS

This project uses Radix Themes and, when necessary, Tailwind CSS for styling.

Always prefer using UI components from Radix UI (e.g., <Button />) instead of native HTML elements like <button>.

If a shared Button component exists in `src/libs/ui/`, use it instead of Radix UI or native elements.

Example:

```tsx
import { Button } from '@radix-ui/themes';
// or
import { Button } from '@/libs/ui/Button';

<Button>Click me</Button>
```

# Styling

Never use the `style` attribute for styling, not even for quick styling.
Always prefer Radix Themes properties or, when applicable, Tailwind CSS classes for component styling.

Whenever possible, use Radix Themes layout components like `Flex` and `Grid` to control spacing and alignment, instead of quick styling or inline styles.

Note: When using Tailwind CSS classes on a Radix Themes component, there is a chance the classes may not be applied as expected, because Radix Themes uses CSS variables for styling. Prefer Radix Themes properties and layout components whenever possible for consistent results.

## Page Structure

These instructions apply to all `.tsx` files (TypeScript React) in this project.

- New pages must not use the `<main>` HTML tag.
- Always start the page with the `<article>` HTML tag.
- The `id` attribute of the `<article>` must be set to the `displayName` property of the page function.
- The page function must always have a `displayName` property defined.
- All pages must include a `<PageHeader>` and a `<PageHeading>` component with the page title.
- `<PageHeading>` must always be placed inside `<PageHeader>`, as `<PageHeader>` controls the layout and acts as a container for the heading.
- The main content of the page must be wrapped in a `<Container>` component.
- Always import the `Grid` component from `@radix-ui/themes` when using grids in pages or components.

Example:

```tsx
const MyPage = () => {
  // ...page code...
  return (
    <article id={MyPage.displayName}>
      <PageHeader />
      <PageHeading>My Page Title</PageHeading>
      <Container>
        {/* ...content... */}
      </Container>
    </article>
  );
}
MyPage.displayName = 'MyPage';
export default MyPage;
```

## Type Imports

Always prefer `import type { FC } from 'react'` instead of using `React.FC` directly in components.

Exemplo:

```tsx
import type { FC } from 'react';

const MeuComponente: FC<Readonly<{ texto: string }>> = ({ texto }) => (
  <span>{texto}</span>
);
```


# Arrow Functions and Readonly

Always prefer arrow functions for React components.

When defining component props, use Readonly<{Type}> to ensure immutability and better typing.

Example:

```tsx
const MyComponent: FC<Readonly<{ text: string }>> = ({ text }) => (
  <span>{text}</span>
);
```

## ProseText Usage

Never use size="1" for <ProseText> when rendering main content. Prefer larger sizes for readability.

## Button Variants

For secondary actions, prefer using the `ghost` variant for buttons. Avoid having multiple primary (solid) buttons in the same visual context, as this can cause confusion.

## Component Props Best Practices

When creating custom components that wrap Radix Themes components (like `Button`), always accept all props from the base component (e.g., `ButtonProps`) and pass them through. Set useful default values, but always allow consumers to override them.

# Headings

When creating Markdown headings (h1-h4) or mapping them in MDX, always use the Radix Themes `Heading` component with the appropriate `as` and `size` props for semantic and visual consistency.

Example:

- h1: `<Heading as="h1" size="4" {...props} />`
- h2: `<Heading as="h2" size="3" {...props} />`
- h3: `<Heading as="h3" size="2" {...props} />`
- h4: `<Heading as="h4" size="1" {...props} />`

## Dynamic Route Params



## Correct typing for awaited parameters

When using parameters that are awaited (e.g., `const { slug } = await params;`), always use the correct type for the function parameter, not a Promise. The parameter should be typed as the expected object, and you should only use `await` if the value itself is a Promise. Example:

```tsx
interface PageProps {
  params: { slug: string }
}

// Correct:
const MyPage = async ({ params }: PageProps) => {
  const { slug } = params;
  // ...
}

// Incorrect:
// const MyPage = async ({ params }: Promise<PageProps>) => { ... }
```

This prevents typing errors and ensures compatibility with the Next.js App Router. Never type the parameter as a Promise unless the function is actually receiving a Promise as its argument.

When using dynamic route params in Next.js App Router, always await the params object before accessing its properties:

```tsx
const { slug } = await params;
```
This ensures compatibility with async route APIs and prevents runtime errors.
