// TODO Métodos de arrays: foreach, some, includes

// ? Foreach
/*
const nombres = ["Jesus", "Kelvin", "Andrea"];

nombres.forEach((nombre, index) => {
  console.log(element, index);
});
*/

// ? some
/*
const nombres = ["Jesus", "Kelvin", "Andrea"];

const result = nombres.some((nombre) => nombre == "Ayari");
console.log(result);
*/
// ? includes
/*
const nombres = ["Jesus", "Kelvin", "Andrea"];

let result = nombres.includes("Kelvin");
console.log(result)*/

// TODO: Desarrollo del juego

const celdas = document.querySelectorAll(".celdas");
const restart_btn = document.querySelector(".restart_btn");
const status = document.querySelector(".status");
// console.log(celdas, restart_btn, status)

let juegoEnCurso = true;
let turnoJugador = "X";
// let estadoDelJuego = ["", "", "", "", "", "", "", "", ""]
const estadoDelJuego = Array(9).fill("");

const condicionesDeVictoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const manejadorClicksCeldas = (_, i) => {
  if (!juegoEnCurso || estadoDelJuego[i]) return;

  estadoDelJuego[i] = turnoJugador;
  celdas[i].textContent = turnoJugador;

  if (chequearVictoria()) {
    status.textContent = `Ha ganado el jugador: ${turnoJugador}`;
    juegoEnCurso = false;
  } else if (!estadoDelJuego.includes("")) {
    status.textContent = "Son tablas";
    juegoEnCurso = false;
  } else {
    turnoJugador = turnoJugador === "X" ? "O" : "X";
    status.textContent = `Le toca a: ${turnoJugador}`;
  }
};

function chequearVictoria() {
  let hayUnGanador = condicionesDeVictoria.some(
    ([a, b, c]) =>
      estadoDelJuego[a] &&
      estadoDelJuego[a] === estadoDelJuego[b] &&
      estadoDelJuego[a] === estadoDelJuego[c]
  );
  return hayUnGanador;
}

celdas.forEach((celda, pos) =>
  celda.addEventListener("click", (event) => manejadorClicksCeldas(event, pos))
);

const reiniciarJuego = () => {
  juegoEnCurso = true;
  turnoJugador = "X";
  estadoDelJuego = Array(9).fill("");
  celdas.forEach((celda) => (celda.textContent = ""));
};

status.textContent = `Le toca a: ${turnoJugador}`;

restart_btn.addEventListener("click", reiniciarJuego);
