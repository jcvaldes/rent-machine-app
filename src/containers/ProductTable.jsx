import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import data from "../assets/data";
import ProductItem from "../components/ProductItem";
import SearchProduct from "../components/SearchProduct";
import "../styles/ProductTable.scss";
import { productsOp } from "../utils/products";
import BookProduct from "../components/BookProduct";
import ReturnProduct from "../components/ReturnProduct";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

const ProductTable = () => {
  const [products, setProducts] = useState(data);
  const [show, setShow] = useState(false);
  const [operation, setOperation] = useState(productsOp.Booking);
  const [showAlert, setShowAlert] = useState(false);
  const [product, setProduct] = useState({});

  const onClose = (e) => {
    debugger;
    setShow(false);
    if (e.target && e.target.value === "") {
      return;
    }
    setProduct(e);
    setShowAlert(true);
  };
  const makeMessage = (operation) => {
    return `Your ${
      operation === productsOp.Booking ? "estimated" : "total"
    } price is: <br /> Do you want to proceed?`;
  };
  const handleShow = (op) => {
    setShow(true);
    setOperation(op);
  };
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
      <div className="Actions">
        <Button
          variant="primary"
          className="me-2"
          onClick={(e) => handleShow(productsOp.Booking)}
        >
          Book
        </Button>
        <Button variant="danger" onClick={(e) => handleShow(productsOp.Return)}>
          Return
        </Button>
      </div>
      <Modal show={show}>
        <Modal.Body>
          {operation === productsOp.Booking && (
            <BookProduct onClose={onClose} />
          )}
          {operation === productsOp.Return && (
            <ReturnProduct onClose={onClose} />
          )}
        </Modal.Body>
      </Modal>
      <SweetAlert
        show={showAlert}
        title="Demo"
        html
        text={makeMessage(operation)}
        onConfirm={() => setShowAlert(false)}
      />
    </>
  );
};

export default ProductTable;
