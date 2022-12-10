import isCartOpenReducer from './isCartOpen'
import productsReducer from './products'
import productReducer from './product'
import cartReducer from './cart'
import { combineReducers } from 'redux'
import filterReducer from './filter'
import loadingStatesReducer from './loading'
const rootReducer = combineReducers({
  isCartOpen: isCartOpenReducer,
  products: productsReducer,
  cart: cartReducer,
  filter:filterReducer,
  loading:loadingStatesReducer,
  product:productReducer
})

export default rootReducer