// Función para actualizar contador del carrito
function actualizarContadorCarrito() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        cartCount.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
    }
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito();
    console.log('Página Nosotros cargada correctamente');
});