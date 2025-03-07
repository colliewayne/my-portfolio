const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjusting for fixed header
        behavior: "smooth",
      });
    }
  });
});

// Toggle mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission

            // Get input values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Basic validation
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Email format validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Show success message
            alert("Your message has been sent successfully!");

            // Optional: Reset form fields
            form.reset();
        });
    } else {
        console.error("Contact form not found.");
    }
});


// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
    