import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './routePrivate'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainTemplate from '../templates/mainTemplate'

const RouteMain = () => {
  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
      <Route exact path={`${process.env.PUBLIC_URL}/register`} component={Register} />
      <PrivateRoute path={`${process.env.PUBLIC_URL}/`} component={MainTemplate} />
    </Switch>
  )
}

export default RouteMain
