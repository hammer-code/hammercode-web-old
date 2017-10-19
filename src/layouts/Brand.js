import React from 'react'
import Link from 'gatsby-link'
import { withRouter } from 'react-router'

import './Brand.css'

const Brand = ({ location }) => {
  const Anchor = (
    <Link
      to="/"
      style={{
        color: 'white',
        fontSize: 18,
        textDecoration: 'none',
      }}
    >
      hammercode
    </Link>
  )

  if (location.pathname === '/') {
    return <h1 className="brand">{Anchor}</h1>
  }

  return <h2 className="brand">{Anchor}</h2>
}

export default withRouter(Brand)
