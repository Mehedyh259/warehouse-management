import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';

const NewsLetter = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='bg-blue py-3'>
            <Container>
                <Row>
                    <Col md={8} className="mx-auto">
                        <div data-aos="fade-up" data-aos-duration="1500" className="newsletter py-5 text-center">
                            <h2>Subscribe To Our Newsletter</h2>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Enter your email" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">Submit Newsletter</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLetter;