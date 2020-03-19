import React from 'react'
import { Route, Switch } from 'react-router-dom'
import finances from '../pages/finances'

const routeMain = () => {
  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/lotteries`} component={finances} />
      <Route path={`${process.env.PUBLIC_URL}/finances`} component={finances} />
      <Route path={`${process.env.PUBLIC_URL}/award`} component={finances} />
    </Switch>
  )
}

export default routeMain
