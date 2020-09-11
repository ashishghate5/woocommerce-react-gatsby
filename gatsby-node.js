const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {

    const { createPage } = actions
    const CategoryPage = path.resolve("./src/templates/ProductCategory.js");
    const SingleProductPage = path.resolve("./src/templates/SingleProduct.js");
    const PageTemplate = path.resolve("./src/templates/Page.js");

    const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          slug
          uri
        }
      }
      allWpPost {
        nodes {
          id
          slug
          uri
        }
      }
    allWpProductCategory {
        edges {
          node {
            id
            databaseId
            name
            parentId
            slug
            uri
            children {
              id
            }
          }
        }
      }
      allWpProduct {
        edges {
          node {
            id
            name
            productId
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Category Page

  const CategoryTemplate = result.data.allWpProductCategory.edges
  CategoryTemplate.forEach(category => {
    createPage({
        path: category.node.uri,
        component: CategoryPage,
        context: {
            CategoryData: category
        },
    })
   })

   // Product Page

   const SingleProduct = result.data.allWpProduct.edges
   SingleProduct.forEach(product => {
       createPage({
           path: `/product/${product.node.slug}`,
           component: SingleProductPage,
           context:{
               
           }
       })
   })


   // Page

   const Pages = result.data.allWpPage.nodes
    Pages.forEach(page => {
      createPage({
        path: `/${page.slug}`,
        component: PageTemplate,
        context: {
          id: page.id,
        },
      })
    })

}