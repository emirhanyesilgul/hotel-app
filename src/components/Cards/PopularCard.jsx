import React, { useState } from 'react'
import "./RoomCard.css";
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FaWifi, FaTv, FaSnowflake, FaCoffee, FaChevronLeft, FaChevronRight, FaBed, FaShower, FaGlassMartini, FaUser, FaBath, FaConciergeBell, FaUmbrellaBeach } from 'react-icons/fa';

const iconMap = {
  wifi: { icon: FaWifi, name: "Wi-Fi" },
  tv: { icon: FaTv, name: "TV" },
  "air-conditioner": { icon: FaSnowflake, name: "Klima" },
  coffee: { icon: FaCoffee, name: "Kahve Makinesi" },
  bed: { icon: FaBed, name: "Yatak" },
  shower: { icon: FaShower, name: "Duş" },
  minibar: { icon: FaGlassMartini, name: "Minibar" },
  person: { icon: FaUser, name: "Kişi Sayısı" },
  bathtub: { icon: FaBath, name: "Küvet" },
  "room-service": { icon: FaConciergeBell, name: "Oda Servisi" },
  balcony: { icon: FaUmbrellaBeach, name: "Balkon" },
};

const RoomCard = ({room, isSelected}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === room.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? room.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card className={`mb-3 room-card ${isSelected ? 'selected' : ''}`}>
      <div className="room-content">
        <div className="room-image-container">
          <img
            src={room.images[currentImageIndex]}
            alt={`${room.title} - ${currentImageIndex + 1}`}
            className="room-image"
          />
          <div className="image-indicators">
            {room.images.map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              ></span>
            ))}
          </div>
          <button className="image-nav prev" onClick={prevImage}><FaChevronLeft /></button>
          <button className="image-nav next" onClick={nextImage}><FaChevronRight /></button>
        </div>
        <Card.Body>
          <h3 className="room-title">{room.title}</h3>
          <p className="room-description">{room.description}</p>
          <p className="room-info">{room.size} m² | Min {room.minPerson} Konuk | {room.view}</p>
          <div className="amenities">
            {room.amenities && room.amenities.slice(0, 4).map((amenity, index) => {
              const iconInfo = typeof amenity === 'string'
                ? iconMap[amenity]
                : { icon: iconMap[amenity.icon]?.icon || FaWifi, name: amenity.name };
              const IconComponent = iconInfo.icon;
              return (
                <div key={index} className="amenity-icon-container">
                  <span className="amenity-icon" title={iconInfo.name}>
                    <IconComponent />
                  </span>
                  <span className="amenity-name">{iconInfo.name}</span>
                </div>
              );
            })}
          </div>
         {/*  <div className="room-price">
            <span className="original-price">{room.price} TL</span>
            <span className="discounted-price">{room.afterDiscount} TL</span>
          </div>
          */}
          <div className="card-actions">
          <Link 
              to={`/rooms/${encodeURIComponent(room.title)}`} 
              className="btn btn-link more-info-btn"
            >
              Daha Fazla
            </Link>
            <Button variant="primary" className="reservation-btn">REZERVASYON</Button>
          </div>
        </Card.Body>
      </div>
    </Card>
  )
}

export default RoomCard