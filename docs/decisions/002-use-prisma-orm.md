# ADR-002: Use Prisma 6 as the data access layer

## Status
Accepted

## Context
The API needs typed, maintainable access to PostgreSQL. The codebase is CommonJS JavaScript.

## Decision
Use Prisma ORM, pinned to major version 6, with schema and migrations managed in `prisma/`.

## Alternatives considered
- **Raw SQL with `pg`:** maximum control, but more boilerplate and no schema-managed migrations.
- **Newer major versions (7+):** current releases, but they require an ESM/TypeScript-oriented setup that the project does not use yet.
## Consequences
- Schema changes are versioned as migrations.
- The project must plan an upgrade path to Prisma 7 later.