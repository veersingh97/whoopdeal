import React from "react";
import Header from "../../Components/Header/Header";
import "./About.css";
import HeroSection from "../../Components/HeroSection/HeroSection";

const About = () => {
  return (
    <div className="about-section">
      <HeroSection />
      <div className="whoAreWe">
        <h2>Who Are We</h2>
        <p>
          Whoop Deal is guided by four principles: customer obsession rather
          than competitor focus, passion for invention, commitment to
          operational excellence, and long-term thinking. Whoop Deal strives to
          be Earth’s most customer-centric company, Earth’s best employer, and
          Earth’s safest place to work. Customer reviews, 1-Click shopping,
          personalized recommendations, Prime, Fulfillment by Whoop Deal, AWS,
          Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire
          TV, Whoop Deal Echo, Alexa, Just Walk Out technology, Whoop Deal
          Studios, and The Climate Pledge are some of the things pioneered by
          Whoop Deal.
        </p>
        <h2>What We Do</h2>
        <p>
          Although our business has evolved over the years, one constant is
          customers’ desire for lower prices, better selection, and convenient
          services. Today, Amazon shoppers can find what they’re looking for
          online and in person. From delivering fresh produce to their doorstep
          to creating and distributing movies, music, and more, we are always
          finding new ways to delight our customers.
        </p>
      </div>
    </div>
  );
};

export default About;
