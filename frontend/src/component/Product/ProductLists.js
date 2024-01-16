


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/actionProduct";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import ReactStars from "react-rating-stars-component";
// import "./Product.css"; // Import your CSS file for styling

const ProductLists = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [hoveredProductId, setHoveredProductId] = useState(null);

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
    <>
      <div className="container" id="container">
        <h2 className="homeheading">
          <span>Top </span>Collections
        </h2>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid
              item
              key={product._id}
              xs={12} // Set xs={12} to make each product take up the full width on extra-small screens
              sm={6}
              md={3} // Set md={3} to make each product take up one-third of the width on medium-sized screens
              onMouseEnter={() => setHoveredProductId(product._id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              {product.images && product.images.length > 0 && (
                <Card>
                  <CardMedia
                    component="div"
                    className="product-image-container"
                  >
                    <img
                      className={`product-image ${
                        hoveredProductId === product._id ? "hidden" : ""
                      }`}
                      src={product.images[0].url}
                      alt={product.name}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </CardMedia>
                </Card>
              )}

              {product.second_images && product.second_images.length > 0 && (
                <Card>
                  <CardMedia
                    component="div"
                    className="product-image-container"
                  >
                    <img
                      className={`product-image ${
                        hoveredProductId === product._id ? "" : "hidden"
                      }`}
                      src={product.second_images[0].url}
                      alt={product.name}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </CardMedia>
                </Card>
              )}

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
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default ProductLists;

