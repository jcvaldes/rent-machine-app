import { productsOp } from "../utils/products";

export const getProducts = (operation) => {
  let products = JSON.parse(window.localStorage.getItem("productsDb"));
  if (operation === productsOp.Booking) {
    products = products.filter((product) => product.availability === true);
  } else {
    products = products.filter((product) => product.availability === false);
  }
  return products;
};

export const getProduct = (id) => {
  let products = JSON.parse(window.localStorage.getItem("productsDb"));
  return products.find((product) => product.id === id);
};
