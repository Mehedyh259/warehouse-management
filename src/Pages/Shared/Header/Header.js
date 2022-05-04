import React, { useEffect, useState } from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/mediqas.png';
import './Header.css';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';




const Header = () => {
    const [userName, setUserName] = useState('User');

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    useEffect(() => {
        if (user?.displayName) {
            setUserName(user.displayName.split(' ')[0]);
        }
    }, [user])


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
                                isActive ? "text-dark ms-3 activeNav title-color nav-link" : "text-dark ms-3 nav-link"
                            } to="/blog"> Blog </NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "text-dark ms-3 activeNav title-color nav-link" : "text-dark ms-3 nav-link"
                            } to="/about"> About </NavLink>

                            {
                                user ?
                                    <>
                                        <NavLink className={({ isActive }) =>
                                            isActive ? "text-dark ms-3 activeNav title-color nav-link" : "text-dark ms-3 nav-link"
                                        } to="/add-inventory"> Add Inventory </NavLink>
                                        <NavLink className={({ isActive }) =>
                                            isActive ? "text-dark ms-3 activeNav title-color nav-link" : "text-dark ms-3 nav-link"
                                        } to="/manage-inventory"> Manage Inventory </NavLink>
                                        <NavLink className={({ isActive }) =>
                                            isActive ? "text-dark ms-3 activeNav title-color nav-link" : "text-dark ms-3 nav-link"
                                        } to="/my-products"> My Products </NavLink>
                                        <Dropdown className='ms-3'>
                                            <Dropdown.Toggle className="bg-blue" id="dropdown-basic">
                                                {userName}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className='bg-gray'>
                                                <Dropdown.Item onClick={handleSignOut}>
                                                    Sign Out
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </>
                                    :
                                    <>
                                        <NavLink className={({ isActive }) =>
                                            isActive ? "text-dark ms-3 activeNav title-color nav-link" : "text-dark ms-3 nav-link"
                                        } to="/register"> Register </NavLink>
                                        <NavLink className={({ isActive }) =>
                                            isActive ? "text-dark ms-3 activeNav title-color nav-link" : "text-dark ms-3 nav-link"
                                        } to="/login"> Login </NavLink>
                                    </>
                            }


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;