import React from 'react';
import listBox2Img from "../../../assets/images/list-box2.png"
import listBox3Img from "../../../assets/images/list-box3.png"
import listBox4Img from "../../../assets/images/list-box4.png"
import heartFavImg from "../../../assets/images/heart-fav.png"
import listBoxImg from "../../../assets/images/list-box.png"

function FavoriteProducts() {
  return (
    <section className="favorite">
      <div className="container-small">
        <div className="title mobile-none">
          <h2>Vous aimerez aussi </h2>
        </div>
        <div className="title mobile-block">
          <h3>Pour compléter la tenue</h3>
        </div>
        <div className="slider5 slick-initialized slick-slider slick-dotted" role="toolbar">
          <div aria-live="polite" className="slick-list draggable">
            <div className="slick-track" role="listbox" style={{opacity: 1, width: '4015px', transform: 'translate3d(-2555px, 0px, 0px)'}}>
              <div className="slick-slide slick-cloned" style={{width: '365px'}} data-slick-index={-3} aria-hidden="true" tabIndex={-1}>
                <div className="product-slider-content">
                  <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={-1}>
                    <div className="item-image">
                      <img src={listBox3Img} alt="image" />
                      <div className="mobile-block p-i-s-btn">
                        <button tabIndex={-1}>button</button>
                      </div>
                    </div>
                    <div className="product-name">
                      <p className="para2">Robe à imprimés</p>
                      <p className="para1">12€</p>
                    </div>
                  </a>
                  <div className="heart-icon-fav"><img src={heartFavImg} alt="favorite" /></div>
                </div>
              </div>
              <div className="slick-slide slick-cloned" style={{width: '365px'}} data-slick-index={-2} aria-hidden="true" tabIndex={-1}>
                <div className="product-slider-content">
                  <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={-1}>
                    <div className="item-image">
                      <img src={listBox4Img} alt="image" />
                      <div className="mobile-block p-i-s-btn">
                        <button tabIndex={-1}>button</button>
                      </div>
                    </div>
                    <div className="product-name">
                      <p className="para2">Robe à imprimés</p>
                      <p className="para1">12€</p>
                    </div>
                  </a>
                  <div className="heart-icon-fav"><img src={heartFavImg} alt="favorite" /></div>
                </div>
              </div>
              <div className="slick-slide slick-cloned" style={{width: '365px'}} data-slick-index={-1} aria-hidden="true" tabIndex={-1}>
                <div className="product-slider-content">
                  <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={-1}>
                    <div className="item-image">
                      <img src={listBoxImg} alt="image" />
                      <div className="mobile-block p-i-s-btn">
                        <button tabIndex={-1}>button</button>
                      </div>
                    </div>
                    <div className="product-name">
                      <p className="para2">Robe à imprimés</p>
                      <p className="para1">12€</p>
                    </div>
                  </a>
                  <div className="heart-icon-fav"><img src={heartFavImg} alt="favorite" /></div>
                </div>
              </div>
              <div className="slick-slide" style={{width: '365px'}} data-slick-index={0} aria-hidden="true" tabIndex={-1} role="option" aria-describedby="slick-slide00">
                <div className="product-slider-content">
                  <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={-1}>
                    <div className="item-image">
                      <img src={listBoxImg} alt="image" />
                      <div className="mobile-block p-i-s-btn">
                        <button tabIndex={-1}>button</button>
                      </div>
                    </div>
                    <div className="product-name">
                      <p className="para2">Robe à imprimés</p>
                      <p className="para1">12€</p>
                    </div>
                  </a>
                  <div className="heart-icon-fav"><img src={heartFavImg} alt="favorite" /></div>
                </div>
              </div>
              <div className="slick-slide" style={{width: '365px'}} data-slick-index={1} aria-hidden="true" tabIndex={-1} role="option" aria-describedby="slick-slide01">
                <div className="product-slider-content">
                  <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={-1}>
                    <div className="item-image">
                      <img src={listBox2Img} alt="image" />
                      <div className="mobile-block p-i-s-btn">
                        <button tabIndex={-1}>button</button>
                      </div>
                    </div>
                    <div className="product-name">
                      <p className="para2">Robe à imprimés</p>
                      <p className="para1">12€</p>
                    </div>
                  </a>
                  <div className="heart-icon-fav"><img src={heartFavImg} alt="favorite" /></div>
                </div>
              </div>
              <div className="slick-slide" style={{width: '365px'}} data-slick-index={2} aria-hidden="true" tabIndex={-1} role="option" aria-describedby="slick-slide02">
                <div className="product-slider-content">
                  <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={-1}>
                    <div className="item-image">
                      <img src={listBox3Img} alt="image" />
                      <div className="mobile-block p-i-s-btn">
                        <button tabIndex={-1}>button</button>
                      </div>
                    </div>
                    <div className="product-name">
                      <p className="para2">Robe à imprimés</p>
                      <p className="para1">12€</p>
                    </div>
                  </a>
                  <div className="heart-icon-fav"><img src={heartFavImg} alt="favorite" /></div>
                </div>
              </div>
              <div className="slick-slide" style={{width: '365px'}} data-slick-index={3} aria-hidden="true" tabIndex={-1} role="option" aria-describedby="slick-slide03">
                <div className="product-slider-content">
                  <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={-1}>
                    <div className="item-image">
                      <img src={listBox4Img} alt="image" />
                      <div className="mobile-block p-i-s-btn">
                        <button tabIndex={-1}>button</button>
                      </div>
                    </div>
                    <div className="product-name">
                      <p className="para2">Robe à imprimés</p>
                      <p className="para1">12€</p>
                    </div>
                  </a>
                  <div className="heart-icon-fav"><img src={heartFavImg} alt="favorite" /></div>
                </div>
              </div>
              <div className="slick-slide slick-current slick-active" style={{width: '365px'}} data-slick-index={4} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide04">
                <div className="product-slider-content">
                  <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={0}>
                    <div className="item-image">
                      <img src={listBoxImg} alt="image" />
                      <div className="mobile-block p-i-s-btn">
                        <button tabIndex={0}>button</button>
                      </div>
                    </div>
                    <div className="product-name">
                      <p className="para2">Robe à imprimés</p>
                      <p className="para1">12€</p>
                    </div>
                  </a>
                  <div className="heart-icon-fav"><img src={heartFavImg} alt="favorite" /></div>
                </div>
              </div>
              <div className="slick-slide slick-cloned slick-active" style={{width: '365px'}} data-slick-index={5} aria-hidden="false" tabIndex={-1}>
                <div className="product-slider-content">
                  <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={0}>
                    <div className="item-image">
                      <img src={listBoxImg} alt="image" />
                      <div className="mobile-block p-i-s-btn">
                        <button tabIndex={0}>button</button>
                      </div>
                    </div>
                    <div className="product-name">
                      <p className="para2">Robe à imprimés</p>
                      <p className="para1">12€</p>
                    </div>
                  </a>
                  <div className="heart-icon-fav"><img src={heartFavImg} alt="favorite" /></div>
                </div>
              </div>
              <div className="slick-slide slick-cloned slick-active" style={{width: '365px'}} data-slick-index={6} aria-hidden="false" tabIndex={-1}>
                <div className="product-slider-content">
                  <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={0}>
                    <div className="item-image">
                      <img src={listBox2Img} alt="image" />
                      <div className="mobile-block p-i-s-btn">
                        <button tabIndex={0}>button</button>
                      </div>
                    </div>
                    <div className="product-name">
                      <p className="para2">Robe à imprimés</p>
                      <p className="para1">12€</p>
                    </div>
                  </a>
                  <div className="heart-icon-fav"><img src={heartFavImg} alt="favorite" /></div>
                </div>
              </div>
              <div className="slick-slide slick-cloned" style={{width: '365px'}} data-slick-index={7} aria-hidden="true" tabIndex={-1}>
                <div className="product-slider-content">
                  <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={-1}>
                    <div className="item-image">
                      <img src={listBox3Img} alt="image" />
                      <div className="mobile-block p-i-s-btn">
                        <button tabIndex={-1}>button</button>
                      </div>
                    </div>
                    <div className="product-name">
                      <p className="para2">Robe à imprimés</p>
                      <p className="para1">12€</p>
                    </div>
                  </a>
                  <div className="heart-icon-fav"><img src={heartFavImg} alt="favorite" /></div>
                </div>
              </div>
            </div>
          </div>
          <ul className="slick-dots" style={{}} role="tablist">
            <li className aria-hidden="true" role="presentation" aria-selected="true" aria-controls="navigation00" id="slick-slide00"><button type="button" data-role="none" role="button" tabIndex={0}>1</button></li>
            <li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation01" id="slick-slide01" className><button type="button" data-role="none" role="button" tabIndex={0}>2</button></li>
            <li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation02" id="slick-slide02" className><button type="button" data-role="none" role="button" tabIndex={0}>3</button></li>
            <li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation03" id="slick-slide03" className><button type="button" data-role="none" role="button" tabIndex={0}>4</button></li>
            <li aria-hidden="false" role="presentation" aria-selected="false" aria-controls="navigation04" id="slick-slide04" className="slick-active"><button type="button" data-role="none" role="button" tabIndex={0}>5</button></li>
          </ul>
        </div>
        <div className="view-all-btn mobile-none">
          <a href="#" title="Voir tous mes favoris" className="shop-btn">Voir tous mes favoris</a>
        </div>
      </div>
    </section>
  );
}

export default FavoriteProducts;
