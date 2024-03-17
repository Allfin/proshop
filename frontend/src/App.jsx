import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome To Proshop</h1>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
