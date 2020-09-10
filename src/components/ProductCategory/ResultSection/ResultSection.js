import React from 'react';

function ResultSection() {
  return (
    <section className="result-sec">
      <div className="container">
        <div className="row ">
          <div className="col-6 col-md-4 col-lg-4 mobile-order-2">
            <div className="filter-mobile-btn mobile-block">
              <button onclick="openFilter()"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Filter</font></font></button>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mobile-order-3">
            <div className="result">
              <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>356 results</font></font></p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-4 mobile-order-1">
            <div className="sort-by">
              <span className="hide-mobile"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sort by :</font></font></span>
              <select>
                <option className="mobile-block">Sort</option>
                <option>Increasing prices</option>
                <option>Low to High</option>
                <option>High to Low</option>
                <option>Averege</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResultSection;
