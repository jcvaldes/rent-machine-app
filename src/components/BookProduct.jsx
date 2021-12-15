import React from "react";
import { Form, Button } from "react-bootstrap";
import { getProducts } from "../helpers/getProducts";
import { productsOp } from "../utils/products";

const BookProduct = ({ onClose }) => {
  const products = getProducts(productsOp.Booking);
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(e);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="product">
        <Form.Label>Book a Product</Form.Label>
        <Form.Select name="product">
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
        <Form.Label>From</Form.Label>
        <Form.Control
          name="from"
          type="date"
          min="2018-01-01"
          max="2022-12-31"
        />
        <Form.Label>To</Form.Label>
        <Form.Control name="to" type="date" min="2018-01-01" max="2022-12-31" />
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

export default BookProduct;
