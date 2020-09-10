import React from 'react';
import BottomList from './BottomList/BottomList'
import instagramImg from "../../../assets/images/instagram.png"
import facebookImg from "../../../assets/images/facebook.png"
import tiktokImg from "../../../assets/images/tiktok.png"

function BottomLists() {
  var values = [1, 2, 3, 4, 5]
  var newBottomList = values.map(function(value, i){
    return <BottomList key={value} dataSlickIndex={i}/>;
  })
  return (
    <section className="anea-sec">
      <div className="container">
        <div className="title">
          <h2>#anae</h2>
        </div>
        <div className="slider3 slick-initialized slick-slider" role="toolbar">
          <div aria-live="polite" className="slick-list draggable">
            <div className="slick-track" role="listbox" style={{opacity: 1, width: '1170px', transform: 'translate3d(0px, 0px, 0px)'}}>
              { newBottomList }
            </div>
          </div>
        </div>
        <div className="view-all-btn">
          <a href="#" title="@anae.officiel" className="shop-btn">@anae.officiel</a>
        </div>
        <div className="social-media">
          <ul className="flexbox">
            <li><a href="#" title="instagram"><img src={instagramImg} alt="instagram" /></a></li>
            <li><a href="#" title="facebook"><img src={facebookImg} alt="facebook" /></a></li>
            <li><a href="#" title="tiktok"><img src={tiktokImg} alt="tiktok" /></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BottomLists;
