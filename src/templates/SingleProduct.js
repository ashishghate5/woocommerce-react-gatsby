import React from 'react';
import MobileBlock from "../components/SingleProduct/MobileBlock/MobileBlock"
import ProductSection from "../components/SingleProduct/ProductSection/ProductSection"
import FavoriteProducts from "../components/SingleProduct/FavoriteProducts/FavoriteProducts"

const SingleProduct = (props) => {
  return (
    <>
      <MobileBlock />
      <ProductSection productId={props['pageContext']['productId']['node']['id']}/>
      <FavoriteProducts />
    </>
  );
}

export default SingleProduct;
