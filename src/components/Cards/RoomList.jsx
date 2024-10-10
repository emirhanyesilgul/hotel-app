import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './RoomList.css';

const RoomList = ({ rooms, selectedRoom, onSelectRoom }) => {
  return (
    <ListGroup className="room-list">
      {rooms.map((room) => (
        <ListGroup.Item
          key={room.id}
          active={selectedRoom.id === room.id}
          onClick={() => onSelectRoom(room)}
          action
        >
          <div className="d-flex align-items-center">
            <img src={room.images[0]} alt={room.title} className="room-thumbnail mr-3" />
            <span>{room.title}</span>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default RoomList;