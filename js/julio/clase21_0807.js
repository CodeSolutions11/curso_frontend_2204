// Se trata de escribir un script que diga si un número es par o es impar.
// Recordemos que un número es par si al dividirlo por 2 da como resto 0.

// let numero = prompt("Ingresar Número");
// "2" => string pero 2 => number

// numero = parseInt(numero);

//let parImpar = numero
/*
if (numero % 2 === 0) document.writeln(`<p>El número ${numero} es par</p>`);
else document.writeln(`<p>El número ${numero} es impar</p>`);
*/
/* numero % 2 === 0
  ? document.writeln(`<p>El número ${numero} es par</p>`)
  : document.writeln(`<p>El número ${numero} es impar</p>`);
*/

// TODO: Objetos {}: tienen propiedades y métodos
// * Ejemplo de propiedades
/*
const usuario = {
    nombre: "Jesus",
    apellido: "Rattia",
    email: "jesus@gmail.com"
}
    document.writeln(usuario.nombre)
*/

// * Ejemplo de metodos
/*
const player = {
  nick: "AdrianPlayer",
  presentation: function () {
    document.writeln("Hola soy " + this.nick);
  },
};

player.presentation();
*/
/*
const mostrarUsuario = (user) => {
  user.description();
};
*/

/*
const user1 = {
  name: "Kelvin",
  email: "kelvin@gmail.com",
  city: "Caracas",
  description: function () {
    document.writeln(`
        <p>Nombre: <span>${this.name}</span> Correo: <span>${this.email}</span> Ciudad: <span>${this.city}</span></p>    
    `);
  },
};
const user2 = {
  name: "Ayari",
  email: "ayari@gmail.com",
  city: "Caracas",
  description: function () {
    document.writeln(`
        <p>Nombre: <span>${this.name}</span> Correo: <span>${this.email}</span> Ciudad: <span>${this.city}</span></p>    
    `);
  },
};

user1.description()
user2.description()
*/

// TODO: Arrays []

// const tipos = [50, "Hello", true];
/*
const alumnos = ["Leonardo", "Ayari", "Kelvin"];

document.writeln(`
    <h1> Lista de Alumnos </h1>
    <ol>
        <li>${alumnos[0]}</li>    
        <li>${alumnos[1]}</li>    
        <li>${alumnos[2]}</li>    
   </ol>
`);
*/

const usuarios = [
  {
    name: "jesus",
    email: "jesus@gamil.com",
    mostrarDatos: function () {
      return `
        <p>Nombre: <b>${this.name}</b> Correo: <b>${this.email}</b></p>
      `;
    },
  },
  {
    name: "Adrian",
    email: "jesus@gamil.com",
    mostrarDatos: function () {
      return `
        <p>Nombre: <b>${this.name}</b> Correo: <b>${this.email}</b></p>
      `;
    },
  },
  {
    name: "Pedro",
    email: "pedro@gamil.com",
    mostrarDatos: function () {
      return `
        <p>Nombre: <b>${this.name}</b> Correo: <b>${this.email}</b></p>
      `;
    },
  },
  {
    name: "Daniel",
    email: "jesus@gamil.com",
    mostrarDatos: function () {
      return `
        <p>Nombre: <b>${this.name}</b> Correo: <b>${this.email}</b></p>
      `;
    },
  },
];

document.writeln(usuarios[0].mostrarDatos());
document.writeln(usuarios[1].mostrarDatos());
document.writeln(usuarios[2].mostrarDatos());
document.writeln(usuarios[3].mostrarDatos());
