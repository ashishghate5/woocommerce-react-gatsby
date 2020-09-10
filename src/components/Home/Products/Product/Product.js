import React from 'react';
import minImg from "../../../../assets/images/min.jpg"

const Product = () => {
  return (
    <div className="col-sm-4">
      <div className="item-inner">
        <div className="item-image">
          <img src={minImg} alt="picture" />
        </div>
        <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>CLOTHING</font></font></h2>
        <a href="#" title="shop now" className="shop-btn"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>shop now</font></font></a>
      </div>
    </div>
  );
}

export default Product;
