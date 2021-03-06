import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './ResetPassword.css';

const ResetPassword = () => {
    let errorMessage = "";
    const [
        sendPasswordResetEmail,
        sending,
        error
    ] = useSendPasswordResetEmail(auth);

    const handleResetPassword = async (event) => {
        event.preventDefault();
        errorMessage = "";
        const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success("Password Reset Email Sent Successfully!!")
        } else {
            toast.error("Please Enter Your Email First!!!");
        }
    }


    if (sending) {
        return <Loading />
    }
    if (error) {
        errorMessage = <p className="text-danger">{error?.message}</p>;
    }

    return (
        <div className="reset-section">
            <Container className='py-5'>
                <Row>
                    <Col lg={6} md={8} sm={10} className="mx-auto align-items-center reset-form shadow rounded p-5">
                        <h2 className='text-primary fw-bold text-center'>Reset Your Password !</h2>
                        {
                            errorMessage ? errorMessage : ""
                        }
                        <Form onSubmit={handleResetPassword} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter Email To Reset Password" />
                            </Form.Group>

                            <Button variant="primary d-block w-50 mx-auto mb-2" type="submit">
                                Reset Password
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ResetPassword;