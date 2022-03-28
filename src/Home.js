import React from 'react';
import "./Home.css";
import Product from "./Product.js";

function  Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazonHomeCover"
        />

        <div className="home__row">
          <Product
            id="001"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Audible Logo Audible Audiobook"
            price={29.59}
            image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
            rating={5}
          />
          <Product
            id="002"
            title="Targeal Wireless Gaming Headset with Microphone - For PS5, PS4, PC, Laptop, Mac"
            price={55.55}
            image="https://m.media-amazon.com/images/I/61J5Voes5VL._AC_SY355_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="003"
            title="Security Camera 2K, blurams Baby Monitor Dog Camera 360-degree for Home Security"
            price={89.99}
            image="https://m.media-amazon.com/images/I/514Q-oBHk7L._AC_SX425_.jpg"
            rating={4}
          />
          <Product
            id="004"
            title="Floerns Women's Ditsy Floral Plunge Neck Knot Front A Line Short Dress"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81dtN6hrX1L._AC_UY445_.jpg"
            rating={3}
          />
          <Product
            id="005"
            title="Stone Lain Allison Stoneware Dish Set"
            price={45.25}
            image="https://m.media-amazon.com/images/I/71ELLy2+u3L._AC_SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="006"
            title="M3 Naturals Arabica Coffee Body Scrub with Collagen & Stem Cell"
            price={15.59}
            image="https://m.media-amazon.com/images/I/919lCbg6bOL._SY355_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;