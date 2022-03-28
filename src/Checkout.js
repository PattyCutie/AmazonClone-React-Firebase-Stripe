import React from "react";
import "./Checkout.css"; 
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { auth } from './firebase';
import { Link } from "react-router-dom";


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.user();
    }
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://cdn.andnowuknow.com/mainStoryImage/amazon_newstore_111119.png?2elFDH.NARL3RqUKy0Nq2e.e1THgJeWI"
          alt=""
        />
        <div>
          <Link to={user ? '/checkout' : '/login'}>
          <h3  onClick={handleAuthentication}>Hello, {user ? user.email : "Guest, Please Sign In to your account or Register"}</h3>
          </Link>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
