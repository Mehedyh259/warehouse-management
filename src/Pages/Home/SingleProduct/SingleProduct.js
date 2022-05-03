import React, { useEffect } from 'react';
import AOS from 'aos'
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleProduct.css'

const SingleProduct = ({ product }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { _id, name, img, price, description, quantity, supplier } = product;
    const navigate = useNavigate();

    const nevigateManage = (id) => {
        navigate(`/inventory/${id}`);
    }

    return (
        <Col data-aos="zoom-in" className='single-product my-2 shadow' sm={10} lg={4} md={6} >
            <div data-aos="flip-left" data-aos-duration="1500" className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="p-3 product-content">
                <h3 className='title-color'>{name}</h3>
                <p className='text-primary '>Supplier: {supplier}</p>
                <h5>Price: ${price}</h5>
                <h5>Quantity: {quantity}</h5>
                <p><small>{description}</small></p>
                <button onClick={() => nevigateManage(_id)} className='btn btn-outline-dark hover-blue rounded w-100 text-center'> Manage</button>
            </div>
        </Col>
    );
};

export default SingleProduct;