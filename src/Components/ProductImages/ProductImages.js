import React from "react";
import { useState } from "react";
import "./ProductImages.css";

const ProductImages = ({ myImages }) => {
  const [curImage, setCurImage] = useState(myImages[0]);

  if (!myImages) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <section className="image-section">
      <div>
        <img src={curImage} className="main-product-img" alt="product"></img>
      </div>
      <div className="mobile-images">
        {myImages.map((image,index) => {
          return (
            <img
              src={image}
              className="product-img"
              alt="product"
              key={index}
              onClick={() => {
                setCurImage(image);
              }}
            ></img>
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
