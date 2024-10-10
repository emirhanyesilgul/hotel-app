import React, { useState } from 'react';
import './rooms.css';

const roomData = [
  { name: 'Prime Forest', image: 'https://hotel1207.com/storage/rooms/superiortwin/61920684d408f-770x460.jpeg', features: ['wifi', 'tv', 'minibar'] },
  { name: 'Prime Sea', image: 'https://hotel1207.com/storage/rooms/superriordouble/61920682c79a1-770x460.jpeg', features: ['wifi', 'balcony', 'sea-view'] },
  { name: 'Prime Sea Plus', image: 'https://hotel1207.com/storage/rooms/kingsuit/61920683d1098-770x460.jpeg', features: ['wifi', 'balcony', 'sea-view'] },
  { name: 'Prime Suit Sea', image: 'https://hotel1207.com/storage/rooms/kingsuit/61920683d1098-770x460.jpeg', features: ['wifi', 'balcony', 'sea-view'] },
];

const featureIcons = {
  wifi: (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
      <line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>
  ),
  tv: (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
      <polyline points="17 2 12 7 7 2"></polyline>
    </svg>
  ),
  minibar: (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M3 2l18 0l0 20l-18 0z"></path>
      <path d="M9 2v20"></path>
      <path d="M15 2v20"></path>
      <path d="M3 9h18"></path>
      <path d="M3 15h18"></path>
    </svg>
  ),
  balcony: (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
      <line x1="15" y1="21" x2="15" y2="9"></line>
    </svg>
  ),
  'sea-view': (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M2 12h20"></path>
      <path d="M7 12c.94-3.46 4.56-6 8.5-6 3.94 0 7.56 2.54 8.5 6"></path>
      <path d="M11 12c.94-1.73 2.28-3 4-3 1.72 0 3.06 1.27 4 3"></path>
      <path d="M15 12c.94-.86 1.14-1.5 2-1.5.86 0 1.06.64 2 1.5"></path>
    </svg>
  ),
};

const Rooms = () => {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

  return (
    <div className="room-gallery">
      <h2 className="gallery-title">KONAKLAMA</h2>
      <div className="room-list">
        {roomData.map((room, index) => (
          <div
            key={room.name}
            className={`room-item ${index === currentRoomIndex ? 'active' : ''}`}
            onClick={() => setCurrentRoomIndex(index)}
          >
            <img src={room.image} alt={room.name} className="room-thumbnail" />
            <span className="room-name">{room.name}</span>
          </div>
        ))}
      </div>
      <div className="room-showcase">
        <div className="room-image" style={{ backgroundImage: `url(${roomData[currentRoomIndex].image})` }}>
          <div className="room-info">
            <h3 className="active-room-name">{roomData[currentRoomIndex].name}</h3>
            <div className="room-features">
              {roomData[currentRoomIndex].features.map((feature) => (
                <span key={feature} className="feature-icon">
                  {featureIcons[feature]}
                  <span className="feature-name">{feature}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;