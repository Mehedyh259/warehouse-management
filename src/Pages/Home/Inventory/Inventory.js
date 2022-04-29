import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/products?limit=6")
            .then(res => {
                setProducts(res.data);
                console.log(res.data)
            })
    }, [])
    return (
        <Container className='my-5'>
            <h2 className='fw-bold title-color text-center mb-3'>Medicine Inventory</h2>
            <Row>
                {
                    products.map((product) => <SingleProduct
                        key={product._id}
                        product={product}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Inventory;