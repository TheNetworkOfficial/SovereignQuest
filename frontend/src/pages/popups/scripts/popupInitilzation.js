// popupInitilzation.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  let popupsToLoad = [
    "edit-products-popup.html",
    "add-multiple-products-popup.html",
    "edit-resin-popup.html",
    "edit-resin-mix-popup.html",
    "markup-popup.html",
  ];
  let loadedPopupsCount = 0;

  function initializePopupEvents() {
    console.log("Initializing popup events...");
    function setupPopup(popupId, triggerId, closeButtonSelector) {
      const popup = document.getElementById(popupId);
      if (!popup) {
        console.log(`Popup with ID ${popupId} not found.`);
        return;
      }

      const trigger = document.getElementById(triggerId);
      const closeButton = popup.querySelector(closeButtonSelector);
      if (trigger && closeButton) {
        console.log(`Setting up popup and trigger for ${popupId}.`);
        trigger.addEventListener("click", (e) => {
          e.preventDefault();
          console.log(`Displaying popup: ${popupId}`);
          popup.style.display = "flex";
        });

        closeButton.addEventListener("click", () => {
          console.log(`Hiding popup: ${popupId}`);
          popup.style.display = "none";
        });
      } else {
        if (!trigger) console.log(`Trigger with ID ${triggerId} not found.`);
        if (!closeButton)
          console.log(
            `Close button with selector ${closeButtonSelector} not found in popup ${popupId}.`,
          );
      }
    }

    setupPopup(
      "edit-products-popup-container",
      "edit-products-trigger",
      ".edit-products-popup-close-button",
    );
    setupPopup(
      "add-multiple-products-popup-container",
      "add-multiple-products",
      ".add-multiple-products-popup-close-button",
    );
    setupPopup(
      "edit-resin-popup-container",
      "edit-resin-trigger",
      ".edit-resin-popup-close-button",
    );
    setupPopup(
      "edit-resin-mix-popup-container",
      "edit-resin-mix-trigger",
      ".edit-resin-mix-popup-close-button",
    );
    setupPopup(
      "markup-popup-container",
      "markup-trigger",
      ".markup-popup-close-button",
    );
  }

  function loadPopupHtml(popupFileName) {
    console.log(`Attempting to load ${popupFileName} into body`);
    const placeholder = document.body; // Change from 'footer-placeholder' to 'body'

    fetch(`${popupFileName}`)
      .then((response) => response.text())
      .then((data) => {
        console.log(`Successfully loaded ${popupFileName}`);
        const popupContainer = document.createElement("div");
        popupContainer.innerHTML = data;
        placeholder.appendChild(popupContainer);
        loadedPopupsCount++;

        // Check if all popups have been loaded before initializing events
        if (loadedPopupsCount === popupsToLoad.length) {
          initializePopupEvents();
        }
      })
      .catch((error) => {
        console.error(`Error loading ${popupFileName}:`, error);
        loadedPopupsCount++;
        // Attempt to initialize if this was the last popup, even if there was an error
        if (loadedPopupsCount === popupsToLoad.length) {
          initializePopupEvents();
        }
      });
  }

  // Load each popup
  popupsToLoad.forEach((popupFileName) => {
    loadPopupHtml(popupFileName); // Removed 'footer-placeholder' parameter
  });
});
