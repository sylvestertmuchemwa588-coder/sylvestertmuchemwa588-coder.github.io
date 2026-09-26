// ===============================
// ST WEB & INNOVATION
// Replace this number with your own WhatsApp number.
// Use international format WITHOUT the + sign.
// Example South Africa: 27821234567
// ===============================
const WHATSAPP_NUMBER = "0629133037";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (WHATSAPP_NUMBER === "YOUR_NUMBER_HERE") {
    alert("First replace YOUR_NUMBER_HERE in script.js with your WhatsApp number.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const business = document.getElementById("business").value.trim();
  const message = document.getElementById("message").value.trim();

  const text =
    `Hi ST Web & Innovation!%0A%0A` +
    `My name is ${encodeURIComponent(name)}.%0A` +
    `My business is ${encodeURIComponent(business)}.%0A%0A` +
    `I need a website because:%0A${encodeURIComponent(message)}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
});
