const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Ingresa tu correo y contraseña");
    return;
  }

  // Obtener usuarios del LocalStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Buscar usuario
  const usuario = usuarios.find(u => u.email === email && u.password === password);

  if (usuario) {
    alert(`¡Bienvenido, ${usuario.nombre}!`);
    formLogin.reset();
    // window.location.href = "index.html"; // Redirigir si quieres
  } else {
    alert("Correo o contraseña incorrectos");
  }
});
