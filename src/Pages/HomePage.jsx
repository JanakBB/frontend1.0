import { Col, Row } from "react-bootstrap";
import Product from "../components/Product.jsx";
import products from "../data.js";


const HomePage = () => {
    return(
        <>
        <h1>Latest Products after vite localhost success  "dev": "vite --host"</h1>
        <Row>
          {
            products.map(product => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
              </Col>
            ))
          }
        </Row>
        </>
    )
}
export default HomePage;