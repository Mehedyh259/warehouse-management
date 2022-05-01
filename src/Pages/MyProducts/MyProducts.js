import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (user.email) {
            const getProducts = async () => {

                try {
                    const url = `http://localhost:5000/product?email=${user.email}`;
                    const { data } = await axios.get(url, {
                        headers: {
                            authorization: localStorage.getItem('accessToken')
                        }
                    });
                    setProducts(data);
                } catch (err) {
                    const status = err.response.status;
                    if (status === 401 || status === 403) {
                        signOut(auth);
                        navigate('/login');
                        localStorage.removeItem('accessToken')
                        toast.error(err.response?.data?.message);
                    }
                }
            }
            getProducts();
        }
    }, [user.email]);

    if (loading) {
        return <Loading />
    }



    const handleInventoryDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {

            const newProducts = products.filter((product) => product._id !== id);
            setProducts(newProducts);

            axios.delete(`http://localhost:5000/product/${id}`)
                .then(res => {
                    if (res.status === 200) {
                        toast.success("Product Deleted Successfully");
                    }
                })

        }
    }
    return (
        <Container className='my-4'>
            <h1 className="title-color fw-bold mb-3 text-center">My Products</h1>
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

export default MyProducts;