// import React from 'react'
// import {ReactNavbar} from "overlay-navbar"
// import  logo from "../images/logo.png"

// const Header = () => {
//   return (
//     <div>
    
//         <ReactNavbar
//           burgerColorHover= "#eb4034"

//         logo={logo}
//         logoWidth= "20vmax"
//         navColor1= "white"
//         logoHoverSize= "10px"
//         logoHoverColor ="#eb40341"
//         link1Text = "Home"
//         link2Text= "Products"
//         link3Text= "Contact"
//         link4Text= "Main"
//         link5Text="About Us"
//         link1Url = "/"
//         link2Url= "/products"
//         link3Url= "/contact"
//         link4Url ="/about"
//         link1Size = "1.3vmax"
//         link1Color = "rgba(35, 35, 35,0.8)"
//         nav1justifyContent = "flex-end"
//         nav2justifyContent = "flex-end"
//         nav3justifyContent = "flex-start"
//         nav4justifyContent= "flex-start"
//         link1ColorHover= "#eb4034"
//         link1Margin= "1vmax"
//         profileIconUrl= "/login"
//         profileIconColor= "rgba(35, 35, 35,0.8)"
//         searchIconColor= "rgba(35, 35, 35,0.8)"
//         cartIconColor= "rgba(35, 35, 35,0.8)"
//         profileIconColorHover= "#eb4034"
//         searchIconColorHover = "#eb4034"
//         cartIconColorHover = "#eb4034"
//         cartIconMargin = "1vmax"
//          />


       
   
//     </div>
//   )
// }

// export default Header



// Navbar.jsx
import React from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

import "../Header/Header.css"
const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Left Side: Search Input */}
      <div className="flex items-center">
        <div className="mr-4">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 px-2 py-1 rounded"
        />
      </div>

      {/* Center: Menu Items */}
      <div className="flex items-center">
        <a href="#" className="mx-2 hover:text-gray-300">
          Main
        </a>
        <a href="#" className="mx-2 hover:text-gray-300">
          Shop
        </a>
        <a href="#" className="mx-2 hover:text-gray-300">
          Product
        </a>
        <a href="#" className="mx-2 hover:text-gray-300">
          Logo
        </a>
        <a href="/portfolio" className="mx-2 hover:text-gray-300">
          Portfolio
        </a>
        <a href="/blog" className="mx-2 hover:text-gray-300">
          Blog
        </a>
      </div>

      {/* Right Side: Login and Cart Icons */}
      <div className="flex items-center">
        <div className="mr-4">
          <FaUser />
        </div>
        <div>
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
