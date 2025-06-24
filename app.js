const hamburger = document.getElementById("hamburger-menu");
const mainNav = document.getElementById("nav-links");
const hamburgerIcon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
    mainNav.classList.toggle("active");

    const secondaryNav = document.getElementById("secondary-nav");
    if (secondaryNav) secondaryNav.classList.toggle("active");

    // Toggle between bars and cross
    hamburgerIcon.classList.toggle("fa-bars");
    hamburgerIcon.classList.toggle("fa-times");

    // Toggle red background and white icon
    hamburger.classList.toggle("active");
});

    document.addEventListener("DOMContentLoaded", function () {
        const container = document.querySelector(".image-container");
        const backBtn = document.querySelector(".back-btn");
        const nextBtn = document.querySelector(".next-btn");

        const scrollAmount = 400; // Adjust this based on how far you want to scroll

        nextBtn.addEventListener("click", () => {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        backBtn.addEventListener("click", () => {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    });

  const container = document.querySelector('.image-container');
  let scrollAmount = 1; // speed of scrolling

  function autoScroll() {
    container.scrollLeft += scrollAmount;

    // When reaching the end, reset to start for infinite loop
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollLeft = 0;
    }
  }

  // Scroll every 20ms (adjust as needed for speed)
  let scrollInterval = setInterval(autoScroll, 20);

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
