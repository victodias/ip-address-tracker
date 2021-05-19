import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Main from 'components/Main'
import { AddressProvider } from 'context/IpAddress'
import { GlobalStyles } from 'styles/globals'

function Routes() {
  return (
    <Router>
      <GlobalStyles />
      <AddressProvider>
        <Route exact path="/" component={Main} />
      </AddressProvider>
    </Router>
  )
}

export default Routes
