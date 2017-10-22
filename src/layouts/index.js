import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../components/i18n';
import Brand from './Brand'
import Navigation from './Navigation'
import LanguageSwitcher from '../components/LanguageSwitcher';

import './index.css'

const Header = () => (
  <div
    className="container"
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.5rem 0',
      }}
      className="clearfix"
    >
      <LanguageSwitcher />
    </div>
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
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
