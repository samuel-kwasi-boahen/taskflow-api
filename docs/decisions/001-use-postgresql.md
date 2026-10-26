# ADR-001: Use PostgreSQL for persistence

## Status
Accepted

## Context
Tasks are held in an in-memory array. Data is lost on every restart, and id generation is tied to process state.

## Decision
Replace the in-memory store with PostgreSQL, accessed through Prisma.

## Alternatives considered
- **SQLite:** simpler setup, but weaker support for concurrent writes and not representative of typical production deployments.
- **MongoDB:** flexible schemas, but tasks, projects, and users are strongly relational, which suits a relational database.

## Consequences
- Data survives restarts and ids are managed by the database.
- Requires a running database service in every environment.