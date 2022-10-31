import { Button } from "antd";
import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { checkLogin, logout } from "../../../Auth";
import "./styles.scss";

function NavBar() {
  const navigate = useNavigate();

  const handleToChangeHome = () => {
    navigate("/");
  };

  const handleToChangeList = () => {
    navigate("/product");
  };

  const handleToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container__navbar">
      {["xxl"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="">
          <Container fluid>
            <Nav.Link onClick={handleToChangeHome} className="logo">
              Local Tourist
            </Nav.Link>

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
                  <Nav.Link onClick={handleToChangeHome}>Trang Chủ</Nav.Link>
                  <Nav.Link onClick={handleToChangeList}>
                    Danh sách Tour
                  </Nav.Link>
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
                    <Nav.Link onClick={handleToLogin}>Login</Nav.Link>
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
