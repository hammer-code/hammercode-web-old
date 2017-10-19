import React from 'react'
import Link from 'gatsby-link'
import { translate } from 'react-i18next';

import './Navigation.css'

const Navigation = ({ t }) => (
  <nav className="navigation">
    <ul>
      <li>
        <Link to="/news">
          {t('news')}
        </Link>
      </li>
      <li>
        <a rel="nooopener" target="_blank" href="https://medium.com/hammercode">
          Blog
        </a>
      </li>
      <li>
        <Link to="/communities">
          {t('communities')}
        </Link>
      </li>
      <li>
        <Link to="/events">
          {t('events')}
        </Link>
      </li>
      <li>
        <Link to="/about">
          {t('about')}
        </Link>
      </li>
      <li>
        <Link to="/contribute">
          {t('contribute')}
        </Link>
      </li>
      <li>
        <a
          rel="noopener"
          target="_blank"
          href="https://hammer-code.github.io/terbit"
        >
          Terbit
        </a>
      </li>
    </ul>
  </nav>
)

export default translate('Navigation')(Navigation)
