---
applyTo: "**/*.*"
---

# General Instructions

When adding new code, be careful not to delete or overwrite important existing code sections. Always preserve the original logic and structure unless explicitly instructed to refactor or remove something.

## Stack

This project uses Next.js and all coding must be done exclusively in TypeScript. Do not use Python or any other languages to implement features, scripts, or examples in this repository.

- Framework: Next.js
- Language: TypeScript
- Forbidden: Python, plain JavaScript, other languages

Always follow Next.js and TypeScript best practices.

## Date and Time

Always store dates in files using the ISO 8601 format with explicit timezone information. Recommended example: `2023-11-03T00:00:00-03:00`.

This ensures that the date is interpreted correctly in any environment, avoiding timezone conversion issues.

## Commit Messages

All commit messages must follow the Conventional Commits specification and be written in English. This ensures clarity, consistency, and better automation for releases and changelogs.
