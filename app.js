const ctaBtn = document.getElementById("ctaBtn");
const contactSection = document.getElementById("contact");
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

// Tugma bosilganda kontaktga scroll
ctaBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});

// Forma yuborilganda
form.addEventListener("submit", (e) => {
    e.preventDefault();
    message.textContent = "✅ So‘rovingiz qabul qilindi, tez orada bog‘lanamiz!";
    form.reset();
});
