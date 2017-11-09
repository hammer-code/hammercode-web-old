import React from 'react';
import Link from 'gatsby-link'

import './index.css';

export default function EventCard ({
  title,
  date,
  venue,
  link,
  imageUrl = 'http://lorempixel.com/320/165',
}) {
  return (
    <div className="event-card">
      <div className="event-card__img-wrapper">
        <img src={imageUrl} />
      </div>
      <div className="event-card__detail">
        <div className="event-card__date">{date}</div>
        <h2 className="event-card__title"><Link to={link}>{title}</Link></h2>
        <div className="event-card__venue">{venue}</div>
      </div>
    </div>
  );
}