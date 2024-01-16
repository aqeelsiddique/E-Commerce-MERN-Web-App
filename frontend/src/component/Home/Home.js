import React, { Fragment, useEffect } from "react";
import "../Home/Home.css";
import Product from "../Product/Product.js";
import { CgScrollV } from "react-icons/cg";
import Metadata from "../layout/Metadata";
import { getProduct } from "../../actions/actionProduct.js";
import { useSelector, useDispatch } from "react-redux";
import SliderComponent from "../HomeSlider/HomeSlider.js";
import Banner from "../Banner/Banner.js";
import Header from "../layout/Header/Header.js";

// import {CgMouse} from "react-icons/all"
// import CgMouse from 'react-icons/all'

const product = {
  name: "tshirt",
  images: [
    {
      url: "https://st2.depositphotos.com/2251265/10185/i/450/depositphotos_101857036-stock-photo-white-t-shirt-hanging.jpg",
    },
  ],
  price: "$300",
  _id: "aqeel",
};
const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );
  console.log(products);
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  return (
    <Fragment>
      {/* {loading ? "loadin" : <Fragment> */}
      <Metadata title="ECommerce_Store"></Metadata>
      <Header />


      <>
        <SliderComponent />

      </>
      <Product />
      <Banner />
      <Product />
      {/* </Fragment>} */}
    </Fragment>
  );
};

export default Home;
