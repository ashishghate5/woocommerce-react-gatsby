import React from 'react';
import { useQuery, gql } from '@apollo/client';
import GET_SINGLE_PRODUCT from '../../../../queries/GetSingleProduct'
import { isEmpty } from "lodash";
import flag3Img from "../../../../assets/images/flag3.jpg"
import truckImg from "../../../../assets/images/truck.png"
import heart2Img from "../../../../assets/images/heart2.png"
import downloadImg from "../../../../assets/images/download.png"
import shareImg from "../../../../assets/images/share.png"
import deliveImg from "../../../../assets/images/deliv.png"

function MainProductSection(props) {
  const { loading, error, data } = useQuery(GET_SINGLE_PRODUCT, {
    variables: { 
      include: props.productId 
    }
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  if (isEmpty(data)) {
    return null;
  }

  var galleryImages = data['product']['galleryImages']['edges'].map(function(edge, i){
    return <div className="col-md-1 col-2 "><img className="img-fluid" src={edge['node']['sourceUrl']} /></div>
  })

  var colors = data['product']['paCouleurs']['edges'].map(function(edge, i){
    return <li className="recher-color2" key={i}><span style={{backgroundColor: 'blue'}} /></li>
  })

  var sizes = data['product']['paTailleLettres']['edges'].map(function(edge, i){
    // return <li className="recher-color2" key={i}><span style={{backgroundColor: 'blue'}} /></li>
    return <li className="size-recher"><span>{edge['node']['name']}</span></li>
  })

  return (
    <div className="row">
      <div className="col-md-8 col-lg-8">
        <div className="col-12">
          <h3>Soldes</h3>
        </div>
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="product-img-singlr">
              <img className="img-fluid" src={data['product']['image']['link']} alt="img-fluid"/>
              <div className="made-by-flag">
                <img src={flag3Img} alt="flag" />
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
          { galleryImages }
          <div className="col-md-6 col-4" />
          <div className="col-md-1 col-2"><img className="img-fluid" src={heart2Img} alt="img-fluid" /></div>
          <div className="col-md-1 col-2">
            <img className="img-fluid" src={downloadImg} alt="img-fluid" />
          </div>
        </div>
        <div className="row mobile-none">
          <div className="col-md-10 d-flex  justify-content-end">
            <img className="img-fluid" src={shareImg} alt="img-fluid" />
          </div>
        </div>
      </div>
      <div className="col-md-5 col-lg-4">
        <div className="row">
          <div className="col-md-12">
            <h2>{data['product']['name']}</h2>
          </div>
          <div className="col-md-12">
            <p className="pera5">{data['product']['description']}</p>
          </div>
          <div className="col-md-12">
            <h4>{data['product']['price']}</h4>
          </div>
          <div className="col-md-12"><small>Couleur </small></div>
          <div className="col-md-12">
            <ul className="color-select">
              {/* <li className="recher-color1 selected-color" style={{background: "red"}}><span /></li> */}
              {/* <li className="recher-color2"><span style={{backgroundColor: "blue"}} /></li> */}
              {/* <li className="recher-color3"><span /></li> */}
              {colors}
            </ul>
          </div>
          <div className="col-md-12"><small>Taille </small></div>
          <div className="col-md-12 col-12">
            <ul className="size">
              {/* <li className="size-recher selected-size"><span>34</span></li> */}
              {sizes}
            </ul>
          </div>
          <div className="col-md-12 col-12  mobile-none">
            <button type="button" className="shop-btn Valider">Ajouter au panier</button>
          </div>
          <div className="row mobile-none">
            <div className="col-md-2 img-recher-prod"><img src={deliveImg} alt="img-recher-prod" /></div>
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
