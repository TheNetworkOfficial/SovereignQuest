// Importing CSS files
import "./css/characterBuilder.css";

// Importing JavaScript files
import { initEventListeners } from './scripts/builderEvents.js';
import "./scripts/builderData";
import "./scripts/builderEvents";
import "./scripts/builderUI";


document.addEventListener('DOMContentLoaded', () => {
    // Initialize event listeners and everything once the DOM is ready
    initEventListeners();
  });