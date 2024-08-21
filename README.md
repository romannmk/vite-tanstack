## Vite SSR with TanStack

This project demonstrates how to set up server-side rendering (SSR) with Vite and TanStack Router. It provides a minimal setup to get you started with SSR in a React application.

### Features

- Vite for fast development and optimized production builds
- React for building user interfaces
- Server-side rendering (SSR) for improved performance and SEO
- TanStack Router for type-safe routing
- TanStack React Query for efficient data fetching, caching, and state management
- Tailwind CSS for utility-first styling and rapid UI development

### Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/romannmk/vite-tanstack.git
   cd vite-tanstack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

The application will be available at http://localhost:5173.

### Project Structure

The project structure is organized as follows:

```
vite-tanstack/
├── src/
│   ├── components/
│   ├── queries/
│   ├── routes/
│   ├── entry-client.tsx
│   ├── entry-server.tsx
│   ├── routeTree.gen.ts
│   └── router.tsx
├── index.html
├── vite.config.ts
└── package.json
```

### Scripts

The following npm scripts are available:

- `npm run dev`: Starts the development server
- `npm run build`: Builds the production-ready application
- `npm run serve`: Serves the production build locally

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request or contact me by email.

### License

This project is open source and available under the [MIT License](LICENSE).
