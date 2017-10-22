import React from 'react'
import Link from 'gatsby-link'

import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-3">
          <h3>Gabung Bersama Kami</h3>
          <ul className="social-links">
            <li className="item">
              <a target="_blank" rel="noopener" href="https://www.facebook.com/hammercodepalu/">
                Facebook
              </a>
            </li>
            <li className="item">
              <a target="_blank" rel="noopener" href="https://medium.com/hammercode">
                Medium
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-3">
          <h3>Ayo Bantu</h3>
          <ul className="help">
            <li><Link to="/contribute">Kontribusi</Link></li>
            <li><a href="mailto:contact@persom.com?subject=Join as Volunteer">Gabung Sebagai Volunteer</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer