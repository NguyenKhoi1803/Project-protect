import React from "react";
import Login from "../../components/User/Login";
import Register from "../../components/User/Register";
import Banner from "../Banner";

// import "../Header/styles.scss";

// function Header(props) {
//   return (
//     <div>
//       <div className="container__Header">
//         <Register />
//         <Login />
//       </div>
//       <Banner />
//     </div>
//   );
// }

// export default Header;

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchForm from "../../components/User/SearchForm";

function Header() {
  return (
    <div>

      {['xxl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="">
          <Container fluid>
            <Navbar.Brand href="/"> Local Tourist </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/product">Tour List</Nav.Link>
                  <NavDropdown
                    title="Login"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">{<Login />}</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      {<Register />}
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Liên Hệ : 0779950318 ( Khôi )
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <SearchForm />
      <Banner />
    </div>
  );
}

export default Header;
