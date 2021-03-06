import PropTypes from 'prop-types'
import React from 'react'

import Header from './header'

function Layout({ children }) {
  return (
    <div className="">
      <Header />

      <main className="">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
