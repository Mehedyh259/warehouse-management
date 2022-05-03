import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ManageInventory.css'

const ManageInventory = () => {
    // for counting how many page will be there
    const [pageCount, setPageCount] = useState(0);
    // this if for current page number
    const [pageNumber, setPageNumber] = useState(0);
    // this is for product limit
    const [productLimit, setProductLimit] = useState(7);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    // getting product count from database
    useEffect(() => {

        const getCount = async () => {
            const { data } = await axios.get('https://tranquil-island-04777.herokuapp.com/productsCount');
            const totalPages = Math.ceil(data.productsCount / productLimit);
            setPageCount(totalPages);
        }
        getCount()

    }, [productLimit])

    // get products according to page number
    useEffect(() => {
        const getProducts = async () => {
            // const { data } = await axios.get(`https://tranquil-island-04777.herokuapp.com/products?page=${pageNumber}&limit=${productLimit}`);
            const { data } = await axios.get(`https://tranquil-island-04777.herokuapp.com/products?page=${pageNumber}&limit=${productLimit}`);
            setProducts(data);
        }
        getProducts();
    }, [pageNumber, productLimit]);

    // changes to products count per page
    const handlePageProductShowChange = (event) => {
        const limit = Number(event.target.value);
        setPageNumber(0);
        setProductLimit(limit);
    }

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
        <Container className='mt-3 mb-5 min-height'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <div className='d-flex align-items-center'>
                    <span className='fw-bold'>Show Products Per Page: </span>
                    <select onChange={handlePageProductShowChange} style={{ width: "80px" }} className="form-select ms-2">
                        <option value="7">7</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <button onClick={() => navigate('/add-inventory')} className="btn bg-blue">Add New Item</button>
            </div>
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
                                    <td>
                                        <button onClick={() => navigate(`/inventory/${product._id}`)} className="btn btn-outline-primary btn-sm me-2">Manage</button>
                                        <button onClick={() => handleInventoryDelete(product._id)} className="btn btn-outline-danger btn-sm">Delete</button>

                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </Table>
                    <div className='d-flex justify-content-end'>
                        {
                            [...Array(pageCount).keys()].map(number => <button key={number} onClick={() => setPageNumber(number)}
                                className={pageNumber === number ? 'bg-blue paginate-btn' : 'paginate-btn'}>

                                {number + 1}
                            </button>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ManageInventory;