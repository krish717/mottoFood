import React from 'react';
 // Ensure this file contains the styles below

const Shimmer = () => {
  return (
    <div>
      <div className="main-home-shimmer">
        <div className="outer_circle">
          <div className="inner_circle">
            <i className="fa-solid fa-pizza-slice fa-fade"></i>
          </div>
        </div>
        <h2>Looking for great food near you ...</h2>
      </div>
      <div className="shimmer-container">
    {Array(10).fill("").map((_, idx) => (
      <div className="shimmer-res-card" key={idx}>
        <div className="shimmer-res-card-img"></div>
        <div className="shimmer-res-det">
          <div className="shimmer-res-name"></div>
          <div className="shimmer-res-details">
            <div className="shimmer-detail"></div>
            <div className="shimmer-detail"></div>
          </div>
          <div className="shimmer-cuisines"></div>
        </div>
      </div>
    ))}
  </div>
    </div>
  );
}



export default Shimmer;
