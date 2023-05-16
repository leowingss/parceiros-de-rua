import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';

import Header from '../Header';

import './index.css';

import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <>
            <Header />

            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container fluid>
                    <Navbar.Brand>Parceiros De Rua</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <Link to='/'>
                                <Nav.Link href="#action1">Dashboard</Nav.Link>
                            </Link> */}

                            <NavDropdown title="Gestão de Usuários" id="navbarScrollingDropdown">
                                <Link to='/usuarios'>
                                    <NavDropdown.Item href="#action3">Todos usuários</NavDropdown.Item>
                                </Link>
                                <Link to='/login'>
                                    <NavDropdown.Item href="#action4">
                                        Cadastrar novo usuário
                                    </NavDropdown.Item>
                                </Link>
                            </NavDropdown>

                            {/* 
                            <Link to='/cadastro'>
                                <Nav.Link href="#action6">Parceiros</Nav.Link>
                            </Link> */}

                            <NavDropdown title="Recursos" id="navbarScrollingDropdown">
                                <Link to='/recurso/alimentos'>
                                    <NavDropdown.Item href="#action3">Alimentos</NavDropdown.Item>
                                </Link>

                                <Link to='/recurso/vestuario'>
                                    <NavDropdown.Item href="#action4">
                                        Vestuário
                                    </NavDropdown.Item>
                                </Link>

                                <Link to='/recurso/higiene'>
                                    <NavDropdown.Item href="#action4">
                                        Higiene
                                    </NavDropdown.Item>
                                </Link>
                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Pesquisar"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Pesquisar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
}

export default NavBar;