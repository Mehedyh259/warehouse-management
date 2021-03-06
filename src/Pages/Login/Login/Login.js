import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'


const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    let errorMessage = "";
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading || isLoading) {
        return <Loading />
    }
    if (error) {
        errorMessage = <p className="text-danger">{error?.message}</p>;
    }

    const setAccessToken = async () => {
        const email = user?.user?.email;

        if (email) {
            setIsLoading(true);
            const { data } = await axios.post('https://tranquil-island-04777.herokuapp.com/login', { email });

            localStorage.setItem('accessToken', data.accessToken);
            setIsLoading(false);
            navigate(from, { replace: true });
            toast.success("Logged In successfully");
        }

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        setIsLoading(false);
    }
    if (user) {
        setAccessToken();
    }


    return (
        <div className="login-section">

            <Container className='py-5'>
                <Row>
                    <Col lg={6} md={8} sm={10} className="mx-auto login-form shadow rounded p-3">
                        <h2 className='text-primary fw-bold text-center'>Please Login!</h2>
                        {
                            errorMessage ? errorMessage : ""
                        }
                        <Form onSubmit={handleSubmit} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter Email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Enter Password" required />
                            </Form.Group>
                            <Button variant="primary d-block w-50 mx-auto mb-2" type="submit">
                                Login
                            </Button>
                        </Form>
                        <SocialLogin />

                        <p>Don't have an account? <span style={{ cursor: 'pointer' }} onClick={() => navigate('/register')} className='text-primary'>Please Register</span></p>
                        <p>Forget password? <Link to="/reset-password" className='text-decoration-none text-primary'>Reset Password Here.</Link></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;