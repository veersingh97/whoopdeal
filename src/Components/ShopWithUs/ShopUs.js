import React from "react";
import './ShopUs.css';
import { TbTruckDelivery, TbShieldCheckered } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
const ShopUs = () => {
  return (
    <section className="shop-section">
      <h1>Why Shop With Us</h1>
      <div className="grid">
        <div className="shop-shipping">
          <TbTruckDelivery className='icon' />
          <p>Free and Fast Shipping</p>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="shop-shipping">
          <TbShieldCheckered className='icon'/>
          <p>Contact Less Shipping</p>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="shop-shipping mobile-view">
          <GiReceiveMoney className='icon'/>
          <p>Win Cashbacks</p>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="shop-shipping">
          <RiSecurePaymentFill className='icon'/>
          <p>Secure Payment System</p>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
      </div>
    </section>
  );
};

export default ShopUs;
