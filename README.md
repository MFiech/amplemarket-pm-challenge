# Amplemarket PM Challenge

A React-based prototype application showcasing Amplemarket's UI components and functionality. This project demonstrates a modern dashboard interface with collapsible sidebar, search functionality, and multiple view states.

## Features

- **Dual Mode Toggle**: Switch between "Empty states (new user)" and "Pre-filled data" modes
- **Collapsible Sidebar**: Space-efficient navigation with icon-only collapsed view
- **Searcher Components**: Two variants (empty state and populated) with wireframe filter sections
- **Responsive Design**: Built with Tailwind CSS for modern, responsive layouts
- **Interactive Elements**: Tooltips, hover states, and click interactions
- **TypeScript**: Fully typed codebase for better development experience

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Radix UI components
- **Icons**: Lucide React
- **Backend**: Express.js + Node.js
- **Database**: Drizzle ORM with PostgreSQL
- **Build Tool**: Vite
- **Package Manager**: npm

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (usually comes with Node.js)
- **Git** (for cloning the repository)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MFiech/amplemarket-pm-challenge.git
cd amplemarket-pm-challenge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup (Optional)

If you need to use database features, create a `.env` file in the root directory:

```bash
# Database configuration (optional for UI-only usage)
DATABASE_URL="your_database_url_here"
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will start and be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000

## Available Scripts

- `npm run dev` - Start development server (both frontend and backend)
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes (if using database)

## Project Structure

```
amplemarket-pm-challenge/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # Base UI components (buttons, inputs, etc.)
│   │   │   ├── sidebar.tsx
│   │   │   ├── searcher.tsx
│   │   │   └── ...
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions and configurations
│   │   └── hooks/         # Custom React hooks
│   └── index.html
├── server/                # Express.js backend
├── shared/                # Shared types and schemas
├── package.json
└── README.md
```

## Key Components

### Dashboard
The main application layout with top navigation toggle and sidebar.

### Sidebar
- **Expanded**: Shows full navigation with section headers and item labels
- **Collapsed**: Icon-only view with tooltips
- **Features**: Collapsible sections, disabled state indicators, click-based tooltips

### Searcher Components
- **SearcherEmpty**: Empty state for new users
- **Searcher**: Populated state with sample data
- **Features**: Wireframe filter sections, responsive layout

## UI Features

### Mode Toggle
Switch between two application states:
- **Empty states (new user)**: Shows empty state components
- **Pre-filled data**: Shows components with sample data

### Interactive Elements
- Collapsible sidebar with smooth transitions
- Click-activated tooltips for disabled features
- Hover states and visual feedback
- Responsive design for different screen sizes

## Development

### Adding New Components

1. Create component files in `client/src/components/`
2. Follow TypeScript conventions
3. Use Tailwind CSS for styling
4. Import and use in parent components

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the existing color scheme (grays for neutral, blue for accents)
- Maintain consistent spacing and typography
- Ensure responsive design principles

### TypeScript

The project uses TypeScript for type safety. Run type checking with:

```bash
npm run check
```

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `vite.config.ts` or kill the process using the port
2. **Dependencies not installing**: Try `npm ci` for a clean install
3. **TypeScript errors**: Run `npm run check` to see detailed error messages

### Development Tips

- Use browser developer tools for debugging
- Check the console for any JavaScript errors
- Ensure all dependencies are properly installed
- Use `npm run check` regularly to catch TypeScript issues

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is part of the Amplemarket PM Challenge and is for evaluation purposes.

## Contact

For questions about this implementation, please refer to the challenge requirements or contact the development team.
