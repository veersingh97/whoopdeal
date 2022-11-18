import React from 'react';
import {Link} from 'react-router-dom';
import './ProductGrid.css'

const ProductGrid = ({filterProducts , isLoading}) => {


  if (isLoading) {
    return <div className="loading">
      Loading...
      </div>;
  }
  return (
    <section className="product-section">
      <div className="product-grid">
        {filterProducts.map((curElem) => {
          const { title, price, discountPercentage, rating, images, id } =
            curElem;
          return (
            <Link to={`/singleproduct/${id}`} key={id}>
              <div className="product-card" >
                <img
                  src={images[0]}
                  alt="product"
                  className="product-image"
                ></img>
                <h3 className="heading">{title.slice(0,15)+"..."}</h3>
                <p className="discount">
                  {Math.round(discountPercentage) + "% off"}
                </p>
                <div className="price-rating-flex">
                  <h4 className="final-price">{"Price: $" + price}</h4>
                  <h4 className="rating">{"Ratings: " + rating}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  )
}

export default ProductGrid;