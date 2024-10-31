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
        login: path.resolve(__dirname, 'src/pages/login/login.js'),
        registration: path.resolve(__dirname, 'src/pages/registration/registration.js'),
        forgotUsername: path.resolve(__dirname, 'src/pages/forgotUsername/forgotUsername.js'),
        forgotPassword: path.resolve(__dirname, 'src/pages/forgotPassword/forgotPassword.js'),
        resetPassword: path.resolve(__dirname, 'src/pages/resetPassword/resetPassword.js'),
      },
    },
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
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
        login: {
          entry: './src/pages/login/login.js',
          template: './src/pages/login/login.html',
          injectOptions: {
            data: {
              title: 'Login Page - SovereignQuest',
            },
          },
        },
        registration: {
            entry: './src/pages/registration/registration.js',
            template: './src/pages/registration/registration.html',
            injectOptions: {
              data: {
                title: 'Registration Page - SovereignQuest',
            },
          },
        },
        forgotUsername: {
            entry: './src/pages/forgotUsername/forgotUsername.js',
            template: './src/pages/forgotUsername/forgotUsername.html',
            injectOptions: {
              data: {
                title: 'Username Recovery - SovereignQuest',
            },
          },
        },
        forgotPassword: {
            entry: './src/pages/forgotPassword/forgotPassword.js',
            template: './src/pages/forgotPassword/forgotPassword.html',
            injectOptions: {
              data: {
                title: 'Password Recovery - SovereignQuest',
            },
          },
        },
        resetPassword: {
            entry: './src/pages/resetPassword/resetPassword.js',
            template: './src/pages/resetPassword/resetPassword.html',
            injectOptions: {
              data: {
                title: 'Password Reset - SovereignQuest',
            },
          },
        },
      },
    }),
  ],
  server: {
    open: true, // Automatically open the app in the browser
    port: 9000, // Specify the local port
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Set up aliases for easier imports
    },
  },
});
