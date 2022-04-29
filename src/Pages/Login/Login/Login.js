import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submit');
    }
    const handleResetPassword = () => {
        console.log('reset password');
    }

    return (
        <Container className='my-5'>
            <Row>
                <Col lg={6} md={8} sm={10} className="mx-auto shadow rounded p-3">
                    <h2 className='title-color fw-bold text-center'>Please Login!</h2>

                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" required />
                        </Form.Group>
                        <Button className='bg-blue' variant=" d-block w-50 mx-auto mb-2" type="submit">
                            Login
                        </Button>
                    </Form>
                    <SocialLogin />

                    <p>Don't have an account? <span style={{ cursor: 'pointer' }} onClick={() => navigate('/register')} className='title-color'>Please Register</span></p>
                    <p>Forget password? <span style={{ cursor: 'pointer' }}
                        onClick={handleResetPassword} className='title-color'>Reset Password</span></p>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;