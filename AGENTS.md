# AI Agent Integration & Knowledgebase

Welcome! This repository has been structured and optimized to make Next.js development seamless for human developers and future AI agents alike.

## Context Optimization

To minimize token usage and enhance reasoning accuracy for AI agents:
1. **Source over Artifacts:** Do not edit built files directly (e.g. within `dist`, `.next`, or static builds). Always apply edits directly to files in `src/`.
2. **Typescript Strictness:** All routes, page layouts, components, and integrations are fully typed. Keep typescript compiler strict options on to flag potential compilation issues early.
3. **App Router Framework:** Ensure all routes follow the App Router structure inside `src/app/`. Keep files structured neatly under descriptive route folders.

## Skills Required for Next.js 15+

AI agents working in this repository should possess or utilize skills in:
- **TypeScript & React Server Components:** Differentiate cleanly between `"use client"` and server-rendered components. Make sure layouts leverage server logic where appropriate.
- **NextAuth (Auth.js v5):** Understand NextAuth v5’s Universal `auth()` API, Route Handlers integration, and Google Provider mechanics.
- **Tailwind CSS v4:** Construct modern layouts, headers, body sections, and footers with responsive design systems (`md:flex`, gradient accents, flexbox centering, active states).
- **Page & Route Handling Promises:** In Next.js 15+, remember that dynamic route params are **Promises**. Await them inside dynamic components.

## Development Tasks

Follow the instructions in `README.md` to run the development server, install requirements, and run production builds.
