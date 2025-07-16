// TODO: DOM: document object model
// * objeto document: el arbol de etiquetas html
/*
const titleH1 = document.querySelector("#t1");
//const paragraph = document.querySelector("p");

const parrafos = document.querySelectorAll("p");
console.log(parrafos);

const cambiarContenido = (title, contents) => {
  titleH1.textContent = title;

  for (let i = 0; i <= 1; i++) {
    parrafos[i].textContent = contents[i];
  }
};

let title = "Hola a todos";

const content = ["Contenido del párrafo 1", "Contenido del párrafo 2"];

cambiarContenido(title, content);
*/

const li = document.querySelectorAll("li");
const products = [
  "Laptop Lenovo i5 7th",
  "PC Gamer ",
  "Mouse gamer",
  "Teclado gamer",
];

const nombresProductos = (products, colors) => {
  for (let i = 0; i <= 3; i++) {
    li[i].textContent = products[i];
    li[i].style.color = colors[i];
  }
};

const colors = ["#f00", "#ff0", "#00f", "#0ff"];

//nombresProductos(products, colors)
/*
const paragraph = document.querySelector("p");
paragraph.className = "p1";
paragraph.style.backgroundColor = "white";

console.log(paragraph.style.fontSize);*/

const listaFrutas = document.querySelectorAll(".fruta");

const invFrutas = [
  {
    nombre: "Manzanas",
    cant: 5,
  },
  {
    nombre: "Peras",
    cant: 2,
  },
  {
    nombre: "Parchitas",
    cant: 1,
  },
];

const stylesFrutas = [
  {
    font: "2rem",
    color: "#f00",
  },
  {
    font: "1.2rem",
    color: "#ff0",
  },
  {
    font: "1.7rem",
    color: "#f0f",
  },
];

for (let i = 0; i <= 2; i++) {
  listaFrutas[
    i
  ].textContent = `Nombre: ${invFrutas[i].nombre} Cantidad: ${invFrutas[i].cant}`;

  listaFrutas[i].style.color = stylesFrutas[i].color;
  listaFrutas[i].style.fontSize = stylesFrutas[i].font;
  listaFrutas[i].style.background = "#333";
}
