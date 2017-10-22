import React from 'react'
import Link from 'gatsby-link'


import Footer from '../layouts/Footer';
import './index.css'

const IndexPage = ({ data }) => (
  <div className="home">
    <section id="hero">
      <div className="container">
        <h2>Menumbuhkan Lebih Banyak Problem-solver</h2>
        <p>Berbagi dan Bersinergi</p>
      </div>
    </section>
    <section id="the-problem">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h3 className="crisp crisp--400">Permasalahan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          </div>
        </div>
      </div>
    </section>
    <section id="our-vision">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h3 className="crisp crisp--400">Visi Kami</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          </div>
        </div>
      </div>
    </section>
    <section id="events">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h3 className="crisp crisp--400">Acara Selanjutnya</h3>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <div key={index}>
                <Link to={node.fields.slug}>{node.frontmatter.date} - {node.frontmatter.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
)

export default IndexPage

export const query = graphql`
  query HomeEventsQuery {
    allMarkdownRemark(
      skip: 0
      limit: 5
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
