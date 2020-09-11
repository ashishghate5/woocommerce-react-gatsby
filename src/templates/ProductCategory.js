import React from 'react';
//import { useQuery} from '@apollo/client';
import Layout from "../components/layout"
import Filters from "../components/ProductCategory/Filters/Filters"
import Categories from "../components/ProductCategory/Categories/Categories"
import ResultSection from "../components/ProductCategory/ResultSection/ResultSection"
// import GetProduct from "../queries/GetProducts";



const ProductCategory = props => {
  //console.log(props.pageContext.databseId);
  const {CategoryData} = props.pageContext;
  // console.log(CategoryData.node.databaseId);
  // const {Category} = props;
  // console.log( Category )
  //const { data } = useQuery(GetProduct);

  return (
    <>
      <Layout>
      <Filters />
      <ResultSection />
      <Categories catId={CategoryData.node.databaseId}/>  
      </Layout>
    </>
  );
}

export default ProductCategory;
