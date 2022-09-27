import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
const options = {
    edit: false,
    color:"black",
    activeColor:"yellow",
    size:window.innerWidth<1000? 20:25,
    value:2.5,
    isHalf:true
    
}
const Product = ({product}) => {
  return (
    <Link className='productCard' to={product._id}>

        <p>{product.name}</p>
        <img src={product.images[0].url} alt={product.images} />
        


        <div>
            <ReactStars {...options} /> <span className='reviews'>(256 Reviews )</span>
        </div>
        <p>{product.price}</p>
        


    </Link>
  )
}

export default Product
