import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/mediqas.png';
import './Footer.css'

const Footer = () => {
    return (

        <footer className=' py-4 bg-blue text-white'>

            <Container>
                <Row>
                    <Col className='mt-3' md={6} lg={3} sm={10}>
                        <div className="logo-container d-flex justify-content-center align-items-center">
                            <img src={logo} width={220} alt="" />
                        </div>

                    </Col>
                    <Col className='mt-3' md={6} lg={3} sm={10}>
                        <h3>Address</h3>
                        <p className='mb-0'>Shop 23, Hussain Market</p>
                        <p className='mb-0'>Durgapur, Rajshahi</p>
                        <p className='mb-0'>Bangladesh</p>
                    </Col>
                    <Col className='mt-3' md={6} lg={3} sm={10}>
                        <h3 className='ms-3'>Features</h3>
                        <ul>
                            <li>Add Medicine</li>
                            <li>Manage Medicine</li>
                            <li>Deliver Medicine</li>
                        </ul>
                    </Col>
                    <Col className='mt-3' md={6} lg={3} sm={10}>
                        <h3 className='ms-3'>Follow Us On</h3>
                        <ul>
                            <li style={{ cursor: 'pointer' }}>Facebook</li>
                            <li style={{ cursor: 'pointer' }}>Instagram</li>
                            <li style={{ cursor: 'pointer' }}>Twitter</li>
                        </ul>
                    </Col>
                </Row>

                <p className='mt-3 mb-0 text-center'><small>Copyright &copy;{new Date().getFullYear()} all right reserved by Mediqas.</small></p>
            </Container>
        </footer>

    );
};

export default Footer;