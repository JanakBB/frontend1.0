import { Col, Container, Row } from "react-bootstrap";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Container>
        <main className="my-3">
         <Outlet/>
        </main>
     </Container>
      <Footer />
    </>
  );
}

export default App;
