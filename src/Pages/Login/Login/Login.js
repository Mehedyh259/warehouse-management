import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
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

    const setAccessToken = async (email) => {
        toast.success("Logged In successfully")
        navigate(from, { replace: true });
        const { data } = await axios.post('https://tranquil-island-04777.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
    }
    if (loading) {
        return <Loading />
    }
    if (error) {
        errorMessage = <p className="text-danger">{error?.message}</p>;
    }

    if (user) {
        setAccessToken(user.email)
    }


    return (
        <Container className='my-5'>
            <Row>
                <Col lg={6} md={8} sm={10} className="mx-auto shadow rounded p-3">
                    <h2 className='title-color fw-bold text-center'>Please Login!</h2>
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
                        <Button className='bg-blue' variant=" d-block w-50 mx-auto mb-2" type="submit">
                            Login
                        </Button>
                    </Form>
                    <SocialLogin />

                    <p>Don't have an account? <span style={{ cursor: 'pointer' }} onClick={() => navigate('/register')} className='title-color'>Please Register</span></p>
                    <p>Forget password? <Link to="/reset-password" className='text-decoration-none title-color'>Reset Password Here.</Link></p>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;