// blog-detalle.js - Funcionalidad para páginas de detalle de blog

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

// Función para manejar compartir en redes sociales
function manejarCompartir() {
  document.querySelectorAll(".blog-share a").forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      const url = window.location.href;
      const title = document.title;

      let shareUrl;

      if (e.target.closest(".bi-facebook")) {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
      } else if (e.target.closest(".bi-twitter")) {
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(url)}`;
      } else if (e.target.closest(".bi-whatsapp")) {
        shareUrl = `https://wa.me/?text=${encodeURIComponent(
          title + " " + url
        )}`;
      }

      if (shareUrl) {
        window.open(shareUrl, "_blank", "width=600,height=400");
      }
    });
  });
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", () => {
  actualizarContadorCarrito();
  manejarCompartir();
  console.log("Página de detalle de blog cargada correctamente");
});
