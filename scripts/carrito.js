// Array de productos para calcular precios (debe ser el mismo )
const productos = [
  {
    id: 1,
    nombre: "PlayStation 5",
    precio: 599990,
    imagen:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&w=400",
    categoria: "Consolas",
  },
  {
    id: 2,
    nombre: "Xbox Series X",
    precio: 549990,
    imagen:
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&w=400",
    categoria: "Consolas",
  },
  {
    id: 3,
    nombre: "Nintendo Switch OLED",
    precio: 399990,
    imagen:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-4.0.3&w=400",
    categoria: "Consolas",
  },
  {
    id: 4,
    nombre: "Teclado Mecánico RGB",
    precio: 89990,
    imagen:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&w=400",
    categoria: "Accesorios",
  },
  {
    id: 5,
    nombre: "Mouse Gaming",
    precio: 49990,
    imagen:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&w=400",
    categoria: "Accesorios",
  },
  {
    id: 6,
    nombre: "Headset Gamer 7.1",
    precio: 79990,
    imagen:
      "https://images.unsplash.com/photo-1599660646820-4cdfe6d531f6?ixlib=rb-4.0.3&w=400",
    categoria: "Accesorios",
  },
  {
    id: 7,
    nombre: "Monitor 144Hz",
    precio: 299990,
    imagen:
      "https://images.unsplash.com/photo-1643019535780-e4c5f26a8f28?ixlib=rb-4.0.3&w=400",
    categoria: "Accesorios",
  },
  {
    id: 8,
    nombre: "Juego FIFA 2024",
    precio: 49990,
    imagen:
      "https://images.unsplash.com/photo-1614294149710-32eec425a251?ixlib=rb-4.0.3&w=400",
    categoria: "Juegos",
  },
  {
    id: 9,
    nombre: "Call of Duty: Modern Warfare",
    precio: 59990,
    imagen:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&w=400",
    categoria: "Juegos",
  },
  {
    id: 10,
    nombre: "Silla Gamer Profesional",
    precio: 199990,
    imagen:
      "https://images.unsplash.com/photo-1598301257982-0cf01499abb2?ixlib=rb-4.0.3&w=400",
    categoria: "Accesorios",
  },
  {
    id: 11,
    nombre: "Alfombrilla Gaming XL",
    precio: 29990,
    imagen:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&w=400",
    categoria: "Accesorios",
  },
  {
    id: 12,
    nombre: "Webcam 4K Streaming",
    precio: 89990,
    imagen:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400",
    categoria: "Accesorios",
  },
];

// Variables globales
let carrito = [];

// Función para cargar el carrito desde localStorage
function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("carrito");
  carrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];
  actualizarVistaCarrito();
  actualizarContadorCarrito();
}

// Función para actualizar la vista del carrito
function actualizarVistaCarrito() {
  const emptyCart = document.getElementById("empty-cart");
  const cartWithItems = document.getElementById("cart-with-items");
  const cartItems = document.getElementById("cart-items");

  if (carrito.length === 0) {
    emptyCart.style.display = "block";
    cartWithItems.style.display = "none";
    return;
  }

  emptyCart.style.display = "none";
  cartWithItems.style.display = "block";

  // Limpiar items anteriores
  cartItems.innerHTML = "";

  // Agregar items actuales
  carrito.forEach((item) => {
    const producto = productos.find((p) => p.id === item.id);
    if (producto) {
      const itemElement = document.createElement("div");
      itemElement.className = "cart-item";
      itemElement.innerHTML = `
                <img src="${producto.imagen}" alt="${
        producto.nombre
      }" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${producto.nombre}</h4>
                    <p class="cart-item-price">$${(
                      producto.precio * item.cantidad
                    ).toLocaleString("es-CL")}</p>
                    <div class="cart-item-controls">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="cambiarCantidad(${
                              item.id
                            }, -1)">-</button>
                            <input type="number" value="${
                              item.cantidad
                            }" min="1" class="quantity-input" 
                                   onchange="actualizarCantidad(${
                                     item.id
                                   }, this.value)">
                            <button class="quantity-btn" onclick="cambiarCantidad(${
                              item.id
                            }, 1)">+</button>
                        </div>
                        <button class="btn-remove" onclick="eliminarProducto(${
                          item.id
                        })">
                            <i class="bi bi-trash"></i> Eliminar
                        </button>
                    </div>
                </div>
            `;
      cartItems.appendChild(itemElement);
    }
  });

  actualizarResumen();
}

// Función para actualizar el resumen de compra
function actualizarResumen() {
  let subtotal = 0;

  carrito.forEach((item) => {
    const producto = productos.find((p) => p.id === item.id);
    if (producto) {
      subtotal += producto.precio * item.cantidad;
    }
  });

  // Calcular descuento (10% si el total es mayor a 100.000)
  const descuento = subtotal > 100000 ? subtotal * 0.1 : 0;

  // Calcular envío (gratis sobre 50.000)
  const envio = subtotal > 50000 ? 0 : 5000;

  const total = subtotal - descuento + envio;

  document.getElementById("subtotal").textContent = `$${subtotal.toLocaleString(
    "es-CL"
  )}`;
  document.getElementById(
    "discount"
  ).textContent = `-$${descuento.toLocaleString("es-CL")}`;
  document.getElementById("shipping").textContent =
    envio === 0 ? "Gratis" : `$${envio.toLocaleString("es-CL")}`;
  document.getElementById("total").textContent = `$${total.toLocaleString(
    "es-CL"
  )}`;
}

// Función para cambiar cantidad
function cambiarCantidad(productId, cambio) {
  const itemIndex = carrito.findIndex((item) => item.id === productId);
  if (itemIndex !== -1) {
    carrito[itemIndex].cantidad += cambio;

    // Eliminar si la cantidad es 0
    if (carrito[itemIndex].cantidad <= 0) {
      carrito.splice(itemIndex, 1);
    }

    guardarCarrito();
  }
}

// Función para actualizar cantidad desde input
function actualizarCantidad(productId, nuevaCantidad) {
  const cantidad = parseInt(nuevaCantidad);
  if (isNaN(cantidad) || cantidad < 1) return;

  const itemIndex = carrito.findIndex((item) => item.id === productId);
  if (itemIndex !== -1) {
    carrito[itemIndex].cantidad = cantidad;
    guardarCarrito();
  }
}

// Función para eliminar producto
function eliminarProducto(productId) {
  carrito = carrito.filter((item) => item.id !== productId);
  guardarCarrito();
}

// Función para vaciar carrito
function vaciarCarrito() {
  if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
    carrito = [];
    guardarCarrito();
  }
}

// Función para guardar carrito en localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarCarrito();
}

// Función para actualizar contador del carrito
function actualizarContadorCarrito() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = carrito.reduce(
      (total, item) => total + item.cantidad,
      0
    );
  }
}

// Función para proceder al pago
function procederAlPago() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  // Aquí podrías redirigir a una página de checkout
  alert("¡Redirigiendo al proceso de pago!");
  // window.location.href = 'checkout.html';
}

// Función para continuar comprando
function continuarComprando() {
  window.location.href = "productos.html";
}

// Inicializar event listeners
function inicializarEventListeners() {
  document
    .getElementById("clear-cart")
    .addEventListener("click", vaciarCarrito);
  document
    .getElementById("checkout-btn")
    .addEventListener("click", procederAlPago);
  document
    .getElementById("continue-shopping")
    .addEventListener("click", continuarComprando);
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", () => {
  cargarCarrito();
  inicializarEventListeners();
  console.log("Página de carrito cargada correctamente");
});
