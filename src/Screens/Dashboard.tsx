import React from "react";
import "../Styles/dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="main-container">
        <div className="header">
          <nav className="navbar">
            <span>logo</span>
            <ul className="nav-ul flex-cnt">
              <li>Properties</li>
              <li>Private Access</li>
              <li className="flex-cnt">
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
                <div className="grid">
                All Cities
                  <svg
                    width="10"
                    height="10"
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
               <div className="grid ">
               Office
                  <svg
                    width="10"
                    height="10"
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
             <div className="grid">
              Position
              <svg
                    width="10"
                    height="10"
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
            <div className="prop-cards">
                <div className="card">
                    <div className="card-header">
                        <h5>Prestige Tech Platina</h5>
                 <div className="flex-cnt adress">
                <img src=" https://media1.propertyshare.in/images/svg/card-location-icon.svg" alt="" />
                Outer Ring Road , Bangalore
                 </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
