import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../components/i18n';
import Brand from './Brand'
import Navigation from './Navigation'
import Footer from './Footer';
import LanguageSwitcher from '../components/LanguageSwitcher';

import './index.css'

const Header = () => (
  <div>
    <div style={{ background: '#1f222c' }}>
      <div className="container">
        <div className="clearfix">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
    <div style={{ background: '#fff' }}>
      <div className="container">
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 0',
          }}
          className="clearfix"
        >
          <Brand />
          <Navigation />
        </div>
      </div>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="hammercode"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
