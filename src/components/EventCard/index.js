import React from 'react';
import Link from 'gatsby-link'

import './index.css';

export default function EventCard ({
  title,
  date,
  venue,
  link,
  imageUrl = '',
}) {
  return (
    <div className="event-card">
      <div className="event-card__img-wrapper" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="event-card__detail">
        <div className="event-card__date">{date}</div>
        <h2 className="event-card__title"><Link to={link}>{title}</Link></h2>
        <div className="event-card__venue">{venue}</div>
      </div>
    </div>
  );
}