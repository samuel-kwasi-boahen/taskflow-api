# TaskFlow API

A REST API for team task and project management, built with Node.js and Express.

## Features
- Task CRUD (create, read, update, delete)
- Input validation and consistent error responses
- Modular route structure

## Endpoints
| Method | Route | Description |
|---|---|---|
| GET | /health | Service health check |
| GET | /tasks | List all tasks |
| GET | /tasks/:id | Get a task by id |
| POST | /tasks | Create a task |
| PATCH | /tasks/:id | Mark a task as done |
| DELETE | /tasks/:id | Delete a task |

## Run locally
    npm install
    node index.js

Server runs on http://localhost:3000

## Roadmap
- PostgreSQL persistence (Prisma)
- Authentication and role-based access
- Automated tests and CI
- Dockerized deployment

## Database setup
1. Install PostgreSQL and create a database named `taskflow`.
2. Copy `.env.example` to `.env` and replace `YOUR_PASSWORD` with your local password.
3. Never commit `.env`. It holds your password and is already listed in `.gitignore`.