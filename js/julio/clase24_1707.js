/*
const items = document.querySelectorAll("li");

let texto = `<b class="b">items</b>`;

items[0].textContent = texto; // * Muestra o modifica el texto

items[1].innerHTML = texto; // * Parecido a textContent pero con la diferencia que si tome en cuenta el código html

const b = document.querySelector(".b");
b.textContent = "Nuevo contenido";
*/
/*
const ul = document.querySelector("ul");

let texto = `<b class="b">items</b>`;

ul.firstElementChild.innerHTML = texto
//ul.children[1].innerHTML = texto;


const body = ul.parentElement
body.style.backgroundColor = "#333"
console.log(body.parentElement);
*/
/*
const element = document.querySelector("div") 

const codigoHtml = `<p class="p">Párrafo</p>`

console.log(element.nodeName)

element.nodeName == "DIV" ? element.innerHTML = codigoHtml : "";*/

//const element = document.querySelector("div");
/*
element.setAttribute("class", "card")
element.removeAttribute("class")
*/
/*
const option = document.querySelector("select")
option.firstElementChild.toggleAttribute("disabled")*/

/*
const div = document.querySelector("#div1")

console.log(div.classList)*/


const body = document.querySelector("body")

const ol = document.createElement("ol");

// Creación de elementos HTML
const li = document.createElement("li");

li.textContent = "item 1";
console.log(li.textContent);

// * Crear un clon de un elemento

const li2 = li.cloneNode();
li2.textContent = "nuevo item";
console.log(li2);


// TODO: Insertar un elemento HTML en el DOM


body.append(ol)
ol.append(li) // *Insertardo un elemento li dentro de la etiqueta ol
ol.append(li2)


const listElements = [ol, li, li2]

console.log(listElements)