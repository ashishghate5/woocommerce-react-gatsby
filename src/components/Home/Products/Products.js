import React from 'react';
import Product from "./Product/Product"

function Products() {
  var values = [1, 2, 3]
  var newProduct = values.map(function(value){
    return < Product />;
  })
  return (
    <section className="products1">
      <div className="container">
        <div className="row gutter-10">
          { newProduct }
        </div>
      </div>
    </section>
  );
}

export default Products;
