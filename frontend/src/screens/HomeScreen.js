import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../component/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <>
      <h1>Lates Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={13} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
