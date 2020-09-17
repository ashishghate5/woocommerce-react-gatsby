import { gql } from "@apollo/client";

const GET_SINGLE_PRODUCT = gql`
query GET_PRODUCT( $include: ID! ){
  product(id: $include) {
    id
    name
    description
    image {
      link
    }
    paCouleurs {
      edges {
        node {
          name
        }
      }
    }
    paTailleLettres {
      edges {
        node {
          name
          id
        }
      }
    }
    galleryImages {
      edges {
        node {
          sourceUrl(size: THUMBNAIL)
        }
      }
    }
    ... on SimpleProduct {
      id
      name
      price
      galleryImages {
        edges {
          node {
            id
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
      paTailleLettres {
        edges {
          node {
            name
            id
          }
        }
      }
    }
    ... on VariableProduct {
      id
      name
      price
      galleryImages {
        edges {
          node {
            id
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
      paTailleLettres {
        edges {
          node {
            name
            id
          }
        }
      }
    }
    ... on ExternalProduct {
      id
      name
      price
      externalUrl
      galleryImages {
        edges {
          node {
            id
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
      paTailleLettres {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  }
}
`;

export default GET_SINGLE_PRODUCT;

