import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/whoop-logo.png";
import { BsCart2 } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { CgCloseO } from "react-icons/cg";
import { useProductContext } from "../../Context/ProductContex";

import "./Header.css";

const Header = () => {
  const [isToggle, setIsToggle] = useState("false");

  const { totalItem } = useProductContext();

  return (
    <section className="header-section">
      <div>
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo"></img>
        </Link>
      </div>
      <div className="navbar-content">
        <ul className={isToggle ? "navbar-text" : "navbar-text active"}>
          <li>
            <Link to="/" className="navbar-label" onClick={() => setIsToggle(true)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-label" onClick={() => setIsToggle(true)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="navbar-label" onClick={() => setIsToggle(true)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-label" onClick={() => setIsToggle(true)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar-label btn" onClick={() => setIsToggle(true)}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/cart" className="navbar-label cart-trolley" onClick={() => setIsToggle(true)}>
              <BsCart2 />
              <span className="cart-total">{totalItem ? totalItem : 0}</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bars" onClick={() => setIsToggle(!isToggle)}>
        {isToggle ? (
          <RiMenu3Line className="bars-mobile" />
        ) : (
          <CgCloseO className="bars-mobile" />
        )}
      </div>
    </section>
  );
};

export default Header;
