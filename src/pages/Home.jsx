import React from "react";
import Layout from "../containers/Layout";
import ProductTable from "../containers/ProductTable";
import { Button } from "react-bootstrap";
import "../styles/Home.scss";
const Home = () => {
  return (
    <Layout>
      <ProductTable />
      <div className="Actions">
        <Button variant="primary" className="me-2">
          Book
        </Button>
        <Button variant="danger">Return</Button>
      </div>
    </Layout>
  );
};

export default Home;
