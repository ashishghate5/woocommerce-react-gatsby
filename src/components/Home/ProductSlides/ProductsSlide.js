import React from 'react';
import ProductSlide from './ProductSlide/ProductSlide'
import rightArrowImg from "../../../assets/images/right-arrow.png"
import leftArrowImg from "../../../assets/images/left-arrow.png"

function ProductsSlide() {
  // var values = [1, 2, 3, 4, 5, 6, 7, 8]
  // var newProductSlide = values.map(function(value){
  //   return < ProductSlide />;
  // })
  return (
    <section>
      <div className="container">
        <div className="slider slick-initialized slick-slider" role="toolbar">
          <div className="slick-custom-arrow slick-custom-arrow-left slick-arrow"><img src={leftArrowImg} alt="next" /></div>
          <div aria-live="polite" className="slick-list draggable">
            <div className="slick-track" role="listbox" style={{opacity: 1, width: '3484px', transform: 'translate3d(-2144px, 0px, 0px)'}}>
              <ProductSlide />
            </div>
          </div>
          <div className="slick-custom-arrow slick-custom-arrow-right slick-arrow"><img src={rightArrowImg} alt="prev" /></div>
        </div>
      </div>
    </section>
  );
}

export default ProductsSlide;
