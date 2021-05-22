import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Main from 'pages/Main'
import { LocationProvider } from 'context/Location'
import { GlobalStyles } from 'styles/globals'

function Routes() {
  return (
    <Router>
      <GlobalStyles />
      <LocationProvider>
        <Route exact path="/" component={Main} />
      </LocationProvider>
    </Router>
  )
}

export default Routes
