import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube'
import "../About/about.css";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="feature-card text-dark mb-4 h-100">
      <Card.Body className="d-flex flex-column">
        <div className="text-warning mb-3 fs-2">
          <i className={icon}></i>
        </div>
        <Card.Title className="fs-4 mb-3">{title}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const features = [
    { icon: 'bi bi-stars', title: 'Yüksek Takdir', description: 'Otelimiz, yüksek kaliteli ve özenli performansıyla misafirlerimizin takdirini kazanmıştır.' },
    { icon: 'bi bi-hourglass', title: 'Huzurlu Saatler', description: 'Sessiz ve konforlu odalarımız, sakin atmosfer ve profesyonel hizmet anlayışımızla huzurlu bir konaklama.' },
    { icon: 'bi bi-geo-alt', title: 'İyi Lokasyon', description: 'Şehrin önemli noktalarına ve turistik mekanlara yakın stratejik konumumuz.' },
    { icon: 'bi bi-x-lg', title: 'Ücretsiz İptal', description: 'Belirli bir süre öncesinde yapılan iptallerde herhangi bir ücret talep etmiyoruz.' },
    { icon: 'bi bi-credit-card-2-front', title: 'Ödeme Esnekliği', description: 'Çeşitli ödeme seçenekleri ve erken rezervasyon indirimleri sunuyoruz.' },
    { icon: 'bi bi-percent', title: 'Özel Teklifler', description: 'Misafirlerimize özel kampanyalar ve avantajlı konaklama seçenekleri sağlıyoruz.' },
  ];

  return (
    <>
      <Breadcrumbs title="Hakkımızda" pagename="About Us" />
      <section className="py-5">
        <Container>
          <Row className="mb-5 align-items-center">
            <Col lg={6}>
              <div className="about-image-content p-4 text-dark">
                <h2 className="mb-4">Hotel 1207</h2>
                <p>Antalya Kaleiçi'nde, şehir merkezine sadece 200 metre uzaklıkta bulunan otelimiz, tüm cazibe merkezlerine kolay erişim imkanı sunmaktadır. 2015 yılında açılan otelimiz, 24 misafir odası ile sessiz ve konforlu bir konaklama deneyimi sağlar.</p>
                <Button className='btnshowvideo' variant="outline-light" onClick={() => setShowVideo(true)}>Oteli Keşfet</Button>
              </div>
            </Col>
            <Col lg={6}>
              <img src="https://hotel1207.com/storage/general/banner.jpeg" alt="Hotel 1207" className="img-fluid rounded shadow" />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={12}>
              <h2 className="text-center mb-4 fw-bold fs-5">Temel Özellikler</h2>
            </Col>
            {features.map((feature, index) => (
              <Col md={4} key={index} className="mb-4">
                <FeatureCard {...feature} />
              </Col>
            ))}
          </Row>

          <Row>
            <Col md={6}>
              <Card className="mb-4 h-100">
                <Card.Body>
                  <Card.Title>Tesisler</Card.Title>
                  <Card.Text>
                    Hotel 1207, özel bir atmosfer sunar. 2 junior suit, 1 delüxe suit, çift ve tek kişilik odalar, engelli odası ve üç kişilik odalar mevcuttur. Resepsiyon, Lobi, Restoran (30 kişilik), Bahçe Restoranı (40 kişilik) ve küçük bir havuz bulunmaktadır.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4 h-100">
                <Card.Body>
                  <Card.Title>Önemli Bilgiler</Card.Title>
                  <ul className="list-unstyled">
                    <li>✓ Günlük oda temizliği ve havlu değişimi</li>
                    <li>✓ Açık büfe kahvaltı</li>
                    <li>✓ Ücretsiz Wi-Fi</li>
                    <li>✓ Mermerli Plajı'na yakın konum</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={showVideo} onHide={() => setShowVideo(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Hotel 1207 Tanıtım</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactPlayer 
            url='https://www.youtube.com/watch?v=NQgrzf8WTdA'
            width='100%'
            height='400px'
            controls={true}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default About;