import React from "react";

function AboutUs() {
  return (
    <div>

      {/* Page Header */}
      <section className="about-header text-center py-5">
        <div className="container">
          <h1 className="fw-bold">About Us</h1>
          <p className="text-muted">Home / Page / About</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <img
                src="/images/ab-1.png"
                className="img-fluid rounded"
                alt="about"
              />
            </div>

            <div className="col-md-6">
              <h6 className="text-success">100% Organic Food Provide</h6>
              <h2 className="fw-bold">
                Be healthy & eat fresh organic food
              </h2>

              <p className="text-muted">
               We provide fresh and organic food to support a healthy lifestyle. Our mission is to deliver high-quality products with great service and affordable prices. We work with trusted farms to ensure freshness and quality.
              </p>

              <div className="row mt-4">

                <div className="col-md-6">
                  <div className="p-3 mission-box">
                    <h5>Our Mission</h5>
                    <p>
                     We continuously improve our services and use modern solutions to provide fresh, high-quality products and a better experience for our customers. 
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-3 mission-box">
                    <h5>Our Vision</h5>
                    <p>
                    We continuously improve our services and use modern solutions to provide fresh, high-quality products and a better experience for our customers. 
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Brands */}
     <section className="py-5 text-center">
  <div className="container">
    <h4 className="mb-4">The Most Popular Brands</h4>

    <div className="brand-slider">
      <div className="brand-track">

        <img src="/images/brand-1.png" />
        <img src="/images/brand-2.png" />
        <img src="/images/brand-3.png" />
        <img src="/images/brand-4.png" />
        <img src="/images/brand-5.png" />

      </div>
    </div>

  </div>
</section>

      {/* Stats */}
      <section className="stats py-5">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-3 col-6">
              <div className="stat-box">
                <h3>3256+</h3>
                <p>Total Products</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="stat-box">
                <h3>2456K+</h3>
                <p>Total Orders</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="stat-box">
                <h3>1250K+</h3>
                <p>Total Visitors</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="stat-box">
                <h3>1245+</h3>
                <p>Total Delivery</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-5 text-center">
        <div className="container">

          <h3 className="mb-5">Our Online Customer Help Member</h3>

          <div className="row">

            <div className="col-md-4">
              <div className="team-card">
                <img
                  src="/images/team-1.jpg"
                  className="rounded-circle mb-3"
                  width="120"
                />
                <h5>Frances Gilmartin</h5>
                <p>CEO & Founder</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-card">
                <img
                  src="/images/author-lg-1.png"
                  className="rounded-circle mb-3"
                  width="120"
                />
                <h5>Frances Gilmartin</h5>
                <p>CEO & Founder</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-card">
                <img
                  src="/images/user-thumb-2.jpg"
                  className="rounded-circle mb-3"
                  width="120"
                />
                <h5>Frances Gilmartin</h5>
                <p>CEO & Founder</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Offer Banner */}
      <section className="offerss text-center py-5">
        <div className="container">
          <h4>weekend offer</h4>
          <h3 text-dark>Organic Foods Up to 40% off</h3>
          <button className="btn btn-warning mt-3">Shop Now</button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <img
                src="/images/ab-2.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-md-6">

              <h6 className="text-warning">Why Choose Us</h6>
              <h2 className="fw-bold">
                We do not Buy from the Open Market
              </h2>

              <div className="row mt-4">

                <div className="col-md-6">
                  <h5>Trusted Partner</h5>
                  <p>Completely fashion intermandate opportunities.</p>
                </div>

                <div className="col-md-6">
                  <h5>Return Policy</h5>
                  <p>Completely fashion intermandate opportunities.</p>
                </div>

                <div className="col-md-6">
                  <h5>100% Organic Fresh</h5>
                  <p>Completely fashion intermandate opportunities.</p>
                </div>

                <div className="col-md-6">
                  <h5>Secured Payment</h5>
                  <p>Completely fashion intermandate opportunities.</p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;