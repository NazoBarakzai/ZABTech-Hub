const hamburger = document.getElementById("hamburger-menu");
const mainNav = document.getElementById("nav-links");
const secondaryNav = document.getElementById("secondary-nav");

// Toggle the active class on click
hamburger.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    secondaryNav.classList.toggle("active");
});


const nextBtn = document.querySelector('.next-btn');
const backBtn = document.querySelector('.back-btn');
const imageContainer = document.querySelector('.image-container');

// Scroll to next image when the "Next" button is clicked
nextBtn.addEventListener('click', () => {
    const imageWidth = document.querySelector('a img').offsetWidth; // Get the width of an image
    imageContainer.scrollBy({
        left: imageWidth,  // Scroll by the width of one image
        behavior: 'smooth' // Smooth scrolling effect
    });
});
// Ensure buttons stay vertically centered relative to image container
function positionButtons() {
    const container = document.querySelector('.background-image');
    const nextBtn = document.querySelector('.next-btn');
    const backBtn = document.querySelector('.back-btn');

    const containerHeight = container.offsetHeight;

    nextBtn.style.top = `${containerHeight / 2}px`;
    backBtn.style.top = `${containerHeight / 2}px`;
}

// Reposition buttons on load and resize
window.addEventListener('load', positionButtons);
window.addEventListener('resize', positionButtons);
// Scroll to previous image when the "Back" button is clicked
backBtn.addEventListener('click', () => {
    const imageWidth = document.querySelector('a img').offsetWidth; // Get the width of an image
    imageContainer.scrollBy({
        left: -imageWidth, // Scroll by the width of one image (in the opposite direction)
        behavior: 'smooth' // Smooth scrolling effect
    });
});

    // JavaScript function to toggle the extra information section
    function toggleLearnMore() {
      const extraInfo = document.querySelector('.extra-info');
      const button = document.querySelector('.learn-more-btn');
      // Ensure buttons stay vertically centered relative to image container

      // Toggle visibility of the extra information
      if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
        extraInfo.style.display = "block";
        button.textContent = "Show Less";
      } else {
        extraInfo.style.display = "none";
        button.textContent = "Learn More";
      }
    }
