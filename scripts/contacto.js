// contacto.js - Validaciones para el formulario de contacto

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

// Función para validar email
function validarEmail(email) {
  const regex = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
  return regex.test(email);
}

// Función para actualizar contador de caracteres
function actualizarContadorCaracteres() {
  const comentario = document.getElementById("comentario");
  const charCount = document.getElementById("char-count");

  if (comentario && charCount) {
    comentario.addEventListener("input", () => {
      const length = comentario.value.length;
      charCount.textContent = length;

      if (length > 500) {
        charCount.style.color = "#ff6b6b";
      } else {
        charCount.style.color = "#1e90ff";
      }
    });
  }
}

// Función para validar formulario
function validarFormulario() {
  const form = document.getElementById("formContacto");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const comentario = document.getElementById("comentario");

  let isValid = true;

  // Resetear errores
  document.querySelectorAll(".is-invalid").forEach((el) => {
    el.classList.remove("is-invalid");
  });

  // Validar nombre (requerido, max 100 caracteres)
  if (!nombre.value.trim()) {
    nombre.classList.add("is-invalid");
    document.getElementById("nombre-error").textContent =
      "Por favor ingresa tu nombre";
    isValid = false;
  } else if (nombre.value.length > 100) {
    nombre.classList.add("is-invalid");
    document.getElementById("nombre-error").textContent =
      "Máximo 100 caracteres";
    isValid = false;
  }

  // Validar email (opcional pero con formato específico si se ingresa)
  if (email.value && !validarEmail(email.value)) {
    email.classList.add("is-invalid");
    isValid = false;
  } else if (email.value.length > 100) {
    email.classList.add("is-invalid");
    document.getElementById("email-error").textContent =
      "Máximo 100 caracteres";
    isValid = false;
  }

  // Validar comentario (requerido, max 500 caracteres)
  if (!comentario.value.trim()) {
    comentario.classList.add("is-invalid");
    document.getElementById("comentario-error").textContent =
      "Por favor ingresa tu mensaje";
    isValid = false;
  } else if (comentario.value.length > 500) {
    comentario.classList.add("is-invalid");
    document.getElementById("comentario-error").textContent =
      "Máximo 500 caracteres";
    isValid = false;
  }

  return isValid;
}

// Función para mostrar mensaje de éxito
function mostrarMensajeExito() {
  const alert = document.createElement("div");
  alert.className = "alert alert-success alert-dismissible fade show";
  alert.innerHTML = `
        <i class="bi bi-check-circle-fill"></i>
        <strong>¡Mensaje enviado!</strong> Te contactaremos dentro de 24 horas.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

  const form = document.getElementById("formContacto");
  form.parentNode.insertBefore(alert, form);

  // Auto-cerrar después de 5 segundos
  setTimeout(() => {
    if (alert.parentNode) {
      alert.classList.remove("show");
      setTimeout(() => alert.remove(), 150);
    }
  }, 5000);
}

// Función para manejar el envío del formulario
function manejarEnvioFormulario() {
  const form = document.getElementById("formContacto");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      // Simular envío (en un caso real, aquí iría una petición AJAX)
      console.log("Formulario válido. Datos:");
      console.log("Nombre:", document.getElementById("nombre").value);
      console.log("Email:", document.getElementById("email").value);
      console.log("Asunto:", document.getElementById("asunto").value);
      console.log("Comentario:", document.getElementById("comentario").value);
      console.log("Newsletter:", document.getElementById("newsletter").checked);

      // Mostrar mensaje de éxito
      mostrarMensajeExito();

      // Resetear formulario
      form.reset();
      document.getElementById("char-count").textContent = "0";
    }
  });
}

// Función para validación en tiempo real
function validacionTiempoReal() {
  const campos = ["nombre", "email", "comentario"];

  campos.forEach((campoId) => {
    const campo = document.getElementById(campoId);
    if (campo) {
      campo.addEventListener("blur", () => {
        if (campoId === "email" && campo.value) {
          if (!validarEmail(campo.value)) {
            campo.classList.add("is-invalid");
          } else {
            campo.classList.remove("is-invalid");
          }
        }
      });

      campo.addEventListener("input", () => {
        campo.classList.remove("is-invalid");
      });
    }
  });
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", () => {
  actualizarContadorCarrito();
  actualizarContadorCaracteres();
  manejarEnvioFormulario();
  validacionTiempoReal();
  console.log("Página de contacto cargada correctamente");
});
