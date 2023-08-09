import React from "react";
import "../Styles/dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="main-container">
        <div className="header">
          <nav className="navbar">
         <img src="https://media1.propertyshare.in/images/logos/property-share-white-logo.svg" alt="" />
            <ul className="nav-ul flex-cnt">
              <li><a href="" className="fx">Properties</a></li>
              <li><a href="" className="fx">Private Access</a></li>
              <li className="flex-cnt">
                <a href="" className="flex-cnt">
                Resources
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.175 2.08337L5 5.94961L8.825 2.08337L10 3.27947L5 8.33337L0 3.27947L1.175 2.08337Z"
                    fill="#fff"
                  ></path>
                </svg>
                </a>
              </li>
            </ul>
            <div className="buttons flex-cnt">
              <button>Sign in</button>
              <button>sign up</button>
            </div>
          </nav>
        </div>
        <div className="main-scroll-c">
          <div className="banner">
            <img
              src="https://media2.propertyshare.in/images/static_page_banner/propertylist_features.jpg"
              alt=""
            />
            <h1>All Properties</h1>
          </div>
          <div className="properties-c">
            <div className="menu-bar fx al-cnt">
              <ul className="flex-cnt">
                <li className="flex-cnt">All Properties</li>
                <li className="flex-cnt">Resale Properties</li>
              </ul>
              <ul className="flex-cnt">
                <li className="flex-cnt">
                  <span>Location</span>
                  <div className="fx al-cnt">
                    All Cities
                    <svg
                      width="6"
                      height="6"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.175 2.08337L5 5.94961L8.825 2.08337L10 3.27947L5 8.33337L0 3.27947L1.175 2.08337Z"
                        fill="#666666"
                      ></path>
                    </svg>
                  </div>
                </li>
                <li className="flex-cnt">
                  <span>Type</span>
                  <div className="fx al-cnt ">
                    Office
                    <svg
                      width="6"
                      height="6"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.175 2.08337L5 5.94961L8.825 2.08337L10 3.27947L5 8.33337L0 3.27947L1.175 2.08337Z"
                        fill="#666666"
                      ></path>
                    </svg>
                  </div>
                </li>
                <li className="flex-cnt">
                  <span>Sort By</span>
                  <div className="fx al-cnt">
                    Position
                    <svg
                      width="6"
                      height="6"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.175 2.08337L5 5.94961L8.825 2.08337L10 3.27947L5 8.33337L0 3.27947L1.175 2.08337Z"
                        fill="#666666"
                      ></path>
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
            <div className="prop-cards grid">
              <div className="card">
                <div className="card-header">
                  <h5>Prestige Tech Platina</h5>
                  <div className="fx al-cnt address">
                    <img
                      src=" https://media1.propertyshare.in/images/svg/card-location-icon.svg"
                      alt=""
                    />
                    Outer Ring Road , Bangalore
                  </div>
                  <div className="property-badge-content">
                    <div className="property-badge">
                      <div className="property-badge-sub">

                      </div>
                      <p>Fully Funded</p>
                    </div>
      
                  </div>
                </div>
                <div className="property-img">
                  <img
                    src="https://propmedia2.propertyshare.in/website/property/T29DcmkzY1BtREQvTnlYVnl6cnZCdz09/media-v2/images/listingbanner/540x420/1663762252-preston-uk-united-kingdom-1.jpg"
                    alt=""
                  />
                </div>
                <div className="property-details">
                  <table>
                  <tr>
                    <td>Area</td>
                    <td>5456546</td>
                    </tr>
                    <tr>
                    <td>Price psf</td>
                    <td>5456546</td>
                    </tr>
                    <tr>
                    <td>Yield</td>
                    <td>5456546</td>
                    </tr>
                    <tr>
                    <td>Return Target</td>
                    <td>5456546</td>
                    </tr>
                  </table>
                </div>
              <div className="pd-30">
              <button className="view-opp">View Opportunity</button>
              </div>
              </div>
            </div>

            <div className="map-cont fx">
              <div className="map-lft">
               <img src="https://media1.propertyshare.in/images/svg/footer_signup_banner.svg" alt="" />
              </div>
              <div className="map-right">
                <h2>Real Estate Investing Simplified </h2>
                <button>Sign-up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
