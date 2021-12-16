import React from "react";

import Layout from "../containers/Layout";
import ProductTable from "../containers/ProductTable";

const Home = ({ setProdData }) => {
  return (
    <Layout>
      <ProductTable setProdData={setProdData} />
    </Layout>
  );
};

export default Home;
