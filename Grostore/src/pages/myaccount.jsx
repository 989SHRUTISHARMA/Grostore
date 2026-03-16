import React from "react";
import {
  FaClipboardList,
  FaSyncAlt,
  FaTruck,
  FaShoppingCart,
  FaBars,
  FaHistory,
  FaAddressBook,
  FaCreditCard,
  FaUserEdit,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

function MyAccount() {
  return (
    <section className="account-section py-5">
      <div className="container">

        {/* USER INFO */}
        <div className="account-top p-4 mb-4">

          <div className="row align-items-center">

            <div className="col-md-2 text-center">
              <div className="user-avatar">
                <img src="/images/user-thumb-2.jpg"/> 
              </div>
            </div>

            <div className="col-md-10">

              <h4 className="user-name">Shubhjeet Chakraborty</h4>

              <div className="user-info">
                <span><FaMapMarkerAlt /> Vijay Nagar, Indore India</span>
                <span><FaPhone /> +91 88270 57950</span>
                <span><FaEnvelope /> chakrabortyshubhjeet@gmail.com</span>
              </div>

              {/* STAT BOXES */}
              <div className="row mt-3 g-3">

                <div className="col-md-3 col-6">
                  <div className="stat-box">
                    <FaClipboardList />
                    <div>
                      <h5>4k+</h5>
                      <p>Total Order</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="stat-box">
                    <FaSyncAlt />
                    <div>
                      <h5>10+</h5>
                      <p>Order Processing</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="stat-box">
                    <FaTruck />
                    <div>
                      <h5>3.5k+</h5>
                      <p>Total Delivered</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="stat-box">
                    <FaShoppingCart />
                    <div>
                      <h5>25+</h5>
                      <p>Pending Orders</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="row">

          {/* SIDEBAR */}
          <div className="col-md-3">
            <div className="account-menu">

              <h6>Manage My Account</h6>

              <ul>

                <li><FaBars /> Dashboard</li>
                <li><FaHistory /> Order History</li>
                <li><FaAddressBook /> Address Book</li>
                <li><FaCreditCard /> Payment Methods</li>
                <li><FaUserEdit /> Updated Profile</li>
                <li><FaTruck /> Order Tracking</li>
                <li>Log out</li>

              </ul>

            </div>
          </div>

          {/* ADDRESS */}
          <div className="col-md-9">

            <div className="row g-4">

              <div className="col-md-6">
                <div className="address-box">

                  <h6>DEFAULT SHIPPING ADDRESS</h6>

                  <p className="fw-bold">Shubhjeet Chakraborty</p>
                  <p>Vijay Nagar, Indore India</p>
                  <p>+91 88270 57950</p>

                </div>
              </div>

              <div className="col-md-6">
                <div className="address-box">

                  <h6>DEFAULT BILLING ADDRESS</h6>

                  <p className="fw-bold">Shubhjeet Chakraborty</p>
                  <p>Vijay Nagar, Indore India</p>
                  <p>+91 88270 57950</p>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MyAccount;