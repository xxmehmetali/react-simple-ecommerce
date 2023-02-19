import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductService from '../services/productService';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductDetail() {

  let {productId} = useParams();
  const [product, setProduct] = useState({});


  useEffect(() => {
    let productService = new ProductService();
    productService.getProduct(productId).then(result => setProduct(result.data))
  }, [])
  

  return (

    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title> {product.title}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Card.Text>
          Price : ₺{product.price}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
