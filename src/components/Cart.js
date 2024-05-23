import React from 'react'
import {  useSelector } from 'react-redux';

import CartItem from './CartItem';

 const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
   
  return (
    <div>
        
        {cartItems.length===0 ? (
        <div className='cart-empty-head'>
          <div>
          <div className='cart-img'><img alt='' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0'/></div>
          <div className='cart-content'>
          <div><h3>Your cart is empty</h3></div>
          <button className="main-btn">SEE RESTAURANTS NEAR YOU</button>
          </div>
          </div>
        </div>
        ) : (
        <div className='cart-main'>
            <CartItem itemsData={cartItems}/>
            
        </div>
         )}
    </div>
  )
}

export default Cart;
