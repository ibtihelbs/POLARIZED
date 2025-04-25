import { loginFailure, loginStart, loginSucess } from "./user";
import { addUserStart, addUserSuccess, addUserFailure } from "./register";
import { addOrder, addOrderFailure, addOrderStart } from "./order";
import { PUBLIC_REQUEST, userRequest } from "../request";
export const loginApi = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await PUBLIC_REQUEST.post("user/auth/login", user);
    dispatch(loginSucess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  dispatch(addUserStart());
  try {
    const res = await PUBLIC_REQUEST.post("user/auth/register", user);

    dispatch(addUserSuccess(res.data));
  } catch (error) {
    dispatch(addUserFailure());
  }
};

export const order = async (dispatch, order) => {
  dispatch(addOrderStart());
  try {
    const formattedOrder = order.formattedOrder;

    await userRequest.post("orders", formattedOrder);
    dispatch(addOrder(order));
  } catch (error) {
    dispatch(addOrderFailure());
  }
};
