// ? Function para crear elementos
const crearElement = (element) => document.createElement(element);
// * Crear elementos
const ol = crearElement("ol");
const list = [crearElement("li"), crearElement("li"), crearElement("li")];

// ? Function para seleccionar elementos
const seleccionarElement = (selector) => document.querySelector(selector);
// * Seleccionar elementos
const body = seleccionarElement("body");

const data = ["Append", "After", "before", "prepend", "remove"];

// ! Insertando elementos
// TODO: La API de Elementos HTML
/*
body.append(ol);

for (let i = 0; i <= 2; i++) {
    list[i].textContent = data[i]
    ol.append(list[i])
}

ol.before((list[0].textContent = data[2]));
ol.after((list[2].textContent = data[1]));

list[1].remove()
list[0].remove()

ol.remove()

const box = seleccionarElement(".box")
box.remove()

ol.append((list[0].textContent = data[0]));
ol.append((list[0].textContent = "append2"));

ol.prepend((list[0].textContent = data[3]));

ol.replaceChildren((list[1].textContent = "New Element"));
ol.replaceWith((list[1].textContent = "New Element 2"));
*/

const li = crearElement("li");
li.textContent = "Elemento 1";
const li2 = crearElement("li");
li2.textContent = "Elemento 2";

// TODO: La API de Inserción Adyacente

//ol.append((list[0].textContent = data[0]));

// ol.insertAdjacentElement("beforebegin", li)
// ol.insertAdjacentElement("afterbegin", li)
// ol.insertAdjacentElement("afterbegin", li2)

// ol.insertAdjacentElement("beforeend", li)
// ol.insertAdjacentElement("beforeend", li2)
// ol.insertAdjacentElement("afterend", li2)
/*
const htmlCode = `
    <div class="container">
        <h1> Titulo </h1>
        <p> texto del contenedor </p>
        <button> Ver mas </button>
    </div>
`;
*/
const insertCard = (title) => `
    <div class="container">
        <h1> ${title} </h1>
        <p> texto del contenedor </p>
        <button> Ver mas </button>
    </div>
`;

body.insertAdjacentHTML("afterbegin", insertCard("titulo 1"));
body.insertAdjacentHTML("afterbegin", insertCard("titulo 2"));
body.insertAdjacentHTML("afterbegin", insertCard("titulo 3"));
body.insertAdjacentHTML("afterbegin", insertCard("titulo 4"));

/*
    TODO Ejercicio: Eliminar container con el titulo 2

    ? Solucion Leonardo:
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
        const h1 = container.querySelector('h1');
        if (h1 && h1.textContent.trim() === 'titulo 2') {
            container.remove();
        }
    });

    const containers = document.querySelectorAll(".container");
    console.log(containers);
    for (let i = 0; i < containers.length; i++) {
    const h1 = containers[i].querySelector("h1");
        if (h1 && h1.textContent.trim() === "titulo 2") {
            containers[i].remove();
            break; // termina el bucle una vez que elimina el primero que coincide
        }
    }
        
*/
const containers = document.querySelectorAll(".container");
for (let i = 0; i < containers.length; i++) {
    containers[i].children[0].innerText === "titulo 2" ? containers[i].remove() : "" 
}
