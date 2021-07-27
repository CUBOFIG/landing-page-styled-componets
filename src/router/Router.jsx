import { Navbar, Footer } from 'components'
import React from 'react'
import GlobalStyle from 'Styles/globalStyles'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/Home/Home'

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </>
  )
}

export default Router
