import AOS from 'aos';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';


const ContactUs = () => {
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
            <Row >
                <Col lg={8} md={8} sm={10} className="mx-auto">
                    <div data-aos="zoom-in-up" data-aos-duration="1500" className="p-4 shadow rounded">
                        <h1 className="mb-3 fw-bold text-center title-color">Contact Us For More</h1>
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

export default ContactUs;