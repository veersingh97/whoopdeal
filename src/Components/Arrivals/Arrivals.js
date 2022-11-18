import React from "react";
import "./Arrivals.css";
import { Link } from "react-router-dom";
import BackImage from "../../Images/arrival-bg-removebg-preview.png";
import MobileImage from "../../Images/down-look.jpg";
import MobileImage2 from "../../Images/horizontal-shot-stupefied-young-man-looks-surprisingly-indicates-down-being-stunned-by-something-unbelievable-wears-casual-bright-red-t-shirt-stands-against-white-wall.jpg";

const Arrivals = () => {
  return (
    <section className="arrivals-section">
      <div className="arrival-grid">
        <div>
          <img src={BackImage} className="arrival-img" alt="arrivals"></img>
          {/* <img src={MobileImage} className='mobile-img'></img> */}
          <img src={MobileImage2} className='mobile-img'></img>
        </div>
        <div className="arrival-desc">
          <h1>#NewArrivals</h1>
          <p>
            Don’t miss our discount on the NEW ARRIVALS We are launching new
            products. Pretty amazing huh!!! Be the first to buy and ENJOY 60%
            off sale on our new products We have new arrivals. But the price is
            rising soon.
          </p>
          <Link to="/products" className="arr-btn">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
