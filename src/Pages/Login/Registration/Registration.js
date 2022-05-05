import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Registration.css'


const Registration = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let errorMessage;
    if (error || updateError) {
        errorMessage = <p className="text-danger">{error?.message || updateError?.message}</p>;
    }


    const setAccessToken = async (user) => {
        const email = user?.user?.email;

        if (email) {
            toast.success("Registration Successfully");
            const { data } = await axios.post('https://tranquil-island-04777.herokuapp.com/login', { email });
            localStorage.setItem('accessToken', data.accessToken);
            navigate('/');
        }

    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        errorMessage = "";
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

    }
    if (user) {
        setAccessToken(user);
    }

    if (loading || updating) {
        return <Loading />
    }

    return (
        <div className="register-section">
            <Container className='py-5'>
                <Row>
                    <Col lg={6} md={8} sm={10} className="mx-auto register-form shadow rounded p-3">
                        <h2 className='text-primary text-center'>Please Register</h2>
                        {
                            errorMessage ? errorMessage : ""
                        }
                        <Form onSubmit={handleSubmit} className=''>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" required />
                            </Form.Group>


                            <Button variant="primary d-block w-50 mx-auto mb-2" type="submit">
                                Register
                            </Button>
                        </Form>

                        <SocialLogin />

                        <p>Already have an account? <span style={{ cursor: 'pointer' }} onClick={() => navigate('/login')} className='text-primary'>Please Login</span></p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Registration;