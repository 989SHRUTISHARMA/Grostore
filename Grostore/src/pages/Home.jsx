// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaHeart, FaSyncAlt } from "react-icons/fa";
// import { useState } from "react";
import React, { useState, useEffect } from "react";
import {
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import { CiStar, CiHeart, CiSearch, CiShuffle } from "react-icons/ci";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";

import "./../App.css";
const productImages = [
  "/images/p-sm-1.png",
  "/images/p-sm-2 (1).png",
  "/images/p-sm-3 (1).png",
  "/images/p-sm-3 (1).png",
];
const productImages1 = [
  {
    img: "/images/p-sm-1.png",
    name: "European Lemon Zest",
    old: "$240.00",
    price: "$140.00",
  },
  {
    img: "/images/p-sm-2 (1).png",
    name: "European Lemon Zest",
    old: "$240.00",
    price: "$140.00",
  },
  {
    img: "/images/p-sm-3 (1).png",
    name: "European Lemon Zest",
    old: "$240.00",
    price: "$140.00",
  },
];

function Hero() {
  return (
    <section className="hero-section py-0">
      {/* ===== SOCIAL SIDEBAR ===== */}
      <div className="social-sidebar">
        <FaYoutube />
        <FaLinkedinIn />
        <FaTwitter />
        <FaFacebookF />
        <div className="divider-line"></div>
        <span className="follow-text">Follow On </span>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 ">
            <div className="genuine-wrapper">
              <img
                src="/images/hero-circle-sm.png"
                alt="circle"
                className="genuine-circle"
              />
              <h6 className="text-warning fw-bold genuine-text">
                Genuine 100% Organic Products
              </h6>
            </div>
            <h1 className="hero-title">
              Online Fresh Grocery <span className="text-orange">Products</span>
            </h1>
            <p className="text-muted">
              Assertively target market-driven intellectual capital with
              worldwide human capital holistic.
            </p>
            <div className="mt-4">
              <button className="btn-orange me-3">Shop Now →</button>
              <button className="btn-success">About Us →</button>
            </div>
            <div className="mango-wrapper">
              <img src="/images/mango.png" alt="mango" className="mango-img" />
            </div>
          </div>
          <div className="col-lg-6 hero-right">
            <img
              src="/images/hero-circle-lg.png"
              alt="circle"
              className="circle-img"
            />
            <img src="/images/fruits.png" alt="fruits" className="basket-img" />
            <img src="/images/tree.png" alt="tree" className="tree-img" />
            <img src="/images/orange-1.png" alt="orange1" className="lemon1" />
            <img src="/images/orange-2.png" alt="orange2" className="lemon2" />
            <img
              src="/images/leaf-shadow.png"
              alt="leaf"
              className="leaf-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Swiper wrapper
export default function Home() {
  const [active, setActive] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isMobile ? (
        <Hero />
      ) : (
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          // mousewheel={true}
          modules={[Pagination ,Autoplay]}
            autoplay={{
             delay: 2500,
           disableOnInteraction: false
         }}
          className="mySwiper"
          speed={800}
          breakpoints={{
            0: {
              allowTouchMove: false, // mobile me swipe off
              mousewheel: false,
            },
            992: {
              allowTouchMove: true, // desktop me swipe on
              mousewheel: true,
            },
          }}
        >
          <SwiperSlide>
            <Hero />
          </SwiperSlide>
          <SwiperSlide>
            <Hero />
          </SwiperSlide>
          <SwiperSlide>
            <Hero />
          </SwiperSlide>
        </Swiper>
      )}
      {/*  ===== OUR TOP CATEGORY SECTION ===== */}
      <section className="top-category-section">
        <h2 className="section-title">Our Top Category</h2>
        <div className="container">
          <div className="category-wrapper">
            <div className="category-card">
              <div className="cat-circle green-bg">
                <img src="/images/vegetable.png" alt="veg" />
              </div>
              <h6>Vegetable</h6>
              <span className="dot-green">25 Items</span>
              <div className="arrow-icon">
                <FaArrowUpRightFromSquare />
              </div>
            </div>

            <div className="category-card">
              <div className="cat-circle pink-bg">
                <img src="/images/fresh-fruits.png" alt="fruits" />
              </div>
              <h6>Fresh Fruits</h6>
              <span className="dot-pink">25 Items</span>
              <div className="arrow-icon">
                <FaArrowUpRightFromSquare />
              </div>
            </div>

            <div className="category-card">
              <div className="cat-circle blue-bg">
                <img src="/images/milk.png" alt="milk" />
              </div>
              <h6>Milk & Dairy</h6>
              <span className="dot-blue">25 Items</span>
              <div className="arrow-icon">
                <FaArrowUpRightFromSquare />
              </div>
            </div>

            <div className="category-card active">
              <div className="cat-circle orange-bg">
                <img src="/images/coffee-drinks.png" alt="coffee" />
              </div>
              <h6>Coffee & Drinks</h6>
              <span className="dot-orange">25 Items</span>
              <div className="arrow-icon">
                <FaArrowUpRightFromSquare />
              </div>
            </div>

            <div className="category-card">
              <div className="cat-circle red-bg">
                <img src="/images/meat.png" alt="meat" />
              </div>
              <h6>Meat</h6>
              <span className="dot-red">25 Items</span>
              <div className="arrow-icon">
                <FaArrowUpRightFromSquare />
              </div>
            </div>

            <div className="category-card">
              <div className="cat-circle purple-bg">
                <img src="/images/cleaning.png" alt="cleaning" />
              </div>
              <h6>Cleaning Essential</h6>
              <span className="dot-purple">25 Items</span>
              <div className="arrow-icon">
                <FaArrowUpRightFromSquare />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="roll-wrapper">
        <img src="/images/roll-1.png" alt="roll" className="roll-img" />
        <div>
          <img src="/images/roll-2.png" alt="roll" className="roll-img2" />
        </div>
      </div>
      <section className="featured-products">
        <div className="container">
          <h2 className="featured-title text-center">
            Featured Brand Products
          </h2>

          <p className="featured-sub text-center">
            Platform mindshare through effective infomediaries Dynamically
            implement.
          </p>

          <div className="featured-wrapper row">
            {/* LEFT SIDE */}

            <div className="product-column col-lg-4 col-md-6 col-12">
              <div className="product-card">
                <div className="product-img">
                  <img src="/images/p-sm-1.png" alt="" />

                  <div className="hover-icons">
                    <span className="icons">
                      <CiHeart />
                    </span>
                    <span className="icons">
                      <FaEye />
                    </span>
                    <span className="icons">
                      <CiShuffle />
                    </span>
                  </div>
                </div>

                <div className="product-info">
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>(5.2k Reviews)</span>
                  </div>

                  <h4>Strawberry Fruit</h4>

                  <p className="price">
                    <span className="old">$230.00</span>
                    <span className="new">$180.00</span>
                  </p>

                  <p className="shop">Shop Now →</p>
                </div>
              </div>

              <div className="product-card">
                <div className="product-img">
                  <img src="/images/p-sm-2 (1).png" alt="" />

                  <div className="hover-icons">
                    <span className="icons">
                      <CiHeart />
                    </span>
                    <span className="icons">
                      <FaEye />
                    </span>
                    <span className="icons">
                      <CiShuffle />
                    </span>
                  </div>
                </div>

                <div className="product-info">
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>(5.2k Reviews)</span>
                  </div>

                  <h4>Fresh Tomato</h4>

                  <p className="price">
                    <span className="old">$120.00</span>
                    <span className="new">$100.00</span>
                  </p>

                  <p className="shop">Shop Now →</p>
                </div>
              </div>

              <div className="product-card">
                <div className="product-img">
                  <img src="/images/p-sm-3 (1).png" alt="" />

                  <div className="hover-icons">
                    <span className="icons">
                      <CiHeart />
                    </span>
                    <span className="icons">
                      <FaEye />
                    </span>
                    <span className="icons">
                      <CiShuffle />
                    </span>
                  </div>
                </div>

                <div className="product-info">
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>(5.2k Reviews)</span>
                  </div>

                  <h4>European Lemon</h4>

                  <p className="price">
                    <span className="old">$30.00</span>
                    <span className="new">$20.00</span>
                  </p>

                  <p className="shop">Shop Now →</p>
                </div>
              </div>

              <div className="product-card">
                <div className="product-img">
                  <img src="/images/p-sm-2 (1).png" alt="" />

                  <div className="hover-icons">
                    <span className="icons">
                      <CiHeart />
                    </span>
                    <span className="icons">
                      <FaEye />
                    </span>
                    <span className="icons">
                      <CiShuffle />
                    </span>
                  </div>
                </div>

                <div className="product-info">
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <h4>Fresh Tomato</h4>

                  <p className="price">
                    <span className="old">$550.00</span>
                    <span className="new">$420.00</span>
                  </p>

                  <p className="shop">Shop Now →</p>
                </div>
              </div>
            </div>

            {/* CENTER CARD */}

            <div className="promo-card col-lg-4 col-md-12 col-12">
              <span className="organicss">100% Organic Products</span>

              <h3>
                Fresh Fruits <br />
                Healthy Juice
              </h3>

              <p>Get 50% Off on Selected Organic Items</p>

              <button className="shop-btn">Shop Now →</button>

              <div className="promo-img-box">
                <img src="/images/pago.png" alt="" className="promo-img" />

                <img
                  src="/images/circle-md.png"
                  alt=""
                  className="circle-img"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="product-column col-lg-4 col-md-6 col-12">
              <div className="product-card">
                <div className="product-img">
                  <img src="/images/p-sm-2 (1).png" alt="" />

                  <div className="hover-icons">
                    <span className="icons">
                      <CiHeart />
                    </span>
                    <span className="icons">
                      <FaEye />
                    </span>
                    <span className="icons">
                      <CiShuffle />
                    </span>
                  </div>
                </div>

                <div className="product-info">
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>(5.2k Reviews)</span>
                  </div>

                  <h4>Fresh Tomato</h4>

                  <p className="price">
                    <span className="old">$120.00</span>
                    <span className="new">$100.00</span>
                  </p>

                  <p className="shop">Shop Now →</p>
                </div>
              </div>

              <div className="product-card">
                <div className="product-img">
                  <img src="/images/p-sm-3 (1).png" alt="" />

                  <div className="hover-icons">
                    <span className="icons">
                      <CiHeart />
                    </span>
                    <span className="icons">
                      <FaEye />
                    </span>
                    <span className="icons">
                      <CiShuffle />
                    </span>
                  </div>
                </div>

                <div className="product-info">
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>(5.2k Reviews)</span>
                  </div>

                  <h4>European Lemon</h4>

                  <p className="price">
                    <span className="old">$750.00</span>
                    <span className="new">$650.00</span>
                  </p>

                  <p className="shop">Shop Now →</p>
                </div>
              </div>

              <div className="product-card">
                <div className="product-img">
                  <img src="/images/p-sm-2 (1).png" alt="" />

                  <div className="hover-icons">
                    <span className="icons">
                      <CiHeart />
                    </span>
                    <span className="icons">
                      <FaEye />
                    </span>
                    <span className="icons">
                      <CiShuffle />
                    </span>
                  </div>
                </div>

                <div className="product-info">
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>(5.2k Reviews)</span>
                  </div>

                  <h4>Fresh Tomato</h4>

                  <p className="price">
                    <span className="old">$550.00</span>
                    <span className="new">$420.00</span>
                  </p>

                  <p className="shop">Shop Now →</p>
                </div>
              </div>

              <div className="product-card">
                <div className="product-img">
                  <img src="/images/p-sm-1.png" alt="" />

                  <div className="hover-icons">
                    <span className="icons">
                      <CiHeart />
                    </span>
                    <span className="icons">
                      <FaEye />
                    </span>
                    <span className="icons">
                      <CiShuffle />
                    </span>
                  </div>
                </div>

                <div className="product-info">
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>(5.2k Reviews)</span>
                  </div>

                  <h4>Strawberry</h4>

                  <p className="price">
                    <span className="old">$80.00</span>
                    <span className="new">$60.00</span>
                  </p>

                  <p className="shop">Shop Now →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trending-section">
        <div className="container">
          <div className="trending-header">
            <h2>Top Trending Products</h2>

            <div className="category-filter">
              <span
                className={active === "all" ? "active" : ""}
                onClick={() => setActive("all")}
              >
                All Products
              </span>

              <span
                className={active === "sea" ? "active" : ""}
                onClick={() => setActive("sea")}
              >
                Sea Food
              </span>

              <span
                className={active === "veg" ? "active" : ""}
                onClick={() => setActive("veg")}
              >
                Vegetables
              </span>

              <span
                className={active === "beans" ? "active" : ""}
                onClick={() => setActive("beans")}
              >
                Beans & Peas
              </span>
            </div>
          </div>

          <div className="row g-4">
            {/* CARD 1 */}
            {active === "all" && (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="product-card">
                  <div className="product-imgs">
                    <img src="/images/apple.png" alt="apple" />

                    <div className="iconss">
                      <span className="icon1">
                        <CiHeart />
                      </span>
                      <span className="icon2">
                        <CiShuffle />
                      </span>
                      <span className="icon3">
                        <FaEye />
                      </span>
                    </div>
                  </div>

                  <p className="organic">Fresh Organic</p>
                  <h4>Popped Rice Crisps Snacks Chocolate.</h4>

                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>(5.2k Reviews)</span>
                  </div>

                  <h3 className="price">$140.00</h3>

                  <div className="progresss">
                    <div className="progress-barr"></div>
                  </div>

                  <p className="available">
                    Available:<span>40/100</span>
                  </p>

                  <button className="add-cart">Add to Cart</button>
                </div>
              </div>
            )}

            {/* CARD 2 */}
            {(active === "all" || active === "sea") && (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="product-card">
                  <span className="discount">-12% OFF</span>

                  <div className="product-imgs">
                    <img src="/images/apple-black.png" alt="apple black" />

                    <div className="iconss">
                      <span className="icon1">
                        <CiHeart />
                      </span>
                      <span className="icon2">
                        <CiShuffle />
                      </span>
                      <span className="icon3">
                        <FaEye />
                      </span>
                    </div>
                  </div>

                  <p className="organic">Fresh Organic</p>
                  <h4>Popped Rice Crisps Snacks Chocolate.</h4>

                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>(5.2k Reviews)</span>
                  </div>

                  <h3 className="price">$140.00</h3>

                  <div className="progresss">
                    <div className="progress-barr"></div>
                  </div>

                  <p className="available">
                    Available:<span>40/100</span>
                  </p>

                  <button className="add-cart">Add to Cart</button>
                </div>
              </div>
            )}

            {/* CARD 3 */}
            {(active === "all" || active === "veg") && (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="product-card">
                  <div className="product-imgs">
                    <img src="/images/pinut.png" alt="peanut" />

                    <div className="iconss">
                      <span className="icon1">
                        <CiHeart />
                      </span>
                      <span className="icon2">
                        <CiShuffle />
                      </span>
                      <span className="icon3">
                        <FaEye />
                      </span>
                    </div>
                  </div>

                  <p className="organic">Fresh Organic</p>
                  <h4>Popped Rice Crisps Snacks Chocolate.</h4>

                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>(5.2k Reviews)</span>
                  </div>

                  <h3 className="price">$140.00</h3>

                  <div className="progresss">
                    <div className="progress-barr"></div>
                  </div>

                  <p className="available">
                    Available:<span>40/100</span>
                  </p>

                  <button className="add-cart">Add to Cart</button>
                </div>
              </div>
            )}

            {/* CARD 4 */}
            {(active === "all" || active === "beans") && (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="product-card">
                  <span className="discount">-12% OFF</span>

                  <div className="product-imgs">
                    <img src="/images/stroberry.png" alt="strawberry" />

                    <div className="iconss">
                      <span className="icon1">
                        <CiHeart />
                      </span>
                      <span className="icon2">
                        <CiShuffle />
                      </span>
                      <span className="icon3">
                        <FaEye />
                      </span>
                    </div>
                  </div>

                  <p className="organic">Fresh Organic</p>
                  <h4>Popped Rice Crisps Snacks Chocolate.</h4>

                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>(5.2k Reviews)</span>
                  </div>

                  <h3 className="price">$140.00</h3>

                  <div className="progresss">
                    <div className="progress-barr"></div>
                  </div>

                  <p className="available">
                    Available:<span>40/100</span>
                  </p>

                  <button className="add-cart">Add to Cart</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="weekly-deals">
        <div className="container">
          <div className="row g-4">
            {/* Left Banner */}
            <div className="col-lg-4">
              <div className="deal-banner">
                <span className="tag">100% Organic Vegetable</span>

                <h3>
                  Vegetable <br />
                  <strong>Fresh & Healthy</strong>
                </h3>

                <p>Get 50% Off on Selected Organic Items</p>

                <button className="btn1">Show Now →</button>

                <img
                  src="/images/vegetables.png"
                  alt=""
                  className="banner-img"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-8">
              {/* Header */}
              <div className="deals-header d-flex justify-content-between align-items-center">
                <h2>Weekly Best Deals</h2>

                <div className="countdown d-flex gap-2">
                  <div className="time-box">
                    00<span>Days</span>
                  </div>
                  <div className="time-box">
                    00<span>Hours</span>
                  </div>
                  <div className="time-box">
                    00<span>Min</span>
                  </div>
                  <div className="time-box">
                    00<span>Sec</span>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="row g-4 mt-2">
                {productImages.map((img, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="product-card d-flex">
                      <div className="product-img">
                        <img src={img} alt="product" />
                        <div className="hover-icons">
                          <span className="icons">
                            <CiHeart />
                          </span>
                          <span className="icons">
                            <FaEye />
                          </span>
                          <span className="icons">
                            <CiShuffle />
                          </span>
                        </div>
                      </div>

                      <div className="product-info">
                        <div className="stars">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <span>(5.2k Reviews)</span>
                        </div>

                        <h5>European Lemon Zest</h5>

                        <div className="price">
                          <del>$240.00</del>
                          <span>$140.00</span>
                        </div>

                        <button className="shop-now">Shop Now →</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brand-poster">
        <div className="brandimgs col-xl-6">
          <span className="topoffer">Top offer</span>
          <p className="offer">
            {" "}
            Fresh & Natural Healthy Food{" "}
            <span className="sp">Special offer</span>
          </p>
          <button className="bb">Shop Now</button>
        </div>
        <div className="col-xl-5">
          <div className="brandimgs1  rounded-3">
            <img src="/images/banner-3.png" alt="b2" className="imgs2"></img>
          </div>
        </div>
      </section>
      <section className="clients-section py-4">
        <div className="container text-center">
          <h2 className="client-title ">What Our Clients Say</h2>
          <div className="fd-imgs">
            <img src="/images/fd-1.png" alt="f1" className="fd1" />
            <img src="/images/fd-2.png" alt="f2" className="fd2" />
            <img src="/images/fd-3.png" alt="f3" className="fd3" />
            <img src="/images/fd-4.png" alt="f4" className="fd4" />
            <img src="/images/fd-5.png" alt="f5" className="fd5" />
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
           disableOnInteraction: false,
            }}
            speed={800}
            className="testimonial-swiper"
          >
            {[1, 2, 3, 4].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  {/* Client Image */}
                  <img
                    src={`/images/client-${item}.png`}
                    alt="client"
                    className="testimonial-client-img"
                  />

                  {/* Testimonial Text */}
                  <p>
                    "Amazing quality products! Fresh groceries are delivered on time, every time. The service is excellent and very customer-friendly. 
                    I love the variety and the organic freshness of the products. Highly recommended for anyone looking for reliable and top-quality groceries."
                  </p>

                  <h5>Rasmus Geisler</h5>

                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* product-3 */}
      <section className="product-section">
        <div className="container">
          <div className="product-grid">
            {/* LEFT COLUMN */}

            <div className="product-column">
              <div className="heading">
                <h3>New Products</h3>
                <span className="view">View More →</span>
              </div>

              {productImages1.map((item, index) => (
                <div className="product-card" key={index}>
                  <div className="product-img">
                    <img src={item.img} alt="product" />
                    <div className="hover-icons">
                      <span className="icons">
                        <CiHeart />
                      </span>
                      <span className="icons">
                        <FaEye />
                      </span>
                      <span className="icons">
                        <CiShuffle />
                      </span>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <span>(5.2k Reviews)</span>
                    </div>

                    <h4>{item.name}</h4>

                    <div className="price">
                      <del>{item.old}</del>
                      <span>{item.price}</span>
                    </div>

                    <p className="shop">Shop Now →</p>
                  </div>
                </div>
              ))}
            </div>

            {/* MIDDLE COLUMN */}

            <div className="product-column">
              <div className="heading">
                <h3>Organic Bestseller</h3>
                <span className="view">View More →</span>
              </div>

              {productImages1.map((item, index) => (
                <div className="product-card" key={index}>
                  <div className="product-img">
                    <img src={item.img} alt="product" />
                    <div className="hover-icons">
                      <span className="icons">
                        <CiHeart />
                      </span>
                      <span className="icons">
                        <FaEye />
                      </span>
                      <span className="icons">
                        <CiShuffle />
                      </span>
                    </div>
                  </div>

                  <div className="product-info">
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <span>(5.2k Reviews)</span>
                    </div>

                    <h4>{item.name}</h4>

                    <div className="price">
                      <del>{item.old}</del>
                      <span>{item.price}</span>
                    </div>

                    <p className="shop">Shop Now →</p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}

            <div className="spice-section">
              <div className="spice-banner">
                <h4>Fresh & Organic Spice</h4>

                <div className="discounts">
                  <span className="hot">HOT</span>
                  <span className="off">30% Off</span>
                </div>

                <p className="discountshop">Shop Now →</p>
              </div>

              <div className="stats">
                <div className="stat-box">
                  <img src="/images/letter-box.svg" alt="" />
                  <div>
                    <h3>455k+</h3>
                    <p>Total Products</p>
                  </div>
                </div>

                <div className="stat-box">
                  <img src="/images/thumbs-up.svg" alt="" />
                  <div>
                    <h3>16M+</h3>
                    <p>Customer Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recent Post Section */}

      <section className="recent-post py-5">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="post-title">Browse Recent Post</h2>
            <p className="post-desc">
              Interactively product distinctive paradigms whereas one-to-one
              intellectual capital. resource sucking services.
            </p>
            <div className="frame">
              <img
                src="/images/frame-circle.svg"
                alt=""
                className="framecircle"
              />
              <img src="/images/dal.png" alt="" className="dal" />
            </div>
          </div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="post-card">
                <img
                  src="/images/blog-thumb-1.jpg"
                  alt=""
                  className="img-fluid"
                />

                <div className="post-content">
                  <div className="post-meta">
                    <span>Organic Vegetable</span>
                    <span>March 24, 2026</span>
                  </div>

                  <h4>Holiday Home Delivery We have Recently Ordered</h4>

                  <p>
                    Holistically exploit equity invested growth strategies
                    whereas enterpris
                  </p>

                  <button className="explore-btn">Explore More →</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="post-card">
                <img
                  src="/images/blog-thumb-2.jpg"
                  alt=""
                  className="img-fluid"
                />

                <div className="post-content">
                  <div className="post-meta">
                    <span>Organic Vegetable</span>
                    <span>March 24, 2026</span>
                  </div>

                  <h4>Holiday Home Delivery We have Recently Ordered</h4>

                  <p>
                    Holistically exploit equity invested growth strategies
                    whereas enterpris
                  </p>

                  <button className="explore-btn">Explore More →</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="post-card">
                <img
                  src="/images/blog-thumb-3.jpg"
                  alt=""
                  className="img-fluid"
                />

                <div className="post-content">
                  <div className="post-meta">
                    <span>Organic Vegetable</span>
                    <span>March 24, 2026</span>
                  </div>

                  <h4>Holiday Home Delivery We have Recently Ordered</h4>

                  <p>
                    Holistically exploit equity invested growth strategies
                    whereas enterpris
                  </p>

                  <button className="explore-btn">Explore More →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
