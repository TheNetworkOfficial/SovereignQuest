// builderUI.js
import { subraceDetails } from './builderData.js';

function showStep(stepClass) {
  const allSteps = document.querySelectorAll('.character-builder .step');
  allSteps.forEach((step) => step.classList.remove('active'));

  // Corrected query selector using template literals
  const targetStep = document.querySelector(`.character-builder .${stepClass}`);
  if (targetStep) {
    targetStep.classList.add('active');

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling for better user experience
    });
  }
}

function enableNextButton(stepSelector, enabled) {
  // Corrected query selector using template literals
  const stepElement = document.querySelector(`.character-builder .${stepSelector}`);
  if (!stepElement) return;
  const nextButton = stepElement.querySelector('.btn-next');
  if (nextButton) {
    nextButton.disabled = !enabled;
  }
}

function loadSubraceOptions(subraces, selectedRace) {
  const subraceContainer = document.querySelector(".character-builder .step-subrace-selection .subrace-options");
  const subraceInfoPanel = document.querySelector(".character-builder .step-subrace-selection .subrace-info-panel");
  if (!subraceContainer || !subraceInfoPanel) return;

  subraceContainer.innerHTML = ""; // Clear previous options
  subraceInfoPanel.innerHTML = ""; // Clear info panel content
  let currentSelectedSubrace = null; // Track selected subrace
  let isAnimating = false; // Prevent interaction during animation

  subraces.forEach((subraceName) => {
    const subrace = subraceDetails[selectedRace][subraceName];
    const subraceDiv = document.createElement("div");
    subraceDiv.classList.add("subrace-option");
    subraceDiv.setAttribute("data-subrace", subraceName);
    subraceDiv.innerHTML = `
      <img src="${subrace.image}" alt="${subraceName}" />
      <h3>${subraceName}</h3>
    `;
    subraceContainer.appendChild(subraceDiv);

    subraceDiv.addEventListener("click", () => {
      if (isAnimating) return;

      if (currentSelectedSubrace === subraceName) {
        // Retract the panel
        isAnimating = true;
        subraceInfoPanel.style.maxHeight = "0";
        subraceInfoPanel.style.opacity = "0";

        setTimeout(() => {
          subraceInfoPanel.classList.remove("active");
          subraceInfoPanel.innerHTML = ""; // Clear content
          isAnimating = false;
        }, 1500); // Match CSS animation duration

        subraceDiv.classList.remove("selected");
        currentSelectedSubrace = null;
        return;
      }

      // Switch to a new subrace
      currentSelectedSubrace = subraceName;
      subraceContainer.querySelectorAll(".subrace-option").forEach((o) => o.classList.remove("selected"));
      subraceDiv.classList.add("selected");

      subraceInfoPanel.innerHTML = `
        <h3>${subraceName}</h3>
        <p>${subrace.lore}</p>
        <div class="subrace-info">
          <h4>Primary Stat Adjustments:</h4>
          <div class="stats">
            ${Object.entries(subrace.primaryStats)
              .map(([stat, value]) => `
                <div class="stat">
                  <div class="stat-label"><strong>${stat}:</strong></div>
                  <div class="stat-value">${value}</div>
                </div>
              `).join("")}
          </div>
        </div>
        <div class="subrace-info">
          <h4>Sub-Racial Bonus Traits:</h4>
          <ul>${subrace.bonuses.map((b) => `<li>${b}</li>`).join("")}</ul>
        </div>
        <div class="subrace-info">
          <h4>Sub-Racial Penalty Traits:</h4>
          <ul>${subrace.penalties.map((p) => `<li>${p}</li>`).join("")}</ul>
        </div>
        <div class="subrace-info">
          <h4>Sub-Race Skills:</h4>
          <ul>${subrace.racialSkills.map((s) => `<li>${s}</li>`).join("")}</ul>
        </div>
        <div class="subrace-info">
          <h4>Skill Predispositions:</h4>
          <ul>${subrace.skillPredispositions.map((s) => `<li>${s}</li>`).join("")}</ul>
        </div>
        <button class="btn btn-next">Next</button>
      `;

      subraceInfoPanel.classList.add("active");
      subraceInfoPanel.style.maxHeight = "1000px";
      subraceInfoPanel.style.opacity = "1";
    });
  });
}

/* function loadGenderOptions(genders) {
  const genderContainer = document.querySelector(".character-builder .step-gender-selection .options");
  genderContainer.innerHTML = genders
    .map((gender) => `<div class="character-option" data-gender="${gender}">${gender}</div>`)
    .join("");
}

function loadPhysicalAttributesForm() {
  const formContainer = document.querySelector(".character-builder .step-physical-selection .options");
  formContainer.innerHTML = `
    <label>Height: <input type="text" id="height-input"></label>
    <label>Weight: <input type="text" id="weight-input"></label>
    <label>Age: <input type="text" id="age-input"></label>
    <button class="btn btn-next">Next</button>
  `;
}

function loadBackgroundOptions(homelands, religions, devotions) {
  const backgroundContainer = document.querySelector(".character-builder .step-background-selection .options");
  backgroundContainer.innerHTML = `
    <label>Homeland: 
      <select id="homeland-select">
        ${homelands.map((h) => `<option value="${h}">${h}</option>`).join("")}
      </select>
    </label>
    <label>Religion: 
      <select id="religion-select">
        ${religions.map((r) => `<option value="${r}">${r}</option>`).join("")}
      </select>
    </label>
    <label>Devotion: 
      <select id="devotion-select">
        ${devotions.map((d) => `<option value="${d}">${d}</option>`).join("")}
      </select>
    </label>
    <button class="btn btn-next">Next</button>
  `;
} */

function updateCharacterSummary(summary) {
  const summaryContainer = document.querySelector('.character-builder .step-summary .character-summary');
  if (!summaryContainer) return;

  summaryContainer.innerHTML = `
    <p><strong>Race:</strong> ${summary.race || 'Not Selected'}</p>
    <p><strong>Subrace:</strong> ${summary.subrace || 'Not Selected'}</p>
  `;
}

export {
  showStep,
  enableNextButton,
  loadSubraceOptions,
  updateCharacterSummary
};
