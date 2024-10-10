import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./features.css";

const Features = () => {
  const services = [
    { icon: "🍽️", title: "Gurme Deneyimi", description: "Tarihi atmosferde yerel lezzetler" },
    { icon: "🏛️", title: "Kültür Turu", description: "Rehberli tarihi keşif gezileri" },
    { icon: "🧖", title: "Tarihi Hamam", description: "Geleneksel Türk hamamı deneyimi" },
    { icon: "🛎️", title: "Concierge Hizmeti", description: "Kişiselleştirilmiş lüks hizmet" },
  ];

  return (
    <section className="features-section">
      <Container>
        <h2 className="section-title">Konforlu konaklama, ücretsiz Wi-Fi, restoran, havuz, tarihi bölgeye yakınlık.
        </h2>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <div className="feature-content">
                <div className="feature-icon">{service.icon}</div>
                <h3 className="feature-title">{service.title}</h3>
                <p className="feature-description">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;