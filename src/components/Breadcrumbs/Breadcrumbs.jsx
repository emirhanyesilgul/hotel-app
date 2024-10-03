import React from "react";
import "../Breadcrumbs/breadcrumbs.css";
import { Breadcrumb, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Breadcrumbs = () => {
  return (
    <>
      <div className="navbar-link">
        <Container>
          <Row>
            <Breadcrumb>
              <Breadcrumb.Item active>
                <NavLink to="/">
                  <i className="bi bi-house"></i>Home
                </NavLink>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Breadcrumbs;
