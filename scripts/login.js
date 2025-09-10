// Función para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    return regex.test(email);
}

// Función para mostrar mensajes
function mostrarMensaje(mensaje, tipo = "success") {
    // Eliminar mensajes anteriores
    const mensajesAnteriores = document.querySelectorAll('.alert-message');
    mensajesAnteriores.forEach(msg => msg.remove());

    const mensajeElement = document.createElement('div');
    mensajeElement.className = `alert-message ${tipo}`;
    mensajeElement.innerHTML = `
        <i class="bi bi-${tipo === 'success' ? 'check-circle' : 'exclamation-triangle'}-fill"></i> ${mensaje}
    `;
    mensajeElement.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${tipo === 'success' ? 'linear-gradient(135deg, #39ff14, #1e90ff)' : 'linear-gradient(135deg, #ff6b6b, #ff4444)'};
        color: #000;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 1000;
        font-weight: bold;
        box-shadow: 0 0 15px ${tipo === 'success' ? '#39ff14' : '#ff4444'};
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(mensajeElement);
    
    // Auto-eliminar después de 5 segundos
    setTimeout(() => {
        if (mensajeElement.parentNode) {
            mensajeElement.remove();
        }
    }, 5000);
}

// Función para actualizar contador del carrito
function actualizarContadorCarrito() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        cartCount.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
    }
}

// Manejar envío del formulario
const formLogin = document.getElementById("formLogin");

if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validaciones
        if (!email || !password) {
            mostrarMensaje("Ingresa tu correo y contraseña", "error");
            return;
        }

        if (!validarEmail(email)) {
            mostrarMensaje("Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com", "error");
            return;
        }

        if (password.length < 4 || password.length > 10) {
            mostrarMensaje("La contraseña debe tener entre 4 y 10 caracteres", "error");
            return;
        }

        // Obtener usuarios del LocalStorage
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Buscar usuario
        const usuario = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

        if (usuario) {
            // Guardar usuario en sesión
            localStorage.setItem('usuarioActual', JSON.stringify({
                nombre: usuario.nombre,
                email: usuario.email,
                descuento: usuario.descuento || 0
            }));

            mostrarMensaje(`¡Bienvenido de vuelta, ${usuario.nombre}!`, "success");
            
            // Redirigir después de 2 segundos
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else {
            mostrarMensaje("Correo o contraseña incorrectos", "error");
        }
    });
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito();
    console.log('Página de login cargada correctamente');
    
    // Si ya está logueado, redirigir
    const usuarioActual = localStorage.getItem('usuarioActual');
    if (usuarioActual) {
        window.location.href = "index.html";
    }
});