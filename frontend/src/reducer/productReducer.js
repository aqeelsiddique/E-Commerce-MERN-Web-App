// import {
//   ALL_PRODUCT_FAIL,
//   ALL_PRODUCT_REQUEST,
//   ALL_PRODUCT_SUCCESS,
//   PRODUCT_DETAILS_REQUEST,
//   PRODUCT_DETAILS_FAIL,
//   PRODUCT_DETAILS_SUCCESS,
//   NEW_PRODUCT_REQUEST,
//   NEW_PRODUCT_SUCCESS,
//   NEW_PRODUCT_FAIL,
//   NEW_PRODUCT_RESET,
//   CLEAR_ERRORS,
// } from "../constant/productConstants";

// export const productsReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case ALL_PRODUCT_REQUEST:
//       return {
//         loading: true,
//         products: [],
//       };
//     case ALL_PRODUCT_SUCCESS:
//       return {
//         loading: false,
//         products: action.payload.products,
//         productsCount: action.payload.productsCount,
//         resultPerPage: action.payload.resultPerPage,
//         filteredProductsCount: action.payload.filteredProductsCount,
//       };

//     case ALL_PRODUCT_FAIL:
//       return {
//         loading: true,
//         error: action.payload,
//       };

//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

// ///////////////Product details reducer\\]

// export const productDetailsReducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case PRODUCT_DETAILS_REQUEST:
//       return {
//         loading: true,
//         ...state,
//       };
//     case PRODUCT_DETAILS_SUCCESS:
//       return {
//         loading: false,
//         product: action.payload,
//       };
//     case PRODUCT_DETAILS_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

// export const newProductReducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case NEW_PRODUCT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case NEW_PRODUCT_SUCCESS:
//       return {
//         loading: false,
//         success: action.payload.success,
//         product: action.payload.product,
//       };
//     case NEW_PRODUCT_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case NEW_PRODUCT_RESET:
//       return {
//         ...state,
//         success: false,
//       };
//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from '../actions/actionProduct';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
