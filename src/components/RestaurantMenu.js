// import React, { useState } from 'react'
// import { useEffect } from 'react';
import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantsCategory from "./RestaurantsCategory";

const RestaurantMenu = () => {
  // const [restaurantsMenu,setrestaurantsMenu] = useState("");

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // const [ShowItems,setShowItems] = useState(null);
  const [ShowIndex, setShowIndex] = useState(null);
  const prevIndex = ShowIndex;

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const menuTitle =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(menuTitle);
  return (
    <div className="menu">
      <div className="menu-head">
        <h1>{name}</h1>
      </div>
      <div className="res-details1">
        <div className="resdetails2">
          <div className="resdetails3">
            <div className="menu-det">
            <span><i class="fa-solid fa-star"></i></span><p>{avgRating}</p>
              <p id="cost-fot-twp">{costForTwoMessage}</p>
            </div>
            <div className="menu-cusinies">
              <p>{cuisines.join(", ")}</p>
            </div>
            <div className="menu-list-det">
              <div className="line">
                <div className="line1"></div>
                <div className="line2"></div>
              </div>
              <div className="cont">
                <p>
                  Outlet <span>Rohini</span>
                </p>
                <div className="menu-mint">
                  <p>40-45 mins</p>
                </div>
              </div>
            </div>
            <div className="menu-fee">
              <div>
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
                  alt=""
                />
              </div>
              <p>2.4 kms | ₹49 Delivery fee will apply</p>
            </div>
          </div>
        </div>
      </div>
      <div className="deals-for-u">
        <div>
          <h1>Deals for you</h1>
        </div>
        <div className="deals-for-u2">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
            alt=""
          />
          <div className="deals-for-u3">
            <h3>Flat 134 off</h3>
            <p>USE FLATDEAL</p>
          </div>
        </div>
      </div>
      <div className="filter-btn2">
        <div className="filter-btn">
          <div className="contents">
            <div className="btn">Pure Veg</div>
          </div>
        </div>
        <div className="filter-btn" style={{ marginLeft: "8px" }}>
          <div className="contents">
            <div className="btn">Bestseller</div>
          </div>
        </div>
      </div>
      <div className="menu2">
        <h2>Menu</h2>
        {/* <ul>
        {menuTitle.itemCards?.map((item, index) => (
          <li key={index}>
            {item?.card?.info?.name} - Rs. {item.card?.info?.price / 100}
          </li>
        ))}
      </ul> */}
        <div>
          {category.map((category, index) => (
            <RestaurantsCategory
              categoryData={category?.card?.card}
              ShowItems={index === ShowIndex ? true : false}
              setShowIndex={() =>
                prevIndex === index ? setShowIndex(null) : setShowIndex(index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
