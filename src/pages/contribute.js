import React from 'react';
import Link from 'gatsby-link';
import { translate } from 'react-i18next';

import './contribute.css';

const ContributePage = ({ t }) => (
  <div id="contribute-page">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="crisp crisp--400">Bantu Kami Untuk Meluaskan Teknologi</h1>
          <p>Bersama Kita bisa memperluas pengetahuan dan penerapan teknologi terkini. Anda bisa memberikan bantuan berupa keahlian, tenaga, waktu dan finansial.</p>
          <p>Kami akan sangat senang bila Anda <a href="mailto:hello@hammercode.id">ingin berbincang-bincang dengan Kami</a>.</p>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-xs-12">
          <h2>Partner Kami</h2>
          <div className="row partners">
            <div className="col-xs- 12 col-sm-4">
              <div className="partner-card">
                <div
                  className="partner-card__image"
                  style={{ backgroundImage: 'url(http://maleotechnocenter.com/wp-content/uploads/2015/12/ibtimaleo.jpg)'}}
                ></div>
                <h3 className="partner-card__name">
                  <a href="http://maleotechnocenter.com" rel="noopener" target="_blank">IBTI Maleo Techo Center</a>
                </h3>
                <div className="partner-card__role">Business Incubator Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-xs-12">
          <h2>Bantu Operasional</h2>
          <p>
            Melalui donasi dan sponsorship, Anda memberikan Kami kesempatan untuk tetap melakukan kegiatan-kegiatan
            pelatihan gratis, seperti <a href="https://hammer-code.github.io/terbit" rel="noopener" target="_blank">kelas Bootcamp
            Web Development intensif</a> dan kelas Web Development Reguler mingguan, juga <Link to="/events">event bulanan kami</Link>.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default translate('translations')(ContributePage)
