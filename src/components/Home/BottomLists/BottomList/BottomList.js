import React from 'react';
import fashionSsImg from "../../../../assets/images/fashion-ss.jpg"

const BottomList = (props) => {
  return (
    <div className="slick-slide slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide30" style={{width: '234px'}} data-slick-index={props.dataSlickIndex} aria-hidden="false">
      <div className="muse-item">
        <img src={fashionSsImg} alt="muse img" />
        <a href="#" title="@elisaferal" tabIndex={0}>@elisaferal</a>
      </div>
    </div>
  );
}

export default BottomList;
