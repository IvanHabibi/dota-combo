import {createLogger} from 'redux-logger'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import team from '../reducers/listTeamReducer'
import heroes from '../reducers/dotaHeroReducer'

const store = createStore(
  combineReducers({heroes,team}),
  {},
  applyMiddleware( createLogger(), thunk, promise()));

  export default store
