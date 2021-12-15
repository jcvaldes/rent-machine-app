import React, { useState } from "react";
import { Table } from "react-bootstrap";
import data from "../assets/data";
import ProductItem from "../components/ProductItem";
import SearchProduct from "../components/SearchProduct";

const ProductTable = () => {
  const [products, setProducts] = useState(data);
  const searchProduct = (value) => {
    if (value === "") {
      setProducts(data);
    } else {
      const productsFiltered = products.filter((p) => {
        return p.name.toLowerCase().startsWith(value.toLowerCase());
      });
      setProducts(productsFiltered);
    }
  };
  return (
    <>
      <SearchProduct searchProduct={searchProduct} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Code</th>
            <th>Availability</th>
            <th>Needs to return</th>
            <th>Durability</th>
            <th>Mileage</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return <ProductItem key={index} product={product} />;
          })}
        </tbody>
      </Table>
    </>
  );

  // <div>{products.map((product) => {})}</div>;
};

export default ProductTable;
