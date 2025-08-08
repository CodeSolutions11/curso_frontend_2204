// TODO: Asincronia: async/await , Consumir Apis, fetch, try/catch

const { createElement } = require("react");

const api_url = "https://fakestoreapi.com/products";
const categories_url = "https://fakestoreapi.com/products/categories";

const filtersContainer = document.querySelector(".filters");
const grid = document.querySelector(".product-grid");

let allProducts = []; // Array()
let currentCategory = "all";

// ? Cargar Todos lo productos
/*
const data = fetch(api_url)
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log(data);
*/

// * Cargar categorias
async function loadPCategories() {
  const categories = await fecthData(categories_url);
    createCategoryButton(categories)
}

// * Cargar Productos
async function loadProducts() {
  allProducts = await fecthData(api_url);
  console.log(allProducts);
  displayProducts();
}

// * Funcion para obtener los datos de la api
async function fecthData(url) {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  return data;
}

function displayProducts() {
  grid.innerHTML = "";

 
  allProducts.forEach((product) => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });
}


// * crear los botones de las categorias

function createCategoryButton(categories){
    categories.forEach(category => {
        const btn = document.createElement("button")
        btn.textContent = capitalizedFirstLetter(category)

    })
}
// * Capitalizar una letra
function capitalizeFirstLetter(string){
    return string.chartAt(0).toUpperCase() + string.slice(1)
}

// * Crear una card para el producto
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  let HTMLCode = `
    <img src="${product.image}" alt="${product.title}">
    <div>
        <h2>${product.title}</h2>
        <p>${product.price}</p>
    </div>
  `;
  card.insertAdjacentHTML("Afterbegin", HTMLCode);

  return card;
}

loadProducts();


