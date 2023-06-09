/** @format */

import { userConstants } from "../actions/constants";

const initState = {
  address: [],
  orders: [],
  // cancleOrders: [],
  orderDetails: {},
  lastOrderDetails: {},
  error: null,
  loading: false,
  orderFetching: false,
  pin: false,
  orderPin: {},
  hasItem: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case userConstants.GET_USER_ADDRESS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.GET_USER_ADDRESS_SUCCESS:
      state = {
        ...state,
        address: action.payload.address,
        loading: false,
      };
      break;
    case userConstants.GET_USER_ADDRESS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case userConstants.ADD_USER_ADDRESS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.ADD_USER_ADDRESS_SUCCESS:
      state = {
        ...state,
        address: action.payload.address,
        loading: false,
      };
      break;
    case userConstants.ADD_USER_ADDRESS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case userConstants.DELETE_USER_ADDRESS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.DELETE_USER_ADDRESS_SUCCESS:
      state = {
        ...state,
        address: action.payload.address,
        loading: false,
      };
      break;
    case userConstants.DELETE_USER_ADDRESS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case userConstants.ADD_USER_ORDER_SUCCESS:
      state = {
        ...state,
        lastOrderDetails: action.payload.order,
        loading: false,
      };
      break;
    case userConstants.GET_USER_ORDER_REQUEST:
      state = {
        ...state,
        orderFetching: true,
      };
      break;
    case userConstants.GET_USER_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload.orders,
        orderFetching: false,
      };
      break;
    case userConstants.GET_USER_ORDER_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        orderFetching: false,
      };
      break;
    case userConstants.GET_USER_ORDER_DETAILS_REQUEST:
      break;
    case userConstants.GET_USER_ORDER_DETAILS_SUCCESS:
      state = {
        ...state,
        orderDetails: action.payload.order,
        hasItem: action.payload.hasItem,
      };
      break;
    case userConstants.GET_USER_ORDER_DETAILS_FAILURE:
      break;
    case userConstants.CANCLE_USER_ORDER_SUCCESS:
      const { orderDetails } = state;
      let cancleOrder = { ...orderDetails.cancleOrder[0], isCanclled: true };
      // state = {
      //   ...state,
      //   orderDetails: {...orderDetails, cancleOrder:[cancleOrder]},
      //   loading: false
      // };
      break;
    case userConstants.GET_USER_ORDER_BY_PIN_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.GET_USER_ORDER_BY_PIN_SUCCESS:
      state = {
        ...state,
        orderPin: action.payload.order,
        pin: true,
        loading: false,
      };
      break;
    case userConstants.GET_USER_ORDER_BY_PIN_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }
  return state;
};
