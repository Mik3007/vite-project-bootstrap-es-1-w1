import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function MyNavbar({search, setSearch}) {


  return (
    <Navbar expand="lg" className="nav-bg">
      <Container>
        <Link className='nav-link'><Navbar.Brand href="/" className='fs-2'><img src="../src/assets/icons8-educazione-64.png" alt="logo" />LiBraRy</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='button-home-error' to='/'>Home</Link>
          </Nav>
          <Form.Control
                  className='w-25 rounded-4 text-bg-info' 
                  type="search" 
                  placeholder="Ricerca il tuo libro..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
            />     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;