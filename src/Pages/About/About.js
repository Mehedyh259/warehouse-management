import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import AOS from 'aos'


const About = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const contactUsSubmit = (event) => {
        event.preventDefault();
        toast.success("Your Message Has Been Submitted");
        event.target.reset();
    }
    return (
        <Container className='my-5'>
            <Row className='align-items-center' >
                <Col lg={6} md={6} sm={11} className="mx-auto my-2">
                    <div data-aos="fade-up" data-aos-duration="1500" className="about">
                        <h1 className="display-4 fw-bold title-color">About Us</h1>
                        <p className="lead text-muted">
                            This is a inventory management website of medicines. Here we can stock out items, update and delete the stocks. this website provides security of authentic user. Lets expoler our medicine inventory website.
                        </p>

                    </div>

                </Col>
                <Col lg={6} md={6} sm={11} className="mx-auto my-2">
                    <div data-aos="zoom-in-up" data-aos-duration="1500" className="p-4 shadow rounded">
                        <h1 className="mb-3 fw-bold text-center title-color">Contact Us</h1>
                        <form onSubmit={contactUsSubmit} >
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter Your Name" required />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter Your Email" required />
                            </div>
                            <div className="form-group mb-3">
                                <textarea className="form-control" placeholder="Enter Message.." cols="30" rows="8"></textarea>
                            </div>
                            <button className="btn bg-blue text-white d-block w-50 mx-auto mb-2">Send Message</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;