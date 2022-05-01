import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Product = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate()
    const { id } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get(`http://localhost:5000/product/${id}`);
            setProduct(data);
        }
        getProducts();

    }, [id]);

    const handleDeliver = () => {
        const newQuantity = Number(product.quantity) - 1;
        const newProduct = { ...product, quantity: newQuantity }
        setProduct(newProduct);
        axios.put(`http://localhost:5000/product/${id}`, { quantity: newQuantity })
    }
    const handleAddQuantity = (event) => {
        event.preventDefault();
        const addedQuantity = Number(event.target.addQuantity.value);
        const newQuantity = Number(product.quantity) + addedQuantity;
        const newProduct = { ...product, quantity: newQuantity }
        setProduct(newProduct);
        axios.put(`http://localhost:5000/product/${id}`, { quantity: newQuantity })
            .then(res => {
                if (res.status === 200) {
                    toast.success("Quantity Added Successfully");
                    event.target.reset();
                }
            })
    }


    return (
        <Container className='my-5'>
            <Row>
                <Col lg={6} md={6} sm={10} className="mx-auto my-2">
                    <Card className='px-5 py-2 rounded shadow'>
                        <div className="text-center">
                            <Card.Img className='card-image w-50' variant="top" src={product?.img} />
                        </div>
                        <Card.Body>
                            <Card.Title className='title-color'>{product?.name}</Card.Title>
                            <p className='text-primary'>{product?.supplier}</p>
                            <h5 className='fw-bold'>Price: ${product?.price}</h5>
                            <h5 className='fw-bold'>Quantity: {product?.quantity}</h5>
                            <h6 className='fw-bold'>Sold: {product?.sold}</h6>

                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button onClick={handleDeliver} variant="outline-dark hover-blue">Delivered</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={10} className="mx-auto my-2">
                    <div className="text-center my-3">
                        <button onClick={() => navigate('/manage-inventory')} className="btn btn-lg w-50 btn-outline-dark hover-blue">
                            Manage Inventories
                        </button>
                    </div>
                    <Card className='p-3 rounded shadow'>
                        <h2 className='title-color fw-bold text-center'>Restock The Item</h2>
                        <Form onSubmit={handleAddQuantity} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Add Quantity</Form.Label>
                                <Form.Control type="number" min={1} name="addQuantity" placeholder="Enter Quantity" required />
                            </Form.Group>

                            <Button className='bg-blue' variant=" d-block w-50 mx-auto mb-2" type="submit">
                                Restock
                            </Button>
                        </Form>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default Product;