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
// ANIMACIONES AL DESPLAZARSE POR LA PÁGINA
// ========================================

const animatedElements = document.querySelectorAll("[data-animate]");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  animatedElements.forEach(element => {
    observer.observe(element);
  });

} else {

  // Compatibilidad con navegadores antiguos

  animatedElements.forEach(element => {
    element.classList.add("visible");
  });

}


// ========================================
// APARICIÓN ESCALONADA DE LAS DIVISIONES
// Y ETAPAS DE LA METODOLOGÍA
// ========================================

const animatedCards = document.querySelectorAll(
  ".service-card, .steps > div"
);

animatedCards.forEach((card, index) => {

  card.style.transitionDelay = `${(index % 5) * 120}ms`;

});