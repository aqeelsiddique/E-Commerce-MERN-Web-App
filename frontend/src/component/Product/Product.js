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

// import React, { useState, useEffect } from 'react';

// const Product = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/v1/products');
//         const data = await response.json();
//         setProducts(data.products);
//         console.log("data", data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             <div>
//               <h2>{product.name}</h2>
//               <p>Description: {product.description}</p>
//               <p>Price: ${product.price}</p>
//               <p>Category: {product.category}</p>
//               <p>Stock: {product.stock}</p>
//               <p>Number of Reviews: {product.numofreviews}</p>
//               {product.images && product.images.length > 0 && (
//                 <div>
//                   <p>Images:</p>
//                   <ul>
//                     {product.images.map((image, index) => (
//                       <li key={index}>
//                         <img src={image.url} alt={`Product ${index + 1}`} style={{ width: '100px', height: '100px' }} />
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//               {/* Add more details as needed */}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Product;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/actionProduct";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import ReactStars from "react-rating-stars-component";
// import "./Product.css"; // Import a CSS file for styling

const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [displayedImage, setDisplayedImage] = useState({});

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    if (hoveredProductId !== null) {
      // Find the product by ID
      const hoveredProduct = products.find(
        (product) => product._id === hoveredProductId
      );

      // Set the displayed image to the second image of the hovered product
      setDisplayedImage(
        hoveredProduct.images && hoveredProduct.images.length > 1
          ? hoveredProduct.images[1]
          : {}
      );
    } else {
      setDisplayedImage({});
    }
  }, [hoveredProductId, products]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container" id="container">
      <h2 className="homeheading">
        {" "}
        <span>Top </span>Collections
      </h2>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid
            item
            key={product._id}
            xs={12}
            sm={6}
            md={4}
            onMouseEnter={() => setHoveredProductId(product._id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <Card>
              <CardMedia
                component="img"
                height="200"
                alt={product.name}
                className={`product-image ${
                  hoveredProductId === product._id ? "hovered" : ""
                }`}
                src={
                  hoveredProductId === product._id && displayedImage.url
                    ? displayedImage.url
                    : product.images && product.images.length > 0
                    ? product.images[0].url
                    : "https://st2.depositphotos.com/2251265/10185/i/450/depositphotos_101857036-stock-photo-white-t-shirt-hanging.jpg"
                }
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>

                <p>{product.description}</p>
                <p style={{ color: "red" }}>${product.price}</p>

                <p style={{ display: "flex", alignItems: "center" }}>
                  <ReactStars
                    edit={false}
                    color="rgba(20,20,20,0.1)"
                    activeColor="tomato"
                    size={window.innerWidth < 600 ? 20 : 25}
                    value={product.ratings}
                    isHalf={true}
                  />
                  <span style={{ marginLeft: "5px" }}>
                    ({product.numofreviews} Reviews)
                  </span>
                </p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;