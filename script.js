// ST Web & Innovation V4
// Change this number to your business WhatsApp number.
// Use international format WITHOUT +, spaces or brackets.
// Example South Africa: 27821234567
const ST_WHATSAPP_NUMBER = "O629133037";

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const typeSelect = document.getElementById("businessType");
const packageSelect = document.getElementById("packagePrice");

const packages = {
  "Barbershop": "R3,500 — Barbershop",
  "Mobile / Phone Shop": "R4,000 — Mobile / Phone Shop",
  "Restaurant": "R4,000 — Restaurant",
  "Automotive": "R4,500 — Automotive",
  "Engineering": "R5,000 — Engineering",
  "General Business": "R3,500 — General Business",
  "Custom / Advanced": "From R6,000 — Custom / Advanced"
};

document.querySelectorAll(".business-card").forEach(card => {
  card.querySelector(".select-btn").addEventListener("click", () => {
    const type = card.dataset.type;
    typeSelect.value = type;
    packageSelect.value = packages[type] || "";
    document.getElementById("request").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("websiteForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const get = id => document.getElementById(id).value.trim();

  const name = get("clientName");
  const business = get("businessName");
  const phone = get("clientPhone");
  const type = get("businessType");
  const packagePrice = get("packagePrice");
  const location = get("location") || "Not provided";
  const hours = get("hours") || "Not provided";
  const pages = get("pages") || "Not provided";
  const services = get("services") || "Not provided";
  const features = get("features") || "Not provided";
  const assets = get("assets");
  const description = get("description") || "Not provided";

  const message =
`ST WEB & INNOVATION
NEW WEBSITE REQUEST

CLIENT INFORMATION
Name: ${name}
WhatsApp: ${phone}

BUSINESS
Business name: ${business}
Business type: ${type}

WEBSITE PACKAGE
${packagePrice}

BUSINESS INFORMATION
Location: ${location}
Opening hours: ${hours}

SERVICES / PRODUCTS
${services}

PAGES NEEDED
${pages}

REQUESTED FEATURES
${features}

LOGO / PHOTOS
${assets}

ADDITIONAL REQUIREMENTS
${description}

I would like to discuss this website project with ST Web & Innovation.`;

  const url = `https://wa.me/${ST_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

document.getElementById("year").textContent = new Date().getFullYear();

const footerWhatsApp = document.getElementById("footerWhatsApp");
footerWhatsApp.href = `https://wa.me/${ST_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi ST Web & Innovation, I would like to ask about getting a website for my business."
)}`;
