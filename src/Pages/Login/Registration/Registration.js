import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Registration = () => {
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState('');
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
        setErrorText(errorMessage);
    }
    if (loading || updating) {
        return <Loading />
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    if (user) {
        console.log(user);
        navigate('/');
    }
    return (
        <Container className='my-5'>
            <Row>
                <Col lg={6} md={8} sm={10} className="mx-auto shadow rounded p-3">
                    <h2 className='title-color text-center'>Please Register</h2>
                    {
                        errorText ? errorText : ""
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


                        <Button className='bg-blue' variant=" d-block w-50 mx-auto mb-2" type="submit">
                            Register
                        </Button>
                    </Form>

                    <SocialLogin />

                    <p>Already have an account? <span style={{ cursor: 'pointer' }} onClick={() => navigate('/login')} className='title-color'>Please Login</span></p>

                </Col>
            </Row>
        </Container>
    );
};

export default Registration;