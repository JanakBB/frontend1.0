import { Col, Container, Row } from "react-bootstrap";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import HomePage from "./Pages/HomePage.jsx";

function App() {
  return (
    <>
      <Header />
      <Container>
        <ProductPage />
        {/* <HomePage/> */}
      </Container>
      <Footer />
    </>
  );
}

export default App;
