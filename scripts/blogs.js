// blogs.js - Funcionalidad para blogs.html

// Función para actualizar contador del carrito
function actualizarContadorCarrito() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    cartCount.textContent = carrito.reduce(
      (total, item) => total + item.cantidad,
      0
    );
  }
}

// Función para manejar el newsletter
function manejarNewsletter() {
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;

      if (email) {
        alert(`¡Gracias por suscribirte con: ${email}!`);
        e.target.reset();
      }
    });
  }
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", () => {
  actualizarContadorCarrito();
  manejarNewsletter();
  console.log("Página de blogs cargada correctamente");
});
