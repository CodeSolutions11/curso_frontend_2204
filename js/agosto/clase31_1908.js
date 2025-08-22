// const mensaje = document.createElement("p")
// mensaje.textContent = "Hola Mundo"
// document.body.appendChild(mensaje)
/*
const alumno = {
    name: "Pedro"
}

let { name } = alumno // * Desestructuracion de objetos

console.log(name)*/

// TODO: Modulos: require(), import, export

// import users from './clase31_modulos.js'
// import { products } from './clase31_modulos.js' 
// import users, { products } from "./clase31_modulos.js"
import data from "./clase31_modulos.js"
import { numero, texto, booleano, nulo } from './clase31_variables.js'
import { saludarPorConsole } from './clase31_functions.js'

//!document.write(users)
data.users.forEach(user => console.log(user))

data.products.forEach(product => console.log(product))

console.log(numero, texto, booleano, nulo)

saludarPorConsole("Adrian")