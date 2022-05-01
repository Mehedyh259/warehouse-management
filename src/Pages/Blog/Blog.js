import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col className="my-2" lg={6} md={6} sm={11}>
                    <h3 className="title-color text-center">Difference between javascript and nodejs</h3>
                    <Table bordered responsive>
                        <thead>
                            <tr>
                                <th>Javascript</th>
                                <th>Nodejs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JavaScript is a  programming language that runs in browser.</td>
                                <td>Node JS is a javascript programming language interpreter or running environment.</td>
                            </tr>
                            <tr>
                                <td>JavaScript is used for any client-side activity of a web application.</td>
                                <td> Nodejs is used for non-blocking operation of a operating system.</td>
                            </tr>
                            <tr>
                                <td>JavaScript can run on many engines like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome)</td>
                                <td>NodeJs can run in only V8(used by google chrome browser) engine.</td>
                            </tr>

                        </tbody>

                    </Table>
                </Col>
                <Col className="my-2" lg={6} md={6} sm={11}>
                    <h3 className="title-color text-center">Differences between sql and nosql databases.</h3>
                    <Table bordered responsive>
                        <thead>
                            <tr>
                                <th>SQL Database</th>
                                <th>NOSQL Database</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SQL full form is Structured Query Language.</td>
                                <td>NOSQL full form is Not Only SQL.</td>
                            </tr>
                            <tr>
                                <td>SQL database is horizontally scalable database.</td>
                                <td> NoSQL database is vertically scalable database.</td>
                            </tr>
                            <tr>
                                <td>SQL database is basically table based database</td>
                                <td>NoSQL database is document based database.</td>
                            </tr>
                            <tr>
                                <td>Example: <b> MySQL, Microsoft SQL Server, Oracle Database, PostgreSQL</b></td>
                                <td>Example: <b>MongoDB</b></td>
                            </tr>

                        </tbody>

                    </Table>
                </Col>
                <Col className="my-2" lg={6} md={6} sm={11}>
                    <h3 className="title-color text-center mb-2">What is the purpose of jwt and how does it work?</h3>
                    <p className="p-3">
                        The main perpose of jwt is to share security information between two parties of application. Jwt token contains json object. jwt sign uses cryto algorithm to ensure that no one can make fake claim. In jwt token clain can not be alternate after issuing token.
                    </p>
                </Col>
                <Col className="my-2" lg={6} md={6} sm={11}>
                    <h3 className="title-color mb-2">When should you use nodejs and when should you use mongodb?</h3>
                    <p className="p-3">
                        Nodejs is used to non-blocking event driven server creation. Basically realtime applications use nodejs like online games or chat applicaton.
                        It is used for website RestAPI creation. <br />
                        MongoDB is a NoSQL database. It is used when we need to store documents type information like json. This Database is mainly suitable for those data which are not suitable for a relational database schema.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;