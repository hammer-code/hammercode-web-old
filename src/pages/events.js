import React from 'react';
import chunk from 'lodash/chunk';
import { translate } from 'react-i18next';

import Footer from '../layouts/Footer';
import EventCard from '../components/EventCard';

const EventsPage = ({ t, data }) => {
  const chunkedEvents = chunk(data.allMarkdownRemark.edges, 3);

  return (
    <div id="event-page">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">  
            <h1 className="crisp crisp--400">{t('events')}</h1>
          </div>
        </div>
        {chunkedEvents.map((row, i) => (
          <div className="row" key={i}>
            {row.map(({ node }, j) => (
              <div className="col-xs-4">
                <EventCard
                  key={j}
                  link={node.fields.slug}
                  date={node.frontmatter.date}
                  title={node.frontmatter.title}
                  venue={node.frontmatter.venue}
                />
              </div>
            ))} 
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default translate('translations')(EventsPage);

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
            venue
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
