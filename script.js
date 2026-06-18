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
  let x = 0;
  for (let i = 0; i < 6; i++) {
    color = generarNumero();
    x += numerosColoresPaleta[color];
  }
  return x;
}
let colorHEX = "#" + generarColores();
console.log(colorHEX);
