# Capstone Project

A Node.js web application capstone project with AI-assisted workflows. This repository documents the project setup, stack, and how to run it locally.

## Overview

This project explores building a full-stack web application using Node.js, with AI integrated into core user workflows (e.g. content generation, task automation, or intelligent assistance).

> **Status:** Early setup — application code and dependencies are not yet scaffolded.

## Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| **Runtime** | [Node.js](https://nodejs.org/) | LTS recommended (v20+) |
| **Backend** | TBD | Express, Fastify, or similar |
| **Frontend** | TBD | React, EJS, or static HTML |
| **AI / LLM** | TBD | OpenAI, Anthropic, or other provider APIs |
| **Database** | TBD | MongoDB, PostgreSQL, or SQLite |
| **Tooling** | npm / pnpm | Package management |
| **Environment** | `.env` | Secrets and API keys (not committed) |

## Project Structure

```
.
├── .gitignore
├── LICENSE
├── README.md
└── (app source — coming soon)
```

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS, v20 or later)
- [Git](https://git-scm.com/)
- An API key for your chosen AI provider (when AI features are added)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd capstone-project

# Install dependencies (once package.json exists)
npm install
```

### Environment Variables

Create a `.env` file in the project root (never commit this file):

```env
PORT=3000
# AI_PROVIDER_API_KEY=your_key_here
```

### Run Locally

```bash
# Development (once scripts are defined in package.json)
npm run dev

# Production
npm start
```

The app will be available at `http://localhost:3000` (default port).

## Development

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server with hot reload |
| `npm start` | Start production server |
| `npm test` | Run tests |

> Commands above assume standard npm scripts. Update this table once `package.json` is added.

## License

This project is licensed under the [MIT License](LICENSE).

Copyright (c) 2026 Yassmine Maouhoub
