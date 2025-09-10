const productos = [
    {
        id: 1,
        nombre: "PlayStation 5",
        precio: 599990,
        imagen: "https://clsonyb2c.vtexassets.com/arquivos/ids/465172-1600-auto?v=638658958190900000&width=1600&height=auto&aspect=true",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&w=400&crop=closeup"
        ],
        categoria: "Consolas",
        descripcion: "Consola de última generación con gráficos 4K y SSD ultrárápido. Experimenta velocidades de carga increíblemente rápidas con un SSD de ultra alta velocidad.",
        stock: 15,
        especificaciones: {
            marca: "Sony",
            modelo: "PlayStation 5",
            almacenamiento: "825 GB SSD",
            resolucion: "4K UHD a 120Hz",
            conectividad: "WiFi 6, Bluetooth 5.1",
            incluye: "Mando DualSense, cables HDMI y alimentación, base"
        }
    },
    {
        id: 2,
        nombre: "Xbox Series X",
        precio: 549990,
        imagen: "https://media.falabella.com/falabellaCL/135549863_01/w=1500,h=1500,fit=pad",
        imagenes: [
            "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&w=400&crop=closeup",
            "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&w=400&angle=45"
        ],
        categoria: "Consolas",
        descripcion: "Potencia y rendimiento para gaming de alta calidad. La Xbox Series X ofrece velocidades de cuadro de hasta 120 FPS.",
        stock: 8,
        especificaciones: {
            marca: "Microsoft",
            modelo: "Xbox Series X",
            almacenamiento: "1 TB SSD",
            resolucion: "4K UHD a 120Hz",
            conectividad: "WiFi 5, Bluetooth 5.0",
            incluye: "Mando inalámbrico, cables, base"
        }
    },
    {
        id: 3,
        nombre: "Nintendo Switch OLED",
        precio: 399990,
        imagen: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-4.0.3&w=400",
        imagenes: [
            "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-4.0.3&w=400&crop=closeup",
            "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-4.0.3&w=400&angle=30"
        ],
        categoria: "Consolas",
        descripcion: "Versátil consola híbrida con pantalla OLED. Juega en TV o en modo portátil con la vibrante pantalla OLED de 7 pulgadas.",
        stock: 12,
        especificaciones: {
            marca: "Nintendo",
            modelo: "Switch OLED",
            almacenamiento: "64 GB",
            resolucion: "720p OLED",
            conectividad: "WiFi, Bluetooth",
            incluye: "Consola, base, mandos Joy-Con"
        }
    },
    {
        id: 4,
        nombre: "Teclado Mecánico RGB",
        precio: 89990,
        imagen: "https://media.falabella.com/falabellaCL/116586411_01/w=1500,h=1500,fit=pad",
        imagenes: [
            "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&w=400&crop=closeup",
            "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&w=400&angle=15"
        ],
        categoria: "Accesorios",
        descripcion: "Teclado gaming con retroiluminación RGB personalizable. Switches mecánicos para una respuesta táctil precisa.",
        stock: 20,
        especificaciones: {
            marca: "Redragon",
            modelo: "Kumara",
            tipo: "Mecánico",
            retroiluminacion: "RGB",
            conectividad: "USB",
            switches: "Outemu Blue"
        }
    },
    {
        id: 5,
        nombre: "Mouse Gaming",
        precio: 49990,
        imagen: "https://fernapetcl.vtexassets.com/arquivos/ids/164101-800-auto?v=637673227740670000&width=800&height=auto&aspect=true",
        imagenes: [
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&w=400&crop=closeup",
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&w=400&angle=25"
        ],
        categoria: "Accesorios",
        descripcion: "Precisión máxima para juegos competitivos. Sensor óptico de 16000 DPI y diseño ergonómico para largas sesiones.",
        stock: 25,
        especificaciones: {
            marca: "Logitech",
            modelo: "G502",
            dpi: "16000",
            botones: "11 programables",
            conectividad: "USB",
            peso: "121g"
        }
    },
    {
        id: 6,
        nombre: "Headset Gamer 7.1",
        precio: 79990,
        imagen: "https://media.falabella.com/falabellaCL/17306089_1/w=1500,h=1500,fit=pad",
        imagenes: [
            "https://images.unsplash.com/photo-1599660646820-4cdfe6d531f6?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1599660646820-4cdfe6d531f6?ixlib=rb-4.0.3&w=400&crop=closeup",
            "https://images.unsplash.com/photo-1599660646820-4cdfe6d531f6?ixlib=rb-4.0.3&w=400&angle=20"
        ],
        categoria: "Accesorios",
        descripcion: "Sonido surround para una experiencia inmersiva. Audio 7.1 virtual con micrófono cancelador de ruido.",
        stock: 18,
        especificaciones: {
            marca: "HyperX",
            modelo: "Cloud II",
            audio: "7.1 virtual",
            microfono: "Cancelación de ruido",
            conectividad: "USB",
            compatibilidad: "PC, PS4, PS5"
        }
    },
    {
        id: 7,
        nombre: "Monitor 144Hz",
        precio: 299990,
        imagen: "https://media.falabella.com/falabellaCL/133722045_01/w=1500,h=1500,fit=pad",
        imagenes: [
            "https://images.unsplash.com/photo-1643019535780-e4c5f26a8f28?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1643019535780-e4c5f26a8f28?ixlib=rb-4.0.3&w=400&crop=closeup",
            "https://images.unsplash.com/photo-1643019535780-e4c5f26a8f28?ixlib=rb-4.0.3&w=400&angle=10"
        ],
        categoria: "Accesorios",
        descripcion: "Fluidez visual para gaming competitivo. Panel IPS de 27 pulgadas con tasa de refresco de 144Hz y tiempo de respuesta 1ms.",
        stock: 10,
        especificaciones: {
            marca: "ASUS",
            modelo: "TUF Gaming VG279Q",
            tamaño: "27 pulgadas",
            resolucion: "1920x1080",
            refresco: "144Hz",
            respuesta: "1ms"
        }
    },
    {
        id: 8,
        nombre: "Juego FIFA 2025",
        precio: 49990,
        imagen: "https://clsonyb2c.vtexassets.com/arquivos/ids/464492-1600-auto?v=638587159902400000&width=1600&height=auto&aspect=true",
        imagenes: [
            "https://images.unsplash.com/photo-1614294149710-32eec425a251?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1614294149710-32eec425a251?ixlib=rb-4.0.3&w=400&crop=closeup",
            "https://images.unsplash.com/photo-1614294149710-32eec425a251?ixlib=rb-4.0.3&w=400&angle=15"
        ],
        categoria: "Juegos",
        descripcion: "El mejor fútbol en tu consola. Modo carrera mejorado, gráficos hyper-realistas con todos los estadios y ligas oficiales.",
        stock: 0,
        especificaciones: {
            marca: "EA Sports",
            plataforma: "PS5, Xbox Series X|S, PC",
            jugadores: "1-4",
            online: "Sí",
            idioma: "Español",
            edad: "3+"
        }
    },
    {
        id: 9,
        nombre: "Call of Duty: Black ops 6",
        precio: 59990,
        imagen: "https://juegosdigitaleschile.com/files/images/productos/1718041978-call-of-duty-black-ops-6-ps4-pre-orden-0.webp",
        imagenes: [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&w=400&crop=closeup",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&w=400&angle=20"
        ],
        categoria: "Juegos",
        descripcion: "Acción intensa y gráficos realistas. Campaña emocionante y multijugador competitivo con nuevos mapas y modos.",
        stock: 15,
        especificaciones: {
            marca: "Activision",
            plataforma: "PS5, Xbox Series X|S, PC",
            jugadores: "1-4",
            online: "Sí",
            idioma: "Español",
            edad: "18+"
        }
    },
    {
        id: 10,
        nombre: "Silla Gamer Profesional",
        precio: 199990,
        imagen: "https://media.falabella.com/falabellaCL/129735555_01/w=1500,h=1500,fit=pad",
        imagenes: [
            "https://images.unsplash.com/photo-1598301257982-0cf01499abb2?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1598301257982-0cf01499abb2?ixlib=rb-4.0.3&w=400&crop=closeup",
            "https://images.unsplash.com/photo-1598301257982-0cf01499abb2?ixlib=rb-4.0.3&w=400&angle=35"
        ],
        categoria: "Accesorios",
        descripcion: "Comodidad ergonómica para largas sesiones. Soporte lumbar, reposacabezas ajustable y materiales de alta calidad.",
        stock: 5,
        especificaciones: {
            marca: "DXRacer",
            modelo: "Formula Series",
            material: "Cuero sintético",
            ajustes: "Altura, inclinación",
            pesoMax: "120kg",
            garantia: "2 años"
        }
    },
    {
        id: 11,
        nombre: "Alfombrilla Gaming XL",
        precio: 29990,
        imagen: "https://media.falabella.com/falabellaCL/143651415_01/w=1500,h=1500,fit=pad",
        imagenes: [
            "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&w=400&crop=closeup",
            "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&w=400&angle=12"
        ],
        categoria: "Accesorios",
        descripcion: "Superficie de precisión para mouse. Base de goma antideslizante y superficie de tela optimizada para sensores ópticos.",
        stock: 30,
        especificaciones: {
            marca: "SteelSeries",
            modelo: "QcK Heavy",
            tamaño: "900x400mm",
            grosor: "6mm",
            material: "Tela",
            base: "Goma antideslizante"
        }
    },
    {
        id: 12,
        nombre: "Webcam 4K Streaming",
        precio: 89990,
        imagen: "https://media.falabella.com/falabellaCL/143905203_01/w=1500,h=1500,fit=pad",
        imagenes: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&crop=closeup",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&angle=18"
        ],
        categoria: "Accesorios",
        descripcion: "Calidad profesional para streamers. Sensor 4K, micrófono integrado y enfoque automático para transmisiones perfectas.",
        stock: 8,
        especificaciones: {
            marca: "Logitech",
            modelo: "Brio 4K",
            resolucion: "4K Ultra HD",
            microfono: "Estéreo dual",
            conectividad: "USB-C",
            compatibilidad: "PC, Mac"
        }
    }
];

// Variables globales
let productosFiltrados = [...productos];
let currentSort = '';

// Función para mostrar productos
function mostrarProductos(productosArray = productos) {
    const contenedorProductos = document.getElementById('products-container');
    const productCount = document.getElementById('product-count');
    
    if (!contenedorProductos) return;

    // Mostrar loading
    contenedorProductos.innerHTML = '';
    document.getElementById('loading-indicator').style.display = 'block';

    // Simular carga (para que se vea profesional)
    setTimeout(() => {
        document.getElementById('loading-indicator').style.display = 'none';

        if (productosArray.length === 0) {
            contenedorProductos.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="bi bi-search" style="font-size: 3rem; color: #1e90ff;"></i>
                    <h3 class="mt-3">No se encontraron productos</h3>
                    <p>Intenta con otros filtros o términos de búsqueda</p>
                    <button class="btn btn-outline-neon" onclick="resetFilters()">
                        <i class="bi bi-arrow-clockwise"></i> Mostrar todos
                    </button>
                </div>
            `;
            productCount.textContent = '0 productos encontrados';
            return;
        }

        // Actualizar contador
        productCount.textContent = `${productosArray.length} producto${productosArray.length !== 1 ? 's' : ''} encontrado${productosArray.length !== 1 ? 's' : ''}`;

        // Mostrar productos
        contenedorProductos.innerHTML = '';
        productosArray.forEach(producto => {
            const col = document.createElement('div');
            col.className = 'col';
            col.innerHTML = `
                <div class="product-card" data-id="${producto.id}">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
                    <h3>${producto.nombre}</h3>
                    <p class="product-description">${producto.descripcion}</p>
                    <p class="price">$${producto.precio.toLocaleString('es-CL')}</p>
                    <div class="d-flex gap-2">
                        <button class="btn btn-add-cart" data-id="${producto.id}">
                            <i class="bi bi-cart-plus"></i> Añadir
                        </button>
                        <button class="btn btn-outline-neon" onclick="verDetalleProducto(${producto.id})">
                            <i class="bi bi-eye"></i> Ver
                        </button>
                    </div>
                </div>
            `;
            contenedorProductos.appendChild(col);
        });

        agregarEventListeners();
    }, 500);
}

// Función para filtrar productos
function filtrarProductos() {
    const categoria = document.getElementById('filter-category').value;
    const searchTerm = document.getElementById('search-products').value.toLowerCase();
    
    productosFiltrados = productos.filter(producto => {
        const matchesCategory = !categoria || producto.categoria === categoria;
        const matchesSearch = !searchTerm || 
            producto.nombre.toLowerCase().includes(searchTerm) ||
            producto.descripcion.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });

    // Aplicar ordenamiento si existe
    if (currentSort) {
        ordenarProductos(currentSort);
    } else {
        mostrarProductos(productosFiltrados);
    }
}

// Función para ordenar productos
function ordenarProductos(criterio) {
    currentSort = criterio;
    
    const productosOrdenados = [...productosFiltrados];
    
    switch(criterio) {
        case 'asc':
            productosOrdenados.sort((a, b) => a.precio - b.precio);
            break;
        case 'desc':
            productosOrdenados.sort((a, b) => b.precio - a.precio);
            break;
        case 'name':
            productosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        default:
            // Sin ordenamiento
            break;
    }
    
    mostrarProductos(productosOrdenados);
}

// Función para resetear filtros
function resetFilters() {
    document.getElementById('filter-category').value = '';
    document.getElementById('sort-price').value = '';
    document.getElementById('search-products').value = '';
    currentSort = '';
    productosFiltrados = [...productos];
    mostrarProductos(productos);
}

// Función para agregar al carrito
function agregarAlCarrito(productId) {
    const producto = productos.find(p => p.id === productId);
    
    if (!producto) return;

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
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
    mostrarMensaje(`¡${producto.nombre} añadido al carrito!`);
}

// Función para ver detalle del producto - CORREGIDO
function verDetalleProducto(productId) {
    // Redirigir a la página de detalle del producto con el ID como parámetro
    window.location.href = `detalle-producto.html?id=${productId}`;
}

// Función para actualizar contador del carrito
function actualizarContadorCarrito() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        cartCount.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
    }
}

// Función para mostrar mensajes
function mostrarMensaje(mensaje) {
    const mensajeElement = document.createElement('div');
    mensajeElement.className = 'alert-message';
    mensajeElement.innerHTML = `
        <i class="bi bi-check-circle-fill"></i> ${mensaje}
    `;
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
    setTimeout(() => mensajeElement.remove(), 3000);
}

// Agregar event listeners
function agregarEventListeners() {
    // Botones de añadir al carrito
    document.querySelectorAll('.btn-add-cart').forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(boton.dataset.id);
            agregarAlCarrito(productId);
        });
    });

    // Click en tarjeta para ver detalle
    document.querySelectorAll('.product-card').forEach(tarjeta => {
        tarjeta.addEventListener('click', (e) => {
            if (!e.target.closest('.btn')) {
                const productId = parseInt(tarjeta.dataset.id);
                verDetalleProducto(productId);
            }
        });
    });
}

// Inicializar event listeners de filtros
function inicializarFiltros() {
    document.getElementById('filter-category').addEventListener('change', filtrarProductos);
    document.getElementById('sort-price').addEventListener('change', (e) => {
        ordenarProductos(e.target.value);
    });
    document.getElementById('search-products').addEventListener('input', filtrarProductos);
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    actualizarContadorCarrito();
    inicializarFiltros();
    
    console.log('Página de productos cargada correctamente');
});