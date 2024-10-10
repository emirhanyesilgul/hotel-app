import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker, { registerLocale } from "react-datepicker";
import tr from 'date-fns/locale/tr';
import "react-datepicker/dist/react-datepicker.css";
import {
  FaMoon,
  FaUser,
  FaChild,
  FaSearch,
  FaCalendarAlt,
} from "react-icons/fa";
import "./ReservationFilter.css";
import ChildAgePopup from "./ChildAgePopup";

registerLocale('tr', tr);

const ReservationFilter = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
  const [nights, setNights] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [showChildAgePopup, setShowChildAgePopup] = useState(false);
  const [childPopupPosition, setChildPopupPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const nightsDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (nightsDiff !== nights) {
      setNights(nightsDiff);
    }
  }, [checkIn, checkOut]);

  useEffect(() => {
    if (children > 0) {
      setShowChildAgePopup(true);
    } else {
      setChildAges([]);
    }
  }, [children]);

  const handleCheckInChange = (date) => {
    setCheckIn(date);
    const newCheckOut = new Date(date);
    newCheckOut.setDate(newCheckOut.getDate() + nights);
    setCheckOut(newCheckOut);
  };

  const handleCheckOutChange = (date) => {
    if (date > checkIn) {
      setCheckOut(date);
      const timeDiff = date.getTime() - checkIn.getTime();
      const nightsDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setNights(nightsDiff);
    }
  };

  const handleNightsChange = (e) => {
    const newNights = Number(e.target.value);
    setNights(newNights);
    const newCheckOut = new Date(checkIn);
    newCheckOut.setDate(newCheckOut.getDate() + newNights);
    setCheckOut(newCheckOut);
  };

  const handleChildAgeChange = (index, age) => {
    const newChildAges = [...childAges];
    newChildAges[index] = age;
    setChildAges(newChildAges);
  };

  const handleChildrenChange = (e) => {
    const newChildren = Number(e.target.value);
    setChildren(newChildren);
    if (newChildren > 0) {
      const childrenSelect = e.target.getBoundingClientRect();
      setChildPopupPosition({
        top: -childrenSelect.height - 10,
        left: 0,
      });
      setShowChildAgePopup(true);
    } else {
      setChildAges([]);
      setShowChildAgePopup(false);
    }
  };

  const handleCloseChildAgePopup = () => {
    setShowChildAgePopup(false);
  };

  const handleSearch = () => {
    const params = new URLSearchParams({
      Checkin: formatDate(checkIn, 'dd/MM/yyyy'),
      Checkout: formatDate(checkOut, 'dd/MM/yyyy'),
      Adult: adults,
      Child: children,
      Room: 1,
    });

    if (children > 0) {
      params.append('ChildAges', childAges.join('+'));
    }

    navigate(`/OnlineRes?${params.toString()}`);
  };

  const formatDate = (date, format) => {
    const map = {
      MM: (date.getMonth() + 1).toString().padStart(2, '0'),
      dd: date.getDate().toString().padStart(2, '0'),
      yyyy: date.getFullYear(),
    };

    return format.replace(/MM|dd|yyyy/gi, matched => map[matched]);
  };

  return (
    <div className="reservation-filter">
      <div className="filter-item date-input-wrapper">
        <FaCalendarAlt className="calendar-icon" />
        <DatePicker
          selected={checkIn}
          onChange={handleCheckInChange}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          locale="tr"
          className="date-input"
          placeholderText="Giriş Tarihi"
        />
      </div>
      <div className="filter-item date-input-wrapper">
        <FaCalendarAlt className="calendar-icon" />
        <DatePicker
          selected={checkOut}
          onChange={handleCheckOutChange}
          selectsEnd
          startDate={checkIn}
          endDate={checkOut}
          minDate={checkIn}
          dateFormat="dd/MM/yyyy"
          locale="tr"
          className="date-input"
          placeholderText="Çıkış Tarihi"
        />
      </div>
      <div className="filter-item select-wrapper">
        <FaMoon />
        <select
          value={nights}
          onChange={handleNightsChange}
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
          onChange={handleChildrenChange}
        >
          {[...Array(11)].map((_, i) => (
            <option key={i} value={i}>
              {i} Çocuk
            </option>
          ))}
        </select>
        {showChildAgePopup && (
          <ChildAgePopup
            children={children}
            childAges={childAges}
            onChildAgeChange={handleChildAgeChange}
            onClose={handleCloseChildAgePopup}
            style={{
              position: 'absolute',
              top: `${childPopupPosition.top}px`,
              left: `${childPopupPosition.left}px`,
            }}
          />
        )}
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