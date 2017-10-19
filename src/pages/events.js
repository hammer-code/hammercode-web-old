import React from 'react'
import Link from 'gatsby-link'

const EventsPage = ({ data }) => (
  <div>
    <h1>Events</h1>
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

export default EventsPage

export const query = graphql`
  query EventsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(events)/.*\\.md$/" } }
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
