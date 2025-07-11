// TODO: Bucles => while - do while - for  - for in - for of

// * while: Mientras el la condición sea verdadera el bucle se va a ejecutar

//let i = 0;
/*
while(i < 5){

    document.writeln(`
        <p>El valor de i es: <b style="color:red;">${i}</b></p>
    `)

    i++ // i = i + 1
}
*/

// * do.. while
/*
do {
  document.writeln(`
        <p>El valor de i es: <b style="color:red;">${i}</b></p>
    `);

  const nombre = prompt("ingresar nombre");

  document.writeln(nombre);

  i++;
  console.log(i);

} while (i < 0);
*/

// * Bucle for (inicializacion; condición; incremento)
/*
for (let i = 0; i < 5; i++) {
  document.writeln(`
        <p>El valor de i es: <b style="color:red;">${i}</b></p>
    `);
}
*/

const names = ["Daniel", "Alan", "Ayari", "Keinny", "Kelvin"];

// let i = 0
/*
while(i <= 4){

    document.writeln(`
        <p>Nombre: <b>${names[i]}</b></p>
    `)

    i++ // i = i + 1
}*/
/*
do{

    document.writeln(`
        <p>Nombre: <b>${names[i]}</b></p>
    `)

    i++
}while(i >= 4)
*/
/*
for (let i = 0; i <= 4; i++) {
  document.writeln(`
        <p>Nombre: <b>${names[i]}</b></p>
    `);
}
*/

const users = [
  ["Jesus", "jesus@gmail.com"],
  ["Ronald", "Ronald@gmail.com"],
  ["Leonardo", "Leonardo@gmail.com"],
];
/*
document.writeln(`
    <p>Nombre: <b>${users[0][0]}</b>   Correo: <b>${users[0][1]}</b></p>    
`);
document.writeln(`
    <p>Nombre: <b>${users[1][0]}</b>   Correo: <b>${users[1][1]}</b></p>    
`);
document.writeln(`
    <p>Nombre: <b>${users[2][0]}</b>   Correo: <b>${users[2][1]}</b></p>    
`);
*/
// i, j
let i;
let j;
/*
for (i = 0; i <= 2; i++) {
  
    // for(j = 0; j <= 1; j++){
    //     document.writeln(`
    //         <p>Nombre: <b>${users[i][0]}</b>   Correo: <b>${users[i][1]}</b></p>    
    //     `)
    // }

  document.writeln(`
    <p>Nombre: <b>${users[i][0]}</b>   Correo: <b>${users[i][1]}</b></p>    
`);
}*/

/* ? Ejercicio: Este script debe escribir la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.

    ejemplo: Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma

    4 x 1 = 4

    4 x 2 = 8..
*/
i = 1;
let num;

do {
  num = parseInt(prompt("Ingresar numero de la tabla de multiplicar"));
  //num = parseInt(num);

  console.log(num);
  console.log(typeof num);
  console.log(Number.isNaN(num));
} while (Number.isNaN(num));

let result = 0;

do {
  result = num * i;

  document.writeln(`
        <p>${num} x ${i} = ${result}</p>    
    `);

  i++;
} while (i <= 10);

