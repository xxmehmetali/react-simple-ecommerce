import React, { useState } from 'react'
import CartSummary from './CartSummary'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartDetail from '../pages/CartDetail';


export default function Navi() {
    // const cartItems = useSelector(state => state.cart.cartItems);
    // const { cartItems } = []
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    function handleSignOut(params) {
        setIsAuthenticated(false);
        navigate("/");
    }

    function handleSignIn(params) {
        setIsAuthenticated(true);
    }

    return (
        <div className='naviContainer'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" as={NavLink} to={"/"}>E-Commerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Link to="/cart">Go to Cart</Link>
                        {
                            // cartItems.length>0&&
                            // <Nav.Link href="#cartSummary"><CartSummary /></Nav.Link>
                        }
                        <CartSummary />
                    </Nav>

                    
                    {
                        isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />
                    }

                </Container>
            </Navbar>
        </div>
    )
}
