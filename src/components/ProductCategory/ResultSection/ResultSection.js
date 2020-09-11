import React from 'react';
import { useQuery, gql } from '@apollo/client';
//import GetProduct from "../../../queries/GetProducts";

const GET_PRODUCTS = gql`
query GET_PRODUCTS( $include: Int! ){
products(where: {categoryId: $include}) {
  edges {
    node {
      id
      productId
      type
      link
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

function ResultSection(props) {
  const categoryId = props.catId;
  console.log(categoryId);
 

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { 
      include: categoryId 
    }
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;

  //console.log(JSON.stringify(GetProductList));
  return (
    <>
    <pre>
      {JSON.stringify(data)}
    </pre>
    <section className="result-sec">
      <div className="container">
        <div className="row ">
          <div className="col-6 col-md-4 col-lg-4 mobile-order-2">
            <div className="filter-mobile-btn mobile-block">
              {/* <button onClick="openFilter()"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Filter</font></font></button> */}
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mobile-order-3">
            <div className="result">
              <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>356 results</font></font></p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-4 mobile-order-1">
            <div className="sort-by">
              <span className="hide-mobile"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sort by :</font></font></span>
              <select>
                <option className="mobile-block">Sort</option>
                <option>Increasing prices</option>
                <option>Low to High</option>
                <option>High to Low</option>
                <option>Averege</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default ResultSection;
