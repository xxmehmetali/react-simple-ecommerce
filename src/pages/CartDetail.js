import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"; 
import { addToCart, removeFromCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify';

export default function CartDetail() {

  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  const handleRemoveFromCart = (product) => {
    const foundProduct = cartItems.filter(cartItem => cartItem.product===product)
    if(foundProduct.length > 0){
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
