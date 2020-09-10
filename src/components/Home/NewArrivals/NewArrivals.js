import React from 'react';
import NewArrival from './NewArrival/NewArrival'

function NewArrivals() {
  var values = [1, 2, 3, 4]
  var newArrival = values.map(function(value){
    return < NewArrival key={value}/>;
  })
  return (
    <section className="new-arrivel">
      <div className="container">
        <div className="title">
          <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>New arrivals</font></font></h2>
        </div>
        <div className="slider1 slick-initialized slick-slider slick-dotted" role="toolbar">
          <div aria-live="polite" className="slick-list draggable">
            <div className="slick-track" role="listbox" style={{opacity: 1, width: '3809px', transform: 'translate3d(-1172px, 0px, 0px)'}}>
              <NewArrival />
            </div>
          </div>
          <ul className="slick-dots" style={{display: 'block'}} role="tablist">
            <li className="slick-active" aria-hidden="false" role="presentation" aria-selected="true" aria-controls="navigation10" id="slick-slide10"><button type="button" data-role="none" role="button" tabIndex={0}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>1</font></font></button></li>
            <li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation11" id="slick-slide11"><button type="button" data-role="none" role="button" tabIndex={0}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>2</font></font></button></li>
            <li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation12" id="slick-slide12"><button type="button" data-role="none" role="button" tabIndex={0}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>3</font></font></button></li>
            <li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation13" id="slick-slide13"><button type="button" data-role="none" role="button" tabIndex={0}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>4</font></font></button></li>
            <li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation14" id="slick-slide14"><button type="button" data-role="none" role="button" tabIndex={0}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>5</font></font></button></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;