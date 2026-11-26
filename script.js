document.addEventListener("DOMContentLoaded", () => {
  // CONTRASEÑA
  const CONTRASENA = "Snoopy21";

  const login = document.getElementById("login");
  const contenido = document.getElementById("contenido");
  const password = document.getElementById("password");
  const error = document.getElementById("error");
  const loginButton = document.getElementById("loginButton");

  function entrar() {
    if (password.value === CONTRASENA) {
      login.hidden = true;
      contenido.hidden = false;
      error.textContent = "";
      iniciarContador();
    } else {
      error.textContent = "Contraseña incorrecta. Inténtalo otra vez 💗";
      password.value = "";
      password.focus();
    }
  }

  loginButton.addEventListener("click", entrar);

  password.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      entrar();
    }
  });

  // CARTAS
  const cartas = [
    "Helencita, espero que este pequeño espacio te recuerde lo especial que sos para mi y todos los momentos bonitos que podamos compartir toda la vida. ❤️",
    "No necesitamos grandes cosas para crear recuerdos inolvidables, A veces los pequeños detalles son los más importantes. 💗",
    "Gracias por formar parte de esta historia que recien comienza y espero nunca termine 🌷",
    "Tu presencia en mi vida me da motivos para seguir viviendola ❤️‍🩹",
    "Te amo tres millones 🤍",
    "Tus locuras van con mis locuras 💞",
    "Tu eres mi camino y siempre vas a ser mi camino 🕸️",
    "Te amo en todos los universos 💫",
    "Solo quiero que estes bien y ya 💚",
    "Tu me volviste digno ⚡",
    "Yo solo te siento a ti ❤️",
    "Eres mi tristeza y mi esperanza, pero sobre todo eres mi amor 👁️‍🗨️", 
    "Nunca dejaria a mi hermosa chica, aun hay un baile pendiente 🅰️"
  ];

  let numeroCarta = 0;

  const letterCard = document.querySelector(".letter-card");
const letterText = document.getElementById("carta");

document.getElementById("letterButton").addEventListener("click", () => {
  letterText.textContent = cartas[numeroCarta];

  letterCard.classList.remove("opened");

  void letterCard.offsetWidth;

  letterCard.classList.add("opened");

  numeroCarta = (numeroCarta + 1) % cartas.length;
});

  // CONTADOR DE TIEMPO
  // Fecha de inicio: 21 de noviembre de 2026
  const fechaInicio = new Date(2026, 10, 21, 0, 0, 0);

  function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora.getTime() - fechaInicio.getTime();
    const elemento = document.getElementById("tiempo");

    if (diferencia < 0) {
      const faltan = Math.ceil(Math.abs(diferencia) / 86400000);
      elemento.textContent =
        `Nuestra fecha especial será dentro de ${faltan} día(s) ❤️`;
      return;
    }

    const dias = Math.floor(diferencia / 86400000);
    const horas = Math.floor((diferencia % 86400000) / 3600000);
    const minutos = Math.floor((diferencia % 3600000) / 60000);
    const segundos = Math.floor((diferencia % 60000) / 1000);

    elemento.textContent =
      `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos ❤️`;
  }

  let contadorIntervalo = null;

  function iniciarContador() {
    actualizarContador();

    if (contadorIntervalo !== null) {
      clearInterval(contadorIntervalo);
    }

    contadorIntervalo = setInterval(actualizarContador, 1000);
  }

  // JUEGO
  const botonesRespuesta = document.querySelectorAll(".answer-button");
  const resultadoJuego = document.getElementById("resultado-juego");

  botonesRespuesta.forEach((boton) => {
    boton.addEventListener("click", () => {
      const respuesta = boton.dataset.answer;

      resultadoJuego.textContent =
        `¡${respuesta}! Aunque seguro los dos tienen mucho cariño para compartir. 💗`;
    });
  });

  // SORPRESA
  const mensajesSorpresa = [
    "¡Sorpresa! Eres una parte muy especial de esta historia. ❤️",
    "Este pequeño rincón guarda muchos recuerdos bonitos. 🌷",
    "Que nunca falten las sonrisas y los momentos especiales. 💕"
  ];

  let numeroSorpresa = 0;

  document.getElementById("surpriseButton").addEventListener("click", () => {
    document.getElementById("mensaje-sorpresa").textContent =
      mensajesSorpresa[numeroSorpresa];

    numeroSorpresa =
      (numeroSorpresa + 1) % mensajesSorpresa.length;
  });
});
