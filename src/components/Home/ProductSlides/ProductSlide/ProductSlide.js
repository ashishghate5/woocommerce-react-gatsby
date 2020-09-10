import React from 'react';
import listBoxImg from "../../../../assets/images/list-box.png"
import listBox2Img from "../../../../assets/images/list-box2.png"
import listBox3Img from "../../../../assets/images/list-box3.png"
import listBox4Img from "../../../../assets/images/list-box4.png"

const ProductSlide = () => {
  return (
    <>
      <div className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide01" style={{width: '268px'}} data-slick-index={-4} aria-hidden="true">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Printed dress" tabIndex={-1}>
            <div className="item-image">
              <img src={listBoxImg} alt="picture" />
            </div>
            <div className="product-name">
              <p className="para2"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Printed dress</font></font></p>
              <p className="para1"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>12 €</font></font></p>
            </div>
          </a>
        </div>
      </div>
      <div className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide02" style={{width: '268px'}} data-slick-index={-3} aria-hidden="true">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Printed dress" tabIndex={-1}>
            <div className="item-image">
              <img src={listBox3Img} alt="picture" />
            </div>
            <div className="product-name">
              <p className="para2"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Printed dress</font></font></p>
              <p className="para1"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>12 €</font></font></p>
            </div>
          </a>
        </div>
      </div>
      <div className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide03" style={{width: '268px'}} data-slick-index={-2} aria-hidden="true">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Printed dress" tabIndex={-1}>
            <div className="item-image">
              <img src={listBox4Img} alt="picture" />
            </div>
            <div className="product-name">
              <p className="para2"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Printed dress</font></font></p>
              <p className="para1"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>12 €</font></font></p>
            </div>
          </a>
        </div>
      </div>
      <div className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide04" style={{width: '268px'}} data-slick-index={-1} aria-hidden="true">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Printed dress" tabIndex={-1}>
            <div className="item-image">
              <img src={listBoxImg} alt="picture" />
            </div>
            <div className="product-name">
              <p className="para2"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Printed dress</font></font></p>
              <p className="para1"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>12 €</font></font></p>
            </div>
          </a>
        </div>
      </div>
      <div className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide00" style={{width: '268px'}} data-slick-index={0} aria-hidden="true">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={-1}>
            <div className="item-image">
              <img src={listBoxImg} alt="image" />
            </div>
            <div className="product-name">
              <p className="para2">Robe à imprimés</p>
              <p className="para1">12€</p>
            </div>
          </a>
        </div>
      </div>
      <div className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide01" style={{width: '268px'}} data-slick-index={1} aria-hidden="true">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={-1}>
            <div className="item-image">
              <img src={listBox2Img} alt="image" />
            </div>
            <div className="product-name">
              <p className="para2">Robe à imprimés</p>
              <p className="para1">12€</p>
            </div>
          </a>
        </div>
      </div>
      <div className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide02" style={{width: '268px'}} data-slick-index={2} aria-hidden="true">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={-1}>
            <div className="item-image">
              <img src={listBox3Img} alt="image" />
            </div>
            <div className="product-name">
              <p className="para2">Robe à imprimés</p>
              <p className="para1">12€</p>
            </div>
          </a>
        </div>
      </div>
      <div className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide03" style={{width: '268px'}} data-slick-index={3} aria-hidden="true">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={-1}>
            <div className="item-image">
              <img src={listBox4Img} alt="image" />
            </div>
            <div className="product-name">
              <p className="para2">Robe à imprimés</p>
              <p className="para1">12€</p>
            </div>
          </a>
        </div>
      </div>
      <div className="slick-slide slick-current slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide04" style={{width: '268px'}} data-slick-index={4} aria-hidden="false">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Robe à imprimés" tabIndex={0}>
            <div className="item-image">
              <img src={listBoxImg} alt="image" />
            </div>
            <div className="product-name">
              <p className="para2">Robe à imprimés</p>
              <p className="para1">12€</p>
            </div>
          </a>
        </div>
      </div>
      <div className="slick-slide slick-cloned slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide00" style={{width: '268px'}} data-slick-index={5} aria-hidden="false">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Printed dress" tabIndex={0}>
            <div className="item-image">
              <img src={listBoxImg} alt="picture" />
            </div>
            <div className="product-name">
              <p className="para2"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Printed dress</font></font></p>
              <p className="para1"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>12 €</font></font></p>
            </div>
          </a>
        </div>
      </div>
      <div className="slick-slide slick-cloned slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide01" style={{width: '268px'}} data-slick-index={6} aria-hidden="false">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Printed dress" tabIndex={0}>
            <div className="item-image">
              <img src={listBox2Img} alt="picture" />
            </div>
            <div className="product-name">
              <p className="para2"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Printed dress</font></font></p>
              <p className="para1"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>12 €</font></font></p>
            </div>
          </a>
        </div>
      </div>
      <div className="slick-slide slick-cloned slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide02" style={{width: '268px'}} data-slick-index={7} aria-hidden="false">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Printed dress" tabIndex={0}>
            <div className="item-image">
              <img src={listBox3Img} alt="picture" />
            </div>
            <div className="product-name">
              <p className="para2"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Printed dress</font></font></p>
              <p className="para1"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>12 €</font></font></p>
            </div>
          </a>
        </div>
      </div>
      <div className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide03" style={{width: '268px'}} data-slick-index={8} aria-hidden="true">
        <div className="product-slider-content">
          <a className="product-slider-inner" href="#" title="Printed dress" tabIndex={-1}>
            <div className="item-image">
              <img src={listBox4Img} alt="picture" />
            </div>
            <div className="product-name">
              <p className="para2"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Printed dress</font></font></p>
              <p className="para1"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>12 €</font></font></p>
            </div>
          </a>
        </div>
      </div>        
    </>
  );
}

export default ProductSlide;
