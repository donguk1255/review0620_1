import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg={"dark"} variant={"dark"} expand={"lg"} collapseOnSelect>
                <Container>
                    <Navbar.Brand href={"/"}>
                        my shop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
                    <Navbar.Collapse id={"basic-navbar-nav"}>
                        <Nav className={'ml-auto'}>
                            <LinkContainer to={"/cart"}>
                                <Nav.Link>
                                    <i className={'fas fa-shopping-cart'} /> Cart
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={"/login"}>
                                <Nav.Link>
                                    <i className={'fas fa-user'} /> Login
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
