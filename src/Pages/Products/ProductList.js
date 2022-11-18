import React from "react";
import "./ProductList.css";
import StarRatings from "../../Components/StarRatings/StarRatings";
import { Link } from "react-router-dom";

const ProductList = ({ filterProducts, isLoading }) => {


  if (isLoading) {
    return <div className="loading">
      Loading...
      </div>;
  }


  return (
    <section className="product-list-section">
      {filterProducts.map((curElem) => {
        const { title, price, description, rating, images, id } = curElem;
        return (
          
            <div className="product-list-grid" key={id}>
              <div className="list-img" >
                <img
                  src={images[0]}
                  alt={title}
                  className="product-list-img"
                ></img>
              </div>
              <div className="product-list-details">
                <h2>{title.slice(0,20)+"..."}</h2>
                <h3>{"$" + price}</h3>
                <StarRatings rating={rating} />
                <p className="mobile-desc">
                  {description +
                    "Add a touch of glam to your space with the two-tone Amour vase which has a rounded bottom which curves up to form an eye-pleasing silhouette. Showcase faux or real flowers in this beautiful vase and amp up the decor element of your space".slice(0,150)+"...."}
                </p>
                <Link to={`/singleproduct/${id}`} key={id}><button className="btn cart-btn mobile-btn">Read More</button></Link>
              </div>
            </div>
         
        );
      })}
    </section>
  );
};

export default ProductList;
