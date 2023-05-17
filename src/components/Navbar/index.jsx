import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Header from '../Header';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import { FiUser } from 'react-icons/fi';

import './index.css';

import { Link } from 'react-router-dom';


function NavBar() {

    const { user, logout } = useContext(AuthContext);

    console.log(user);

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
                                <Link to='/cadastro'>
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

                        {!user && (
                            <>
                                <Link to='/login'> 
                                    <Button variant='secondary'>Fazer Login</Button>
                                </Link>
                            </>
                        )}

                        {user && user.nome && (
                            <Navbar.Brand>Bem vindo(a) {user?.nome}</Navbar.Brand>
                        )}


                        {user && (

                            <Dropdown style={{ marginRight: 40 }}>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    <FiUser size={18} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item href="#/action-3" onClick={logout}>Sair</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}


                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
}

export default NavBar;