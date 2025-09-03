// ===== Navbar Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    navLinks.classList.remove("active");
  });
});

// ===== Navbar Scroll Effect =====
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// ===== Contact Form Validation =====
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  alert("✅ Thank you for contacting us, " + name + "!");
  this.reset();
});

// ===== Registration Form Validation =====
document.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const phone = document.getElementById("reg-phone").value.trim();
  const program = document.getElementById("reg-program").value;

  if (name === "" || email === "" || phone === "" || program === "") {
    alert("⚠️ Please fill in all fields.");
    return;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phone.match(phonePattern)) {
    alert("⚠️ Please enter a valid 10-digit phone number.");
    return;
  }

  alert("🎉 Thank you " + name + "! You have registered for the " + program + " program.");
  this.reset();
});
