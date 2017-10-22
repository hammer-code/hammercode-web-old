import React from 'react'
import Link from 'gatsby-link'
import { translate } from 'react-i18next';

import { communities, companies } from '../data/communities'

const CommunitiesPage = ({ t }) => (
  <div className="container">
    <h1 className="crisp crisp--400">{t('ecosystem')}</h1>
    <p>Berikut adalah daftar komunitas dan perusahaan teknologi yang ada di Palu</p>
    <h2>Communities</h2>
    <ul>
    {communities.map((c, i) => (
      <li key={i}><a href={c.url}>{c.name}</a></li>
    ))}
    </ul>
    <h2>Startup / Companies</h2>
    <ul>
    {companies.map((c, i) => (
      <li key={i}><a href={c.url}>{c.name}</a></li>
    ))}
    </ul>
  </div>
)

export default translate('translations')(CommunitiesPage)
