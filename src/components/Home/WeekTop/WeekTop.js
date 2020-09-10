import React from 'react';

function WeekTop() {
  return (
    <section className="week-top">
      <div className="container">
        <div className="title hide-mobile">
          <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The top 10 of the week</font></font></h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="week-top-inner">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="text-top-week">
                  <span className="big-font"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>LOOK -BOOK 2020</font></font></span>
                  <div className="until-text">
                    <h2><font style={{verticalAlign: 'inherit'}}><span className="blue-bg"><font style={{verticalAlign: 'inherit'}}>Indian summer</font></span><font style={{verticalAlign: 'inherit'}}> special</font></font><span className="blue-bg"><font style={{verticalAlign: 'inherit'}} /></span></h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="shop-pink-btn">
                  <a href="#" title="shop now" className="shop-btn"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>shop now</font></font></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    );
}

export default WeekTop;
