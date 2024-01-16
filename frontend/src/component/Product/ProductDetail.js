// ProductDetails.js
// ProductDetails.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../actions/actionProduct";
import styled from "styled-components";
import { Grid, Card, Typography, Rating, Button } from "@mui/material";

const Container = styled.div`
  max-width: 75%;
  margin: auto;
  height: 80vh;
  margin-top: 5%;
  background: white;
  box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    max-width: 90%;
    flex-direction: column;
  }

  @media only screen and (max-width: 511px) {
    max-width: 100%;
    height: auto;
    padding: 10px;
  }
`;

const LeftContainer = styled.div`
  width: 50%;
  padding: 30px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const RightContainer = styled.div`
  width: 50%;
  padding: 50px 100px 50px 50px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 50px;
  }
`;

const MainImage = styled.img`
  width: auto;
  height: auto;
`;

const OptionContainer = styled.div`
  display: flex;
`;

const OptionImage = styled.img`
  width: 75px;
  height: 75px;
  padding: 10px;
`;

const Description = styled.p`
  margin: 20px 0 50px 0;
  line-height: 25px;
`;

const ColorContainer = styled.div`
  display: flex;

  span {
    width: 25px;
    height: 25px;
    background: #000;
    border-radius: 50%;
    margin: 20px 10px 20px 0;
  }

  span:nth-child(2) {
    background: #ededed;
  }

  span:nth-child(3) {
    background: #d5d6d8;
  }

  span:nth-child(4) {
    background: #efe0de;
  }

  span:nth-child(5) {
    background: #ab8ed1;
  }

  span:nth-child(6) {
    background: #f04d44;
  }
`;

const AddContainer = styled.div`
  display: flex;

  span,
  label {
    width: 25px;
    height: 25px;
    background: none;
    border: 1px solid #c1908b;
    color: #c1908b;
    text-align: center;
    line-height: 25px;
  }

  label {
    padding: 10px 30px 0 20px;
    border-radius: 50px;
    line-height: 0;
  }
`;

const AddButton = styled(Button)`
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  background: #c1908b;
  color: white;
  margin-top: 20%;
  border-radius: 30px;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const [selectedImage, setSelectedImage] = useState("");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  // Concatenate all image arrays
  const allImages = [
    ...product.images,
    ...product.second_images,
    ...product.img3,
    ...product.img4,
    ...product.img5,
  ];
  return (
    <Container>
      <LeftContainer>
        <Card>
          <MainImage src={selectedImage || allImages[0]?.url} />
        </Card>
        <OptionContainer>
          {allImages.map((image, index) => (
            <OptionImage
              key={index}
              src={image.url}
              alt={`Product Image ${index + 1}`}
              onClick={() => setSelectedImage(image.url)}
            />
          ))}
        </OptionContainer>
      </LeftContainer>
      <RightContainer>
        <Typography variant="h3">{product.name}</Typography>
        <Typography variant="h4">
          <small>$</small>
          {product.price}
        </Typography>
        <Description>{product.description}</Description>
        <Typography variant="h5">Color-Rose Gold</Typography>
        <ColorContainer>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </ColorContainer>
        <Typography variant="h5">Number</Typography>
        <AddContainer>
          <span>-</span>
          <label>1</label>
          <span>+</span>
        </AddContainer>
        <AddButton variant="contained" color="primary">
          Add to Bag
        </AddButton>
      </RightContainer>
    </Container>
  );
};

export default ProductDetails;
