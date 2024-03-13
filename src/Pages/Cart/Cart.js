import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContex";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillDelete,
} from "react-icons/ai";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    removeItem,
    clearCart,
    decreaseAmount,
    increaseAmount,
    totalAmount,
    shippingFee,
  } = useProductContext();

  if (cart?.length === 0) {
    return (
      <div className="empty-cart">
        <h1>YOUR CART IS EMPTY</h1>
      </div>
    );
  } else {
    return (
      <section className="cart-section">
        <div className="cart-content">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>SubTotal</p>
          <p className="mobile-display">Remove</p>
        </div>
        <hr />

        <div className="cart-margin">
          {cart?.map((curElem) => {
            const { amount: quantity, id, image, max, name, price } = curElem;
            return (
              <div className="cart-products" key={id}>
                <div className="cart-item">
                  <img src={image} alt="product" className="cart-img"></img>
                  <p>{name.slice(0, 14) + "..."}</p>
                </div>
                <p className="price">{"$" + price}</p>
                <div className="amount-quantity">
                  <AiFillMinusCircle
                    onClick={() => decreaseAmount(quantity, max)}
                  />
                  <p className="quantity">{quantity}</p>
                  <AiFillPlusCircle
                    onClick={() => increaseAmount(quantity, max)}
                  />
                </div>
                <div className="subtotal"> {"$" + quantity * price}</div>
                <div>
                  <button className="remove-btn mobile-display">
                    <AiFillDelete
                      onClick={() => {
                        removeItem(id);
                      }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="clear-continue">
          <Link to="/products">
            <button className="btn shop mobile-btn">Continue Shoping</button>
          </Link>
          <button className="btn clear mobile-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <div className="total-amount">
          <div className="total-sub">
            <p>SubTotal :</p>
            <h3>{"$"+totalAmount}</h3>
          </div>
          <div className="shipping-fee">
            <p>Shipping Charges :</p>
            <h3>{"$"+shippingFee}</h3>
          </div>
          <div className="payable">
            <p>Payable Amount :</p>
            <h3>{"$"+(totalAmount + shippingFee)}</h3>
          </div>
        </div>
      </section>
    );
  }
};
export default Cart;
