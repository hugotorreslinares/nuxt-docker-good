This is a modern [Next.js](https://nextjs.org) 15+ project integrated with Google Authentication via [Auth.js v5 (NextAuth.js)](https://authjs.dev).

## Features

- **Responsive Modern Layout:** Complete Header, Body, and Footer built using Tailwind CSS v4.
- **Next.js 15 App Router:** Dedicated pages for Home (`/`) and About (`/about`).
- **Google OAuth Integration:** Secure, full-featured Google authentication with NextAuth (Auth.js v5) with state-aware Header.
- **Containerized Dev & Prod Environments:** Complete Docker and Docker Compose files are ready to run.

## Authentication Environment Variables

To fully run Google Authentication, you must configure the following variables in your `.env` or `.env.local` file:

```bash
# Auth.js / NextAuth environment variable configuration
AUTH_SECRET="your-32-byte-secret" # Run `npx auth secret` to automatically generate and append this

AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"
```

*Note: In development, NextAuth automatically infers callback URLs as `http://localhost:3000/api/auth/callback/google`.*

## Getting Started

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Setup environment variables by copying `.env.example` (or creating `.env`) and populating Google OAuth keys.
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to inspect.

## Docker Setup

### Running with Docker Compose (Development)

```bash
docker-compose up --build
```

### Building and Running Production Docker Image

```bash
docker build -t nextjs-app .
docker run -p 3000:3000 nextjs-app
```
