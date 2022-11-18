import React from 'react';
import Logo from '../../Images/whoop-logo.png';
import './Footer.css'

const Footer = () => {
  return (
    <section className='footer-section'>
          <div className='footer-grid'>
              <div className='footer-col-1'>
                  <img src={Logo} alt='footerlogo' className='footer-logo'></img>
                  <h3>Address:</h3><span>28 White Tower, Dwarka, New Delhi</span>
                  <h3>Email:</h3><span>abc@gmail.com</span>
                  <h3>Telephone:</h3><span>+91 9876543210</span>
              </div>
              <div>
                <h2>Menu</h2>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Testimonials</p>
                <p>Blog</p>
                <p>Contact</p>
              </div>
              <div>
                <h2>Account</h2>
                <p>Checkout</p>
                <p>Login</p>
                <p>Register</p>
                <p>Shopping</p>
                <p>Widgets</p>
              </div>
              <div>
                <h2>Newsletter</h2>
                <p>Subscribe to our Newsletter</p>
                <input type='text' placeholder='Enter your email'></input>
                <button className='btn white'>Subscribe</button>
              </div>
          </div>
    </section>
  )
}

export default Footer