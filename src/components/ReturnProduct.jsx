import React from "react";
import { Form, Button } from "react-bootstrap";
import { getProducts } from "../helpers/getProducts";
import { productsOp } from "../utils/products";

const ReturnProduct = ({ onClose, setShowModal }) => {
  const products = getProducts(productsOp.Return);
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(e);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="product">
        <Form.Label>Return a Product</Form.Label>
        <Form.Select name="product">
          <option value="-1">Select a Product</option>
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
        <Form.Control type="text" placeholder="Used Mileage" name="mileage" />
      </Form.Group>
      <Button variant="secondary" onClick={() => setShowModal(false)}>
        No
      </Button>
      <Button variant="primary" type="submit">
        Yes
      </Button>
    </Form>
  );
};

export default ReturnProduct;
