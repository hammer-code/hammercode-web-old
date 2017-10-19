import React from 'react'
import Link from 'gatsby-link'

const NewsPage = ({ data }) => (
  <div>
    <h1>News</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <li key={index}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default NewsPage

export const query = graphql`
  query NewsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(news)/.*\\.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
