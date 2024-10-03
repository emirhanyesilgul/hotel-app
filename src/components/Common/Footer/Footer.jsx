import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={3} md={6} sm={12} className="footer-column">
            <h5>Kurumsal</h5>
            <ul>
              <li><a href="#">Hakkımızda</a></li>
              <li><a href="#">Şubelerimiz</a></li>
              <li><a href="#">Değerlerimiz</a></li>
              <li><a href="#">Politikalarımız</a></li>
              <li><a href="#">Sertifikalarımız</a></li>
              <li><a href="#">Kariyer</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12} className="footer-column">
            <h5>Konaklama</h5>
            <ul>
              <li><a href="#">Aktiviteler</a></li>
              <li><a href="#">Lezzet</a></li>
              <li><a href="#">Terrace Restoran</a></li>
              <li><a href="#">Şömine A La Carte</a></li>
              <li><a href="#">Bar Kahvesi</a></li>
              <li><a href="#">Snack Barlar</a></li>
              <li><a href="#">Çocuk</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12} className="footer-column">
            <h5>Ayrıcalıklar</h5>
            <ul>
              <li><a href="#">Wome Loyalty</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Wome Club</a></li>
              <li><a href="#">Wome SPA</a></li>
              <li><a href="#">Wedding - Balayı Konsepti</a></li>
              <li><a href="#">Orman</a></li>
              <li><a href="#">Etkinlik Salonları</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12} className="footer-column">
            <h5>Online Rezervasyon</h5>
            <ul>
              <li><a href="#">Apartmanlar</a></li>
              <li><a href="#">Oteller</a></li>
              <li><a href="#">Fırsatlar</a></li>
              <li><a href="#">Konseptler</a></li>
              <li><a href="#">İletişim</a></li>
            </ul>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col md={4} className="partner-logos">
            
          </Col>
          <Col md={4} className="newsletter">
            <div className="newsletter-form">
              <input type="email" placeholder="E-posta adresiniz" />
              <button>KAYIT OL</button>
            </div>
          </Col>
          <Col md={4} className="app-links">
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <Container>
          <p>Copyright © 2024 Hotel 1207</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;