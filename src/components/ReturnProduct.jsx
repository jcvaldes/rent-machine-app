import React from "react";
import { Form, Button } from "react-bootstrap";
import { getProducts } from "../helpers/getProducts";
import { productsOp } from "../utils/products";

const ReturnProduct = ({ onClose }) => {
  const products = getProducts(productsOp.Return);
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(e);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="product">
        <Form.Label>Return a Product</Form.Label>
        <Form.Select>
          <option>Select a Product</option>
          {products.map((product) => {
            return (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="mileage">
        <Form.Control type="text" placeholder="Used Mileage" />
      </Form.Group>
      <Button variant="secondary" onClick={onClose}>
        No
      </Button>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Yes
      </Button>
    </Form>
  );
};

export default ReturnProduct;
