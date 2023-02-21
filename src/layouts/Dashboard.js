import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CartDetail from '../pages/CartDetail';
import ProductDetail from '../pages/ProductDetail';
import ProductList from '../pages/ProductList';
import Categories from './Categories';

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Container>
                <Row>
                    <Col md="3">
                        <Categories />
                    </Col>
                    <Col md="9">
                        <Routes>
                            <Route path='/' element={<ProductList/>}/>
                            <Route path='/products' element={<ProductList/>}/>
                            <Route path='/products/:productId' element={<ProductDetail/>}/>
                            <Route path='/cart' element={<CartDetail/>}/>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
