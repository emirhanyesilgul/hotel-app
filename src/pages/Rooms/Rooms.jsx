import React, { useState, useEffect, useRef } from 'react'
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col } from 'react-bootstrap';
import RoomCard from "../../components/Cards/PopularCard";
import RoomList from "../../components/Cards/RoomList";
import { popularsData } from "../../utils/data"
import "./Rooms.css";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(popularsData[0]);
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const stickyElement = stickyRef.current;
      
      if (stickyElement) {
        if (window.pageYOffset > headerHeight) {
          stickyElement.style.position = 'fixed';
          stickyElement.style.top = '0';
        } else {
          stickyElement.style.position = 'static';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    const roomElement = document.getElementById(`room-${room.id}`);
    if (roomElement) {
      roomElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Breadcrumbs title="Odalarımız" pagename="Odalar"/>
      <section className='py-5 room_section'>
        <Container fluid>
          <Row>
            <Col xl='3' lg='3' md="12" sm="12">
              <div className="sticky-column">
                <RoomList 
                  rooms={popularsData} 
                  selectedRoom={selectedRoom} 
                  onSelectRoom={handleRoomSelect} 
                />
              </div>
            </Col>
            <Col xl='9' lg='9' md="12" sm="12">
              {popularsData.map((room) => (
                <div id={`room-${room.id}`} key={room.id}>
                  <RoomCard 
                    room={room} 
                    isSelected={selectedRoom.id === room.id}
                  />
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Rooms