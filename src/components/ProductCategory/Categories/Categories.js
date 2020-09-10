import React from 'react';
import Category from "./Category/Category"

function Categories() {
  var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  var newCategoryList = values.map(function(value, i){
    return <Category key={value} dataSlickIndex={i}/>;
  })
  return (
    <section className="product">
      <div className="container">
        <div className="row gutter-10">
          {newCategoryList}
        </div>
      </div>
    </section>
  );
}

export default Categories;
