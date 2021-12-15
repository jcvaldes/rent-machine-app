import React from "react";

const ProductItem = ({ product, index }) => {
  const isAvailability = (availability) => {
    return availability ? "Yes" : "No";
  };
  return (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.code}</td>
      <td>{isAvailability(product.availability)}</td>
      <td>{product.needsToReturn}</td>
      <td>{product.durability}</td>
      <td>{product.mileage}</td>
    </tr>
  );
};

export default ProductItem;
