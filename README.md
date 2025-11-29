# Auth JWT MVC

This project demonstrates user authentication and authorization using Bearer tokens (JWT)
in a Node.js application following the MVC pattern. It uses Express.js and Mongoose (MongoDB).

## Features

- User registration (password hashing with bcrypt)
- User login (JWT generation)
- Protected route to get user info from token
- Input validation with express-validator
- Clear separation: models, controllers, routes, middleware

## Setup

1. Clone the repo
2. Install dependencies
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
4. Run the server
   ```bash
   npm run dev
   ```
5. Use Postman to test the APIs (examples below).

## API Endpoints (summary)

- **POST /api/auth/register**
  - Request body: `{ "username": "alice", "email": "alice@example.com", "password": "secret12" }`
  - Success response: `201 { "message": "User registered successfully" }`
- **POST /api/auth/login**
  - Request body: `{ "email": "alice@example.com", "password": "secret12" }`
  - Success response: `200 { "token": "<jwt>" }`
- **GET /api/user/me**
  - Headers: `Authorization: Bearer <jwt>`
  - Success response: `200 { "user": { "id": "...", "username": "...", "email": "..." } }`

## Postman Collection

A Postman collection is included in `postman_collection.json` with example requests and sample responses.

## Notes

- Do not store real secrets in source control. Use environment variables.
- This project is intentionally minimal and clear for learning and assessment.
