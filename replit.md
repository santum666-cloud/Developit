# Developit - Educational Platform

## Overview

Developit is a modern online learning platform focused on technology education, specifically targeting developers, designers, and tech professionals. The platform offers courses in areas like Full Stack Development, Programming, Databases, Artificial Intelligence, and more. Built with a focus on accessibility and innovative learning methodologies, it aims to democratize quality tech education.

The application is a full-stack web application with Spanish language content, featuring course catalogs, blog posts, user registration/login, and contact forms. The design follows modern education platform aesthetics inspired by Coursera and Udemy, combined with innovative startup design patterns from Linear and Notion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for client-side routing (lightweight alternative to React Router)
- React Query (@tanstack/react-query) for server state management and data fetching

**UI Component System**
- Shadcn/ui component library (new-york style) built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design system
- Class Variance Authority (CVA) for component variant management
- Custom design tokens defined in CSS variables for consistent theming

**Design System**
- Typography: Inter/Manrope for UI, Space Grotesk for display headings
- Color system: HSL-based with CSS custom properties supporting light/dark modes
- Spacing primitives: Tailwind units (4, 6, 8, 12, 16, 20, 24) for consistent rhythm
- Component patterns: Cards with hover elevations, glassmorphism effects, gradient backgrounds

**State & Form Management**
- React Hook Form with Zod schema validation (@hookform/resolvers)
- Local component state using React hooks
- Toast notifications for user feedback

**Project Structure**
- `/client/src/pages/`: Route components (home, cursos, blog, nosotros, login, registro, privacy)
- `/client/src/components/`: Reusable UI components (Navigation, Footer, Hero, CourseCard, BlogCard, etc.)
- `/client/src/components/ui/`: Shadcn UI primitive components
- `/client/src/lib/`: Utility functions and query client configuration
- `/client/src/hooks/`: Custom React hooks
- Path aliases configured: `@/` for client/src, `@shared/` for shared, `@assets/` for attached_assets

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the HTTP server
- Custom middleware for request logging and JSON parsing with raw body capture
- Modular route registration pattern via `registerRoutes` function

**Storage Layer**
- In-memory storage implementation (`MemStorage`) for development
- Interface-based storage abstraction (`IStorage`) for easy swapping to database implementations
- Current schema supports basic user management (id, username, password)

**Development Setup**
- Vite integration in middleware mode for seamless dev experience
- Hot Module Replacement (HMR) enabled
- Replit-specific plugins for runtime error overlay and development banners

**API Design**
- RESTful API pattern with `/api` prefix for all application routes
- Session-based request logging with response time tracking
- Structured error handling and JSON response capture for debugging

### Database Schema

**Current Schema (Drizzle ORM)**
- PostgreSQL dialect configured via Drizzle Kit
- Schema location: `./shared/schema.ts`
- Users table: `id` (UUID primary key), `username` (unique text), `password` (text)
- Zod validation schemas generated from Drizzle schemas for runtime validation

**Design Decisions**
- Schema shared between client and server for type safety
- UUID generation using PostgreSQL's `gen_random_uuid()`
- Drizzle chosen for type-safe query building and schema management
- Migration files output to `./migrations` directory

### Authentication & Authorization

**Current State**
- Basic username/password schema defined
- Form validation implemented on registration and login pages
- No authentication middleware currently implemented (placeholder storage layer)

**Intended Pattern**
- Session-based authentication suggested by `connect-pg-simple` dependency
- User registration with password hashing (needs implementation)
- Protected routes and middleware (needs implementation)

## External Dependencies

### Core Services
- **Database**: PostgreSQL (configured for Neon serverless via `@neondatabase/serverless`)
  - Environment variable: `DATABASE_URL` (required for Drizzle Kit)
  - Connection pooling via Neon serverless driver
  
### UI & Component Libraries
- **Radix UI**: Complete set of accessible, unstyled UI primitives (accordion, dialog, dropdown, select, tabs, toast, tooltip, etc.)
- **Embla Carousel**: Carousel/slider functionality
- **Lucide React**: Icon library for UI icons
- **React Icons**: Additional icon sets (SiX, SiYoutube, SiTiktok for social media)

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **PostCSS & Autoprefixer**: CSS processing pipeline
- **Google Fonts**: Inter, Space Grotesk font families loaded via CDN

### Development Tools
- **Replit Plugins**: Development tooling specific to Replit environment
  - `@replit/vite-plugin-runtime-error-modal`
  - `@replit/vite-plugin-cartographer`
  - `@replit/vite-plugin-dev-banner`

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation library
- **Drizzle Zod**: Bridge between Drizzle schemas and Zod validation

### Date & Time
- **date-fns**: Date manipulation and formatting utilities

### Asset Management
- Generated images stored in `attached_assets/generated_images/` directory
- Vite alias `@assets` configured for asset imports
- Course thumbnails, instructor portraits, blog headers, team photos