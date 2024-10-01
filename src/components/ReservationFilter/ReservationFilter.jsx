import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaMoon,
  FaUser,
  FaChild,
  FaGift,
  FaSearch,
  FaCalendarAlt,
} from "react-icons/fa";
import "./ReservationFilter.css";

const ReservationFilter = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [nights, setNights] = useState(2);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState("");

  const handleSearch = () => {
    console.log("Searching with:", {
      checkIn,
      checkOut,
      nights,
      adults,
      children,
      promoCode,
    });
  };

  return (
    <div className="reservation-filter">
      <div className="filter-item date-input-wrapper">
        <FaCalendarAlt className="calendar-icon" />
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          className="date-input"
          placeholderText="Giriş Tarihi"
        />
      </div>
      <div className="filter-item date-input-wrapper">
        <FaCalendarAlt className="calendar-icon" />
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date)}
          selectsEnd
          startDate={checkIn}
          endDate={checkOut}
          minDate={checkIn}
          className="date-input"
          placeholderText="Çıkış Tarihi"
        />
      </div>
      <div className="filter-item select-wrapper">
        <FaMoon />
        <select
          value={nights}
          onChange={(e) => setNights(Number(e.target.value))}
        >
          {[...Array(30)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} Gece
            </option>
          ))}
        </select>
      </div>
      <div className="filter-item select-wrapper">
        <FaUser />
        <select
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} Yetişkin
            </option>
          ))}
        </select>
      </div>
      <div className="filter-item select-wrapper">
        <FaChild />
        <select
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
        >
          {[...Array(11)].map((_, i) => (
            <option key={i} value={i}>
              {i} Çocuk
            </option>
          ))}
        </select>
      </div>
      <div className="filter-item promo-code">
        <FaGift />
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Promosyon Kodu"
        />
      </div>
      <div className="filter-item">
        <button className="search-button" onClick={handleSearch}>
          <FaSearch /> Rezervasyon Ara
        </button>
      </div>
    </div>
  );
};

export default ReservationFilter;
