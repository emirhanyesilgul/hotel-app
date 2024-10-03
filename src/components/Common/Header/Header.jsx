import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  // sticky Header
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 120
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <header className="header-section">
      <Container>
        <Navbar expand="lg" className="p-0">
          {/* Logo section */}
          <Navbar.Brand>
            <NavLink to="/">
              <img
                height={80}
                width={"auto"}
                src="https://hotel1207.com/storage/general/logo-gold.png"
                alt="Hotel 1207 Logo"
              />
            </NavLink>
          </Navbar.Brand>
          {/* End Logo section */}

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            {/* Mobile Logo section */}
            <Offcanvas.Header>
              <h1 className="logo">
                <img
                  height={80}
                  width={"auto"}
                  src="https://hotel1207.com/storage/general/logo-gold.png"
                  alt="Hotel 1207 Logo"
                />
              </h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            {/* Mobil End Logo section */}

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/">
                  Anasayfa
                </NavLink>
                <NavLink className="nav-link" to="about-us">
                  Hakkımızda
                </NavLink>
                <NavLink className="nav-link" to="rooms">
                  Odalar
                </NavLink>
                <NavLink className="nav-link" to="hotels">
                  Oteller
                </NavLink>
                <NavLink className="nav-link" to="photo-gallery">
                  Galeri
                </NavLink>
                <NavDropdown
                  title="Oda Tipleri"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item href="#action3">
                    Deluxe Suite
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Superior Twin
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Superior Double
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Diğer Odalar
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink className="nav-link" to="blog">
                  Blog
                </NavLink>
                <NavLink className="nav-link" to="contact">
                  İletişim
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="ms-md-4 ms-2">
            <NavLink className="primaryBtn d-none d-sm-inline-block">
              Rezervasyon Yap
            </NavLink>
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i
                className={open ? "bi bi-x-lg" : "bi bi-list"}
                onClick={toggleMenu}
              ></i>
            </li>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
