const path = require('path')
const fs = require('fs-extra');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const { sourceInstanceName } = getNode(node.parent)

    const { date } = node.frontmatter;
    
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: `${sourceInstanceName}/${date}${slug}`,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
    ).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        const { slug } = node.fields;

        createPage({
          path: slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: slug,
          },
        })
      })
      resolve()
    })
  })
}

exports.onPostBootstrap = () => {
  console.log('Copying locales');
  fs.copySync(path.join(__dirname, '/src/locales'), path.join(__dirname, '/public/locales'));
}

exports.onPostBuild = () => {
  console.log('Copying locales');
  fs.copySync(path.join(__dirname, '/src/locales'), path.join(__dirname, '/public/locales'));
}