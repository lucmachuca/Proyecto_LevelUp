// Recuperar datos del usuario desde localStorage
const nombre = localStorage.getItem("nombre");
const correo = localStorage.getItem("correo");
const fecha = localStorage.getItem("fechaRegistro");

// Mostrar en el perfil
document.getElementById("perfil-nombre").textContent =
  nombre || "Usuario invitado";
document.getElementById("perfil-correo").textContent =
  correo || "No registrado";
document.getElementById("perfil-fecha").textContent = fecha || "Sin datos";

// Botón cerrar sesión
document.getElementById("cerrar-sesion").addEventListener("click", () => {
  localStorage.clear(); // elimina todos los datos guardados
  alert("Has cerrado sesión.");
  window.location.href = "login.html"; // redirige al login
});
