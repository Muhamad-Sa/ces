# CES Homepage

A one-page React homepage for CES, recreated from the Sland template.

## Features

- One-page layout with multiple sections
- Responsive design using Bootstrap
- Modular React components
- Includes header, hero, partners, services, about, counter, features, services tabs, newsletter, testimonials, blog, and footer

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5174](http://localhost:5174) in your browser.

## Build

To build the project for production:
```bash
npm run build
```

## Components

- Header
- Hero
- Partners
- Services
- AboutUs
- Counter
- Features
- ServicesTab
- Newsletter
- Testimonials
- Blogs
- Footer

## Assets

Assets are copied from the Sland template and placed in the public/assets directory.

## Note

This is a recreation of the onepage-home-three.html from the Sland template, adapted to React components.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
