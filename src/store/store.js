import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../state/reducers'
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
)