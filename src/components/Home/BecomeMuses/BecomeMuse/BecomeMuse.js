import React from 'react';
import fashionSsImg from "../../../../assets/images/fashion-ss.jpg"

const BecomeMuse = (props) => {
  return (
    <div className="slick-slide slick-current slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide20" style={{width: '214px'}} data-slick-index={props.dataSlickIndex} aria-hidden="false">
      <div className="muse-item">
        <img src={fashionSsImg} alt="muse img" />
        <a href="#" title="@elisaferal" tabIndex={0}>@elisaferal</a>
      </div>
    </div>
  );
}

export default BecomeMuse;
