import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NewsLetter = () => {
    return (
        <div className='bg-blue py-3'>
            <Container>
                <Row>
                    <Col md={8} className="mx-auto">
                        <div className="newsletter py-5 text-center">
                            <h2>Subscribe To Our Newsletter</h2>
                            <div className="input-group">
                                <input type="email" class="form-control" placeholder="Enter your email" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button">Submit Newsletter</button>
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