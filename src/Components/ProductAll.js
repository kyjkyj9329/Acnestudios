import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/kyjkyj9329/acnestudios/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className='productAll'>
      <Container fluid>
        <Row>
          {productList.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll;