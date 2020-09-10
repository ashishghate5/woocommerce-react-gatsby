import React from 'react';
import AdoptStyle from './AdoptStyle/AdoptStyle'

function AdoptStyles() {
  var values = [1, 2, 3]
  var newAdoptStyle = values.map(function(value, i){
    return < AdoptStyle key={value} dataSlickIndex={i}/>;
  })
  return (
    <section className="products1">
      <div className="container">
        <div className="title">
          <h2>On s’adapte à votre style</h2>
        </div>
        <div className="slider4 slick-initialized slick-slider" role="toolbar">
          <div aria-live="polite" className="slick-list draggable">
            <div className="slick-track" role="listbox" style={{opacity: 1, width: '1170px', transform: 'translate3d(0px, 0px, 0px)'}}>
              { newAdoptStyle }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdoptStyles;
