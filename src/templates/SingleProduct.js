import React from 'react';
import Layout from "../components/layout"
import MobileBlock from "../components/SingleProduct/MobileBlock/MobileBlock"
import ProductSection from "../components/SingleProduct/ProductSection/ProductSection"
import FavoriteProducts from "../components/SingleProduct/FavoriteProducts/FavoriteProducts"

const SingleProduct = (props) => {
  return (
    <Layout>
      <MobileBlock />
      <ProductSection productId={props['pageContext']['productId']['node']['id']}/>
      <FavoriteProducts />
    </Layout>
  );
}

export default SingleProduct;
