import { loginFailure, loginStart, loginSucess } from "./user";
import { addUserStart, addUserSuccess, addUserFailure } from "./register";
import { addOrder, addOrderFailure, addOrderStart } from "./order";
import { PUBLIC_REQUEST, userRequest } from "../request";

export const loginApi = async (dispatch, user) => {
  dispatch(loginStart);
  try {
    const res = await PUBLIC_REQUEST.post("user/auth/login", user);

    console.log(res);
    dispatch(loginSucess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  dispatch(addUserStart);
  try {
    const res = await PUBLIC_REQUEST.post("user/auth/register", user);

    console.log(res);
    dispatch(addUserSuccess(res.data));
  } catch (error) {
    dispatch(addUserFailure());
  }
};

export const order = async (dispatch, order) => {
  dispatch(addOrderStart);
  try {
    const res = userRequest.post("orders", order);
    console.log(order);
    dispatch(addOrder(res.data));
  } catch (error) {
    dispatch(addOrderFailure);
  }
};
