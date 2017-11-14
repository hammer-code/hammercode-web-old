import React from 'react'
import { translate } from 'react-i18next';

import Footer from '../layouts/Footer';

const AboutPage = ({ t }) => (
  <div id="about-page">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="crisp crisp--400">{t('about')}</h1>
          <p>Kami ingin menjadi tempat bersua untuk perusahaan, komunitas, penggiat teknologi di Palu. Sekarang ini, kegiatan kami meliputi: techtalk bulanan, kelas web development reguler dan intensif. Kami juga berkeinginan untuk dapat menggelar konferensi teknologi tahunan.</p>
          <h2>Filosofi Kami</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et adipisci, inventore dolorum cumque eos, dolor nesciunt debitis, nam atque tempora nihil quasi perferendis aliquam fugit unde labore maxime accusantium.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h2>Tim Pengurus</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <h3>Adrin</h3>
          <p>Role 1</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <h3>Handry Wahyudi</h3>
          <p>Role 2</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <h3>Sofyan Saputra</h3>
          <p>Role 3</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <h3>Muhammad Rizki Rijal</h3>
          <p>Role 4</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <h3>John Doe</h3>
          <p>Role 4</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <h3>Jane Doe</h3>
          <p>Role 5</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default translate('translations')(AboutPage)
