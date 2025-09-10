// Elección de Comuna por Región
const comunasPorRegion = {
  Ari: ["Arica", "Camarones", "General Lagos", "Putre"],
  Tar: ["Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"],
  Ant: ["Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", "Sierra Gorda", "Taltal", "Tocopilla"],
  Ata: ["Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"],
  Coq: ["Andacollo", "Canela", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Monte Patria", "Ovalle", "Paiguano", "Punitaqui", "Río Hurtado", "Salamanca", "Vicuña"],
  Val: ["Algarrobo", "Cabildo", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concón", "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernández", "La Calera", "La Cruz", "La Ligua", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmué", "Panquehue", "Papudo", "Petorca", "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa María", "Santo Domingo", "Valparaíso", "Villa Alemana", "Viña del Mar", "Zapallar"],
  stgo: ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Tiltil", "Vitacura"],
  OHi: ["Chépica", "Chimbarongo", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "La Estrella", "Las Cabras", "Litueche", "Lolol", "Machalí", "Malloa", "Marchigüe", "Mostazal", "Nancagua", "Navidad", "Olivar", "Palmilla", "Paredones", "Peralillo", "Peumo", "Pichidegua", "Pichilemu", "Placilla", "Pumanque", "Quinta de Tilcoco", "Rancagua", "Rengo", "Requínoa", "San Fernando", "Santa Cruz"],
  Mau: ["Cauquenes", "Chanco", "Colbún", "Constitución", "Curepto", "Curicó", "Empedrado", "Hualañé", "Licantén", "Linares", "Longaví", "Maule", "Molina", "Parral", "Pelarco", "Pelluhue", "Pencahue", "Rauco", "Retiro", "Río Claro", "Romeral", "Sagrada Familia", "San Clemente", "San Javier", "San Rafael", "Talca", "Teno", "Vichuquén", "Villa Alegre", "Yerbas Buenas"],
  Nub: ["Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
  Bio: ["Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualpén", "Hualqui", "Laja", "Lebu", "Los Álamos", "Los Ángeles", "Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", "Quilaco", "Quilleco", "San Pedro de la Paz", "San Rosendo", "Santa Bárbara", "Santa Juana", "Talcahuano", "Tirúa", "Tomé", "Tucapel", "Yumbel"],
  Arau: ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Purén", "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica"],
  Rio: ["Corral", "Futrono", "La Unión", "Lago Ranco", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Río Bueno", "Valdivia"],
  Lag: ["Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco de Vélez", "Dalcahue", "Fresia", "Frutillar", "Futaleufú", "Hualaihué", "Llanquihue", "Los Muermos", "Maullín", "Osorno", "Palena", "Puerto Montt", "Puerto Octay", "Puerto Varas", "Puqueldón", "Purranque", "Puyehue", "Queilén", "Quellón", "Quemchi", "Quinchao", "Río Negro", "San Juan de la Costa", "San Pablo"],
  Ays: ["Aysén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", "O'Higgins", "Río Ibáñez", "Tortel"],
  Mag: ["Antártica", "Cabo de Hornos", "Laguna Blanca", "Natales", "Porvenir", "Primavera", "Punta Arenas", "Río Verde", "San Gregorio", "Timaukel", "Torres del Paine"],
};

// Función para actualizar contador del carrito
function actualizarContadorCarrito() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        cartCount.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
    }
}

// Función para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    return regex.test(email);
}

// Función para validar formulario
function validarFormulario() {
    const nombre = document.getElementById("Nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmar = document.getElementById("passwordConfirm").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const region = document.getElementById("region").value;
    const comuna = document.getElementById("comuna").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const terminos = document.getElementById("terminos").checked;

    // Validar campos requeridos
    if (!nombre || !email || !password || !confirmar || !region || !comuna || !fechaNacimiento) {
        mostrarMensaje("Por favor, completa todos los campos obligatorios", "error");
        return false;
    }

    if (!terminos) {
        mostrarMensaje("Debes aceptar los términos y condiciones", "error");
        return false;
    }

    // Validar email
    if (!validarEmail(email)) {
        mostrarMensaje("Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com", "error");
        return false;
    }

    // Validar contraseña
    if (password.length < 4 || password.length > 10) {
        mostrarMensaje("La contraseña debe tener entre 4 y 10 caracteres", "error");
        return false;
    }

    if (password !== confirmar) {
        mostrarMensaje("Las contraseñas no coinciden", "error");
        return false;
    }

    // Validar edad (mayor de 18 años)
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    
    if (edad < 18) {
        mostrarMensaje("Debes ser mayor de 18 años para registrarte", "error");
        return false;
    }

    return true;
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

// Configurar selección de comunas
const regionSelect = document.getElementById('region');
const comunaSelect = document.getElementById('comuna');

if (regionSelect && comunaSelect) {
    regionSelect.addEventListener('change', () => {
        const regionSeleccionada = regionSelect.value;
        comunaSelect.innerHTML = '<option value="">Selecciona tu Comuna</option>';

        if (regionSeleccionada && comunasPorRegion[regionSeleccionada]) {
            comunasPorRegion[regionSeleccionada].forEach(comuna => {
                const option = document.createElement('option');
                option.value = comuna.toLowerCase().replace(/\s+/g, '-');
                option.textContent = comuna;
                comunaSelect.appendChild(option);
            });
        }
    });
}

// Manejar envío del formulario
const formRegistro = document.getElementById("formRegistro");

if (formRegistro) {
    formRegistro.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        const nombre = document.getElementById("Nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const region = document.getElementById("region").value;
        const comuna = document.getElementById("comuna").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        // Obtener usuarios guardados en LocalStorage
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verificar si el email ya existe
        if (usuarios.some(u => u.email.toLowerCase() === email.toLowerCase())) {
            mostrarMensaje("Este correo electrónico ya está registrado", "error");
            return;
        }

        // Calcular descuento para Duoc
        let descuento = 0;
        if (email.toLowerCase().endsWith("@duoc.cl")) {
            descuento = 20;
        }

        // Guardar usuario
        const nuevoUsuario = {
            nombre,
            email: email.toLowerCase(),
            password,
            telefono: telefono || null,
            region,
            comuna,
            fechaNacimiento,
            descuento,
            fechaRegistro: new Date().toISOString()
        };

        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // Mensaje de éxito
        if (descuento === 20) {
            mostrarMensaje("¡Estudiante Duoc! Tienes 20% de descuento de por vida. Redirigiendo...", "success");
        } else {
            mostrarMensaje("¡Registro exitoso! Redirigiendo...", "success");
        }

        // Redirigir después de 2 segundos
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    });
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito();
    
    // Establecer fecha máxima (18 años atrás)
    const fechaMaxima = new Date();
    fechaMaxima.setFullYear(fechaMaxima.getFullYear() - 18);
    document.getElementById('fechaNacimiento').max = fechaMaxima.toISOString().split('T')[0];
    
    console.log('Página de registro cargada correctamente');
});