import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand href='#home'>Ds - Design de Sorriso</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#features'>Home</Nav.Link>
					<Nav.Link href='#pricing'>Clinica</Nav.Link>
					<Nav.Link href='#pricing'>Equipa</Nav.Link>
					<Nav.Link href='#pricing'>Tratamentos</Nav.Link>
					<Nav.Link href='#pricing'>Casos Clinicos</Nav.Link>
					<Nav.Link href='#pricing'>Contactos</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href='#deets'>Marcar Consulta</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;
