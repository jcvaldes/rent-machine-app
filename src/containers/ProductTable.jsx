import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import ProductItem from "../components/ProductItem";
import SearchProduct from "../components/SearchProduct";
import "../styles/ProductTable.scss";
import { productsOp } from "../utils/products";
import BookProduct from "../components/BookProduct";
import ReturnProduct from "../components/ReturnProduct";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import useLocalStorage from "../hooks/useLocalStorage";
import { getProduct } from "../helpers/getProducts";
import data from "../assets/data";

const ProductTable = () => {
  const [prodData, setProdData] = useLocalStorage("productsDb");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProdData(data);
    setProducts(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const [showModal, setShowModal] = useState(false);
  const [operation, setOperation] = useState(productsOp.Booking);
  const [showAlert, setShowAlert] = useState(false);
  const [product, setProduct] = useState({
    id: 0,
    code: "",
    name: "",
    type: "",
    availability: false,
    needing_repair: false,
    durability: 0,
    max_durability: 0,
    mileage: null,
    price: 0,
    minimum_rent_period: 0,
  });

  const onClose = (formState) => {
    setShowAlert(true);
    const prod = getProduct(+formState.productId);
    setProduct({ ...prod, availability: false });
    updateStore(prod);
    setShowModal(false);
  };
  const updateStore = (product) => {
    const products = prodData.filter((p) => p.id !== product.id);
    product.availability = false;
    setProdData([...products, product]);
    setProducts([...products, product]);
  };

  const makeMessage = (operation) => {
    return `Your ${
      operation === productsOp.Booking ? "estimated" : "total"
    } price is: ${product.price} <br /> Do you want to proceed?`;
  };

  const handleShow = (op) => {
    setShowModal(true);
    setOperation(op);
  };
  const searchProduct = (value) => {
    if (value === "") {
      debugger;
      setProducts(prodData);
    } else {
      debugger;
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
          {products &&
            products.map((product, index) => {
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
      <Modal show={showModal}>
        <Modal.Body>
          {operation === productsOp.Booking && (
            <BookProduct onClose={onClose} setShowModal={setShowModal} />
          )}
          {operation === productsOp.Return && (
            <ReturnProduct onClose={onClose} setShowModal={setShowModal} />
          )}
        </Modal.Body>
      </Modal>
      {product && (
        <SweetAlert
          show={showAlert}
          html
          text={makeMessage(operation)}
          onConfirm={() => setShowAlert(false)}
        />
      )}
    </>
  );
};
export default ProductTable;
