import React from "react";
import "./../App.css";

function Footer() {
  return (
    <footer className="footer-section">
      {/* Subscribe Section */}

      <div className="subscribe-section text-center">
        <h2>
          Subscribe to the G-Shop <span>New Arrivals</span> <br />& Other
          Information.
        </h2>

        <div className="subscribe-box">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="form-control"
          />
          <button className="subscribe-btn">Subscribe Now</button>
        </div>
      </div>

      {/* Footer Links */}

      <div className="container footer-links">
        <div className="row">
          {/* Category */}

          <div className="col-lg-3 col-md-6">
            <h5>Category</h5>
            <ul>
              <li>Testimonials</li>
              <li>Contact</li>
              <li>Location & Working Hours</li>
              <li>Our Guarantee</li>
              <li>Track Your Order</li>
              <li>Help Page</li>
            </ul>
          </div>

          {/* Quick Links */}

          <div className="col-lg-3 col-md-6">
            <h5>Quick Links</h5>
            <ul>
              <li>Your Account</li>
              <li>Returns & Exchanges</li>
              <li>Return Center</li>
              <li>Purchase History</li>
              <li>Latest News Blog</li>
              <li>Shipping & Delivery</li>
            </ul>
          </div>

          {/* Contact Us */}

          <div className="col-lg-3 col-md-6">
            <h5>Contact Us</h5>
            <ul>
              <li>Testimonials</li>
              <li>Contact</li>
              <li>Location & Working Hours</li>
              <li>Our Guarantee</li>
              <li>Track Your Order</li>
              <li>Help Page</li>
            </ul>
          </div>

          {/* Customer Support */}

          <div className="col-lg-3 col-md-6">
            <h5>Customer Support</h5>
            <ul>
              <li>Your Account</li>
              <li>Returns & Exchanges</li>
              <li>Return Center</li>
              <li>Purchase History</li>
              <li>Latest News Blog</li>
              <li>Shipping & Delivery</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <p>
            © All rights reserved Made by <span>GroStore</span>
          </p>

          <img
            src="/images/logo-white.png"
            alt="logo"
            className="footer-logo"
          />

          <div className="payment-icons">
            <img src="/images/visa.png" alt="visa" />
            <img src="/images/mastercard.png" alt="master" />
            <img src="/images/payoneer.png" alt="pioneer" />
            <img src="/images/paypal.png" alt="paypal" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
