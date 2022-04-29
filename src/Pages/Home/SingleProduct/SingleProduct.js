import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleProduct.css'

const SingleProduct = ({ product }) => {
    const nevigateManage = (id) => {

    }
    const { _id, name, img, price, description, quantity, supplier } = product;

    return (
        <Col className='single-product my-2 shadow' sm={10} lg={4} md={6} >
            <div className="image-container p-3">
                <img src={img} alt="" />
            </div>
            <div className="p-3 product-content">
                <h3 className='title-color'>{name}</h3>
                <p className='text-primary '>Supplier: {supplier}</p>
                <h5>Price: ${price}</h5>
                <h5>Quantity: {quantity}</h5>
                <p><small>{description}</small></p>
                <button onClick={() => nevigateManage(_id)} className='btn btn-outline-dark rounded w-100 text-center'> Manage</button>
            </div>
        </Col>
    );
};

export default SingleProduct;