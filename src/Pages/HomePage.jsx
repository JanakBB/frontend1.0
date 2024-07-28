import { Col, Row } from "react-bootstrap";
import Product from "../components/Product.jsx";
import { useEffect, useState } from "react";




const HomePage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
      // Connect to frontEnd and BackEnd data
      // /api means vite.config.js server proxy /api: "http://localhost:5000"
      fetch("/api/v1/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error::", err.message));
  }, [])
    
   return(
        <>
        <h1>Latest Products after vite localhost success  "dev": "vite --host"</h1>
        <Row>
          {
            products.map(product => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product} key={product.id}/>
              </Col>
            ))
          }
        </Row>
        </>
    )
}
export default HomePage;