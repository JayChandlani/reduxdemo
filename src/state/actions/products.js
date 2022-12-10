import { SET_PRODUCTS } from '../../constants/actionTypes'
import { setLoading } from './loading';

const setProducts = () => {
  return async (dispatch) => {
    const responce = await fetch('https://fakestoreapi.com/products')
    const data = await responce.json();
    dispatch(setLoading(false));
    dispatch(
      {
        type: SET_PRODUCTS,
        payload: data
      }
    )
  }
}

export { setProducts }