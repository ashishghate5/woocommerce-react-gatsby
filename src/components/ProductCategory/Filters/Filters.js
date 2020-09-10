import React from 'react';
import searchImg from "../../../assets/images/search.png"
import Style1 from "./Filter/Style1"
import Color from "./Filter/Color"
import Cut from "./Filter/Cut"
import Price from "./Filter/Price"
import Length from "./Filter/Length"
import Style from "./Filter/Style"
import Silhouette from "./Filter/Silhouette"
import FilterPanel from "./Filter/FilterPanel/FilterPanel"

function Filters() {
  return (
    <>
      <section className="sales-title">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="title sales">
                <h2>Soldes</h2>
              </div>
            </div>
            <div className="col-md-12 mobile-block">
              <div className="searchbar soldes-searchbox">
                <input type="text" placeholder="Rechercher..." />
                <button><img src={searchImg} alt="Search" /> </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="filter-sec hide-mobile">
        <div className="container">
          <div className="row">
            <Style1 />
            <Color />
            <Cut />
            <Price />
            <Length />
            <Style />
            <Silhouette />
          </div>
        </div>
      </section>
      <FilterPanel />
    </>
  );
}

export default Filters;
