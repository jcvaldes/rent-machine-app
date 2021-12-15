import React from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Container>
        <Header />
        {children}
      </Container>
    </div>
  );
};

export default Layout;
