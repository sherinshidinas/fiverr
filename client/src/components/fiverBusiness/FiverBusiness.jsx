import React from "react";
import "./FiverBusiness.scss";

function FiverBusiness() {
  return (
    <div className="fiverrBusiness">
      <div className="features">
        <div className="container">
          <div className="item">
            <div className="main">
              <h3>fiverr</h3>
              <span className="dot">.</span>
              <span className="business-solution">Business Solutions</span>
            </div>
            <h2>Advanced solutions and professional talent for businesses</h2>
            <div className="title">
              <img src="./images/greencheck.png" alt="" />
              Fiverr Pro
            </div>
            <p>
              Access top freelancers and professional business tools for any
              project
            </p>

            <div className="title">
              <img src="./images/greencheck.png" alt="" />
              Fiverr Certified
            </div>
            <p>Build your own branded marketplace of certified experts</p>

            <div className="title">
              <img src="./images/greencheck.png" alt="" />
              Fiverr Enterprise
            </div>
            <p>
              Manage your freelance workforce and onboard additional talent with
              an end-to-end SaaS solution
            </p>
            <button>Learn more</button>
          </div>

          <div className="item">
            <img src="./images/EN.webp"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiverBusiness;
