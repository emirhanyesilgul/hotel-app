import React from "react";
import { Card, Button } from "react-bootstrap";
import "../Cards/card.css";

const RoomDetails = ({room}) => {
  return (
    <div className="room-details">
      <h2 className="room-title">{room.title}</h2>
      <Card className="border-0">
        <Card.Img
          variant="top"
          src={room.image}
          className="img-fluid"
          alt={room.title}
        />
        <Card.Body className="px-0">
          <p className="room-description">{room.location}</p>
          <div className="amenities">
            {room.amenities && room.amenities.map((amenity, index) => (
              <span key={index} className="amenity-icon me-3">
                <i className={`bi bi-${amenity.icon}`}></i>
              </span>
            ))}
          </div>
          <p className="room-size mt-3">{room.size} m² | Min {room.minPerson} Kişilik</p>
          <div className="price-info d-flex justify-content-between align-items-center mt-4">
            <div>
              <p className="mb-0">
                {room.afterDiscount ? (
                  <>
                    <span className="original-price me-2">${room.price.toFixed(2)}</span>
                    <span className="discounted-price">${room.afterDiscount.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="price">${room.price.toFixed(2)}</span>
                )}
              </p>
              <small className="text-muted">{room.days}</small>
            </div>
            <Button variant="primary" className="reservation-btn">Rezervasyon</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RoomDetails;