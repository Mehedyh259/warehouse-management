import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const NewsLetter = () => {

    return (
        <div className='bg-blue py-3'>
            <Container>
                <Row>
                    <Col md={8} className="mx-auto">
                        <div data-aos="fade-up" data-aos-duration="1500" className="newsletter py-5 text-center">
                            <h2>Subscribe To Our Newsletter</h2>
                            <div >
                                <input type="email" className="form-control" placeholder="Enter your email" />


                                <button className="btn btn-primary mt-2" type="button">Submit Newsletter</button>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLetter;