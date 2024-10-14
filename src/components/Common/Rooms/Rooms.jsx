import React, { useState, useRef } from "react";
import "./rooms.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

const roomData = [
  {
    type: "Lüx",
    rooms: [
      {
        name: "Superior Twin",
        image:
          "https://hotel1207.com/storage/rooms/superiortwin/61920684d408f-770x460.jpeg",
        features: [
          { icon: "wifi", description: "Ücretsiz Wi-Fi" },
          { icon: "tv", description: "Smart TV" },
          { icon: "minibar", description: "Mini Bar" },
        ],
      },
      {
        name: "Deluxe Suite",
        image:
          "https://hotel1207.com/storage/rooms/superriordouble/61920682c79a1-770x460.jpeg",
        features: [
          { icon: "wifi", description: "Yüksek Hızlı Wi-Fi" },
          { icon: "balcony", description: "Özel Balkon" },
          { icon: "sea-view", description: "Deniz Manzarası" },
        ],
      },
      {
        name: "Superior Double",
        image:
          "https://hotel1207.com/storage/rooms/superriordouble/61920682c79a1-770x460.jpeg",
        features: [
          { icon: "wifi", description: "Wi-Fi" },
          { icon: "balcony", description: "Geniş Balkon" },
          { icon: "sea-view", description: "Muhteşem Manzara" },
        ],
      },
    ],
  },
  {
    type: "Aile",
    rooms: [
      {
        name: "Economy Double",
        image:
          "https://hotel1207.com/storage/rooms/superriordouble/61920682c79a1-770x460.jpeg",
        features: [
          { icon: "wifi", description: "Wi-Fi" },
          { icon: "tv", description: "Kablolu TV" },
          { icon: "minibar", description: "Mini Buzdolabı" },
        ],
      },
      {
        name: "Superior Triple",
        image:
          "https://hotel1207.com/storage/rooms/superriordouble/61920682c79a1-770x460.jpeg",
        features: [
          { icon: "wifi", description: "Hızlı Wi-Fi" },
          { icon: "balcony", description: "Aile Balkonu" },
          { icon: "sea-view", description: "Panoramik Manzara" },
        ],
      },
    ],
  },
  {
    type: "Çift Yatak",
    rooms: [
      {
        name: "Junior Suite",
        image:
          "https://hotel1207.com/storage/rooms/kingsuit/61920683d1098-770x460.jpeg",
        features: [
          { icon: "wifi", description: "Premium Wi-Fi" },
          { icon: "balcony", description: "Geniş Teras" },
          { icon: "sea-view", description: "180° Deniz Manzarası" },
          { icon: "jacuzzi", description: "Özel Jakuzi" },
        ],
      },
    ],
  },
  {
    type: "Rahat",
    rooms: [
      {
        name: "Disabled Room",
        image:
          "https://hotel1207.com/storage/rooms/kingsuit/61920683d1098-770x460.jpeg",
        features: [
          { icon: "wifi", description: "Kolay Erişim Wi-Fi" },
          { icon: "balcony", description: "Erişilebilir Balkon" },
          { icon: "sea-view", description: "Ferah Manzara" },
          { icon: "jacuzzi", description: "Engelli Dostu Banyo" },
        ],
      },
    ],
  },
];

const featureIcons = {
  wifi: (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    >
      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
      <line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>
  ),
  tv: (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    >
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
      <polyline points="17 2 12 7 7 2"></polyline>
    </svg>
  ),
  minibar: (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    >
      <path d="M3 2l18 0l0 20l-18 0z"></path>
      <path d="M9 2v20"></path>
      <path d="M15 2v20"></path>
      <path d="M3 9h18"></path>
      <path d="M3 15h18"></path>
    </svg>
  ),
  balcony: (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
      <line x1="15" y1="21" x2="15" y2="9"></line>
    </svg>
  ),
  "sea-view": (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    >
      <path d="M2 12h20"></path>
      <path d="M7 12c.94-3.46 4.56-6 8.5-6 3.94 0 7.56 2.54 8.5 6"></path>
      <path d="M11 12c.94-1.73 2.28-3 4-3 1.72 0 3.06 1.27 4 3"></path>
      <path d="M15 12c.94-.86 1.14-1.5 2-1.5.86 0 1.06.64 2 1.5"></path>
    </svg>
  ),
  jacuzzi: (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    >
      <path d="M6 12h12"></path>
      <path d="M6 16h12"></path>
      <path d="M2 20h20"></path>
      <path d="M4 4v16"></path>
      <path d="M20 4v16"></path>
      <path d="M12 4v4"></path>
      <path d="M10 6h4"></path>
    </svg>
  ),
};

const featureNames = {
  wifi: "Wi-Fi",
  tv: "TV",
  minibar: "Mini Bar",
  balcony: "Balkon",
  "sea-view": "Deniz Manzarası",
  jacuzzi: "Jakuzi",
};

const Rooms = () => {
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const featuresRef = useRef(null);

  const handleTypeClick = (index) => {
    setCurrentTypeIndex(index);
    setCurrentRoomIndex(0);
  };

  const handleRoomClick = (index) => {
    setCurrentRoomIndex(index);
  };

  const scrollFeatures = (direction) => {
    if (featuresRef.current) {
      const scrollAmount = direction === "left" ? -100 : 100;
      featuresRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const currentType = roomData[currentTypeIndex];
  const currentRoom = currentType.rooms[currentRoomIndex];

  return (
    <div className="room-gallery">
      <h2 className="gallery-title">Oda Tipleri</h2>
      <div className="room-list">
        {roomData.map((type, index) => (
          <div
            key={type.type}
            className={`room-item ${
              index === currentTypeIndex ? "active" : ""
            }`}
            onClick={() => handleTypeClick(index)}
          >
            <img
              src={type.rooms[0].image}
              alt={type.type}
              className="room-thumbnail"
            />
            <span className="room-name">{type.type}</span>
          </div>
        ))}
      </div>
      <div
        className="room-showcase"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={currentRoom.image}
          alt={currentRoom.name}
          className={`rooms-image ${isHovered ? "hovered" : ""}`}
        />
        <div className="room-infos">
          <h3 className="active-room-name">{currentRoom.name}</h3>
          <div className="features-container">
            <button
              className="scroll-button left"
              onClick={() => scrollFeatures("left")}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="room-features" ref={featuresRef}>
              {currentRoom.features.map((feature, index) => (
                <span key={index} className="feature-icon">
                  {featureIcons[feature.icon]}
                  <span className="feature-name">{feature.description}</span>
                </span>
              ))}
            </div>
            <button
              className="scroll-button right"
              onClick={() => scrollFeatures("right")}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className={`room-arrow ${isHovered ? "visible" : ""}`}>
          <ChevronRight size={24} />
        </div>
      </div>
      <div className="room-sublist">
        {currentType.rooms.map((room, index) => (
          <div
            key={room.name}
            className={`room-subitem ${
              index === currentRoomIndex ? "active" : ""
            }`}
            onClick={() => handleRoomClick(index)}
          >
            <img
              src={room.image}
              alt={room.name}
              className="room-subthumbnail"
            />
            <span className="room-subname">{room.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
