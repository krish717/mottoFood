import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
const Footer = () => {
  // Scroll To Top
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div className="footer-container">
      <div className="footer-container2">
        <div className="footer-container3">
          <Link to="/">
            <img className="logo" alt="img-logo" src={LOGO_URL} />
          </Link>
          <p>© 2024 KRISH</p>
        </div>
        <div className="footer-container3">
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Genie</li>
          </ul>
        </div>

        <div className="footer-container3">
          <div>
            <h2>Contact us</h2>
            <ul>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>

          <div>
            <h2>Legal</h2>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Investor Relations</li>
            </ul>
          </div>
        </div>

        <div className="footer-container3">
          <h2>We Deliver to:</h2>
          <ul>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
          </ul>
        </div>
      </div>
      <div class="scroll-top" onClick={scrollToTop}><i class="fa-solid fa-arrow-up"></i></div>
         
    
    </div>
  );
};

export default Footer;
