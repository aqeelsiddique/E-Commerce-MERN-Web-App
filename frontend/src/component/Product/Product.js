import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/actionProduct";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import ReactStars from "react-rating-stars-component";
import { useNavigate, Link } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    // Navigate to the product details page when the image is clicked
    navigate(`/product/${product._id}`);
  };

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
              xs={12}
              sm={6}
              md={3}
              onMouseEnter={() => setHoveredProductId(product._id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              {product.images && product.images.length > 0 && (
                <Card>
                  <CardMedia
                    component="div"
                    className="product-image-container"
                  >
                    {/* Use Link for navigation */}
                    <Link
                      to={`/product/${product._id}`}
                      // onClick={(e) => e.stopPropagation()}
                      onClick={handleImageClick}
                    >
                      <img
                        className={`product-image ${
                          hoveredProductId === product._id ? "hidden" : ""
                        }`}
                        src={
                          product.images && product.images.length > 0
                            ? product.images[0].url
                            : ""
                        }
                        alt={product.name}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
                  </CardMedia>
                </Card>
              )}

              {product.second_images && product.second_images.length > 0 && (
                <Card>
                  <CardMedia
                    component="div"
                    className="product-image-container"
                  >
                    <Link
                      to={`/product/${product._id}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        className={`product-image ${
                          hoveredProductId === product._id ? "" : "hidden"
                        }`}
                        src={product.second_images[0].url}
                        alt={product.name}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
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

export default Product;
