const numerosColoresPaleta = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let color = "";

function generarNumero() {
  const numeroAlAzar = Math.floor(Math.random() * 16);
  return numeroAlAzar;
}

function generarColores() {
  let x = "";
  for (let i = 0; i < 6; i++) {
    color = generarNumero();
    x += numerosColoresPaleta[color];
  }
  return "#" + x;
}

const boton6 = document.getElementById("6colores");
const boton8 = document.getElementById("8colores");
const boton9 = document.getElementById("9colores");
const paletaGenerada = document.getElementById("generarPaleta");
const mensaje = document.getElementById("mensaje");
const copiarCodigo = document.getElementById("copiarCodigo");

const formatoHEX = document.getElementById("formatoHEX");
const formatoHSL = document.getElementById("formatoHSL");
const guardarPaleta = document.getElementById("guardarPaleta");
const paletasGuardadas = document.getElementById("paletasGuardadas");

let cantidadElegida = 0;
let formatoActual = "HEX";

boton6.addEventListener("click", function () {
  mensaje.textContent =
    "Seleccionaste crear una paleta de 6 colores. Presiona el boton Generar paleta";
  cantidadElegida = 6;
});

boton8.addEventListener("click", function () {
  mensaje.textContent =
    "Seleccionaste crear una paleta de 8 colores. Presiona el boton Generar paleta";
  cantidadElegida = 8;
});

boton9.addEventListener("click", function () {
  mensaje.textContent =
    "Seleccionaste crear una paleta de 9 colores. Presiona el boton Generar paleta";
  cantidadElegida = 9;
});

const paletas = document.getElementById("paletas");
const paleta = document.getElementById("paleta");

let paletaActual = [];

function generarPaletasDeColores() {
  if (cantidadElegida === 0) {
    mensaje.textContent = "Primero seleccioná si quieres 6, 8 o 9 colores.";
    return;
  }

  copiarCodigo.textContent =
    "Haz clic sobre el código del color para copiarlo al portapapeles";

  paleta.innerHTML = "";

  let nuevaPaleta = [];

  for (let i = 0; i < cantidadElegida; i++) {
    if (paletaActual[i] && paletaActual[i].bloqueado === true) {
      nuevaPaleta.push(paletaActual[i]);
    } else {
      const colorHEX = generarColores();
      nuevaPaleta.push({ colorHEX, bloqueado: false });
    }
  }

  paletaActual = nuevaPaleta;

  localStorage.setItem("paletaActual", JSON.stringify(paletaActual));

  dibujarPaleta();
}

function dibujarPaleta() {
  paleta.innerHTML = "";

  for (let i = 0; i < paletaActual.length; i++) {
    const caja = document.createElement("div");
    const muestraColor = document.createElement("div");
    const contenedorCodigo = document.createElement("div");
    const codigoColor = document.createElement("div");
    const candado = document.createElement("button");

    let codigoAMostrar = paletaActual[i].colorHEX;

    if (formatoActual === "HSL") {
      codigoAMostrar = convertirHexAHsl(paletaActual[i].colorHEX);
    }

    codigoColor.textContent = codigoAMostrar;
    candado.textContent = paletaActual[i].bloqueado ? "🔒" : "🔓";

    codigoColor.addEventListener("click", function () {
      navigator.clipboard.writeText(codigoAMostrar);

      const toast = document.createElement("div");
      toast.textContent = "Código copiado";
      toast.classList.add("toast");

      caja.appendChild(toast);

      setTimeout(() => {
        toast.remove();
      }, 2000);
    });

    candado.addEventListener("click", function () {
      paletaActual[i].bloqueado = !paletaActual[i].bloqueado;

      localStorage.setItem("paletaActual", JSON.stringify(paletaActual));

      dibujarPaleta();
    });

    paleta.appendChild(caja);
    caja.appendChild(muestraColor);
    caja.appendChild(contenedorCodigo);
    contenedorCodigo.appendChild(codigoColor);
    contenedorCodigo.appendChild(candado);

    caja.classList.add("caja");
    muestraColor.classList.add("color");
    codigoColor.classList.add("codigo");
    candado.classList.add("candado");
    contenedorCodigo.classList.add("codigoContenedor");

    muestraColor.style.backgroundColor = paletaActual[i].colorHEX;
    muestraColor.style.width = "150px";
    muestraColor.style.height = "150px";
  }
}

function convertirHexAHsl(hex) {
  let rojo = parseInt(hex.slice(1, 3), 16) / 255;
  let verde = parseInt(hex.slice(3, 5), 16) / 255;
  let azul = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(rojo, verde, azul);
  const min = Math.min(rojo, verde, azul);

  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (max !== min) {
    const diferencia = max - min;

    s = l > 0.5 ? diferencia / (2 - max - min) : diferencia / (max + min);

    if (max === rojo) {
      h = (verde - azul) / diferencia + (verde < azul ? 6 : 0);
    } else if (max === verde) {
      h = (azul - rojo) / diferencia + 2;
    } else {
      h = (rojo - verde) / diferencia + 4;
    }

    h = h * 60;
  }

  h = Math.round(h);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

formatoHEX.addEventListener("click", function () {
  formatoActual = "HEX";
  dibujarPaleta();
});

formatoHSL.addEventListener("click", function () {
  formatoActual = "HSL";
  dibujarPaleta();
});

guardarPaleta.addEventListener("click", function () {
  if (paletaActual.length === 0) {
    mensaje.textContent = "Primero generá una paleta para poder guardarla.";
    return;
  }

  const guardadas = JSON.parse(localStorage.getItem("paletasGuardadas")) || [];

  guardadas.push(paletaActual);

  localStorage.setItem("paletasGuardadas", JSON.stringify(guardadas));

  mensaje.textContent = "Paleta guardada correctamente.";

  mostrarPaletasGuardadas();
});

function mostrarPaletasGuardadas() {
  paletasGuardadas.innerHTML = "";

  const guardadas = JSON.parse(localStorage.getItem("paletasGuardadas")) || [];

  for (let i = 0; i < guardadas.length; i++) {
    const botonPaleta = document.createElement("button");

    botonPaleta.textContent = `Paleta ${i + 1}`;
    botonPaleta.classList.add("paletaGuardada");

    botonPaleta.addEventListener("click", function () {
      paletaActual = guardadas[i];
      cantidadElegida = paletaActual.length;

      localStorage.setItem("paletaActual", JSON.stringify(paletaActual));

      dibujarPaleta();
    });

    paletasGuardadas.appendChild(botonPaleta);
  }
}
window.addEventListener("load", function () {
  localStorage.removeItem("paletaActual");
  paletaActual = [];
  cantidadElegida = 0;
  paleta.innerHTML = "";

  mostrarPaletasGuardadas();
});
paletaGenerada.addEventListener("click", generarPaletasDeColores);
