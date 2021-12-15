import React from "react";
import { Form, Button } from "react-bootstrap";

const ReturnProduct = ({ onClose }) => {
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
