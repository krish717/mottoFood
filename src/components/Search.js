import React, { useState, useEffect } from "react";
import { SEARCH_BANNER_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [SearchBanner, setSearchBanner] = useState([]);
  const [SearchData, setSearchData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Flanding%2FPRE_SEARCH%3Flat%3D28.65420%26lng%3D77.23730"
    );

    const json = await data.json();
    setSearchBanner(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };
  const fetchDataSearch = async () => {
    const data = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Fsearch%2Fsuggest%3Flat%3D28.65420%26lng%3D77.23730%26str%3D" +
        searchText
    );

    const json = await data.json();
    console.log(json?.data?.suggestions)
    setSearchData(json?.data?.suggestions);
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setSearchText(event.target.value);
    fetchDataSearch();
  };

  return (
    <>
      <div className="search-container">
        <div className="body-box search-page">
          <div className="search-input">
            <input
              type="search"
              placeholder="Search for restaurants"
              value={searchText}
              onChange={handleInputChange}
            />
          </div>
          <div className="search-pre-list">
            {searchText === "" && SearchBanner?.map((bannerImg) => (
              <div className="search-pre-item">
                <img
                  src={SEARCH_BANNER_IMG_URL + bannerImg?.imageId}
                  alt=""
                  className="search-img"
                />
              </div>
            ))}
          </div>
          <div>
            {SearchData?.length !== 0 ? 
            SearchData?.map((searchRes) => (
                
              <div class="search-list">
                <Link to={
									"/restaurants/" +
									searchRes?.metadata
										?.split('"primaryRestaurantId":')[1]
										?.split(",")[0]
								}>
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${searchRes.cloudinaryId}`}
                    alt=""
                  />
                  <div>
                    <p>{searchRes.text}</p>
                    <p>{searchRes.type}</p>
                  </div>
                </Link>
              </div>
            )) :
            (searchText !== "" && 
            <div>
                <img className="no-res-img" src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696458.jpg?w=740&t=st=1707770818~exp=1707771418~hmac=2f659884f97f78536f73ce53b1bebb2ccf9483660854e7faaff54325df335e0b" alt="" />
            </div>)
}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
