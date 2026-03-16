import React, { useState } from "react";
import { CiHeart, CiShuffle } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

function Shop() {
  const [active, setActive] = useState("all");

  return (
    <>
      <div className="container">
        <h2>Shop Grid Page</h2>
      </div>

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
    </>
  );
}

export default Shop;
