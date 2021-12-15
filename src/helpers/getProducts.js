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
