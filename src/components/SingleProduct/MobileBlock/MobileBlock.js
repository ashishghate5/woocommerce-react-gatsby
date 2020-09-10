import React from 'react';
import truckImg from "../../../assets/images/truck.png"

function MobileBlock() {
  return (
    <div className="slider-below mobile-block red-bg">
      <div className="container">
        <div className="slider-b-icon">
          <img src={truckImg} alt="delivery" />
        </div>
        <div className="slider-b-text">
          <p>LIVRAISON EXPRESS 72H !</p>
        </div>
      </div>
    </div>
  );
}

export default MobileBlock;
