import React from 'react'
import Link from 'gatsby-link'
import { translate } from 'react-i18next';

const NewsPage = ({ t, data }) => (
  <div className="container">
    <h1 className="crisp crisp--400">{t('news')}</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <li key={index}>
          <Link to={node.fields.slug}>{node.frontmatter.date} - {node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default translate('translations')(NewsPage)

export const query = graphql`
  query NewsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(news)/.*\\.md$/" } }
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
