import React, { Fragment, useEffect } from 'react'
import '../Home/Home.css'
import Product from './Product.js'
import {CgScrollV} from 'react-icons/cg'
import Metadata from '../layout/Metadata';
import { getProduct } from '../../actions/actionProduct.js';
import { useSelector, useDispatch } from 'react-redux';

// import {CgMouse} from "react-icons/all"
// import CgMouse from 'react-icons/all'

const product = {

    name:"tshirt",
    images:[{url:"https://st2.depositphotos.com/2251265/10185/i/450/depositphotos_101857036-stock-photo-white-t-shirt-hanging.jpg"}],
    price:"$300",
    _id:"aqeel"
}
const Home = () => {
    const dispatch = useDispatch();
    const { loading, error, products, productCount } = useSelector(
    (state) =>state.products
     )
console.log(products)
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);
  return (
   <Fragment>
    {/* {loading ? "loadin" : <Fragment> */}
    <Metadata title="ECommerce_Store"></Metadata>
    <div className='banner'>
        <p>Welcome to Ecommerce</p>
        <h1>Find Amazing Product Below</h1>
        <a href='#continer'>
            <button>
               <CgScrollV /> Scroll 
            </button>
        </a>
    </div>
    <h2 className='homeheading'> <span>Product </span>Feature</h2>
    <div className='container' id='continer'>
        {console.log(products)}
   {products.map((product)=><Product  images = {product.images}  price = {product.price} ratings = {product.ratings} numofreviews ={product.numofreviews}/>
   


)

   } 


    </div>

 
   {/* </Fragment>} */}
   </Fragment>
  )
}

export default Home
