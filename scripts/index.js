// PRODUCTOS
const productos = [
    {
        id: 1,
        nombre: "PlayStation 5",
        precio: 599990,
        imagen: "../imagenes/ps5.jpg",          
        categoria: "Consolas",
        descripcion: "Consola de última generación con gráficos 4K"
    },
    {
        id: 2,
        nombre: "Xbox Series X",
        precio: 549990,
        imagen: "../imagenes/xbox-series-x.jpg", 
        categoria: "Consolas",
        descripcion: "Potencia y rendimiento para gaming de alta calidad"
    },
    {
        id: 3,
        nombre: "Nintendo Switch OLED",
        precio: 399990,
        imagen: "../imagenes/nintendo-switch.jpg", 
        categoria: "Consolas",
        descripcion: "Versátil consola híbrida con pantalla OLED"
    },
    {
        id: 4,
        nombre: "Teclado Mecánico RGB",
        precio: 89990,
        imagen: "../imagenes/teclado-mecanico.jpg", 
        categoria: "Accesorios",
        descripcion: "Teclado gaming con retroiluminación RGB"
    },
    {
        id: 5,
        nombre: "Mouse Gaming",
        precio: 49990,
        imagen: "../imagenes/mouse-gaming.jpg",    
        categoria: "Accesorios",
        descripcion: "Precisión máxima para juegos competitivos"
    },
    {
        id: 6,
        nombre: "Headset Gamer 7.1",
        precio: 79990,
        imagen: "../imagenes/headset-gamer.jpg",   
        categoria: "Accesorios",
        descripcion: "Sonido surround para experiencia inmersiva"
    },
    {
        id: 7,
        nombre: "Monitor 144Hz",
        precio: 299990,
        imagen: "../imagenes/monitor-gaming.jpg",  
        categoria: "Accesorios",
        descripcion: "Fluidez visual para gaming competitivo"
    },
    {
        id: 8,
        nombre: "Juego FIFA 2025",
        precio: 49990,
        imagen: "../imagenes/fifa2025.jpeg",         
        categoria: "Juegos",
        descripcion: "El mejor fútbol en tu consola"
    }
];

// Función para mostrar productos en la página
function mostrarProductos() {
    const contenedorProductos = document.getElementById('productos-container');
    
    if (!contenedorProductos) {
        console.error('No se encontró el contenedor de productos');
        return;
    }

    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="product-card" data-id="${producto.id}">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
                <h3>${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <p class="price">$${producto.precio.toLocaleString('es-CL')}</p>
                <button class="btn btn-add-cart" data-id="${producto.id}">
                    <i class="bi bi-cart-plus"></i> Añadir al carrito
                </button>
            </div>
        `;
        contenedorProductos.appendChild(col);
    });

    // Agregar event listeners a los botones
    agregarEventListeners();
}

// Función para agregar event listeners a los botones
function agregarEventListeners() {
    // Botones de añadir al carrito
    const botonesAdd = document.querySelectorAll('.btn-add-cart');
    botonesAdd.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.btn-add-cart').dataset.id);
            agregarAlCarrito(productId);
        });
    });

    // Click en la tarjeta del producto para ver detalles
    const tarjetasProducto = document.querySelectorAll('.product-card');
    tarjetasProducto.forEach(tarjeta => {
        tarjeta.addEventListener('click', (e) => {
            if (!e.target.closest('.btn-add-cart')) {
                const productId = parseInt(tarjeta.dataset.id);
                verDetalleProducto(productId);
            }
        });
    });
}

// Función para agregar producto al carrito
function agregarAlCarrito(productId) {
    const producto = productos.find(p => p.id === productId);
    
    if (!producto) {
        alert('Producto no encontrado');
        return;
    }

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === productId);
    
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    
    // Mostrar mensaje de confirmación
    mostrarMensaje(`¡${producto.nombre} añadido al carrito!`);
}

// Función para ver detalle del producto
function verDetalleProducto(productId) {
    // Redirigir a la página de detalle del producto
    window.location.href = `detalle-producto.html?id=${productId}`;
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        cartCount.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
    }
}

// Función para mostrar mensajes temporales
function mostrarMensaje(mensaje) {
    // Crear elemento de mensaje
    const mensajeElement = document.createElement('div');
    mensajeElement.className = 'alert-message';
    mensajeElement.textContent = mensaje;
    mensajeElement.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #39ff14, #1e90ff);
        color: #000;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 1000;
        font-weight: bold;
        box-shadow: 0 0 15px #39ff14;
    `;

    document.body.appendChild(mensajeElement);

    // Remover después de 3 segundos
    setTimeout(() => {
        mensajeElement.remove();
    }, 3000);
}

// Función para buscar productos
function inicializarBusqueda() {
    const searchForm = document.querySelector('.search-bar');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchTerm = e.target.querySelector('input[type="search"]').value.toLowerCase();
            buscarProductos(searchTerm);
        });
    }
}

// Función de búsqueda
function buscarProductos(termino) {
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(termino) ||
        producto.descripcion.toLowerCase().includes(termino) ||
        producto.categoria.toLowerCase().includes(termino)
    );

    mostrarProductosFiltrados(productosFiltrados);
}

// Función para mostrar productos filtrados
function mostrarProductosFiltrados(productosFiltrados) {
    const contenedorProductos = document.getElementById('productos-container');
    
    if (productosFiltrados.length === 0) {
        contenedorProductos.innerHTML = `
            <div class="col-12 text-center">
                <h3>No se encontraron productos</h3>
                <p>Intenta con otros términos de búsqueda</p>
            </div>
        `;
        return;
    }

    contenedorProductos.innerHTML = '';
    
    productosFiltrados.forEach(producto => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="product-card" data-id="${producto.id}">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
                <h3>${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <p class="price">$${producto.precio.toLocaleString('es-CL')}</p>
                <button class="btn btn-add-cart" data-id="${producto.id}">
                    <i class="bi bi-cart-plus"></i> Añadir al carrito
                </button>
            </div>
        `;
        contenedorProductos.appendChild(col);
    });

    agregarEventListeners();
}

// 🔑 Manejo del menú "Mi Cuenta"
function actualizarMenuCuenta() {
    const menuCuenta = document.getElementById("menu-cuenta");
    if (!menuCuenta) return;

    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

    if (usuarioActual) {
        // Usuario logueado
        menuCuenta.innerHTML = `
            <li><a class="dropdown-item text-white" href="perfil.html">Mi perfil</a></li>
            <li><a class="dropdown-item text-white" href="#">Puntos LevelUp</a></li>
            <li><hr class="dropdown-divider bg-light"></li>
            <li><a class="dropdown-item text-danger fw-bold" href="#" id="cerrarSesion">Cerrar sesión</a></li>
        `;

        document.getElementById("cerrarSesion").addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("usuarioActual");
            alert("Has cerrado sesión.");
            window.location.href = "index.html";
        });
    } else {
        // Usuario no logueado
        menuCuenta.innerHTML = `
            <li><a class="dropdown-item text-white" href="login.html">Inicia sesión</a></li>
            <li><a class="dropdown-item text-white" href="registro.html">Regístrate</a></li>
            <li><a class="dropdown-item text-white" href="perfil.html">Mi perfil</a></li>
            <li><hr class="dropdown-divider bg-light"></li>
            <li><a class="dropdown-item text-white" href="#">Puntos LevelUp</a></li>
        `;
    }
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    actualizarContadorCarrito();
    inicializarBusqueda();
    actualizarMenuCuenta(); // 👈 se agrega aquí
    console.log('Página principal cargada correctamente');
});
