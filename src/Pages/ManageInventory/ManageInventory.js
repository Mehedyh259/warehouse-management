import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ManageInventory.css'

const ManageInventory = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get("https://tranquil-island-04777.herokuapp.com/products");
            setProducts(data);
        }
        getProducts();
    }, []);

    const handleInventoryDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");

        if (proceed) {
            const newProducts = products.filter((product) => product._id !== id);
            setProducts(newProducts);

            axios.delete(`https://tranquil-island-04777.herokuapp.com/product/${id}`)
                .then(res => {
                    if (res.status === 200) {
                        toast.success("Product Deleted Successfully");
                    }
                })
        }
    }


    return (
        <Container className='my-4'>
            <button onClick={() => navigate('/add-inventory')} className="btn btn-lg bg-blue mb-3">Add New Item</button>
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