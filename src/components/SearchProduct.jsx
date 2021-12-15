import React from "react";
import { Form } from "react-bootstrap";
import "../styles/SearchProduct.scss";

const SearchProduct = ({ searchProduct }) => {
  const onChange = (e) => {
    searchProduct(e.target.value);
  };
  return (
    <Form className="Form">
      <Form.Control
        type="text"
        placeholder="Search Product"
        onChange={onChange}
      />

      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
  );
};

export default SearchProduct;
