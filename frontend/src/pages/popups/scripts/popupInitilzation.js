// popupInitialization.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  let popupsToLoad = [
    "character-creation-popup.html" // Add our new popup file here
  ];
  let loadedPopupsCount = 0;

  function initializePopupEvents() {
    console.log("Initializing popup events...");

    function setupPopup(popupId, triggerSelector, closeButtonSelector) {
      const popup = document.getElementById(popupId);
      if (!popup) {
        console.log(`Popup with ID ${popupId} not found.`);
        return;
      }

      const triggers = document.querySelectorAll(triggerSelector);
      const closeButton = popup.querySelector(closeButtonSelector);

      if (triggers.length > 0 && closeButton) {
        console.log(`Setting up popup and triggers for ${popupId}.`);

        triggers.forEach((trigger) => {
          trigger.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(`Displaying popup: ${popupId}`);
            popup.style.display = "flex";
          });
        });

        closeButton.addEventListener("click", () => {
          console.log(`Hiding popup: ${popupId}`);
          popup.style.display = "none";
        });
      } else {
        if (triggers.length === 0) console.log(`No triggers found for selector ${triggerSelector}.`);
        if (!closeButton)
          console.log(
            `Close button with selector ${closeButtonSelector} not found in popup ${popupId}.`
          );
      }
    }

    // Initialize the character creation popup
    setupPopup(
      "character-creation-popup-container",
      ".btn-create", // The trigger selector for your "Start Character Creation" button
      ".close-button"
    );
  }

  function loadPopupHtml(popupFileName) {
    console.log(`Attempting to load ${popupFileName} into body`);
    const placeholder = document.body; // Load into the body

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
    loadPopupHtml(popupFileName);
  });
});
