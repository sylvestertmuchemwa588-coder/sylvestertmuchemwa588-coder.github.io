const WHATSAPP_NUMBER = "YOUR_NUMBER_HERE";

const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
if (menu) {
  menu.addEventListener("click", () => {
    links.classList.toggle("open");
    menu.textContent = links.classList.contains("open") ? "✕" : "☰";
  });
}
document.querySelectorAll(".links a").forEach(a => a.addEventListener("click", () => {
  links.classList.remove("open");
  menu.textContent = "☰";
}));

document.getElementById("year").textContent = new Date().getFullYear();

const data = {
  barbershop: ["BUILD PROFILE // BARBERSHOP", "BARBERSHOP WEBSITE", "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=85", "A service website showing cuts, prices, barber profiles, gallery, opening times and a fast booking/contact route.", ["Service menu + prices", "Photo gallery", "Barber/team profiles", "WhatsApp booking CTA", "Opening times + location", "Reviews / testimonials"]],
  automotive: ["BUILD PROFILE // AUTOMOTIVE", "AUTOMOTIVE WEBSITE", "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=85", "A workshop website focused on services, repairs, photos, before/after work, location and enquiry generation.", ["Repair/service list", "Vehicle gallery", "Before + after photos", "Quote request form", "Location + hours", "WhatsApp enquiries"]],
  restaurant: ["BUILD PROFILE // RESTAURANT", "RESTAURANT WEBSITE", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85", "A visual restaurant site putting the menu, food photography, opening hours, location and contact/order options in front of customers.", ["Digital menu", "Food gallery", "Opening hours", "Location / map section", "Order/contact CTA", "Specials + announcements"]],
  mobile: ["BUILD PROFILE // MOBILE / TECH", "MOBILE & TECH WEBSITE", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85", "A product-focused site for phone shops, repair stores or technology businesses, with clear products, specifications, prices and support.", ["Product catalogue", "Specifications", "Price sections", "Repair/service list", "Stock enquiry CTA", "WhatsApp support"]],
  engineering: ["BUILD PROFILE // ENGINEERING", "ENGINEERING WEBSITE", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85", "A technical company website explaining capabilities, projects, equipment, industries served and how clients can enquire.", ["Capabilities", "Project portfolio", "Equipment / facilities", "Technical company profile", "Industries served", "Project enquiry CTA"]],
  other: ["BUILD PROFILE // CUSTOM", "CUSTOM BUSINESS WEBSITE", "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=85", "A custom structure based on what the business actually does, built around the questions its customers need answered.", ["Custom page structure", "Services / products", "Images + branding", "Contact system", "Mobile responsive", "Custom call-to-action"]]
};

const panel = document.getElementById("industry-panel");
document.querySelectorAll(".industry-card").forEach(card => card.addEventListener("click", () => {
  const d = data[card.dataset.industry];
  document.getElementById("panel-tag").textContent = d[0];
  document.getElementById("panel-title").textContent = d[1];
  document.getElementById("panel-img").src = d[2];
  document.getElementById("panel-description").textContent = d[3];
  document.getElementById("panel-features").innerHTML = d[4].map(x => `<div>✓ ${x}</div>`).join("");
  document.getElementById("panel-request").dataset.type = d[1];
  panel.classList.add("open");
  panel.scrollIntoView({ behavior: "smooth", block: "center" });
}));
document.querySelector(".close-panel").addEventListener("click", () => panel.classList.remove("open"));

document.getElementById("panel-request").addEventListener("click", e => {
  const t = e.currentTarget.dataset.type || "";
  setTimeout(() => {
    document.getElementById("type").value = t.includes("BARBERSHOP") ? "Barbershop" : t.includes("AUTOMOTIVE") ? "Automotive" : t.includes("RESTAURANT") ? "Restaurant" : t.includes("MOBILE") ? "Mobile / Tech" : t.includes("ENGINEERING") ? "Engineering" : "Other business";
  }, 100);
});

// Build a clean WhatsApp message from the customer's answers.
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  if (WHATSAPP_NUMBER === "YOUR_NUMBER_HERE") {
    alert("The website owner needs to add their WhatsApp number in script.js first.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const business = document.getElementById("business").value.trim();
  const type = document.getElementById("type").value;
  const message = document.getElementById("message").value.trim();
  const features = document.getElementById("features").value.trim() || "None specified";

  const whatsappMessage = [
    "Hi ST Web & Innovation!",
    "",
    "WEBSITE BUILD REQUEST",
    "====================",
    `Client name: ${name}`,
    `Business name: ${business}`,
    `Website type: ${type}`,
    "",
    "WHAT THE CUSTOMER NEEDS:",
    message,
    "",
    "EXTRA FEATURES:",
    features,
    "",
    "Please let me know what information, photos, logo and details you need from me to start the build."
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
  window.location.href = url;
});
