# Portfolio Application - replit.md

## Overview

This is a full-stack portfolio application showcasing a technology professional's work and experience. The application features a modern single-page portfolio website with sections for about, education, projects, experience, and contact information. It's built with a React frontend and Express backend, with PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React + TypeScript**: Modern React application with TypeScript for type safety
- **Vite**: Fast build tool and development server with hot module replacement
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **shadcn/ui**: High-quality component library built on Radix UI primitives
- **Wouter**: Lightweight routing library for single-page navigation
- **TanStack Query**: Data fetching and state management for API interactions

### Backend Architecture
- **Express.js**: Lightweight Node.js web framework for REST API endpoints
- **TypeScript**: Full-stack type safety with ES modules
- **Middleware**: Custom logging and error handling middleware
- **Memory Storage**: In-memory data storage with interface for easy database migration

### Database Layer
- **Drizzle ORM**: Type-safe SQL toolkit for database operations
- **PostgreSQL**: Relational database (configured but not actively used yet)
- **Schema**: Centralized schema definitions in shared directory

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling to sections
- **HeroSection**: Main landing area with profile image and call-to-action
- **EducationSection**: Educational background with visual cards
- **ProjectsSection**: Featured projects showcase with metrics
- **ExperienceSection**: Professional experience highlights
- **ContactSection**: Contact form and social links
- **UI Components**: Comprehensive component library (buttons, cards, forms, etc.)

### Backend Structure
- **Routes**: API endpoint registration system
- **Storage Interface**: Abstracted storage layer for CRUD operations
- **User Management**: Basic user schema and operations (foundation for future features)

### Shared Resources
- **Schema**: Database table definitions using Drizzle
- **Types**: Shared TypeScript interfaces between frontend and backend

## Data Flow

1. **Static Content**: Portfolio content is primarily static, rendered client-side
2. **API Ready**: Backend infrastructure prepared for dynamic features
3. **Database Integration**: Drizzle ORM configured for PostgreSQL with migration support
4. **Development Mode**: Vite handles frontend serving with Express API proxy

## External Dependencies

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first styling system
- **Inter Font**: Professional typography via Google Fonts

### Development Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind integration
- **Replit Integration**: Development environment optimization

### Database & ORM
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle Kit**: Database migration and management tools

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: ESBuild bundles Express server with external packages
3. **Output Structure**: Static files in `dist/public`, server in `dist/index.js`

### Environment Configuration
- **Development**: Vite dev server with Express API backend
- **Production**: Express serves static files and API endpoints
- **Database**: Environment variable configuration for database URL

### Scripts
- `dev`: Development server with hot reloading
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `db:push`: Database schema synchronization

The application is designed for easy deployment on platforms like Replit, with built-in support for development tooling and production optimization. The modular architecture allows for easy extension with additional features like user authentication, content management, or dynamic project showcases.