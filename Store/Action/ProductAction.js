import {BaseUrl} from '../../Constants/BaseUrl';
import {
  addToCartActionConst,
  cartQtyAction,
  deleteCartItemActionConst,
} from '../Action/ProductActionConstants';

export const addToCartAction = item => {
  return async dispatch => {
    dispatch({
      type: addToCartActionConst.ADD_TO_CART_SUCC,
      cartItem: item,
    });
  };
};

export const deleteCartItem = id => {
  return async dispatch => {
    dispatch({
      type: deleteCartItemActionConst.DELETE_CART_ITEM,
      itemId: id,
    });
  };
};
