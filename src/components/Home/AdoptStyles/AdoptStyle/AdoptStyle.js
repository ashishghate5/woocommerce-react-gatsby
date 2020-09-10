import React from 'react';
import minImg from "../../../../assets/images/min.jpg"

const AdoptStyle = (props) => {
  return (
    <div className="slick-slide slick-current slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide40" style={{width: '390px'}} data-slick-index={props.dataSlickIndex} aria-hidden="false">
      <div className="item-inner">
        <div className="item-image">
          <img src={minImg} alt="image" />
        </div>
        <h2>VÊTEMENTS</h2>
        <a href="#" title="shop now" className="shop-btn" tabIndex={0}>shop now</a>
      </div>
    </div>
                
  );
}

export default AdoptStyle;
          