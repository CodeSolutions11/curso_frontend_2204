// Confifigurar la API
const API_URL = "https://fakestoreapi.com/products";
const CATERORIES_URL = "https://fakestoreapi.com/products/categories";

// Elementos del DOM
const grid = document.querySelector(".product-grid");
const filterContainer = document.querySelector(".filters");

// Estado de la app
let allProducts = [];
let currentCategory = "all";

// Obtener datos
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Sistema de categorias

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const createCategoryButtons = (categories) => {
  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.textContent = capitalizeFirstLetter(category);
    btn.setAttribute("data-category", category);
    filterContainer.append(btn);
    //filterContainer.insertAdjacentElement("afterend", btn);
  });

  filterContainer.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.tagName === "BUTTON") {
      currentCategory = e.target.getAttribute("data-category");
      console.log(currentCategory);
      // updateActiveFilter()
      displayProducts();
    }
  });
};

async function loadCategories() {
  const categories = await fetchData(CATERORIES_URL);
  console.log(categories);
  createCategoryButtons(categories);
}

// Carga y Filtrado de los productos

const displayProducts = () => {
  grid.innerHTML = ""; // Limpiar el contenedor de productos

  let filteredProducts =
    currentCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === currentCategory);

  console.log(filteredProducts);
  filteredProducts.forEach((product) => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });
};

const loadProducts = async () => {
  allProducts = await fetchData(API_URL);
  console.log(allProducts);
  displayProducts();
};

// TODO: Creacion de tarjetas de productos

const createProductCard = (product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="info">
            <h2>${product.title}</h2>
            <p>${product.price}$</p>
        </div>
    `;
  return card;
};

loadCategories();
loadProducts();
