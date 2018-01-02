import React from 'react';
import { translate } from 'react-i18next';

import './about.css';

const AboutPage = ({ t }) => (
  <div id="about-page" className="page-content">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="crisp crisp--400">{t('about')}</h1>
          <p>
            Kami adalag ingin menjadi tempat bersua untuk perusahaan, komunitas, penggiat teknologi di Palu. Kami senang berbagi dan belajar dari satu sama lainnya. Kami memiliki kegiatan-kegiatan yang bermanfaat <b>tanpa dipungut biaya</b> atau <b>gratis</b>, meliputi:
            techtalk bulanan, kelas web development reguler dan intensif. Kami juga berkeinginan untuk dapat mengadakan workshop dengan pemateri praktisi / professional
            serta menggelar konferensi teknologi tahunan.
          </p>
          <h2>Filosofi Kami</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et adipisci, inventore dolorum cumque eos, dolor nesciunt debitis, nam atque tempora nihil quasi perferendis aliquam fugit unde labore maxime accusantium.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h2>Tim Pengurus</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="team-member-card">
            <div className="team-member-card__photo"></div>
            <h3 className="team-member-card__name">Adrin Thamrin</h3>
            <p className="team-member-card__role">Penasihat</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="team-member-card">
            <div className="team-member-card__photo"></div>
            <h3 className="team-member-card__name">Handry Wahyudi</h3>
            <p className="team-member-card__role">Koordinator</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="team-member-card">
            <div className="team-member-card__photo"></div>
            <h3 className="team-member-card__name">Sofyan Saputra</h3>
            <p className="team-member-card__role">Sekertaris</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="team-member-card">
            <div className="team-member-card__photo"></div>
            <h3 className="team-member-card__name">Muhammad Rizki Rijal</h3>
            <p className="team-member-card__role">Tukang Ketik</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="team-member-card">
            <div className="team-member-card__photo"></div>
            <h3 className="team-member-card__name">Kamu?</h3>
            <p className="team-member-card__role">Sebut peranmu!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default translate('translations')(AboutPage);
