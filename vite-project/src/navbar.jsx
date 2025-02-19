import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GoInbox } from "react-icons/go";
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
            <Nav.Link href="#action1" className="home"><GoInbox />Inbox</Nav.Link>
              <NavDropdown title="All List" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">Today</NavDropdown.Item>
              <NavDropdown.Item href="#action3">This Week</NavDropdown.Item>
              <NavDropdown.Item href="#action4">This Month</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">All Task</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Work</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Home</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/task"><BiAddToQueue />Add Task</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Logout"
            />
            <Link to='/'>
          <Button variant="outline-light">LOGOut</Button>
          </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEnchance;