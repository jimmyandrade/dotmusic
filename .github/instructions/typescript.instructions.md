---
applyTo: "**/*.ts,**/*.tsx"
---

# Instructions for TypeScript and TypeScript React files

<!-- only add instructions below this line -->

## Single Responsibility

Always consider extracting logic into functions with a single responsibility. This improves code cohesion and reusability.

## Unused Variables

Avoid declaring variables or constants that are not used in the code. Always remove unused declarations to keep the code clean.

## Prefer Interfaces Over Types

Always prefer using `interface` instead of `type` for object shapes and component props, unless you need advanced type features that only `type` provides (e.g., unions, intersections, mapped types). Interfaces are more extensible and idiomatic in TypeScript for describing object structures.

Example:

```ts
interface MyProps {
  text: string;
}
```

## Comments

Code should be self-explanatory and not require comments to describe its purpose or logic. Prefer clear and descriptive function, variable, and component names instead of explanatory comments.

If comments are strictly necessary (for complex logic, TODOs, or clarifications), they must be written in English.

## Alphabetical Order for Properties

Whenever possible, order properties in objects, interfaces, and enums alphabetically. This improves readability, maintainability, and helps prevent duplication.

Example:

```ts
interface Person {
  age: number;
  firstName: string;
  lastName: string;
}

enum Status {
  ACTIVE,
  INACTIVE,
  PENDING,
}
```

## Date and Time Best Practices

When working with dates and times, always prefer using `Date.now()` instead of `new Date().getTime()`. This approach is more readable, avoids unnecessary instantiation of Date objects, and improves performance.

Example:

```ts
// Good:
const diff = targetDate.getTime() - Date.now();

// Bad:
const diff = targetDate.getTime() - new Date().getTime();
```
