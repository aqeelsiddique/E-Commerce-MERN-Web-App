// import React from "react";
// import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";

// const Product = ({ name, price, ratings, numofreviews, images, _id }) => {
//   console.log(name);

//   console.log(numofreviews);
//   const options = {
//     edit: false,
//     color: "black",
//     activeColor: "yellow",
//     size: window.innerWidth < 600 ? 20 : 25,
//     value: ratings,
//     isHalf: true,
//   };
//   return (
//     <Link className="productCard" to={_id}>
//       <p>{name}</p>

//       <img src={images[0].url} alt="images" />

//       <div>
//         <ReactStars {...options} />{" "}
//         <span className="reviews">({numofreviews}Reviews )</span>
//       </div>
//       <p>{`$${price}`}</p>
//     </Link>
//   );
// };

// export default Product;


import React, { useState, useEffect } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/products');
        const data = await response.json();
        setProducts(data.products);
        console.log("data",data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.category}</li>

        ))}
      </ul>
    </div>
  );
};

export default Product;

