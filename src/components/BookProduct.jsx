import React from "react";
import { Form, Button } from "react-bootstrap";

const BookProduct = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(e);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="product">
        <Form.Label>Book a Product</Form.Label>
        <Form.Select>
          <option>Select a Product</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="mileage">
        <Form.Label>From</Form.Label>
        <Form.Control type="date" min="2018-01-01" max="2022-12-31" />
        <Form.Label>To</Form.Label>
        <Form.Control type="date" min="2018-01-01" max="2022-12-31" />
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
