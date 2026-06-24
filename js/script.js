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

let cantidadElegida = 0;
boton6.addEventListener("click", function () {
  ((mensaje.textContent =
    "Seleccionaste crear una paleta de 6 colores. Presiona el boton Generar paleta"),
    (cantidadElegida = 6));
});
boton8.addEventListener("click", function () {
  ((mensaje.textContent =
    "Seleccionaste crear una paleta de 8 colores. Presiona el boton Generar paleta"),
    (cantidadElegida = 8));
});
boton9.addEventListener("click", function () {
  ((mensaje.textContent =
    "Seleccionaste crear una paleta de 9 colores. Presiona el boton Generar paleta"),
    (cantidadElegida = 9));
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
    "Para copiar el codigo del color haz clic sobre el";

  paleta.innerHTML = "";

  for (let i = 0; i < cantidadElegida; i++) {
    const caja = document.createElement("div");
    const muestraColor = document.createElement("div");
    const codigoColor = document.createElement("div");
    const colorHEX = generarColores();
    paletaActual.push({ colorHEX, bloqueado: false });

    codigoColor.textContent = colorHEX;

    codigoColor.addEventListener("click", function () {
      navigator.clipboard.writeText(colorHEX);

      const toast = document.createElement("div");
      toast.textContent = "Código copiado";
      toast.classList.add("toast");

      caja.appendChild(toast);

      setTimeout(() => {
        toast.remove();
      }, 2000);
    });
    codigoColor.textContent = colorHEX;
    paleta.appendChild(caja);
    caja.appendChild(muestraColor);
    caja.appendChild(codigoColor);
    caja.classList.add("caja");
    muestraColor.classList.add("color");
    codigoColor.classList.add("codigo");
    muestraColor.style.backgroundColor = colorHEX;
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
paletaGenerada.addEventListener("click", generarPaletasDeColores);
