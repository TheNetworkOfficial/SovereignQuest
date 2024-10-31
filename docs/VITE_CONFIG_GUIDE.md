# VITE GUIDE FOR SOVEREIGNQUEST

Welcome to the Vite guide for **SovereignQuest**! This document will help you understand the purpose of using **Vite** in our project, how the configuration works, and how you can extend it when needed.

## Introduction to Vite
**Vite** is a modern build tool that provides a faster and more optimized development experience compared to older tools like Webpack. It uses **ESBuild** for lightning-fast development builds and **Rollup** for optimized production builds. Vite is particularly well-suited for our application as it allows us to use multiple pages and benefit from highly efficient hot-reloading during development.

## Key Features Used in SovereignQuest
In our **Vite** setup for SovereignQuest, we use the following key features:
- **Multi-page support** to handle various entry points for our different pages (e.g., login, registration).
- **HTML templating** using `vite-plugin-html` for easy customization of page-specific data such as titles.
- **Alias support** to simplify imports across different modules.

## Project Structure
Our Vite configuration follows a modular approach, where each page has its own JavaScript entry and corresponding HTML template. This allows each page of the SovereignQuest web app to function as a self contained module that can be upgraded, replaced, or deleted without extreme duress on the project at large.

### Key Folders and Files
- **src**: The root directory for source files.
- **pages**: Subdirectories under `src/pages` contain different pages like `index`, `login`, `registration`, etc., each having their own `index.js` and `index.html` files.
- **vite.config.js**: The Vite configuration file located in the project root.

## Vite Configuration Overview
Here's an overview of our **vite.config.js** configuration:

```javascript
import { defineConfig } from 'vite';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  root: 'src', // Set the root folder
  build: {
    outDir: '../dist', // Define the output directory
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.js'),
        index: path.resolve(__dirname, 'src/pages/index/index.js'),
        // Additional page entries...
      },
    },
  },
  plugins: [
    createHtmlPlugin({
      minify: true, // Minify HTML during production builds
      pages: {
        index: {
          entry: './src/pages/index/index.js',
          template: './src/pages/index/index.html',
          injectOptions: {
            data: {
              title: 'Index Page - SovereignQuest',
            },
          },
        },
        // Additional pages...
      },
    }),
  ],
  server: {
    open: true, // Automatically open the app in the browser
    port: 9000, // Specify the local port for development
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Set up aliases for easier imports
    },
  },
});
```

### Detailed Breakdown
1. **Root & Build Configuration**
   - **`root: 'src'`**: The root of our project is set to the `src` directory. This allows Vite to easily locate the source files.
   - **`build.outDir`**: The build output is directed to the `dist` folder.
   - **`rollupOptions.input`**: We have multiple entry points defined for each page of our project.

2. **Plugins**
   - **`vite-plugin-html`**: We use this plugin to manage HTML files for each entry point, injecting dynamic data (like page titles) into the templates.
   - **`minify`**: Minifies the HTML during production to reduce file sizes and improve load times.

3. **Server Configuration**
   - **`server.open`**: Automatically opens the app in the browser during development.
   - **`server.port`**: Sets the local port to `9000` for the development server.

4. **Aliases**
   - **`@`**: The alias `@` is used to refer to the `src` directory, making imports simpler and more readable throughout the project.

## How to Run the Project
- **Development Server**: To start the development server with hot-reloading, use:
  ```bash
  npm run dev
  ```
- **Build for Production**: To create an optimized production build, use:
  ```bash
  npm run build
  ```
- **Preview the Production Build**: To preview the production build locally:
  ```bash
  npm run serve
  ```

## Adding New Pages
To add a new page to **SovereignQuest**:
1. **Create a New Directory**: Create a new directory under `src/pages` for the new page (e.g., `src/pages/about`).
2. **Add HTML and JavaScript**: Add an `index.html` and `index.js` file inside this directory.
3. **Update `vite.config.js`**:
   - Add a new entry point under `rollupOptions.input` for the new page.
   - Add a new configuration block under `createHtmlPlugin.pages` to define the template and entry for the page.

Example for adding a new page called `about`:
```javascript
about: {
  entry: './src/pages/about/index.js',
  template: './src/pages/about/index.html',
  injectOptions: {
    data: {
      title: 'About Page - SovereignQuest',
    },
  },
},
```

## Common Tasks and Tips
- **Hot Module Replacement (HMR)**: Vite provides fast HMR by default, which allows you to see changes immediately in the browser during development.
- **Optimizing Builds**: Ensure all unused code is removed by using tree-shaking features, which are enabled by default with Vite's **Rollup** integration.
- **Aliases for Imports**: Use `@/` to reference the `src` folder, making it easier to manage paths across the project.

## Summary
Vite provides a more efficient way to develop and build **SovereignQuest** compared to traditional bundlers like Webpack. It simplifies configuration, supports multiple pages, and drastically improves build times and hot-reloading, all of which enhance the developer experience. If you are adding new features or pages, always make sure to update `vite.config.js` accordingly to keep everything in sync.

For more details or questions, feel free to consult the development team or look through additional documentation provided in the repository.