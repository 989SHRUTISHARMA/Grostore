import React from "react";

function BlogGrid() {
  return (
    <div>
      {/* Page Header */}
      <section className="blog-header text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Blog Grid</h1>
          <p>Home » Page » Blog Grid</p>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-md-5">
            <div className="small-blog d-flex mb-4">
              <img src="/images/blog-thumb-md-1.jpg" alt="" />
              <div className="ms-3">
                <span className="blog-meta">
                  Organic Vegetable • May 24, 2022
                </span>
                <h5>Perfect Quality Reasonable Price For Your Family</h5>
                <p>
                  Assertively target market lorem ipsum is onsectetur noted et
                  dolore.
                </p>
                <a href="#" className="explore">
                  Explore More →
                </a>
              </div>
            </div>

            <div className="small-blog d-flex">
              <img src="/images/blog-thumb-md-2.jpg" alt="" />
              <div className="ms-3">
                <span className="blog-meta">
                  Organic Vegetable • May 24, 2022
                </span>
                <h5>
                  The Best Great Benefits Of Fresh Beef For Women's Health
                </h5>
                <p>
                  Assertively target market lorem ipsum is onsectetur noted et
                  dolore.
                </p>
                <a href="#" className="explore">
                  Explore More →
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="featured-blog">
              <img src="/images/gallery-lg-5.jpg" alt="" />
              <div className="featured-content">
                <span>Organic Vegetable</span>
                <h3>
                  Holiday Home Delivery We have Recently Ordered Organic
                  Vegetable
                </h3>
                <button className="btn btn-success mt-2">Explore More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Blog Section */}
      <section className="container pb-5">
        <div className="large-blog">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/images/gallery-lg-4.jpg" className="img-fluid" />
            </div>

            <div className="col-md-6">
              <span className="blog-meta">
                Organic Vegetable • May 24, 2022
              </span>
              <h3>Ways To Choose Fruits & Seafoods Good For Pregnancy</h3>
              <p>
                Professionally build unique markets via parallel total linkage.
                Monotonectally maximize corporate intellectual capital while
                creating innovative solutions for modern business growth.
              </p>

              <div className="author d-flex align-items-center">
                <img src="/images/client-3.png" />
                <div className="ms-2">
                  <h6>Wendell Carter</h6>
                  <span>May 24, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
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
    </div>
  );
}

export default BlogGrid;
