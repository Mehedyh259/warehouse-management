import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get("http://localhost:5000/products?limit=6");
            setProducts(data);
        }
        getProducts();

    }, [])
    return (
        <Container className='my-5'>
            <h2 className='fw-bold title-color text-center mb-3'>Medicine Inventory</h2>
            <Row>
                {
                    products?.map((product) => <SingleProduct
                        key={product._id}
                        product={product}
                    />)
                }
            </Row>
            <div className="text-center my-3">
                <button onClick={() => navigate('/manage-inventory')} className="btn btn-lg w-50 btn-outline-dark hover-blue">
                    Manage Inventories
                </button>
            </div>
        </Container>
    );
};

export default Inventory;