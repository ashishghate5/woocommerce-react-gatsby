import React from 'react';
import News from './News/News'

function Newses() {
  var values = [1, 2, 3]
  var newNews = values.map(function(value, i){
    return < News key={value} />;
  })
  return (
    <section>
      <div className="container">
        <div className="title">
          <h2>Actualités</h2>
        </div>
        <div className="row">
          { newNews }
        </div>
        <div className="view-all-btn">
          <a href="#" title="Voir tous les articles" className="shop-btn">Voir tous les articles</a>
        </div>
      </div>
    </section>
  );
}

export default Newses;
