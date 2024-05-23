import { React, useState } from "react";
import { CON_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

import { clearCart } from "../utils/cartSlice";
const CartItem = ({ itemsData }) => {
  // console.log(itemsData)

  const dispatch = useDispatch();
  const [count, setincrementCount] = useState(0);

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setincrementCount(count + 1);
  };

  const decrementCount = () => {
    // Update state with incremented value
    setincrementCount(count - 1);
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      
    <div className="cart-main-card">
      {itemsData.map((item) => (
        <div key={item?.card?.info?.id} className="cart-details">
          <div className="cart-img-main">
            <img src={CON_URL + item?.card?.info?.imageId} alt="Item" />
          </div>
         <div className="cart-details-all">
         <div className="cart-name">
            <span>{item?.card?.info?.name}</span>
          </div>
          

          <div className="cart-remove-btn">
            <button class="" onClick={decrementCount}>
              −
            </button>
            <span> {count}</span>
            <button class="" onClick={incrementCount}>
              +
            </button>
          </div>
          <div>
            <p>₹359</p>
          </div>
         </div>
        </div>
      ))}
      <div>
        <button className="main-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
    </div>
    </>
  );
};

export default CartItem;
