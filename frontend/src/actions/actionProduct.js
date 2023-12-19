import axios from "axios"
import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS, 
    CLEAR_ERRORS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL

  } from "../constant/productConstants";
  //get all products
  export const getProduct  = () => async (dispatch) => {
    try {
        dispatch({ type:ALL_PRODUCT_REQUEST})

        const {data} = await axios.get("localhost:5009/api/v1/products")
        dispatch({ type:ALL_PRODUCT_SUCCESS,
            payload: data

        })
        console.log("data",data)

        
    } catch (error) {
        dispatch({ type:ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
        })    
    }
  }

  //clearing a errr

  export const clearserrors  = () => async (dispatch) =>{
    dispatch({type:CLEAR_ERRORS})
  }
  export const getProductDetails = (_id) => async (dispatch) => {
    
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
 
      const { data } = await axios.get(`/api/v1/product/${_id}`);
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.product,

      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };



//   // Create Product
// export const createProduct = (productData) => async (dispatch) => {
//   try {
//     dispatch({ type: NEW_PRODUCT_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.post(
//       `/api/v1/admin/product/new`,
//       productData,
//       config
//     );

//     dispatch({
//       type: NEW_PRODUCT_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: NEW_PRODUCT_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };