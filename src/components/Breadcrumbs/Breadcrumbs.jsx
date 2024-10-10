import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./breadcrumbs.css";


const Breadcrumbs = ({ title, pagename, childPageName }) => {
  return (
    <div className="breadcrumbs-wrapper">
      <div className="banner-overlay"></div>
      <Container className="banner-content">
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center">
            <h1 className="text-white text-uppercase mb-0">{title}</h1>
          </Col>
          <Col md={6} className="text-md-end text-center">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-md-end justify-content-center">
                <li className="breadcrumb-item">
                  <NavLink to="/" className="text-white">
                    <i className="bi bi-house-door-fill me-2"></i>Ana Sayfa
                  </NavLink>
                </li>
                <li className="breadcrumb-item">
                  <NavLink to="#" className="text-white">
                    {pagename}
                  </NavLink>
                </li>
                {childPageName && (
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    {childPageName}
                  </li>
                )}
              </ol>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Breadcrumbs;