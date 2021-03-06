import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
// import Dashboard from '../../Dashboard/Dashboard/Dashboard/Dashboard';
import './Navigation.css';



const Navigation = () => {

    const { user, logout } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" className="header" sticky="top">
            <Container >
                <Navbar.Brand as={HashLink} to="#home" >
                    <span className="website-name"><i className="fab fa-pinterest-p"></i>erfume Pride</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" header-text" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto my-3">
                        <Nav.Link as={HashLink} to="/home#home" className=" header-text">Home</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/banner#banner" className=" header-text">Banner</Nav.Link> */}
                        <Nav.Link as={HashLink} to="/about#about" className=" header-text">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/explores#explores" className=" header-text">Explores</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/reviews#reviews" className=" header-text">Reviews</Nav.Link> */}
                    </Nav>

                    <Nav.Link as={HashLink} to="/dashboard#dashboard" className=" header-text">Dashboard</Nav.Link>

                    
 
 

                    {
                        user?.email ? 

                            <NavDropdown className="text" title="Signed in as:" id="basic-nav-dropdown">
                               <div>
                                    <p className="text-danger mx-4" href="#login">Name- {user?.displayName}</p>
                                   
                                    <p className="text-danger mx-4" href="#login">Email- {user?.email}</p>

                               </div>

                               <br />

                                

                                <Button onClick={logout}
                                    className="btn-logout mx-2" variant="secondary">Logout
                                </Button>
                            </NavDropdown>

                            :


                            <Nav.Link as={HashLink} to="/login" className="header-text mx-3">Login
                            </Nav.Link>
                    } 

                  </Navbar.Collapse>


            </Container>
        </Navbar>
    );
};

export default Navigation;   

                    





                        

               