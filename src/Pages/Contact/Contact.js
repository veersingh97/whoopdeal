import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="meet-us">
        <h2>Meet Us</h2>
        <div>
          <div className="phone">
            <BsFillTelephoneFill />
            <h3>Phone</h3>
          </div>
          <p>+91 9876543210</p>
        </div>
        <div>
          <div className="office">
            <ImLocation2 />
            <h3>Our Office</h3>
          </div>
          <p>28 White Tower, Dwarka, New Delhi</p>
        </div>
        <div>
          <div className="email">
            <MdEmail />
            <h3>Our Email</h3>
          </div>
          <p>abc@gmail.com</p>
        </div>
      </div>
      <div className="form">
        <form>
          <h2>Get In Touch</h2>
          <label>Name</label>
          <input type="text" placeholder="Enter Your Name"></input>
          <label>Email</label>
          <input type="text" placeholder="Enter a Valid Email"></input>
          <label>How Can We Help?</label>
          <input type="text" placeholder="Enter Your Meassage Here"></input>
          <button className="btn clear top-margin">Submit</button>
        </form>
      </div>
      <div className="mobile-flexbox">
        <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14009.831487470361!2d77.02190145!3d28.61603625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1668511755938!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="maps"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
