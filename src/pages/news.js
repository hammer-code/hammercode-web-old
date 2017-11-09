import React from 'react';
import Link from 'gatsby-link';
import { translate } from 'react-i18next';

import Footer from '../layouts/Footer';

const NewsPage = ({ t, data }) => (
  <div id="news-page">
    <div className="container">
      <h1 className="crisp crisp--400">{t('news')}</h1>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div style={{ marginBottom: 20 }} key={index}>
            <Link to={node.fields.slug}>{node.frontmatter.date} - {node.frontmatter.title}</Link>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default translate('translations')(NewsPage);

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
