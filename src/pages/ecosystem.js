import React from 'react';
import Link from 'gatsby-link';
import classnames from 'classnames';
import { translate } from 'react-i18next';

import { communities, companies } from '../data/communities';

import './ecosystem.css';

const COMMUNITIES_TAB = 1;
const COMPANIES_TAB = 2;

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
        <ul>
        {communities.map((c, i) => (
          <li key={i}><a target="_blank" rel="noopener" href={c.url}>{c.name}</a></li>
        ))}
        </ul>
      </div>
    );

    const companiesEl = (
      <div className="content-tab__content">
        <ul>
        {companies.map((c, i) => (
          <li key={i}><a target="_blank" rel="noopener" href={c.url}>{c.name}</a></li>
        ))}
        </ul>
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
            Companies
          </button>
          <button 
            className={communitiesButtonClasses}
            onClick={() => this.setActiveTab(COMMUNITIES_TAB)}
          >
            Communities
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
  <div className="container">
    <h1 className="crisp crisp--400">{t('ecosystem')}</h1>
    <p>Berikut adalah daftar komunitas dan perusahaan teknologi yang ada di Palu</p>
    <ContentTab />
  </div>
);

export default translate('translations')(CommunitiesPage);
