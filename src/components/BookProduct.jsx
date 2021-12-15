import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { getProducts } from "../helpers/getProducts";
import { productsOp } from "../utils/products";
import * as moment from "moment";
import { getProduct } from "../helpers/getProducts";

const BookProduct = ({ onClose }) => {
  const products = getProducts(productsOp.Booking);
  const [formState, setFormState] = useState({
    productId: 0,
    from: "",
    to: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = moment(formState.from);
    const to = moment(formState.to);
    const days = to.diff(from, "days");
    const product = getProduct(+formState.productId);
    debugger;
    if (days < product.minimum_rent_period) {
      setShowAlert(true);
    } else {
      onClose({ ...formState, price: calcPrice() });
    }
  };
  const calcPrice = (operation) => {
    const from = moment(formState.from);
    const to = moment(formState.to);
    const days = to.diff(from, "days");
    const product = getProduct(+formState.productId);
    return product.price * days;
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="product">
        <Form.Label>Book a Product</Form.Label>
        <Form.Select name="productId" onChange={handleChange}>
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
        <Form.Label>From</Form.Label>
        <Form.Control
          name="from"
          type="date"
          min="2018-01-01"
          max="2022-12-31"
          onChange={handleChange}
        />
        <Form.Label>To</Form.Label>
        <Form.Control
          name="to"
          type="date"
          min="2018-01-01"
          max="2022-12-31"
          onChange={handleChange}
        />
      </Form.Group>
      {showAlert && <Alert variant="danger">No se puede alquilar</Alert>}
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
