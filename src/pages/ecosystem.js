import React from 'react';
import Link from 'gatsby-link';
import chunk from 'lodash/chunk';
import classnames from 'classnames';
import { translate } from 'react-i18next';

import Footer from '../layouts/Footer';
import companies from '../data/companies';
import communities from '../data/communities';

import './ecosystem.css';

const COMMUNITIES_TAB = 1;
const COMPANIES_TAB = 2;

const chunkedCompanies = chunk(companies, 3);
const chunkedCommunities = chunk(communities, 3);

function Card ({
  name,
  url,
  description,
}) {
  return (
    <div className="ecosystem-card">
      <h2 className="ecosystem-card__title"><a target="_blank" rel="noopener" href={url}>{name}</a></h2>
      <div className="ecosystem-card__description">
        {description}
      </div>
    </div>
  );
}

class ContentTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: COMPANIES_TAB };
  }

  setActiveTab(tabNumber) {
    this.setState(() => ({ activeTab: tabNumber }));
  }

  render() {
    const communitiesEl = (
      <div className="content-tab__content">
        {chunkedCommunities.map((row, i) => (
          <div key={i} className="row">
            {row.map((c, j) => (
              <div key={j} className="col-xs-4">
                <Card
                  name={c.name}
                  url={c.url}
                  description={c.description}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );

    const companiesEl = (
      <div className="content-tab__content">
        {chunkedCompanies.map((row, i) => (
          <div key={i} className="row">
            {row.map((c, j) => (
              <div key={j} className="col-xs-4">
                <Card
                  name={c.name}
                  url={c.url}
                  description={c.description}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );

    const { activeTab } = this.state;
    const companiesTabIsActive = activeTab === COMPANIES_TAB;
    const communitiesTabIsActive = activeTab === COMMUNITIES_TAB;
    const companiesButtonClasses = classnames('content-tab__tab', { 'content-tab__tab--active': companiesTabIsActive });
    const communitiesButtonClasses = classnames('content-tab__tab', { 'content-tab__tab--active': communitiesTabIsActive });

    return (
      <div className="ecosystem__content-tab">
        <div className="content-tab__tabs">
          <button
            className={companiesButtonClasses}
            onClick={() => this.setActiveTab(COMPANIES_TAB)}
          >
            Perusahaan
          </button>
          <button
            className={communitiesButtonClasses}
            onClick={() => this.setActiveTab(COMMUNITIES_TAB)}
          >
            Komunitas
          </button>
        </div>
        {(() => {
          if (activeTab === COMPANIES_TAB) {
            return companiesEl;
          } else {
            return communitiesEl;
          }
        })()}
      </div>
    );
  }
}

const CommunitiesPage = ({ t }) => (
  <div id="ecosystem-page">
    <div className="container">
      <h1 className="crisp crisp--400">{t('ecosystem')}</h1>
      <p>Berikut adalah daftar komunitas dan perusahaan teknologi yang ada di Palu. Jika perusahaan atau komunitasmu ingin masuk daftar ini, <a href="mailto:arkinthesky.69@gmail.com">silakan hubungi kami</a>.</p>
      <ContentTab />
    </div>
    <Footer />
  </div>
);

export default translate('translations')(CommunitiesPage);
