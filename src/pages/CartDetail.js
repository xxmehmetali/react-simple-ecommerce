import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"; 

import { toast } from 'react-toastify';
import { addToCart, removeFromCart } from '../features/cartSlice';

export default function CartDetail() {

  const cartItems  = useSelector(state => state.cart.cartItems);
  // const { cartItems } = []
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product Added : " + product.title)
  }

  const handleRemoveFromCart = (product) => {
    const foundCartItem = cartItems.filter(cartItem => cartItem.product.id==product.id)
    if(foundCartItem.length > 0){
      dispatch(removeFromCart(product))
      toast.error("Product Removed : " + product.title)
    }
  }

  return (
    <div >
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
            cartItems.map(cartItem => (
              <tr>
                <td>{cartItem.product.id}</td>
                <td>
                  <Link to={"/products/" + cartItem.product.id}>
                    {cartItem.product.title}
                  </Link>
                </td>
                <td>{cartItem.product.description}</td>
                <td>₺{cartItem.product.price}</td>
                {<td>{cartItem.product.category}</td>}
                <td><Button variant="outline-success" onClick={() => handleAddToCart(cartItem.product)}>Add To Cart</Button>{' '}</td>
                <td><Button variant="outline-danger" onClick={() => handleRemoveFromCart(cartItem.product)}>Remove From Cart</Button>{' '}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}
