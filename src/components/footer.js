import React from 'react';
import logofImg from "../assets/images/logo-f.png";
import instagramImg from "../assets/images/instagram-light.png"
import facebookImg from "../assets/images/facebook-light.png"
import tiktokImg from "../assets/images/tiktok-light.png"

function Footer () {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 hide-mobile">
            <div className="footer-logo">
              <img src={logofImg} alt="anae" />
            </div>
            <div className="footer-l-con">
              <p className="para2">Recevez des réductions en avant prémière !</p>
              <div className="input-box-newsletter">
                <input type="text" placeholder="Email..." />
                <button type="button">Envoyer</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-4  hide-mobile">
                <ul className="footer-links">
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                </ul>
              </div>
              <div className="col-sm-4 hide-mobile">
                <ul className="footer-links">
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="footer-links">
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                  <li><a href="index.html" title="Lorem Ipsum">Lorem Ipsum</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="social-media">
          <ul className="flexbox">
            <li><a href="index.html" title="instagram"><img src={instagramImg} alt="instagram" /></a></li>
            <li><a href="index.html" title="facebook"><img src={facebookImg} alt="facebook" /></a></li>
            <li><a href="index.html" title="tiktok"><img src={tiktokImg} alt="tiktok" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
