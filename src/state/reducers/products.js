import { SET_PRODUCTS, SET_FILTER } from '../../constants/actionTypes';

const INIT_STATE = {
  products: [],
  filterProducts: []
}

const productsReducer = (state = INIT_STATE, action) => {

  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload,filterProducts: action.payload }

    case SET_FILTER:
      return action.payload === 'all' ?
        { ...state, filterProducts: state.products }
        :
        { ...state, filterProducts: state.products.filter((item) => item.category === action.payload) }
    default:
      return state;
  }
};

export default productsReducer;