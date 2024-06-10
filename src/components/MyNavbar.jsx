import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../modules/Contexts';

function MyNavbar({search, setSearch}) {

  let [themeTest, setThemeTest] = useContext(ThemeContext);

  return (
    <Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="#home" className='fs-2'><img src="../src/assets/icons8-educazione-64.png" alt="logo" />LiBraRy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
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