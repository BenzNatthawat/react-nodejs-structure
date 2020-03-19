import { combineReducers } from 'redux'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import { reducer as reduxFormReducer } from 'redux-form'
// import * as type from '../../constants/actionType'
// import authen from './authenticate'

// const barPersistConfig = {
//   key: 'userLogin',
//   storage,
//   keyPrefix: '_'
// }

const appReducer = combineReducers({
  form: reduxFormReducer,
  // authen: persistReducer(barPersistConfig, authen)
})

const rootReducer = (state, action) => {
  // if(action.type === type.LOGOUT.LOGOUT) {
  //   state.form = undefined
  // }
  return appReducer(state, action)
}

export default rootReducer
