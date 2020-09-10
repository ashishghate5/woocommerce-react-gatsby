import React from 'react';
import listBox2Img from "../../../../assets/images/list-box2.png"

const NewArrival = () => {

  return (
    <>
      <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide10" style={{width: '292px'}}>
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Printed dress" tabIndex={0}>
            <div className="item-image">
              <img src={listBox2Img} alt="picture" />
            </div>
            <div className="product-name">
              <h6><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>PRINTED DRESS</font></font></h6>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
