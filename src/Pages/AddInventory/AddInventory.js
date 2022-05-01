import axios from 'axios';
import React from 'react';
import { Col, Container, Form, Row, Button, FloatingLabel } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const AddInventory = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading />
    }

    const handleAddProduct = (event) => {
        event.preventDefault();
        const img = event.target.image.value;
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;

        // creating new product object to post
        const newProduct = { name, email: user.email, img, description, price, quantity, sold: "0", supplier };
        axios.post("https://tranquil-island-04777.herokuapp.com/product", newProduct)
            .then(res => {
                if (res.status === 200) {
                    toast.success("Product Added Successfully!");
                    event.target.reset()
                }
            })
    }
    return (
        <Container className='my-5'>
            <Row>
                <Col lg={6} md={8} sm={10} className="mx-auto shadow rounded p-3">
                    <h2 className='title-color fw-bold text-center mb-2'>Add New Product</h2>

                    <Form onSubmit={handleAddProduct} >
                        <FloatingLabel controlId="floatingInput" label="Enter Image URL" className="mb-2">
                            <Form.Control type="text" name="image" placeholder="Enter Image URL" required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Enter Name" className="mb-2">
                            <Form.Control type="text" name="name" placeholder="Enter Name" required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Enter Description" className='mb-2'>
                            <Form.Control
                                name="description"
                                as="textarea"
                                placeholder="Enter Description"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Enter Price" className="mb-2">
                            <Form.Control min={0} type="number" name="price" placeholder="Enter Price" required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Enter Quantity" className="mb-2">
                            <Form.Control min={1} type="number" name="quantity" placeholder="Enter Quantity" required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Enter Supplier" className="mb-2">
                            <Form.Control min={1} type="text" name="supplier" placeholder="Enter Supplier" required />
                        </FloatingLabel>

                        <Button className='bg-blue' variant=" d-block w-50 mx-auto mb-2" type="submit">
                            Add Product
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
};

export default AddInventory;