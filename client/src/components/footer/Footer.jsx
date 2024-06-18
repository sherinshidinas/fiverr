import React, { useState } from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h6>About</h6>

            <span>Careers</span>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Insurance</span>
            <span>Investor Relations</span>
          </div>
          <div className="item">
            <h6>Categories</h6>

            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            
           
          </div>

          <div className="item">
            <h6>Support and Education</h6>

            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Fiverr</span>
            <span>Buying on Fiverr</span>
            <span>Fiverr Guides</span>
            <span>Fiverr Logo Maker</span>
            <span>End-to-End Projects</span>
            <span>Sitemap</span>
          </div>

          <div className="item">
            <h6>Business Solutions</h6>

            <span>About Business Solutions</span>
            <span>Fiverr Pro</span>
            <span>Fiverr Certified</span>
            <span>Fiverr Enterprise</span>
            <span>Working Not Working</span>
            <span>Contact Sales</span>
            <span>Fiverr Logo Maker</span>
            <span>Programming & Tech</span>
          </div>

          <div className="item">
            <h6>Community</h6>
            <span>Customer Success Stories</span>
            <span>Community Hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h3>fiverr</h3>
            <span>© Fiverr International Ltd. 2024</span>
          </div>
          <div className="right">
            <div className="social-icons">
              <img src="/images/linkedin.png" alt="" />
              <img src="/images/facebook.png" alt="" />
              <img src="/images/twitter.png" alt="" />
              <img src="/images/pinterest.png" alt="" />
              <img src="/images/instagram.png" alt="" />
            </div>

            <div className="link">
              <img src="/images/language.png" alt="" />
              <span>English</span>
            </div>

            <div className="link">
              <img src="/images/coin.png" alt="" />
              <span>USD</span>
            </div>

            <img src="/images/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
