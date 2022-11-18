import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContex";
import StarRating from "../../Components/StarRatings/StarRatings";
import "./SingleProduct.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { ImTruck } from "react-icons/im";
import { TbReplace } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import ProductImages from "../../Components/ProductImages/ProductImages";
import { useState } from "react";

const SingleProduct = () => {
  const { isSingleLoading, singleProduct, getSingleProduct, addToCart } =
    useProductContext();
  const { id } = useParams();

  const [amount, setAmount] = useState(1);

  useEffect(() => {
    getSingleProduct(`https://dummyjson.com/products/${id}`);
  }, []);

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    images,
  } = singleProduct;

  if (isSingleLoading || !images) {
    return <div className="loading">Loading...</div>;
  }

  let reviews = Math.floor(Math.random() * 100 + 50);

  const decreaseAmount = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const increaseAmount = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <>
      <div className="single-header">
        <Link to="/">Home</Link>/{title}
      </div>
      <section className="single-section">
        <div className="single-grid">
          <div className="image-div">
            {
              <>
                <ProductImages myImages={images} />
              </>
            }
          </div>
          <div className="single-flex product-data">
            <h2>{title}</h2>
            <StarRating rating={rating} reviews={reviews} />
            <p className="pricing">{`Price: $${price} only`}</p>
            <h4 className="product-discount">
              {Math.round(discountPercentage) + "%off"}
            </h4>
            <h4>{brand}</h4>
            <p className="product-desc">
              {description +
                "Add a touch of glam to your space with the two-tone Amour vase which has a rounded bottom which curves up to form an eye-pleasing silhouette. Showcase faux or real flowers in this beautiful vase and amp up the decor element of your space. "}
            </p>
            <div className="icons-flex">
              <div className="icon-div">
                <ImTruck />
                <p>Free Shipping</p>
              </div>
              <div className="icon-div">
                <TbReplace />
                <p>30 days Replacement</p>
              </div>
              <div className="icon-div">
                <RiSecurePaymentFill />
                <p>Secure Checkout</p>
              </div>
            </div>
            <p className="product-stock">{"Category: " + category}</p>
            <p className="product-stock">
              {"Availabel in stock: " + stock + " left only"}
            </p>
            <div className="add-to-cart">
              <AiFillMinusCircle onClick={decreaseAmount} />
              <p>{amount}</p>
              <AiFillPlusCircle onClick={increaseAmount} />
            </div>
            <Link to="/cart">
              <button
                className="btn cart-btn"
                onClick={() => addToCart(amount, singleProduct)}
              >
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
