import React from 'react'
import Link from 'gatsby-link'
import { translate } from 'react-i18next';

const EventsPage = ({ t, data }) => (
  <div className="container">
    <h1 className="crisp crisp--400">{t('events')}</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <li key={index}>
          <Link to={node.fields.slug}>{node.frontmatter.date} - {node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default translate('translations')(EventsPage)

export const query = graphql`
  query EventsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: { fileAbsolutePath: { regex: "/(events)/.*\\.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
