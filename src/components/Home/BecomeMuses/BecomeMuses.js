import React from 'react';
import BecomeMuse from './BecomeMuse/BecomeMuse'
import rightArrowImg from "../../../assets/images/right-arrow.png"
import leftArrowImg from "../../../assets/images/left-arrow.png"

function BecomeMuses () {
  var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  var newBecomeMuse = values.map(function(value, i){
    return < BecomeMuse key={value} dataSlickIndex={i}/>;
  })
  return (
    <section className="become-muse">
      <div className="container">
        <div className="title hide-mobile">
          <h2>Devenez égérie !</h2>
        </div>
        <div className="title mobile-block">
          <h2>Nos égéries</h2>
        </div>
        <div className="row">
          <div className="col-sm-7">
            <div className="sec-content">
              <p className="para1 hide-mobile">Des vêtements made in France et Italie !</p>
              <p className="para2 hide-mobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla viverra
                neque
                pellentesque vitae integer aliquam odio antes.t, consectetur adipiscing elit.
              </p>
              <p className="para2">Recevez des réductions en avant prémière !</p>
            </div>
          </div>
        </div>
        <div className="slider2 slick-initialized slick-slider">
          <div className="slick-custom-arrow slick-custom-arrow-left slick-arrow" style={{}}><img src={leftArrowImg} alt="next" /></div>
          <div aria-live="polite" className="slick-list draggable">
            <div className="slick-track" role="listbox" style={{opacity: 1, width: '3424px', transform: 'translate3d(-1070px, 0px, 0px)'}}>
              { newBecomeMuse }
            </div>
          </div>
          <div className="slick-custom-arrow slick-custom-arrow-right slick-arrow" style={{}}><img src={rightArrowImg} alt="prev" /></div>
        </div>
        <div className="btn-group">
          <a href="#" title="VOIR TOUT" className="shop-btn pink-btn">VOIR TOUT</a>
          <a href="#" title="DEVENIR ÉGÉRIE" className="shop-btn">DEVENIR ÉGÉRIE</a>
        </div>
      </div>
    </section>
  );
}

export default BecomeMuses;
