// * Formas de imprimir "hola mundo" en la web
/* 
document.write("Hola mundo #1")
alert("Hola mundo #2")

console.log("Hola mundo #3")
*/

// TODO Variables => espacio en memoria donde al que le asignamos un valor

// ? La variables las declaramos con: var, let, const

// * 1. var - Tratar de nunca usar var
// var nombre = "Jesus";

// var nombre = 150;

// document.write(nombre)

// * 2. let
// let edad = 25;

// edad = 28

// document.write(edad)

// * 3. const
// const color = "#f00";

// color = "#0f0";

// document.write(color);

// TODO: Tipos de datos en js

// * string, number, boolean, undefined

// ? 1. string: cadena de texto
/*
let nombre = "Jesus" // Comillas dobles
nombre = 'Adrian' // Comillas simples
nombre = `Moreno` // Comillas backticks

document.writeln(typeof nombre)
*/

// ? 2. number: valor númerico
/*
let number = 25;

document.writeln(typeof number);
*/
// ? 3. boolean: vardadero o falso, true or false
/*
let jesus_es_prof = true
jesus_es_prof = false

console.log(jesus_es_prof);
document.writeln(typeof jesus_es_prof);
*/
// ? 4. undefined: es un valor indefinido
/*
let nombre
document.writeln(nombre)

nombre = "jesus"
document.writeln(nombre)
*/

// TODO: Operadores aritmeticos en js 
// * Suma +; Resta -, Multiplicacion *, division /, Potenciacion **, Modulo %

let num1 = 7
let num2 = 9
let resultado

// * 1. Suma +
// resultado = num1 + num2
// document.writeln(resultado)

// * 2. Resta -
// resultado = num1 - num2
// document.writeln(resultado)

// * 3. Multiplicacion *
// resultado = num1 * num2
// document.writeln(resultado)

// * 4. Division /
// resultado = num1 / num2
// document.writeln(resultado)

// * 5. Potenciacion **
// resultado = num1 ** num2
// document.writeln(resultado)

// * 6. Modulo % (Resto de una division)
resultado = num2 % num1 // 9 / 7 Resto = 2
document.writeln(resultado)