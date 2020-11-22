import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../component/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fethProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    fethProducts()
  }, [])

  return (
    <>
      <h1>Lates Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={13} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
