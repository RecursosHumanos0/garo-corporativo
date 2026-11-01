// ========================================
// MENÚ DE NAVEGACIÓN MÓVIL
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}


// ========================================
// ANIMACIONES AL DESPLAZARSE
// ========================================

const animatedElements = document.querySelectorAll(
  "main section, .service-card, .steps > div"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  animatedElements.forEach(element => {
    observer.observe(element);
  });

} else {
  animatedElements.forEach(element => {
    element.classList.add("visible");
  });
}


// ========================================
// APARICIÓN ESCALONADA
// ========================================

document.querySelectorAll(".service-card, .steps > div")
  .forEach((element, index) => {
    element.style.transitionDelay = `${(index % 5) * 120}ms`;
  });