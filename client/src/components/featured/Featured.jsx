import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./images/search.png" alt="" />
              <input
                type="text"
                placeholder="search for any service..."
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button className="searchIcon" onClick={handleSubmit}>
              search
            </button>
          </div>

          <div className="popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>

        <div className="right">
          <img src="./images/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
