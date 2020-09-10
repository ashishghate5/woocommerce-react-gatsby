import React from 'react';
import flag3Img from "../../../../assets/images/flag3.jpg"
import truckImg from "../../../../assets/images/truck.png"
import panierItem1Img from "../../../../assets/images/panier_item1.png"
import panierItem2Img from "../../../../assets/images/panier_item2.png"
import heart2Img from "../../../../assets/images/heart2.png"
import downloadImg from "../../../../assets/images/download.png"
import shareImg from "../../../../assets/images/share.png"
import deliveImg from "../../../../assets/images/deliv.png"

function MainProductSection() {
  return (
    <div className="row">
      <div className="col-md-8 col-lg-8">
        <div className="col-12">
          <h3>Soldes</h3>
        </div>
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="product-img-singlr">
              <img className="img-fluid" src={panierItem2Img} />
              <div className="made-by-flag">
                <img src={flag3Img} alt="" />
                <span>Made in France</span>
              </div>
            </div>
            <div className="slider-below mobile-block">
              <div className="container">
                <div className="slider-b-icon">
                  <img src={truckImg} alt="delivery" />
                </div>
                <div className="slider-b-text">
                  <p>LIVRAISON EXPRESS 72H !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1 col-2 "><img className="img-fluid" src={panierItem1Img} /></div>
          <div className="col-md-1 col-2"><img className="img-fluid" src={panierItem1Img}/></div>
          <div className="col-md-1 col-2"><img className="img-fluid" src={panierItem1Img}/></div>
          <div className="col-md-1 col-2"><img className="img-fluid" src={panierItem1Img}/></div>
          <div className="col-md-6 col-4" />
          <div className="col-md-1 col-2"><img className="img-fluid" src={heart2Img} /></div>
          <div className="col-md-1 col-2">
            <img className="img-fluid" src={downloadImg} />
          </div>
        </div>
        <div className="row mobile-none">
          <div className="col-md-10 d-flex  justify-content-end">
            <img className="img-fluid" src={shareImg} />
          </div>
        </div>
      </div>
      <div className="col-md-5 col-lg-4">
        <div className="row">
          <div className="col-md-12">
            <h2>Robe à imprimés</h2>
          </div>
          <div className="col-md-12">
            <p className="pera5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida lorem diam
              arcu, scelerisque. Amet turpis odio malesuada sagittis etiam maecenas gravida. Egestas
              fusce odio aliquet nisi, bibendum nulla tincidunt mauris, neque. Nullam nisl aliquet
              ultrices iaculis massa et in sagittis. Urna lacus at ultricies placerat turpis ultrices
              rhoncus libero.
            </p>
          </div>
          <div className="col-md-12">
            <h4>12,99€</h4>
          </div>
          <div className="col-md-12"><small>Couleur </small></div>
          <div className="col-md-12">
            <ul className="color-select">
              <li className="recher-color1 selected-color"><span /></li>
              <li className="recher-color2"><span /></li>
              <li className="recher-color3"><span /></li>
            </ul>
          </div>
          <div className="col-md-12"><small>Taille </small></div>
          <div className="col-md-12 col-12">
            <ul className="size">
              <li className="size-recher selected-size"><span>34</span></li>
              <li className="size-recher"><span>34</span></li>
              <li className="size-recher"><span>36</span></li>
              <li className="size-recher"><span>38</span></li>
              <li className="size-recher"><span>40</span></li>
              <li className="size-recher"><span>42</span></li>
            </ul>
          </div>
          <div className="col-md-12 col-12  mobile-none">
            <button type="button" className="shop-btn Valider">Ajouter au panier</button>
          </div>
          <div className="row mobile-none">
            <div className="col-md-2 img-recher-prod"><img src={deliveImg} /></div>
            <div className="col-md-10 mark-text-prod col-10 ">
              <mark>LIVRAISON EXPRESS 72H !</mark>
            </div>
          </div>
          <div className="col-md-12 col-12">
            <small>Détails </small>
          </div>
          <div className="col-md-12 col-12">
            <p>100% polyester</p>
            <p>Made in France</p>
            <p>Doublure : 100% polyester</p>
            <p>Elasticité 1/3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProductSection;
