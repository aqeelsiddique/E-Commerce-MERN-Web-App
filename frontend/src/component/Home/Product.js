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
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/actionProduct';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

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
        <span>Product </span>Feature
      </h2>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                alt={product.name}
                src={product.images && product.images.length > 0 ? product.images[0].url : 'placeholder-image-url'}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                {/* Add other product details here */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;







