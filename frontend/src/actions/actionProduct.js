// import axios from "axios"
// import {
//     ALL_PRODUCT_FAIL,
//     ALL_PRODUCT_REQUEST,
//     ALL_PRODUCT_SUCCESS, 
//     CLEAR_ERRORS,
//     PRODUCT_DETAILS_REQUEST,
//     PRODUCT_DETAILS_FAIL,
//     PRODUCT_DETAILS_SUCCESS,
//     NEW_PRODUCT_REQUEST,
//     NEW_PRODUCT_SUCCESS,
//     NEW_PRODUCT_FAIL

//   } from "../constant/productConstants";
//   //get all products
//   // export const getProduct  = () => async (dispatch) => {
//   //   try {
//   //       dispatch({ type:ALL_PRODUCT_REQUEST})

//   //       const {data} = await axios.get("http://localhost:5000/api/v1/products")
//   //       dispatch({ type:ALL_PRODUCT_SUCCESS,
//   //           payload: data

//   //       })
//   //       console.log("data",data)

        
//   //   } catch (error) {
//   //       dispatch({ type:ALL_PRODUCT_FAIL,
//   //           payload: error.response.data.message,
//   //       })    
//   //   }
//   // }
//   export const getProduct =
//   (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
//   async (dispatch) => {
//     try {
//       dispatch({ type: ALL_PRODUCT_REQUEST });

//       let link = `http://localhost:5000/api/v1/products`;

//       if (category) {
//         link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
//       }

//       const { data } = await axios.get(link);



//       dispatch({
//         type: ALL_PRODUCT_SUCCESS,
//         payload: data,
//       });

//       // In the Redux action
// console.log("Data from API:", data);

// // In the Product component
// console.log("Props:", {price, ratings});

//     } catch (error) {
//       dispatch({
//         type: ALL_PRODUCT_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };

//   //clearing a errr

//   export const clearserrors  = () => async (dispatch) =>{
//     dispatch({type:CLEAR_ERRORS})
//   }
//   export const getProductDetails = (_id) => async (dispatch) => {
    
//     try {
//       dispatch({ type: PRODUCT_DETAILS_REQUEST });
 
//       const { data } = await axios.get(`/api/v1/product/${_id}`);
//       dispatch({
//         type: PRODUCT_DETAILS_SUCCESS,
//         payload: data.product,

//       });
//     } catch (error) {
//       dispatch({
//         type: PRODUCT_DETAILS_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };



// //   // Create Product
// // export const createProduct = (productData) => async (dispatch) => {
// //   try {
// //     dispatch({ type: NEW_PRODUCT_REQUEST });

// //     const config = {
// //       headers: { "Content-Type": "application/json" },
// //     };

// //     const { data } = await axios.post(
// //       `/api/v1/admin/product/new`,
// //       productData,
// //       config
// //     );

// //     dispatch({
// //       type: NEW_PRODUCT_SUCCESS,
// //       payload: data,
// //     });
// //   } catch (error) {
// //     dispatch({
// //       type: NEW_PRODUCT_FAIL,
// //       payload: error.response.data.message,
// //     });
// //   }
// // };




import axios from 'axios';

// Action types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

// Action creators
export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    const response = await axios.get('http://localhost:5000/api/v1/products');
    const data = response.data;

    console.log("test",data)

    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};
