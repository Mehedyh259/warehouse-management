import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/mediqas.png';
import './Header.css';

const Header = () => {
    return (
        <>


            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light shadow">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className={({ isActive }) =>
                                isActive ? "text-dark ms-3 activeNav title-color nav-link" : "text-dark ms-3 nav-link"
                            } to="/"> Home </NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "text-dark ms-3 activeNav nav-link" : "text-dark ms-3 nav-link"
                            } to="/blog"> Blog </NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "text-dark ms-3 activeNav nav-link" : "text-dark ms-3 nav-link"
                            } to="/manage-inventory"> Manage Inventory </NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "text-dark ms-3 activeNav nav-link" : "text-dark ms-3 nav-link"
                            } to="/my-products"> My Products </NavLink>

                            <NavLink className={({ isActive }) =>
                                isActive ? "text-dark ms-3 activeNav nav-link" : "text-dark ms-3 nav-link"
                            } to="/register"> Register </NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "text-dark ms-3 activeNav nav-link" : "text-dark ms-3 nav-link"
                            } to="/login"> Login </NavLink>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;