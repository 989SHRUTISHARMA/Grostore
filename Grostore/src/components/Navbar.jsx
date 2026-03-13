import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { IoMoon, IoClose } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { FaBars } from "react-icons/fa";

import {
  FaHeartbeat,
  FaPhoneAlt,
  FaBaby,
  FaBroom,
  FaBreadSlice,
  FaCoffee,
  FaAppleAlt,
  FaFish,
  FaDrumstickBite,
  FaWineBottle,
  FaPaw,
  FaUser,
  FaRunning,
  FaShoppingBasket,
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* GREEN TOP BAR */}
      <div className="green-wrapper">
        <div className="top-bar container">
          <div className="text-white fw-bold">Welcome to Our Organic Store</div>
          <div className="right-info">
            <span className="text-white fw- semi-bold top-divider">
              <CgMail className="me-2 fs-4 " />
              chakrabortyshubhjeet@gmail.com
            </span>
            <span className="text-white fw- semi-bold top-divider">
              <FaMapMarkerAlt className="me-2 fs-5 " />
              Vijay nagar ,Indore,India
            </span>

            <div className="lang-dropdown">
              <span className="lang-selected text-white fw-bold top-divider">
                <img src="/images/usd.svg" alt="English" />
                English ▾
              </span>

              <div className="lang-menu top-divider">
                <div>
                  <img src="/images/usd.svg" alt="" />
                  English
                </div>
                <div>
                  <img src="/images/bdt.svg" alt="" />
                  Bangla
                </div>
                <div>
                  <img src="/images/inr.svg" alt="" />
                  Hindi
                </div>
              </div>
            </div>

            <span className="currency-dropdown text-white fw-bold top-divider">
              $ USD ▾
              <div className="currency-menu text-white">
                <div>$ USD</div>
                <div>৳ BDT</div>
                <div>₹ INR</div>
                <div>€ EUR</div>
              </div>
            </span>
            <span className="text-white fs-6 fw-bold">
              Dark <IoMoon className="ms-1" />
            </span>
          </div>
        </div>
      </div>

      {/* WHITE NAVBAR */}
      <div className="navbar-box">
        <div className="container navbar-inner">

          {/* LOGO */}
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className="navbar-logo" />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <div className="mobile-menu-btn" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>

          {/* MENU */}
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

            {/* CLOSE BUTTON */}
            <div className="mobile-close" onClick={() => setMenuOpen(false)}>
              <IoClose />
            </div>

            {/* BROWSE CATEGORY */}
            <li className="mega-parent">
              <span className="mega-title">Browse Category ▾</span>

              <div className="mega-menu-custom">
                <div className="mega-column">
                  <div>
                    <FaBaby className="cat-icon pink" /> Baby Care
                  </div>
                  <div>
                    <FaCoffee className="cat-icon brown" /> Coffee
                  </div>
                  <div>
                    <FaWineBottle className="cat-icon blue" /> Cold Drinks
                  </div>
                  <div>
                    <FaAppleAlt className="cat-icon green" /> Fresh
                  </div>
                  <div>
                    <FaFish className="cat-icon sky" /> Sea Fish
                  </div>
                </div>

                <div className="mega-column">
                  <div>
                    <FaBroom className="cat-icon blue" /> Cleaning
                  </div>
                  <div>
                    <FaHeartbeat className="cat-icon pink" /> Beauty and Health
                  </div>
                  <div>
                    <FaAppleAlt className="cat-icon green" /> Fruits
                  </div>
                  <div>
                    <FaShoppingBasket className="cat-icon yellow" /> Grocery
                  </div>
                  <div>
                    <FaPaw className="cat-icon purple" /> Pet Care
                  </div>
                </div>

                <div className="mega-column">
                  <div>
                    <FaBreadSlice className="cat-icon orange" /> Bakery
                  </div>
                  <div>
                    <FaCoffee className="cat-icon yellow" /> Breakfast
                  </div>
                  <div>
                    <FaShoppingBasket className="cat-icon gold" /> Honey
                  </div>
                  <div>
                    <FaRunning className="cat-icon teal" /> Fitness
                  </div>
                  <div>
                    <FaDrumstickBite className="cat-icon red" /> Meat
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link to="/">Home ▾</Link>
            </li>

            <li className="dropdown">
              Products ▾
              <div className="dropdown-menu-custom">
                <Link to="#">Shop Grid</Link>
                <Link to="#">Shop Grid V2</Link>
                <Link to="#">Product Details</Link>
              </div>
            </li>

            <li className="dropdown">
              Blog ▾
              <div className="dropdown-menu-custom">
                <Link to="#">Blog Grid</Link>
                <Link to="#">Blog List</Link>
                <Link to="#">Blog Details</Link>
              </div>
            </li>

            <li className="dropdown pages-dropdown">
              Pages ▾
              <div className="dropdown-menu-custom">
                <div className="drop">
                  <Link to="#">About us</Link>
                  <Link to="#">Services Details</Link>
                  <Link to="#">Cart</Link>
                  <Link to="#">Checkout</Link>
                  <Link to="#">Contact</Link>
                  <Link to="#">Login</Link>
                  <Link to="#">404 page</Link>
                  <Link to="#">All Campaigns</Link>
                  <Link to="#">All coupons</Link>
                </div>
                <div className="drop">
                  <Link to="#">Services</Link>
                  <Link to="#">My Account</Link>
                  <Link to="#">Wishlist</Link>
                  <Link to="#">Invoice</Link>
                  <Link to="#">Team</Link>
                  <Link to="#">Sign up</Link>
                  <Link to="#">500 Error page</Link>
                  <Link to="#">Campaigns Details</Link>
                </div>
              </div>
            </li>
          </ul>

          <div className="nav-icons fs-4 ">
            <CiSearch className="icons mx-2" />
            <div className="user-dropdown-container">
              <CiUser className="icons mx-4" />
              <div className="user-menu-custom fs-4 ">
                <Link to="/account">
                  <FaUser className="me-2 text-semi-bold" /> My Account
                </Link>
                <Link to="/cart">
                  <FaShoppingCart className="me-2 text-semi-bold" /> My Cart
                </Link>
                <Link to="/wishlist">
                  <FaHeart className="me-2 text-semi-bold" /> My Wishlist
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/logout" className="text-semi-bold">
                  <PiSignOutBold className="me-2 text-semi-bold" /> Sign Out
                </Link>
              </div>
            </div>
            <CiShoppingCart className="icons mx-2" />
          </div>

          <div className="phone-box">
            <div className="phone-icon-circle">
              <FaPhoneAlt />
            </div>
            <div>
              <small className="fs-5">Phone & Telephone</small>
              <div className="fw-bold">+91 88270 57950</div>
            </div>
            <div className="grid-icon">
              <BsGrid3X3GapFill />
            </div>
          </div>

        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;