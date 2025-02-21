import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiAddToQueue } from "react-icons/bi";
import { Link } from 'react-router';

function NavbarEnchance() {
  return (
    <Navbar bg="secondary" data-bs-theme="success">
      <Container fluid>
        <Navbar.Brand href="/home">ToDO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="home">Categories</Nav.Link>
            <Nav.Link href="/task"><BiAddToQueue />Add Task</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Profil"
            />
            <Link to='/profil'>
          <Button variant="outline-light">Profil</Button>
          
          </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEnchance;