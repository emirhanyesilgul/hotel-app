import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaUtensils, FaLandmark, FaHotTub, FaBell, FaSwimmingPool, FaBed } from "react-icons/fa";
import "./features.css";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="feature-content"
    whileHover={{
      scale: 1.05,
      boxShadow: "0 15px 40px rgba(184,134,11,0.2)"
    }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="feature-icons">
      <Icon />
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </motion.div>
);

const Features = () => {
  const services = [
    { icon: FaUtensils, title: "Gurme Deneyimi", description: "Tarihi atmosferde yerel lezzetler" },
    { icon: FaLandmark, title: "Kültür Turu", description: "Rehberli tarihi keşif gezileri" },
    { icon: FaHotTub, title: "Tarihi Hamam", description: "Geleneksel Türk hamamı deneyimi" },
    { icon: FaBell, title: "Concierge Hizmeti", description: "Kişiselleştirilmiş lüks hizmet" },
    { icon: FaSwimmingPool, title: "Lüks Havuz", description: "Ferahlatıcı yüzme deneyimi" },
    { icon: FaBed, title: "Konforlu Odalar", description: "Huzurlu ve lüks konaklama" },
  ];

  return (
    <section className="features-section">
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Konforlu konaklama, ücretsiz Wi-Fi, restoran, havuz, tarihi bölgeye yakınlık.
        </motion.h2>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-4">
              <FeatureCard {...service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;