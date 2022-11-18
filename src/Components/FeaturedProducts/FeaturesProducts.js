import { useProductContext } from "../../Context/ProductContex";
import "./FeaturedProducts.css";
import { Link } from "react-router-dom";

const FeaturesProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="feature-section">
      <h1>Best Selling Products</h1>
      <div className="feature-grid">
        {featureProducts.map((curElem) => {
          const { title, price, discountPercentage, rating, images, id } =
            curElem;
          return (
            <Link to={`/singleproduct/${id}` } key={id}>
              <div className="card" >
                <img
                  src={images[0]}
                  alt="product"
                  className="feature-image"
                ></img>
                <h3 className="heading">{title}</h3>
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
  );
};

export default FeaturesProducts;
