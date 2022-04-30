import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => {
                setProducts(res.data);
            })
    }, []);

    const handleInventoryDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        console.log(proceed);
    }
    return (
        <Container className='my-4'>
            <button className="btn btn-lg bg-blue mb-3">Add New Item</button>
            <Row>
                <Col md={12}>
                    <Table className='inventory-table' responsive bordered >
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Supplier</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Sold</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                products.map(product => <tr key={product._id}>
                                    <td><img src={product?.img} style={{ width: "50px", height: "42px" }} alt="" /></td>
                                    <td>{product?.name}</td>
                                    <td>{product?.supplier}</td>
                                    <td>{product?.price}</td>
                                    <td>{product?.quantity}</td>
                                    <td>{product?.sold}</td>
                                    <td><button onClick={() => handleInventoryDelete(product._id)} className="btn btn-outline-danger btn-sm">Delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </Table>

                </Col>
            </Row>
        </Container>
    );
};

export default ManageInventory;