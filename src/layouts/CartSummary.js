import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';

export default function CartSummary() {
  const cartItems  = useSelector(state => state.cart.cartItems);
  return (
    <div >
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Open Basket
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {cartItems.length > 0 &&
cartItems.map((cartItem) => (
  <Dropdown.Item href="#/action-1">{cartItem.product.title} <Badge bg="secondary">{cartItem.quantity}</Badge></Dropdown.Item>
))
           

            
          }

        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
