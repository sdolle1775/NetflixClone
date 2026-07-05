# Netflix Clone

A Netflix-style movie browsing app built with React, Vite, Firebase Authentication, and the TMDB API.

## Setup

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Add your TMDB API read access token:

```env
VITE_TMDB_ACCESS_TOKEN=your_tmdb_read_access_token_here
```

Start the development server:

```bash
npm run dev
```

## Vercel

Add this environment variable in Vercel before deploying:

```env
VITE_TMDB_ACCESS_TOKEN
```
