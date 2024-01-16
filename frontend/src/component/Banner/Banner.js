import React from "react";

const Banner = () => {
  const imageUrl = "/banner.webp";

  return (
    <>
      <img
        src={imageUrl}
        alt="Description of the image"
        style={{ width: "88%", height: "auto" ,marginLeft:"90px", borderRadius:"4px"}}
      />
    </>
  );
};

export default Banner;
