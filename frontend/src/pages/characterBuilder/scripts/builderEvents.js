import {
  setRace,
  setSubrace,
  getAvailableSubraces,
  getCharacterSummary,
  submitCharacterData,
} from "./builderData.js";

import {
  showStep,
  enableNextButton,
  loadSubraceOptions,
  updateCharacterSummary,
} from "./builderUI.js";

import { raceDetails } from "./builderData.js"; // Ensure the race details are properly imported

function initEventListeners() {
  const builder = document.querySelector(".character-builder");

  if (!builder) return;

  // Start Button
  const startButton = builder.querySelector(".step-intro .btn-start");
  if (startButton) {
    startButton.addEventListener("click", () => {
      // Move to race selection step
      showStep("step-race-selection");
    });
  }

  // Race selection
  const raceStep = builder.querySelector(".step-race-selection");
  if (raceStep) {
    const backButton = raceStep.querySelector(".btn-back");
    const raceOptions = raceStep.querySelectorAll(".character-option");
    const raceInfoPanel = raceStep.querySelector(".race-info-panel");

    if (backButton) {
      backButton.addEventListener("click", () => showStep("step-intro"));
    }

    let currentSelectedRace = null; // Track the currently selected race
    let isAnimating = false; // Prevent interruptions during animation

    raceOptions.forEach((opt) => {
      opt.addEventListener("click", () => {
        if (isAnimating) return; // Ignore clicks during animation

        const selectedRace = opt.getAttribute("data-race");

        // If the same race is clicked again, collapse the panel with a delay
        if (currentSelectedRace === selectedRace) {
          isAnimating = true; // Lock interaction
          raceInfoPanel.style.maxHeight = "0";
          raceInfoPanel.style.opacity = "0";

          // Remove the 'active' class and reset after animation ends
          setTimeout(() => {
            raceInfoPanel.classList.remove("active");
            raceInfoPanel.innerHTML = ""; // Clear content when collapsed
            isAnimating = false; // Unlock interaction
          }, 1500); // Match the CSS transition duration

          opt.classList.remove("selected");
          currentSelectedRace = null; // Reset selection
          return;
        }

        // If switching between races, bypass delay for faster interaction
        if (currentSelectedRace !== null) {
          isAnimating = false; // Allow immediate switch
        }

        // Update the current selected race
        currentSelectedRace = selectedRace;
        setRace(selectedRace);

        // Highlight the selected race option and remove highlight from others
        raceOptions.forEach((o) => o.classList.remove("selected"));
        opt.classList.add("selected");

        // Populate the race-info-panel with details
        const details = raceDetails[selectedRace];
        if (details) {
          raceInfoPanel.innerHTML = `
            <h3>${selectedRace}</h3>
            <p>${details.lore}</p>
            <div class="race-info">
              <h4>Tiers Avalible:</h4>
              <div class="stats">
                ${Object.entries(details.tier)
                  .map(
                    ([stat, value]) => `
                  <div class="stat">
                    <div class="stat-label"><strong>${stat}:</strong></div>
                    <div class="stat-value">${value}</div>
                  </div>`
                  )
                  .join("")}
              </div>
            </div>
            <div class="race-info">
              <h4>Primary Stat Adjustments:</h4>
              <div class="stats">
                ${Object.entries(details.primaryStats)
                  .map(
                    ([stat, value]) => `
                  <div class="stat">
                    <div class="stat-label"><strong>${stat}:</strong></div>
                    <div class="stat-value">${value}</div>
                  </div>`
                  )
                  .join("")}
              </div>
            </div>
            <div class="race-info">
              <h4>Racial Bonus Traits:</h4>
              <ul>${details.bonuses.map((b) => `<li>${b}</li>`).join("")}</ul>
            </div>
            <div class="race-info">
              <h4>Racial Penalty Traits:</h4>
              <ul>${details.penalties.map((p) => `<li>${p}</li>`).join("")}</ul>
            </div>
            <div class="race-info">
              <h4>Racial Skills:</h4>
              <ul>${details.racialSkills.map((s) => `<li>${s}</li>`).join("")}</ul>
            </div>
            <div class="race-info">
              <h4>Skill Predispositions:</h4>
              <ul>${details.skillPredispositions.map((s) => `<li>${s}</li>`).join("")}</ul>
            </div>
            <button class="btn btn-next">Next</button>
          `;

          // Animate and show the panel
          raceInfoPanel.classList.add("active");
          raceInfoPanel.style.maxHeight = "3000px";
          raceInfoPanel.style.opacity = "1";

          // Add event listener to the new "Next" button inside the panel
          const raceNextButton = raceInfoPanel.querySelector(".btn-next");
          if (raceNextButton) {
            raceNextButton.addEventListener("click", () => {
              // Load subraces for the selected race
              const subraces = getAvailableSubraces();
              console.log("Selected Race:", currentSelectedRace);
              console.log("Subraces:", subraces);
              loadSubraceOptions(subraces, currentSelectedRace);              

              // Move to subrace selection step
              showStep("step-subrace-selection");
              enableNextButton("step-subrace-selection", false);
            });
          }
        }
      });
    });
  }

  // Subrace selection
  const subraceStep = builder.querySelector(".step-subrace-selection");
  if (subraceStep) {
    const subraceBackButton = subraceStep.querySelector(".btn-back");
    if (subraceBackButton) {
      subraceBackButton.addEventListener("click", () => showStep("step-race-selection"));
    }

    subraceStep.addEventListener("click", (e) => {
      const selectedOption = e.target.closest(".subrace-option");
      if (selectedOption) {
        const subraceName = selectedOption.getAttribute("data-subrace");
        setSubrace(subraceName);

        const subraceNextButton = subraceStep.querySelector(".btn-next");
        if (subraceNextButton) {
          subraceNextButton.disabled = false;
          subraceNextButton.addEventListener("click", () => {
            // Move to the gender selection step
            showStep("step-gender-selection");
          });
        }
      }
    });
  }

  // Gender selection
  const genderStep = builder.querySelector(".step-gender-selection");
  if (genderStep) {
    const genderOptions = genderStep.querySelectorAll(".character-option");
    const genderNextButton = genderStep.querySelector(".btn-next");

    genderOptions.forEach((opt) => {
      opt.addEventListener("click", () => {
        const selectedGender = opt.getAttribute("data-gender");
        setGender(selectedGender);
        genderOptions.forEach((o) => o.classList.remove("selected"));
        opt.classList.add("selected");
        genderNextButton.disabled = false;
      });
    });

    if (genderNextButton) {
      genderNextButton.addEventListener("click", () => showStep("step-physical-selection"));
    }
  }

  // Physical attributes
  const physicalStep = builder.querySelector(".step-physical-selection");
  if (physicalStep) {
    const nextButton = physicalStep.querySelector(".btn-next");

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        const height = document.getElementById("height-input").value;
        const weight = document.getElementById("weight-input").value;
        const age = document.getElementById("age-input").value;
        setPhysicalAttributes(height, weight, age);
        showStep("step-background-selection");
      });
    }
  }

  // Background selection
  const backgroundStep = builder.querySelector(".step-background-selection");
  if (backgroundStep) {
    const nextButton = backgroundStep.querySelector(".btn-next");

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        const homeland = document.getElementById("homeland-select").value;
        const religion = document.getElementById("religion-select").value;
        const devotion = document.getElementById("devotion-select").value;
        setBackground(homeland, religion, devotion);
        showStep("step-summary");
      });
    }
  }

  // Summary step
  const summaryStep = builder.querySelector(".step-summary");
  if (summaryStep) {
    const backButton = summaryStep.querySelector(".btn-back");
    const submitButton = summaryStep.querySelector(".btn-submit");

    if (backButton) {
      backButton.addEventListener("click", () => {
        showStep("step-subrace-selection");
      });
    }

    if (submitButton) {
      submitButton.addEventListener("click", async () => {
        const result = await submitCharacterData();
        console.log(result);
        // After submission, you might:
        // - Redirect the user
        // - Show a confirmation message
        // For now, just log the result.
      });
    }
  }
}

export { initEventListeners };
