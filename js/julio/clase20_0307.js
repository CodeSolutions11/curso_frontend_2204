// El signo +. Suma dos numeros o tipos de datos number
// En el caso de operar con strings lo que heces es concatenar
// Concatenar significa "unir"
//document.writeln("Hola " + "Ayari");

// * Un input de type="text" = tipo de dato string en js
/*
let nombre = prompt("Ingresar nombre");
document.writeln("Hola " + nombre);

let edad = prompt("Ingresar Edad");
console.log(typeof edad);
document.writeln("Tienes " + edad + " años");
*/

// const edad = prompt("Ingresar Edad");
// edad = 5
// if (typeof edad == "string") console.log("Efectivamente es un string");
// else console.log("Efectivamente no es un string");
/*
typeof edad == "string"
  ? console.log("Efectivamente " + edad + " es un tipo de dato string")
  : console.log("Efectivamente " + edad + " no es un tipo de dato string");
*/

// TODO: funciones => Mediante declaración, Mediante expresión, funcion flecha

// * 1. Mediante declaración
function saludar() {
  let nombre = prompt("Ingresar nombre");

  document.writeln("Hola " + nombre);
}
//saludar()

// * 2. Mediante expresión
const sumar = function () {
  document.writeln(12 + 5);
};
//sumar();

//* 3. Funcion flecha / Arrrow Function
const dividir = () => {
  document.writeln(12 / 5);
};

//dividir()

// * Pasar parámetros a las funciones

const listaUsuarios = (nombre, correo) => {
  document.writeln(`
    <ul>
        <li> Nombre: <b class="name">${nombre}</b></li>
        <li> Correo: <b class="correo">${correo}</b></li>
    </ul>
`);

  //document.writeln("<span> Nombre: <b>" + nombre + "</b></span>"+ "<span> Correo: <b>" + correo + "</b></span>")
};

listaUsuarios("Ronald", "ronald17@gmail.com");
listaUsuarios("Keinny", "keinny17@gmail.com");
listaUsuarios("Kelvin", "Kelvin@gmail.com");
listaUsuarios("Ayari", "ayari@gmail.com");

const restar = (num1, num2) => {
  res = num1 - num2;
  return res;
};

let resultado = restar(12, 1);
console.log(resultado);
