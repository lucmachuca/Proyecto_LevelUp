// Array de productos
const productos = [
  {
    id: 1,
    nombre: "PlayStation 5",
    precio: 599990,
    imagen:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&w=400",
    imagenes: [
      "https://media.falabella.com/falabellaCL/126614736_01/w=1500,h=1500,fit=pad",
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&w=400",
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&w=400&crop=closeup",
    ],
    categoria: "Consolas",
    descripcion:
      "Consola de última generación con gráficos 4K y SSD ultrarrápido. Experimenta velocidades de carga increíblemente rápidas con un SSD de ultra alta velocidad.",
    stock: 15,
    especificaciones: {
      marca: "Sony",
      modelo: "PlayStation 5",
      almacenamiento: "825 GB SSD",
      resolucion: "4K UHD a 120Hz",
      conectividad: "WiFi 6, Bluetooth 5.1",
      incluye: "Mando DualSense, cables HDMI y alimentación, base",
    },
  },
  {
    id: 2,
    nombre: "Xbox Series X",
    precio: 549990,
    imagen:
      "https://media.falabella.com/falabellaCL/135549863_01/w=1500,h=1500,fit=pad",
    imagenes: [
      "https://media.falabella.com/falabellaCL/135549863_01/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/135549863_02/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/135549863_05/w=1500,h=1500,fit=pad",
    ],
    categoria: "Consolas",
    descripcion:
      "Potencia y rendimiento para gaming de alta calidad. La Xbox Series X ofrece velocidades de cuadro de hasta 120 FPS.",
    stock: 8,
    especificaciones: {
      marca: "Microsoft",
      modelo: "Xbox Series X",
      almacenamiento: "1 TB SSD",
      resolucion: "4K UHD a 120Hz",
      conectividad: "WiFi 5, Bluetooth 5.0",
      incluye: "Mando inalámbrico, cables, base",
    },
  },
  {
    id: 3,
    nombre: "Nintendo Switch OLED",
    precio: 399990,
    imagen:
      "https://media.falabella.com/falabellaCL/123426297_01/w=1500,h=1500,fit=pad",
    imagenes: [
      "https://media.falabella.com/falabellaCL/123426297_01/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/123426297_02/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/123426297_05/w=1500,h=1500,fit=pad",
    ],
    categoria: "Consolas",
    descripcion:
      "Versátil consola híbrida con pantalla OLED. Juega en TV o en modo portátil con la vibrante pantalla OLED de 7 pulgadas.",
    stock: 12,
    especificaciones: {
      marca: "Nintendo",
      modelo: "Switch OLED",
      almacenamiento: "64 GB",
      resolucion: "720p OLED",
      conectividad: "WiFi, Bluetooth",
      incluye: "Consola, base, mandos Joy-Con",
    },
  },
  {
    id: 4,
    nombre: "Teclado Mecánico RGB",
    precio: 89990,
    imagen:
      "https://media.falabella.com/falabellaCL/116586411_05/w=1500,h=1500,fit=pad",
    imagenes: [
      "https://media.falabella.com/falabellaCL/116586411_05/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/116586411_02/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/116586411_03/w=1500,h=1500,fit=pad",
    ],
    categoria: "Accesorios",
    descripcion:
      "Teclado gaming con retroiluminación RGB personalizable. Switches mecánicos para una respuesta táctil precisa.",
    stock: 20,
    especificaciones: {
      marca: "Redragon",
      modelo: "Kumara",
      tipo: "Mecánico",
      retroiluminacion: "RGB",
      conectividad: "USB",
      switches: "Outemu Blue",
    },
  },
  {
    id: 5,
    nombre: "Mouse Gaming",
    precio: 49990,
    imagen:
      "https://fernapetcl.vtexassets.com/arquivos/ids/164101-800-auto?v=637673227740670000&width=800&height=auto&aspect=true",
    imagenes: [
      "https://fernapetcl.vtexassets.com/arquivos/ids/164104-1600-auto?v=637673228038430000&width=1600&height=auto&aspect=true",
      "https://fernapetcl.vtexassets.com/arquivos/ids/164106-1600-auto?v=637673228230300000&width=1600&height=auto&aspect=true",
      "https://fernapetcl.vtexassets.com/arquivos/ids/164108-1600-auto?v=637673228375630000&width=1600&height=auto&aspect=true",
    ],
    categoria: "Accesorios",
    descripcion:
      "Precisión máxima para juegos competitivos. Sensor óptico de 16000 DPI y diseño ergonómico para largas sesiones.",
    stock: 25,
    especificaciones: {
      marca: "Logitech",
      modelo: "G502",
      dpi: "16000",
      botones: "11 programables",
      conectividad: "USB",
      peso: "121g",
    },
  },
  {
    id: 6,
    nombre: "Headset Gamer 7.1",
    precio: 79990,
    imagen:
      "https://media.falabella.com/falabellaCL/17306089_1/w=1500,h=1500,fit=pad",
    imagenes: [
      "https://media.falabella.com/falabellaCL/17306089_1/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/17306089_2/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/17306089_3/w=1500,h=1500,fit=pad",
    ],
    categoria: "Accesorios",
    descripcion:
      "Sonido surround para una experiencia inmersiva. Audio 7.1 virtual con micrófono cancelador de ruido.",
    stock: 18,
    especificaciones: {
      marca: "HyperX",
      modelo: "Cloud II",
      audio: "7.1 virtual",
      microfono: "Cancelación de ruido",
      conectividad: "USB",
      compatibilidad: "PC, PS4, PS5",
    },
  },
  {
    id: 7,
    nombre: "Monitor 144Hz",
    precio: 299990,
    imagen:
      "https://media.falabella.com/falabellaCL/133722045_01/w=1500,h=1500,fit=pad",
    imagenes: [
      "https://media.falabella.com/falabellaCL/133722045_01/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/133722045_02/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/133722045_05/w=1500,h=1500,fit=pad",
    ],
    categoria: "Accesorios",
    descripcion:
      "Fluidez visual para gaming competitivo. Panel IPS de 27 pulgadas con tasa de refresco de 144Hz y tiempo de respuesta 1ms.",
    stock: 10,
    especificaciones: {
      marca: "ASUS",
      modelo: "TUF Gaming VG279Q",
      tamaño: "27 pulgadas",
      resolucion: "1920x1080",
      refresco: "144Hz",
      respuesta: "1ms",
    },
  },
  {
    id: 8,
    nombre: "Juego FIFA 2025",
    precio: 49990,
    imagen:
      "https://clsonyb2c.vtexassets.com/arquivos/ids/464492-1600-auto?v=638587159902400000&width=1600&height=auto&aspect=true",
    imagenes: [
      "https://clsonyb2c.vtexassets.com/arquivos/ids/464492-1600-auto?v=638587159902400000&width=1600&height=auto&aspect=true",
      "https://clsonyb2c.vtexassets.com/arquivos/ids/464493-1600-auto?v=638587159967170000&width=1600&height=auto&aspect=true",
      "https://clsonyb2c.vtexassets.com/arquivos/ids/464494-1600-auto?v=638587160060030000&width=1600&height=auto&aspect=true",
    ],
    categoria: "Juegos",
    descripcion:
      "El mejor fútbol en tu consola. Modo carrera mejorado, gráficos hyper-realistas y todos los estadios y ligas oficiales.",
    stock: 0,
    especificaciones: {
      marca: "EA Sports",
      plataforma: "PS5, Xbox Series X|S, PC",
      jugadores: "1-4",
      online: "Sí",
      idioma: "Español",
      edad: "3+",
    },
  },
  {
    id: 9,
    nombre: "Call of Duty: Black ops 6",
    precio: 59990,
    imagen:
      "https://clsonyb2c.vtexassets.com/arquivos/ids/464506-1600-auto?v=638587175232800000&width=1600&height=auto&aspect=true",
    imagenes: [
      "https://clsonyb2c.vtexassets.com/arquivos/ids/464506-1600-auto?v=638587175232800000&width=1600&height=auto&aspect=true",
      "https://clsonyb2c.vtexassets.com/arquivos/ids/464507-1600-auto?v=638914860747830000&width=1600&height=auto&aspect=true",
      "https://clsonyb2c.vtexassets.com/arquivos/ids/464509-1600-auto?v=638914860747830000&width=1600&height=auto&aspect=true",
    ],
    categoria: "Juegos",
    descripcion:
      "Acción intensa y gráficos realistas. Campaña emocionante y multijugador competitivo con nuevos mapas y modos.",
    stock: 15,
    especificaciones: {
      marca: "Activision",
      plataforma: "PS5, Xbox Series X|S, PC",
      jugadores: "1-4",
      online: "Sí",
      idioma: "Español",
      edad: "18+",
    },
  },
  {
    id: 10,
    nombre: "Silla Gamer Profesional",
    precio: 199990,
    imagen:
      "https://media.falabella.com/falabellaCL/129735555_01/w=1500,h=1500,fit=pad",
    imagenes: [
      "https://media.falabella.com/falabellaCL/129735555_01/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/129735555_04/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/129735555_02/w=1500,h=1500,fit=pad",
    ],
    categoria: "Accesorios",
    descripcion:
      "Comodidad ergonómica para largas sesiones. Soporte lumbar, reposacabezas ajustable y materiales de alta calidad.",
    stock: 5,
    especificaciones: {
      marca: "DXRacer",
      modelo: "Formula Series",
      material: "Cuero sintético",
      ajustes: "Altura, inclinación",
      pesoMax: "120kg",
      garantia: "2 años",
    },
  },
  {
    id: 11,
    nombre: "Alfombrilla Gaming XL",
    precio: 29990,
    imagen:
      "https://media.falabella.com/falabellaCL/143651415_01/w=1500,h=1500,fit=pad",
    imagenes: [
      "https://media.falabella.com/falabellaCL/143651415_01/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/143651415_04/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/143651415_05/w=1500,h=1500,fit=pad",
    ],
    categoria: "Accesorios",
    descripcion:
      "Superficie de precisión para mouse. Base de goma antideslizante y superficie de tela optimizada para sensores ópticos.",
    stock: 30,
    especificaciones: {
      marca: "SteelSeries",
      modelo: "QcK Heavy",
      tamaño: "900x400mm",
      grosor: "6mm",
      material: "Tela",
      base: "Goma antideslizante",
    },
  },
  {
    id: 12,
    nombre: "Webcam 4K Streaming",
    precio: 89990,
    imagen:
      "https://media.falabella.com/falabellaCL/143905203_01/w=1500,h=1500,fit=pad",
    imagenes: [
      "https://media.falabella.com/falabellaCL/143905203_01/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/143905203_02/w=1500,h=1500,fit=pad",
      "https://media.falabella.com/falabellaCL/143905203_03/w=1500,h=1500,fit=pad",
    ],
    categoria: "Accesorios",
    descripcion:
      "Calidad profesional para streamers. Sensor 4K, micrófono integrado y enfoque automático para transmisiones perfectas.",
    stock: 8,
    especificaciones: {
      marca: "Logitech",
      modelo: "Brio 4K",
      resolucion: "4K Ultra HD",
      microfono: "Estéreo dual",
      conectividad: "USB-C",
      compatibilidad: "PC, Mac",
    },
  },
];

// Variables globales
let productoActual = null;
let cantidad = 1;

// Función para cargar el producto desde el URL
function cargarProductoDesdeURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  console.log("ID del producto desde URL:", productId);

  if (!productId || isNaN(productId)) {
    mostrarError("ID de producto no válido");
    return;
  }

  productoActual = productos.find((p) => p.id === productId);

  console.log("Producto encontrado:", productoActual);

  if (!productoActual) {
    mostrarError("Producto no encontrado");
    return;
  }

  mostrarProducto(productoActual);
  cargarProductosRelacionados(productoActual.categoria, productId);
}

// Función para mostrar el producto
function mostrarProducto(producto) {
  // Actualizar breadcrumb
  document.getElementById("breadcrumb-product").textContent = producto.nombre;

  // Actualizar información principal
  document.getElementById("product-title").textContent = producto.nombre;
  document.getElementById("product-category").textContent = producto.categoria;
  document.getElementById(
    "product-price"
  ).textContent = `$${producto.precio.toLocaleString("es-CL")}`;
  document.getElementById("product-description").textContent =
    producto.descripcion;

  // Actualizar imagen principal
  const mainImage = document.getElementById("main-product-image");
  mainImage.src = producto.imagen;
  mainImage.alt = producto.nombre;

  // Configurar miniaturas con imágenes diferentes
  const thumbnails = document.querySelectorAll(".thumbnail");

  // Verificar si el producto tiene array de imágenes
  if (producto.imagenes && producto.imagenes.length >= 3) {
    // Usar las imágenes diferentes del array
    thumbnails.forEach((thumb, index) => {
      if (index < producto.imagenes.length) {
        thumb.src = producto.imagenes[index];
        thumb.dataset.image = producto.imagenes[index];
        thumb.alt = `${producto.nombre} - Vista ${index + 1}`;
      }
    });
  } else {
    // Fallback: usar la misma imagen para todas (comportamiento anterior)
    thumbnails.forEach((thumb) => {
      thumb.src = producto.imagen;
      thumb.dataset.image = producto.imagen;
      thumb.alt = producto.nombre;
    });
  }

  // Actualizar stock
  const stockStatus = document.getElementById("stock-status");
  const stockQuantity = document.getElementById("stock-quantity");
  const addToCartBtn = document.getElementById("add-to-cart-btn");

  if (producto.stock > 0) {
    stockStatus.innerHTML = '<i class="bi bi-check-circle"></i> En stock';
    stockStatus.className = "in-stock";
    stockQuantity.textContent = `(${producto.stock} disponibles)`;
    addToCartBtn.disabled = false;
    addToCartBtn.innerHTML =
      '<i class="bi bi-cart-plus"></i> Añadir al carrito';
  } else {
    stockStatus.innerHTML = '<i class="bi bi-x-circle"></i> Sin stock';
    stockStatus.className = "out-of-stock";
    stockQuantity.textContent = "";
    addToCartBtn.disabled = true;
    addToCartBtn.innerHTML = '<i class="bi bi-cart-x"></i> Sin stock';

    // Agregar mensaje de advertencia
    const warningElement = document.createElement("div");
    warningElement.className = "stock-warning";
    warningElement.innerHTML =
      '<i class="bi bi-exclamation-triangle"></i> Producto temporalmente agotado';
    document.querySelector(".action-buttons").before(warningElement);
  }

  // Actualizar especificaciones
  const specsList = document.getElementById("product-specs");
  specsList.innerHTML = "";

  for (const [key, value] of Object.entries(producto.especificaciones)) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${
      key.charAt(0).toUpperCase() + key.slice(1)
    }:</strong> ${value}`;
    specsList.appendChild(li);
  }
}

// Función para cargar productos relacionados
function cargarProductosRelacionados(categoria, productIdExclude) {
  const relatedContainer = document.getElementById(
    "related-products-container"
  );
  const productosRelacionados = productos
    .filter((p) => p.categoria === categoria && p.id !== productIdExclude)
    .slice(0, 4);

  if (productosRelacionados.length === 0) {
    // Mostrar productos de otras categorías si no hay relacionados
    const otrosProductos = productos
      .filter((p) => p.id !== productIdExclude)
      .slice(0, 4);

    if (otrosProductos.length === 0) {
      relatedContainer.innerHTML =
        '<p class="text-center">No hay productos sugeridos</p>';
      return;
    }

    relatedContainer.innerHTML =
      '<h3 class="text-center mb-4">Productos sugeridos</h3>';
    mostrarProductosEnContainer(otrosProductos, relatedContainer);
    return;
  }

  relatedContainer.innerHTML = "";
  mostrarProductosEnContainer(productosRelacionados, relatedContainer);
}

// Nueva función auxiliar para mostrar productos
function mostrarProductosEnContainer(productosArray, container) {
  productosArray.forEach((producto) => {
    const sinStock = producto.stock === 0;

    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
            <div class="product-card ${sinStock ? "sin-stock" : ""}" data-id="${
      producto.id
    }">
                <img src="${producto.imagen}" alt="${
      producto.nombre
    }" class="product-image">
                ${
                  sinStock
                    ? '<span class="badge bg-danger position-absolute top-0 end-0 m-2">Sin Stock</span>'
                    : ""
                }
                <h3>${producto.nombre}</h3>
                <p class="price">$${producto.precio.toLocaleString("es-CL")}</p>
                <button class="btn btn-view" onclick="verProducto(${
                  producto.id
                })">
                    <i class="bi bi-eye"></i> Ver producto
                </button>
            </div>
        `;
    container.appendChild(col);
  });
}

// Función para ver otro producto
function verProducto(productId) {
  window.location.href = `detalle-producto.html?id=${productId}`;
}

// Función para manejar la cantidad
function manejarCantidad() {
  const quantityInput = document.getElementById("product-quantity");
  const decreaseBtn = document.getElementById("quantity-decrease");
  const increaseBtn = document.getElementById("quantity-increase");

  decreaseBtn.addEventListener("click", () => {
    if (cantidad > 1) {
      cantidad--;
      quantityInput.value = cantidad;
    }
  });

  increaseBtn.addEventListener("click", () => {
    if (cantidad < (productoActual?.stock || 10)) {
      cantidad++;
      quantityInput.value = cantidad;
    }
  });

  quantityInput.addEventListener("change", (e) => {
    let newValue = parseInt(e.target.value);
    if (isNaN(newValue) || newValue < 1) newValue = 1;
    if (newValue > (productoActual?.stock || 10))
      newValue = productoActual.stock;
    cantidad = newValue;
    quantityInput.value = cantidad;
  });
}

// Función para añadir al carrito
function añadirAlCarrito() {
  const addButton = document.getElementById("add-to-cart-btn");

  addButton.addEventListener("click", () => {
    if (!productoActual) return;

    if (productoActual.stock === 0) {
      mostrarMensaje("Producto sin stock", "error");
      return;
    }

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExistente = carrito.find(
      (item) => item.id === productoActual.id
    );

    if (productoExistente) {
      // Verificar que no exceda el stock
      const nuevaCantidad = productoExistente.cantidad + cantidad;
      if (nuevaCantidad > productoActual.stock) {
        mostrarMensaje(
          `No hay suficiente stock. Máximo disponible: ${productoActual.stock}`,
          "error"
        );
        return;
      }
      productoExistente.cantidad = nuevaCantidad;
    } else {
      carrito.push({
        id: productoActual.id,
        nombre: productoActual.nombre,
        precio: productoActual.precio,
        imagen: productoActual.imagen,
        cantidad: cantidad,
      });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContadorCarrito();
    mostrarMensaje(`¡${productoActual.nombre} añadido al carrito!`, "success");

    // Resetear cantidad
    cantidad = 1;
    document.getElementById("product-quantity").value = 1;
  });
}

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

// Función para mostrar mensajes
function mostrarMensaje(mensaje, tipo = "success") {
  const mensajeElement = document.createElement("div");
  mensajeElement.className = `alert-message ${tipo}`;
  mensajeElement.innerHTML = `
        <i class="bi bi-${
          tipo === "success" ? "check-circle" : "exclamation-triangle"
        }-fill"></i> ${mensaje}
    `;
  mensajeElement.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${
          tipo === "success"
            ? "linear-gradient(135deg, #39ff14, #1e90ff)"
            : "linear-gradient(135deg, #ff6b6b, #ff4444)"
        };
        color: #000;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 1000;
        font-weight: bold;
        box-shadow: 0 0 15px ${tipo === "success" ? "#39ff14" : "#ff4444"};
        animation: slideIn 0.3s ease;
    `;

  document.body.appendChild(mensajeElement);
  setTimeout(() => mensajeElement.remove(), 3000);
}

// Función para mostrar error
function mostrarError(mensaje) {
  const container = document.querySelector(".product-detail .container");
  container.innerHTML = `
        <div class="col-12 text-center py-5">
            <i class="bi bi-exclamation-triangle" style="font-size: 3rem; color: #ff4444;"></i>
            <h3 class="mt-3">${mensaje}</h3>
            <p>El producto que buscas no existe o no está disponible</p>
            <a href="productos.html" class="btn btn-outline-neon">
                <i class="bi bi-arrow-left"></i> Volver a productos
            </a>
        </div>
    `;
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", () => {
  cargarProductoDesdeURL();
  manejarCantidad();
  añadirAlCarrito();
  actualizarContadorCarrito();

  // Event listeners para miniaturas
  document.querySelectorAll(".thumbnail").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      document
        .querySelectorAll(".thumbnail")
        .forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
      document.getElementById("main-product-image").src = thumb.dataset.image;
    });
  });

  console.log("Página de detalle de producto cargada correctamente");
});
