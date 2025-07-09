// alert("Hola mundo!");
// document.writeln("Hola mundo!!")
// console.log("Hola mundo!!!")

// * Variables, tipo de datos, operadores, funciones

// * 1. Variables => var, let, const
// * 2. Tipos de datos => string, number, boolean, undefined

// let  nombre = 'Jesus' // string
// document.writeln(typeof nombre)
// let tipo = 24 // number
//let tipo = false // true or false // boolean
//let tipo // undefined

// * Operadores aritmeticos => +, -, *, /, %, **
// + => me permite sumar o concatenar dos o mas datos dependiendo del caso

let num1 = "17";
let num2 = 17;

// document.writeln(num2 + num1) // Suma
// document.writeln(num2 - num1) // Resta
// document.writeln(num2 - num1) // Resta
// document.writeln(num2 / num1) // División
// document.writeln(num2 % num1) // Módulo => el resto de una división
// document.writeln(2 ** 3) // Potenciación

// * Operadores de comparación
// ==, !=, <, >, <=, >=, ===, !==
// Al comparar dos datos sí la respuesta es si => true; si es no => false

// document.writeln(num1 == num2) // Igualdad
//document.writeln(num1 != num2) // Desigualdad
// document.writeln(num1 < num2) // Menor qué
//document.writeln(num1 > num2) // Mayor qué
// document.writeln(num1 <= num2) // Menor o igual
// document.writeln(num1 >= num2) // Mayor o igual
// document.writeln(10 === "10") // Estrictamente igual
// document.writeln(10 !== "10") // Estrictamente diferente

const user1 = "danielDev";
const passwd = "123456";

// * Operadores lógicos
// ? AND => &&; OR => ||; NOT => !

// let resultado = user1 == "AdrianDev" || 25 + 9 == 34 && true != !false

// document.writeln(resultado);

// TODO: Consicional if/else
/*
if ("danielDev1" === user1) {

  alert("El usuario existe");

    if("1234567" === passwd){
        alert("Inicio de sesión correcto")
    }else{
        alert("contraseña inválida")
    }
} else {
  alert("Usuario no encontrado");
}
*/

if (!false) console.log("Verdadero");
else console.log("Falso");

// ? Operador ternario
user1 == "AdrianDev" || (25 + 9 == 34 && true != !false)
  ? console.log("Verdadero")
  : console.log("Falso");

// Funciones

// 1. Funciones por declaracion
/*
function saludo(){
    let nombre = prompt("ingresar nombre")

    document.writeln("saludos " + nombre)
}
*/
// 2. Funciones por expresión
/*
const saludo = function () {
  let nombre = prompt("ingresar nombre");

  document.writeln("saludos " + nombre);
};
saludo()
*/

// 3. Funcion flecha => arrow function

const saludo = () => {
  let nombre = prompt("ingresar nombre");

  document.writeln("saludos " + nombre);
};

saludo()
