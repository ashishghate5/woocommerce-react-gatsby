import React from 'react';
import Filters from "../components/ProductCategory/Filters/Filters"
import Categories from "../components/ProductCategory/Categories/Categories"
import ResultSection from "../components/ProductCategory/ResultSection/ResultSection"

const ProductCategory = () => {
  return (
    <>
      <Filters />
      <ResultSection />
      <Categories />  
    </>
  );
}

export default ProductCategory;
