import React from 'react'
import { translate } from 'react-i18next';

const ContributePage = ({ t }) => (
  <div className="container">
    <h1 className="crisp crisp--400">{t('contribute')}</h1>
    <p>We will update this page soon</p>
  </div>
)

export default translate('translations')(ContributePage)
