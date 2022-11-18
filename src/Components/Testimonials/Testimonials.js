import React from 'react';
import  { useState } from "react";
import data from "./data";
import './Testimonials.css';
import {HiArrowCircleRight,HiArrowCircleLeft} from 'react-icons/hi';
import {FaQuoteLeft} from 'react-icons/fa';


const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const nextOption = () => {
      if (index === 3) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };
  
    const preOption = () => {
      if (index === 0) {
        setIndex(3);
      } else {
        setIndex(index - 1);
      }
    };
  
    return (
      <section className='testi-section'>
        <div className="header">
          <h1>Testimonials</h1>
        </div>
        <div className="body">
          <div className="left-arrow">
            <button onClick={preOption} className='testi-btn'><HiArrowCircleLeft/></button>
          </div>
          <div className="body-content">
            <img src={data[index].image} className='testi-img' alt='hg'></img>
            <h2 className='person-name'>{data[index].name}</h2>
            <FaQuoteLeft/>
            <p className='person-quote'>{data[index].quote}</p>
          </div>
          <div className="right-arrow">
            <button onClick={nextOption} className='testi-btn'><HiArrowCircleRight/></button>
          </div>
        </div>
      </section>
    );
  }

export default Testimonials