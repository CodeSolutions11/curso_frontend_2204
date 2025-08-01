/*
const btn = document.querySelector("button");
const box = document.querySelector(".box");

const saludar = () => alert("Hola a todos!!");

btn.addEventListener("click", (e) => {
  console.log(e.type);

  const color = prompt("Nombre del color en inlgés o en hex");
  box.style.background = color;
});
*/

const data = [
  {
    name: "Jesus",
    email: "jesus@gmail.com",
  },
  {
    name: "Jesus",
    email: "jesus@gmail.com",
  },
];
const tbody = document.querySelector("tbody");
const codeHTML = `
    <tr>
        <td>Jesus</td>
        <td>jesus@gmail.com</td>
    </tr>`;

tbody.insertAdjacentHTML("beforeend", codeHTML);




/*
const buttons = document.querySelectorAll("button");
const btn = buttons[0];
const fila = btn.parentElement.parentElement;

const btn2 = buttons[1];
const fila2 = btn2.parentElement.parentElement;

const btn3 = buttons[2];
const fila3 = btn3.parentElement.parentElement;

const btn4 = buttons[3];
const fila4 = btn4.parentElement.parentElement;

console.log(fila);

btn.addEventListener("click", () => {
  fila.remove();
});

btn2.addEventListener("click", () => {
  fila2.remove();
});

btn3.addEventListener("click", () => {
  fila3.remove();
});

btn4.addEventListener("click", () => {
  fila4.remove();
});
*/