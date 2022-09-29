import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

const Product = ({name,price,ratings,numofreviews,images}) => {
  console.log(name)

  console.log(numofreviews)
  const options = {
    edit: false,
    color:"black",
    activeColor:"yellow",
    size:window.innerWidth<600? 20:25,
    value:ratings,
    isHalf:true
     
}
  return (
    <Link className='productCard' to="/product._id">
        <p>{name}</p>
        
        <img  src={images[0].url} alt='images' />
        


        <div>
   
            <ReactStars {...options} /> <span className='reviews'>({numofreviews}Reviews )</span>
        </div>
        <p>{`$${price}`}</p>
      

        


    </Link>
  )
}

export default Product
