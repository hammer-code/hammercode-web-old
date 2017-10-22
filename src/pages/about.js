import React from 'react'
import { translate } from 'react-i18next';

const AboutPage = ({ t }) => (
  <div className="container">
    <h1 className="crisp crisp--400">{t('about')}</h1>
    <p>We will update this page soon</p>
  </div>
)

export default translate('translations')(AboutPage)
