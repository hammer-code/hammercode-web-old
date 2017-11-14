import React from 'react'
import { translate } from 'react-i18next';

import Footer from '../layouts/Footer';

const AboutPage = ({ t }) => (
  <div id="about-page">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
        <h1 className="crisp crisp--400">{t('about')}</h1>
        <h2>Filosofi Kami</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et adipisci, inventore dolorum cumque eos, dolor nesciunt debitis, nam atque tempora nihil quasi perferendis aliquam fugit unde labore maxime accusantium.</p>
      </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default translate('translations')(AboutPage)
