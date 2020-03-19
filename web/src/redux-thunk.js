import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

import reducers from './redux/reducers'

const myLog = (store) => (next) => (action) => {
  next(action)
}
const middleware = [thunk, myLog]

export default function configStore() {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(...middleware)
    )
  )
  store.subscribe(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // console.log('Store', store.getState())
    }
  })
  const persistor = persistStore(store)
  return { store, persistor }
}