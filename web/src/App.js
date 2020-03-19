import React, { Suspense } from 'react'
import './assets/scss/main.scss'
import 'semantic-ui-css/semantic.min.css'
import RouteRoot from './route/routeRoot'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configStore from './redux-thunk'

const { store, /*persistor*/ } = configStore()

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback='loading'>
          <RouteRoot />
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
