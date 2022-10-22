import { Button } from "antd";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import { checkLogin, logout } from "../../Auth";
function NavBar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (checkLogin()) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      {["xxl"].map((expand) => (
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
                  <Nav.Link href="/">Trang Chủ</Nav.Link>
                  <Nav.Link href="/product">Danh sách Tour</Nav.Link>
                  <Nav.Link href="https://www.vietnamairlines.com/vn/vi">
                    VitenamAirlines
                  </Nav.Link>
                  <Nav.Link href="http://www.dulichvn.org.vn/">
                    Báo Du Lịch
                  </Nav.Link>
                  {checkLogin() ? (
                    <Button
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Nav.Link href="/login">Login</Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavBar;
