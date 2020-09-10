import React from 'react';
import fashionSsImg from "../../../assets/images/fashion-ss.jpg"
import flag1Img from "../../../assets/images/flag1.png"
import flag2Img from "../../../assets/images/flag2.png"

function Story() {
  return (
    <section>
      <div className="container">
        <div className="title">
          <h2>L’histoire</h2>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="story-img">
              <img src={fashionSsImg} alt="the story" />
            </div>
          </div>
          <div className="col-sm-5">
            <div className="story-content">
              <p className="para1">Des vêtements made in France et Italie !</p>
              <p className="para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla viverra
                neque pellentesque vitae integer aliquam odio antes.t, consectetur adipiscing elit.
              </p>
              <div className="country-flag">
                <div className="flag"><img src={flag1Img} alt="flag" /></div>
                <div className="flag"><img src={flag2Img} alt="flag" /></div>
              </div>
              <a href="#" title="EN SAVOIR PLUS" className="shop-btn">EN SAVOIR PLUS</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
