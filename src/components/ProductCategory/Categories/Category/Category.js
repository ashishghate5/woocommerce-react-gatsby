import React from 'react';
import heartPinkImg from "../../../../assets/images/heart-pink.png"
import heartWhiteImg from "../../../../assets/images/heart-white.png"
import listBoxImg from "../../../../assets/images/list-box.png"

function Category() {
  return (
    <div className="col-md-4 col-lg-3 col-6">
      <div className="main-product">
        <a href="recherche-produit1.html"><img src={listBoxImg} alt="list-box" /> <span className="discount-label mobile-block"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>-50%</font></font></span></a>
        <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Printed dress</font></font></p>
        <span className="orignal-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>12 € </font></font></span>
        <span className="dis-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>12 €</font></font></span>
        <div className="heart-icon-fav">
          <img src={heartPinkImg} alt="heart-fav" />
        </div>
      </div>
    </div>
          
  );
}

export default Category;
