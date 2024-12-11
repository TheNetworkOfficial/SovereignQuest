document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".characters-tab-button");
  let isAnimating = false;

  tabButtons.forEach((button) => {
    button.addEventListener("click", async function () {
      if (isAnimating) {
        console.log("Animation in progress, click ignored");
        return;
      }

      isAnimating = true;

      const target = this.getAttribute("data-target");
      const activeButton = document.querySelector(".characters-tab-button.active");
      const activeTabContent = document.querySelector(".characters-tab-content.active");
      const newTabContent = document.getElementById(target);

      // Disable tab buttons
      tabButtons.forEach((btn) => (btn.disabled = true));

      if (activeTabContent) {
        // Play wipe-out animation on the current banner
        await playWipeOutAnimation(activeTabContent);

        // Remove active classes after animation completes
        activeTabContent.classList.remove("active");
        if (activeButton) activeButton.classList.remove("active");
      }

      // Now, add active class to new content
      this.classList.add("active");
      newTabContent.classList.add("active");

      // Hide the new tab content immediately
      newTabContent.style.display = "none";

      // Play wipe-in animation on the new banner
      await playWipeInAnimation(newTabContent);

      // Re-enable tab buttons
      tabButtons.forEach((btn) => (btn.disabled = false));

      isAnimating = false;
    });
  });

  function playWipeOutAnimation(tabContent) {
    return new Promise((resolve) => {
      const banner = tabContent.querySelector(".banner");
      const content = banner.querySelector(".content");

      let bannerAnimationEnded = false;
      let contentAnimationEnded = false;

      function checkIfAnimationEnded() {
        if (bannerAnimationEnded && contentAnimationEnded) {
          // Remove z-index
          tabContent.style.zIndex = '';
          resolve();
        }
      }

      // Set higher z-index to ensure old content is on top during wipe-out
      tabContent.style.zIndex = '2';

      // Make sure banner is visible during wipe-out
      banner.style.visibility = 'visible';

      // Start content fade-out animation
      content.style.animation = "fadeOut 1s forwards";

      content.addEventListener("animationend", function contentFadeOutEnd(event) {
        if (event.target === content && event.animationName === 'fadeOut') {
          content.removeEventListener("animationend", contentFadeOutEnd);
          // Ensure content is hidden
          content.style.opacity = "0";
          // Reset content animation
          content.style.animation = "";
          contentAnimationEnded = true;
          checkIfAnimationEnded();
        }
      });

      // Start wipe-out animation
      banner.style.animation = "wipeOut 2s forwards";

      banner.addEventListener("animationend", function bannerWipeOutEnd(event) {
        if (event.target === banner && event.animationName === 'wipeOut') {
          banner.removeEventListener("animationend", bannerWipeOutEnd);
          // Ensure banner remains hidden
          banner.style.clipPath = "inset(0 100% 0 0)";
          // Reset banner animation
          banner.style.animation = "";
          // Hide banner after animation
          banner.style.visibility = 'hidden';
          bannerAnimationEnded = true;
          checkIfAnimationEnded();
        }
      });
    });
  }

  function playWipeInAnimation(tabContent) {
    return new Promise((resolve) => {
      // Set the new tab content's display back to 'block'
      tabContent.style.display = "block";

      const banner = tabContent.querySelector(".banner");
      const content = banner.querySelector(".content");

      let bannerAnimationEnded = false;
      let contentAnimationEnded = false;

      function checkIfAnimationEnded() {
        if (bannerAnimationEnded && contentAnimationEnded) {
          resolve();
        }
      }

      // Ensure content is hidden initially
      content.style.opacity = "0";

      // Ensure banner starts from fully hidden state
      banner.style.clipPath = "inset(0 100% 0 0)";

      // Make sure banner is visible during wipe-in
      banner.style.visibility = 'visible';

      // Start wipe-in animation
      banner.style.animation = "wipeIn 2s forwards";

      // Delay content fade-in to sync with wipe-in
      setTimeout(() => {
        content.style.animation = "fadeIn 1s forwards";
      }, 2000); // Start fadeIn after 2 seconds (adjust as needed)

      banner.addEventListener("animationend", function bannerWipeInEnd(event) {
        if (event.target === banner && event.animationName === 'wipeIn') {
          banner.removeEventListener("animationend", bannerWipeInEnd);
          // Ensure banner remains fully visible
          banner.style.clipPath = "inset(0 0% 0 0)";
          // Reset banner animation
          banner.style.animation = "";
          bannerAnimationEnded = true;
          checkIfAnimationEnded();
        }
      });

      content.addEventListener("animationend", function contentFadeInEnd(event) {
        if (event.target === content && event.animationName === 'fadeIn') {
          content.removeEventListener("animationend", contentFadeInEnd);
          // Ensure content remains visible
          content.style.opacity = "1";
          // Reset content animation
          content.style.animation = "";
          contentAnimationEnded = true;
          checkIfAnimationEnded();
        }
      });
    });
  }
});
