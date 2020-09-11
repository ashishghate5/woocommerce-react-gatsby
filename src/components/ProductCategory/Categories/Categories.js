import React from 'react';
import { useQuery, gql } from '@apollo/client';
import GetProduct from "../../../queries/GetProducts";
import Category from "./Category/Category"

const GET_PRODUCTS = gql`
query GET_PRODUCTS( $include: Int! ){
products(where: {categoryId: $include}) {
  edges {
    node {
      id
      productId
      type
      link
      slug
      image {
        id
        altText
        sourceUrl
      }
      ... on SimpleProduct {
        id
        name
        price
      }
      ... on VariableProduct {
        id
        name
        price
      }
      ... on ExternalProduct {
        id
        name
        price
        externalUrl
      }
      ... on GroupProduct {
        id
        name
        products {
          nodes {
            ... on SimpleProduct {
              id
              name
              price
            }
          }
        }
      }
    }
  }
}
}
`;

function Categories(props) {
  const categoryId = props.catId; 

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { 
      include: categoryId 
    }
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;

  // var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  // console.log("##################COUNT: ", data.products.edges[0]['node']['image']['sourceUrl'])
  var newCategoryList = data.products.edges.map(function(edge, i){
    return <Category productDetails={edge['node']} key={edge['node']['productId']} dataSlickIndex={i}/>;
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
