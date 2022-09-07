const url = "https://course-api.com/react-store-products";

const products = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

products();
