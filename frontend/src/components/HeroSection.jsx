import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>Time to party</h3>
        <div>
          <h1>THE PERFECT VENUE FOR YOUR NEXT EVENT</h1>
          <p>
          We believe that it is all about the BIG DREAMS and BIG CHEERS!!!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;