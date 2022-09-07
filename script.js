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
    productsContainer.innerHTML = `<h3 class="no-products" >There are no products to display. </h3>`;
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

  let input = formSearch.value.toLowerCase();

  filterProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(input);
  });

  // console.log("click");

  getProducts();
});

const buttonsDisplay = () => {
  btnGroup.innerHTML = buttons
    .map((btn) => {
      return `<button class="btn"  data-id=${btn}  >${btn}</button>`;
    })
    .join("");
};

buttonsDisplay();

btnGroup.addEventListener("click", (e) => {
  // console.log(e);
  if (e.target.classList.contains("btn")) {
    // console.log("btn");
    if (e.target.dataset.id === "all") {
      // console.log("data set");
      filterProducts = [...products];
    } else {
      filterProducts = products.filter((product) => {
        return product.company === e.target.dataset.id;
      });
      // console.log(filterProducts);
    }
  }
  formSearch.value = "";
  getProducts();
});
