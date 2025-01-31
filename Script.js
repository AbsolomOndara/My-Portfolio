// Optional: Dark/Light Mode Toggle (Without Persistence)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDarkMode = body.classList.contains('dark-theme');
  themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu after clicking a link
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
    }
  });
});

// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // Get all sections
  const navLinks = document.querySelectorAll(".nav-links li a"); // Get all nav links

  function highlightActiveSection() {
    let currentSection = "";

    // Loop through sections to find the one in view
    sections.forEach((section) => {
      const sectionTop = section.offsetTop; // Top position of the section
      const sectionHeight = section.clientHeight; // Height of the section
      if (window.scrollY >= sectionTop - sectionHeight * 0.25) {
        currentSection = section.getAttribute("id"); // Get the section's ID
      }
    });

    // Add/remove the isActive class based on the current section
    navLinks.forEach((link) => {
      link.classList.remove("isActive"); // Remove active class from all links
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("isActive"); // Add active class to the current link
      }
    });
  }

  // Run the function on page load and scroll
  window.addEventListener("scroll", highlightActiveSection);
  highlightActiveSection(); // Call it once on page load
});
