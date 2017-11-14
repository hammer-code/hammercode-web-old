import React from 'react'
import Link from 'gatsby-link'


import Footer from '../layouts/Footer';
import './index.css'

const IndexPage = ({ data }) => (
  <div className="home">
    <section id="hero">
      <div className="container">
        <h2>Menumbuhkan Lebih Banyak Problem-solver</h2>
      </div>
    </section>
    <section id="the-problem">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h3 className="crisp crisp--400">Permasalahan</h3>
            <p>Teknologi semakin berkembang, namun sumber daya di Kota Palu masih sangat belum siap untuk menggunakan teknologi sebagai sarana untuk memecahkan permasalahan di dearah, maupun untuk bersaing di dunia kerja.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="our-vision">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h3 className="crisp crisp--400">Visi Kami</h3>
            <p>Kami percaya pengetahuan tentang teknologi merupakan hak semua orang. Dan teknologi adalah alat untuk mempermudah pemecahan suatu masalah dan untuk menciptakan kesempatan bagi hal layak luas. Dengan menyamakan tingkat pengetahuan dengan kota besar di dunia, akan membawa perubahan besar di kota Kami.</p>
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
