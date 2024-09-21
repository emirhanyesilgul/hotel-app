import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './banner.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const timerRef = useRef(null);
  
  const slides = [
    {
      image: "https://hotel1207.com/storage/rooms/room1/whatsapp-image-2023-06-05-at-161716-13.jpeg",
      title: "Lüks Deneyim",
      subtitle: "Hotel 1207 Special Class",
      description: "Konforu ve zarafeti yeniden tanımlayın"
    },
    {
      image: "https://hotel1207.com/storage/rooms/room1/whatsapp-image-2023-06-05-at-161716-21.jpeg",
      title: "Doğanın Kucağında",
      subtitle: "Eşsiz Manzaralar",
      description: "Doğayla iç içe huzurlu bir kaçamak"
    },
    {
      image: "https://hotel1207.com/storage/rooms/room2/whatsapp-image-2023-06-05-at-161716-6.jpeg",
      title: "Özel Anlar",
      subtitle: "Unutulmaz Deneyimler",
      description: "Her detayı özenle tasarlanmış lüks"
    },
    {
      image: "https://hotel1207.com/storage/rooms/room2/whatsapp-image-2023-06-05-at-161716-7.jpeg",
      title: "Gurme Lezzetler",
      subtitle: "Ödüllü Şeflerimizden",
      description: "Damak zevkinizi şımartacak tatlar"
    },
    {
      image: "https://hotel1207.com/storage/rooms/room2/whatsapp-image-2023-06-05-at-161717-4.jpeg",
      title: "Huzurlu Kaçamak",
      subtitle: "Panoramik Manzara",
      description: "Stresten uzak, lüks içinde dinlenme"
    }
  ];

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  const changeSlide = (index) => {
    setCurrentSlide(index);
    resetTimer();
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.pageX;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        changeSlide((currentSlide + 1) % slides.length);
      } else {
        changeSlide((currentSlide - 1 + slides.length) % slides.length);
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="luxury-slider">
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="slide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div 
            className="slide-background" 
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          ></div>
          <div className="slide-overlay"></div>
          <div className="content-wrapper">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="slide-content"
            >
              <h1>{slides[currentSlide].title}</h1>
              <h2>{slides[currentSlide].subtitle}</h2>
              <p>{slides[currentSlide].description}</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Keşfet
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button className="nav-button prev" onClick={() => changeSlide((currentSlide - 1 + slides.length) % slides.length)}>&lt;</button>
      <button className="nav-button next" onClick={() => changeSlide((currentSlide + 1) % slides.length)}>&gt;</button>
      <div className="dots">
        {slides.map((_, index) => (
          <motion.span 
            key={index} 
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => changeSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          ></motion.span>
        ))}
      </div>
    {/*  <div className="reservation-filter">
        <input type="date" placeholder="Giriş Tarihi" />
        <input type="date" placeholder="Çıkış Tarihi" />
        <select>
          <option value="">Kişi Sayısı</option>
          <option value="1">1 Kişi</option>
          <option value="2">2 Kişi</option>
          <option value="3">3 Kişi</option>
          <option value="4">4 Kişi</option>
        </select>
        <button className="check-availability">Müsaitliği Kontrol Et</button>
      </div>*/}
    </section>
  );
};

export default Banner;