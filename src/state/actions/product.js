import { SET_PRODUCT } from '../../constants/actionTypes'
import { setLoading } from './loading';

const setProduct = (id) => {
  return async (dispatch) => {
    const responce = await fetch('https://fakestoreapi.com/products/'+id)
    const data = await responce.json();
    dispatch(setLoading(false));
    dispatch(
      {
        type: SET_PRODUCT,
        payload: data
      }
    )
  }
}

export { setProduct }