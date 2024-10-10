import React from 'react';
import { FaChild, FaTimes } from 'react-icons/fa';

const ChildAgePopup = ({ children, childAges, onChildAgeChange, onClose, style }) => {
  return (
    <div className="child-age-popup" style={style}>
      <div className="child-age-popup-content">
        <div className="popup-header">
          <h3><FaChild /> Çocuk Yaşları</h3>
          <button className="close-icon" onClick={onClose}><FaTimes /></button>
        </div>
        {[...Array(children)].map((_, index) => (
          <div key={index} className="child-age-input">
            <label>{`${index + 1}. Çocuk`}</label>
            <select
              value={childAges[index] || 0}
              onChange={(e) => onChildAgeChange(index, Number(e.target.value))}
            >
              {[...Array(18)].map((_, i) => (
                <option key={i} value={i}>
                  {i} Yaş
                </option>
              ))}
            </select>
          </div>
        ))}
        <button className="apply-button" onClick={onClose}>Uygula</button>
      </div>
    </div>
  );
};

export default ChildAgePopup;