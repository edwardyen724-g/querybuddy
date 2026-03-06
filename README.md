# QueryBuddy

> Streamline your database queries with intuitive management tools for developers.

**Status:** 🚧 In Development

## Problem
Developers often face complexities with query invalidation processes, leading to stale data and inefficient workflows. QueryBuddy simplifies this process, enabling even junior developers to manage queries effortlessly.

## MVP Features
- Visual query builder to create and modify queries with drag-and-drop functionality.
- Dashboard that displays current query states, highlighting stale data conveniently.
- Built-in guides and tutorials that offer step-by-step assistance for common query scenarios.
- Notifications for users when data becomes stale and suggested actions to refresh it.
- Integration capabilities with commonly used relational databases like MySQL and PostgreSQL.

## Tech Stack
- **Frontend:** Next.js 14 (App Router)
- **Backend:** Next.js API Routes
- **Database:** Supabase Postgres
- **Auth:** Supabase Auth
- **Payments:** Stripe
- **Hosting:** Vercel

## Architecture Notes
This stack leverages Next.js for both the frontend and backend, utilizing API routes for simplicity. Supabase provides seamless integration for authentication and database management, while Vercel serves as the hosting platform, ensuring rapid deployment and scalability.

## User Stories
- Visual Query Builder
- Dashboard for Query States
- Guides and Tutorials
- Stale Data Notifications
- Database Integration
- User Authentication
- Subscription Management

## Launch Checklist
- [ ] Develop the landing page and sign-up form.
- [ ] Implement user authentication endpoints.
- [ ] Create the visual query builder interface.
- [ ] Build the dashboard UI to show query states.
- [ ] Integrate with MySQL and PostgreSQL for database connections.

## Setup
```bash
cp .env.example .env.local
# Fill in your environment variables
npm install
npm run dev
```