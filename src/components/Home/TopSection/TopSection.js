import React from 'react';
import {Link} from 'gatsby';
import truckImg from "../../../assets/images/truck.png"

const TopSection = () => {
  return (
    <>
      <section className="slider-section">
        <div className="container">
          <div className="slider-content flexbox flexColumn">
            <div className="flexbox">
              <h1><span>Soldes</span><span className="borderd-text">Soldes</span><span>Soldes</span></h1>
            </div>
            <div className="until-text">
              {/* <h2>Jusqu’à <span class="blue-bg">-50% !</span></h2> */}
              <h2>Nouveautés</h2>
            </div>
            <div className="shop-now-btn">
              <Link  key={'non-classe'} to="/categorie-produit/robes/">
                shop now
              </Link>
            </div>
          </div>
        </div>
      </section>
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
    </ >
  );
}

export default TopSection;
