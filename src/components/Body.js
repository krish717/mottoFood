import React from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CON_URL } from "../utils/constants";

// import Collection from "./Collection";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [chainRestaurants, setchainRestaurants] = useState([]);
  const [listCategory, setlistCategory] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const [originalList, setOriginalList] = useState([]);

  const scrollHandler = (idx, direction) => {
    const box = document.querySelectorAll(".topBrand")[idx];
    if (direction === "left") {
      box.scrollLeft += -(box.clientWidth - box.clientWidth * 0.15);
    } else {
      box.scrollLeft += box.clientWidth - box.clientWidth * 0.15;
    }
  };

  console.log(listofRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.65420%26lng%3D77.23730%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json)
    setlistofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setchainRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginalList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setlistCategory(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  function extractCollectionId(url) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    return urlParams.get("collection_id");
  }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>you are offline</h1>;

  return listofRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body" style={{ backgroundColor: "white" }}>
      <div className="category-container">
        <div className="category-container1">
          <div className="category-title">
            <h2>What's on your mind?</h2>
            <div class="scr-btn">
              <span
                onClick={(e) => {
                  scrollHandler(0, "left");
                }}
              >
                <i class="fa-solid fa-arrow-left"></i>
              </span>
              &nbsp;&nbsp;
              <span
                onClick={(e) => {
                  scrollHandler(0, "right");
                }}
              >
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
          <div className="category-container2 topBrand">
            {listCategory?.map((category) => (
              <Link
                key={extractCollectionId(category.action?.link)}
                to={"/collection/" + extractCollectionId(category.action?.link)}
              >
                <div className="category-img">
                  <img src={CON_URL + category.imageId} alt="category-img" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="chain-container1">
        <div className="chain-container2">
          <div className="category-title">
            <h2>Top restaurant chains in Delhi</h2>
            <div class="scr-btn">
              <span
                onClick={(e) => {
                  scrollHandler(1, "left");
                }}
              >
                <i class="fa-solid fa-arrow-left"></i>
              </span>
              &nbsp;&nbsp;
              <span
                onClick={(e) => {
                  scrollHandler(1, "right");
                }}
              >
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
          <div className="res-container topBrand">
            {/* //RestaurantCard */}
            {chainRestaurants?.length === 0 ? (
              <Shimmer />
            ) : (
              chainRestaurants.map((restaurant) => (
                <Link
                  key={restaurant.info.id}
                  to={"/restaurants/" + restaurant.info.id}
                >
                  <RestaurantCard resData={restaurant} />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="search">
          <input placeholder="Search Restaurants"
            type="text"
            className="search-box"
            value={SearchText}
            onChange={(e) => {
              const searchText = e.target.value.trim().toLowerCase(); // Trim whitespace from input
              const filteredRestaurants = originalList.filter(
                (res) => res.info.name.toLowerCase().includes(searchText)
                // setSearchText(e.target.value)
              );
              setSearchText(searchText);
              setlistofRestaurants(filteredRestaurants);
            }}
          />
          {/* <button className="search-btn" >Search</button> */}
        </div>

        <div className="filter-btn">
          <div className="contents">
            <div
              className="btn"
              onClick={() => {
                const filteredList = listofRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );

                setlistofRestaurants(filteredList);
                // console.log(listofRestaurants)
              }}
            >
              Top Rated Restaurants
            </div>
          </div>
        </div>
      </div>
      <div className="res-container2">
        {/* //RestaurantCard */}
        {listofRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          listofRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
