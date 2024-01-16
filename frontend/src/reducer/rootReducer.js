// reducers/rootReducer.js
import { combineReducers } from 'redux';
import productsReducer from './productReducer';
import { productDetailsReducer } from './productReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  // Add other reducers if needed
});

export default rootReducer;
