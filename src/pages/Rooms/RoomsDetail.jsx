import React, { useState, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { popularsData } from "../../utils/data";
import "./RoomsDetail.css";
import { Container, Row, Col, Button, Form, Nav, Tab } from "react-bootstrap";
import {
  FaWifi,
  FaTv,
  FaSnowflake,
  FaCoffee,
  FaPhone,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaBed,
  FaUsers,
  FaExpandArrowsAlt,
  FaMountain,
  FaMapMarkerAlt,
  FaSubway,
  FaPlane,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const RoomDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const roomDetail = useMemo(
    () => popularsData.find((room) => room.title === decodeURIComponent(title)),
    [title]
  );
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  const [guests, setGuests] = useState(1);
  const [activeTab, setActiveTab] = useState("overview");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleReservation = useCallback(() => {
    if (!roomDetail) return;
    const formatDate = (date) => {
      const d = new Date(date);
      let year = d.getFullYear();
      let month = (d.getMonth() + 1).toString().padStart(2, '0');
      let day = d.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    
    const params = new URLSearchParams({
      Checkin: formatDate(checkIn),
      Checkout: formatDate(checkOut),
      Adult: guests.toString(),
      Child: '0',
      Room: '1'
    });
    
    navigate(`/OnlineRes?${params.toString()}`);
  }, [checkIn, checkOut, guests, roomDetail, navigate]);

  const amenityIcons = useMemo(
    () => ({
      wifi: <FaWifi />,
      tv: <FaTv />,
      "air-conditioner": <FaSnowflake />,
      coffee: <FaCoffee />,
    }),
    []
  );

  const renderAmenity = useCallback(
    (amenity) => {
      if (typeof amenity === "string") {
        return (
          <li key={amenity}>
            {amenityIcons[amenity] || null}
            <span>{amenity}</span>
          </li>
        );
      } else if (typeof amenity === "object" && amenity !== null) {
        return (
          <li key={amenity.name}>
            {amenityIcons[amenity.icon] || null}
            <span>{amenity.name}</span>
          </li>
        );
      }
      return null;
    },
    [amenityIcons]
  );

  const renderFeature = useCallback((icon, text) => {
    return (
      <li key={text} className="feature-item">
        {icon}
        <span>{text}</span>
      </li>
    );
  }, []);

  const openLightbox = useCallback((index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  }, []);

  const handlePrevImage = useCallback(() => {
    setPhotoIndex((prevIndex) =>
      prevIndex === 0 ? roomDetail.images.length - 1 : prevIndex - 1
    );
  }, [roomDetail]);

  const handleNextImage = useCallback(() => {
    setPhotoIndex((prevIndex) =>
      prevIndex === roomDetail.images.length - 1 ? 0 : prevIndex + 1
    );
  }, [roomDetail]);

  if (!roomDetail) {
    return <div>Oda bulunamadı.</div>;
  }

  return (
    <div className="room-detail-page">
      <Breadcrumbs
        title={roomDetail.title}
        pagename="Odalar"
        childPageName={roomDetail.title}
      />
      <Container className="room-detail-container">
        <Row>
          <Col lg={8}>
            <div className="room-gallery">
              <div className="main-image-container">
                <img
                  src={roomDetail.images[photoIndex]}
                  alt={roomDetail.title}
                  onClick={() => openLightbox(photoIndex)}
                  className="main-image"
                />
                <button className="slider-button prev" onClick={handlePrevImage}>
                  <FaChevronLeft />
                </button>
                <button className="slider-button next" onClick={handleNextImage}>
                  <FaChevronRight />
                </button>
              </div>
              <div className="thumbnail-container">
                {roomDetail.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${roomDetail.title} - ${index + 1}`}
                    className={`thumbnail ${index === photoIndex ? 'active' : ''}`}
                    onClick={() => setPhotoIndex(index)}
                  />
                ))}
              </div>
            </div>
            {isOpen && (
              <Lightbox
                mainSrc={roomDetail.images[photoIndex]}
                nextSrc={
                  roomDetail.images[(photoIndex + 1) % roomDetail.images.length]
                }
                prevSrc={
                  roomDetail.images[
                    (photoIndex + roomDetail.images.length - 1) %
                      roomDetail.images.length
                  ]
                }
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + roomDetail.images.length - 1) %
                      roomDetail.images.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % roomDetail.images.length)
                }
              />
            )}
            <h1 className="room-title mt-4">{roomDetail.title}</h1>
            <Tab.Container
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
            >
              <Nav variant="tabs" className="mt-4 custom-tabs">
                <Nav.Item>
                  <Nav.Link eventKey="overview">Genel Bakış</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="amenities">Özellikler</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="location">Konum</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="overview">
                  <div className="room-description">
                    <p>{roomDetail.description}</p>
                  </div>
                  <div className="room-features">
                    <h3>Oda Özellikleri</h3>
                    <ul className="feature-list">
                      {renderFeature(<FaExpandArrowsAlt />, `Boyut: ${roomDetail.size} m²`)}
                      {renderFeature(<FaUsers />, `Kapasite: ${roomDetail.minPerson} Konuk`)}
                      {renderFeature(<FaMountain />, `Manzara: ${roomDetail.view}`)}
                      {renderFeature(<FaBed />, `Kategori: ${roomDetail.category.join(", ")}`)}
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="amenities">
                  <div className="room-amenities">
                    <h3>Olanaklar</h3>
                    <ul className="amenity-list">
                      {roomDetail.amenities.map(renderAmenity)}
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="location">
                  <div className="room-location">
                    <h3>Konum Bilgileri</h3>
                    <p>Otelimiz, şehrin en merkezi konumunda yer almaktadır.</p>
                    <ul className="location-list">
                      {renderFeature(<FaMapMarkerAlt />, "Şehir merkezine 5 dakika yürüme mesafesinde")}
                      {renderFeature(<FaSubway />, "En yakın metro istasyonuna 200 metre")}
                      {renderFeature(<FaPlane />, "Havalimanına 30 km uzaklıkta")}
                    </ul>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
          <Col lg={4}>
            <div className="booking-card">
           {/*    <div className="price-section">
                <span className="price">${roomDetail.price}</span>
                <span className="per-night">/ gece</span>
              </div>
              */}
              <Form className="reservation-form mt-4">
                <Form.Group>
                  <Form.Label>Giriş Tarihi</Form.Label>
                  <DatePicker
                    selected={checkIn}
                    onChange={(date) => setCheckIn(date)}
                    selectsStart
                    startDate={checkIn}
                    endDate={checkOut}
                    className="form-control"
                  />
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Çıkış Tarihi</Form.Label>
                  <DatePicker
                    selected={checkOut}
                    onChange={(date) => setCheckOut(date)}
                    selectsEnd
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={checkIn}
                    className="form-control"
                  />
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Misafir Sayısı</Form.Label>
                  <Form.Control
                    as="select"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    {[...Array(roomDetail.minPerson + 2)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1} Kişi
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleReservation}
                    className="mt-4"
                  >
                    Rezervasyon Yap
                  </Button>
                </div>
              </Form>
              <div className="need-help mt-4">
                <h4>Yardıma mı ihtiyacınız var?</h4>
                <p>
                  <FaPhone /> Bizi arayın: +90 123 456 7890
                </p>
                <p>
                  <FaClock /> Çalışma Saatleri: 10:00 - 19:00
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoomDetail;