# replit.md

## Overview

This is a wireframe prototype application for managing outreach sequences and contact management. The application provides a lo-fi/mid-fi dashboard interface designed for recruitment task demonstrations. It features a 2-column layout with interactive navigation and focuses on the Searcher functionality for prospect discovery. The app uses a grayscale, wireframe-style design with mock placeholder avatars instead of photos.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and component-based architecture
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system for consistent, accessible components
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Development**: tsx for TypeScript execution in development mode
- **Build System**: esbuild for fast production builds with ESM output format
- **Middleware**: Custom logging middleware for API request tracking and error handling

### Data Storage Solutions
- **Database**: PostgreSQL with Neon Database serverless driver for scalable cloud database
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: Centralized schema definitions in shared directory for type consistency
- **Session Storage**: PostgreSQL sessions using connect-pg-simple for user session management
- **Fallback Storage**: In-memory storage implementation for development and testing

### Build and Development
- **Build Tool**: Vite for fast development server and optimized production builds
- **Development**: Hot Module Replacement (HMR) with Vite dev server integration
- **TypeScript**: Strict type checking with path aliases for clean imports
- **Asset Handling**: Static asset serving with proper caching strategies

### External Dependencies

#### UI and Styling
- **Component Library**: Radix UI for accessible, unstyled UI primitives
- **Icons**: Lucide React for consistent icon system
- **Styling Framework**: Tailwind CSS for utility-first styling approach
- **Font Loading**: Google Fonts integration (Architects Daughter, DM Sans, Fira Code, Geist Mono)

#### Database and ORM
- **Database Provider**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **ORM**: Drizzle ORM with PostgreSQL dialect for database operations
- **Validation**: Drizzle-Zod integration for runtime schema validation

#### Development Tools
- **Type Safety**: TypeScript with strict configuration
- **Development Server**: Vite with React plugin and runtime error overlay
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Date Handling**: date-fns for date manipulation and formatting

#### Development Environment
- **Replit Integration**: Vite cartographer plugin for Replit-specific development features
- **Error Handling**: Runtime error modal overlay for development debugging
- **Hot Reloading**: Vite HMR integration with Express server

The application follows a monorepo structure with shared schema definitions, separate client and server directories, and centralized configuration files for consistent development experience.