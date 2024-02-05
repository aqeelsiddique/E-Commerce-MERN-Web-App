import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../actions/actionProduct";
import styled from "styled-components";
import { Card, Typography, Button } from "@mui/material";
import { GlassMagnifier } from "react-image-magnifiers";
import ReviewCard from "./ReviewCard";

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

const OptionContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const OptionImage = styled.img`
  width: 75px;
  height: 75px;
  padding: 10px;
  cursor: pointer;
`;

const Description = styled.p`
  margin: 20px 0 50px 0;
  line-height: 25px;
`;

const AddContainer = styled.div`
  display: flex;
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

const ReviewsContainer = styled.div`
  margin-top: 20px;
`;

const NoReviewsMessage = styled.p`
  margin-top: 20px;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const [selectedImage, setSelectedImage] = useState("");
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  // Check if 'images' property exists before accessing it
  const allImages = [
    ...(product.images || []),
    ...(product.second_images || []),
    ...(product.img3 || []),
    ...(product.img4 || []),
    ...(product.img5 || []),
  ];

  return (
    <>
      <Container>
        <LeftContainer>
          <Card>
            <GlassMagnifier
              imageSrc={selectedImage || allImages[0]?.url}
              imageAlt="Magnifier"
              largeImageSrc={selectedImage || allImages[0]?.url}
              allowOverflow={false}
            />
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
          <Typography variant="h5">Number</Typography>
          <AddContainer>
            <span>-</span>
            <label>1</label>
            <span>+</span>
          </AddContainer>
          <AddButton
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Add to Bag
          </AddButton>
        </RightContainer>
      </Container>

      <h3 className="reviewsHeading">REVIEWS</h3>
      {product.reviews && product.reviews[0] ? (
        <ReviewsContainer>
          {product.reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </ReviewsContainer>
      ) : (
        <NoReviewsMessage>No Reviews Yet</NoReviewsMessage>
      )}
    </>
  );
};

export default ProductDetails;
