import { products } from "./product.js";
const productsContainer = document.querySelector(".products");
const form = document.querySelector(".form");
const formSearch = document.querySelector(".form-search");
const btnGroup = document.querySelector(".btn-group");
const buttons = ["all", ...new Set(products.map((product) => product.company))];
// console.log("🚀 ~ file: script.js ~ line 7 ~ buttons", buttons);

// console.log(products);
// copy of the products
let filterProducts = [...products];
// console.log(filterProducts);

const getProducts = () => {
  if (filterProducts.length < 1) {
    productsContainer.innerHTML = `There are no products to display. `;
    return;
  }

  productsContainer.innerHTML = filterProducts
    .map((product) => {
      const { id, image, price, title } = product;

      return `  <article class="card-product"  data-id=${id}  >
          <img
            src=${image}
            alt="product-image"
            class="product-image"
          />
          <h2 class="product-title">${title}</h2>
          <p class="product-price">${price}</p>
        </article>`;
    })
    .join(" ");
};
getProducts();

form.addEventListener("keyup", (e) => {
  e.preventDefault();

  const input = formSearch.value;
  filterProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(input);
  });

  getProducts();
});

const buttonsDisplay = () => {
  btnGroup.innerHTML = buttons
    .map((btn) => {
      return `<button class="btn">${btn}</button>`;
    })
    .join("");
};

buttonsDisplay();
