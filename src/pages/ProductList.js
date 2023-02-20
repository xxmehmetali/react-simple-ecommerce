import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ProductService from '../services/productService';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cartSlice';
import { toast } from 'react-toastify';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  // const { cartItems } = useSelector(state => state.cart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  // eğer useEffect te [] kullanmazsan service e sürekli istek atar (network tabından bakabilirsin)
  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then(result => setProducts(result.data.products))
  }, [])

  // const {data} = useGetCategoriesQuery();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product Added : " + product.title)
    console.log("asd")
    // console.log(data)

  }

  const handleRemoveFromCart = (product) => {
    const foundCartItem = cartItems.filter(cartItem => cartItem.product.id==product.id)
    if(foundCartItem.length > 0){
      dispatch(removeFromCart(product))
      toast.error("Product Removed : " + product.title)
    }
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (
              <tr>
                <td>{product.id}</td>
                <td>
                  <Link to={"/products/" + product.id}>
                    {product.title}
                  </Link>
                </td>
                <td>{product.description}</td>
                <td>₺{product.price}</td>
                {<td>{product.category}</td>}
                <td><Button variant="outline-success" onClick={() => handleAddToCart(product)}>Add To Cart</Button>{' '}</td>
                <td><Button variant="outline-danger" onClick={() => handleRemoveFromCart(product)}>Remove From Cart</Button>{' '}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}
