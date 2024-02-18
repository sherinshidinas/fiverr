import React from "react";
import "./message.scss";
import { Link } from "react-router-dom";

function Message() {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className="link">
            MESSAGES
          </Link>{" "}
          > SHERIN SHIDINAS >
        </span>

        <div className="messages">
          <div className="item">
            <img src="/images/sherin2.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              facere in vel praesentium deleniti quisquam rerum tempore, modi
              consequatur dolore! Quam quas veniam praesentium blanditiis beatae
              exercitationem dolor debitis aliquam.
            </p>
          </div>


          <div className="item owner">
            <img src="/images/orgcr.JPG" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              facere in vel praesentium deleniti quisquam rerum tempore, modi
              consequatur dolore! Quam quas veniam praesentium blanditiis beatae
              exercitationem dolor debitis aliquam.
            </p>
          </div>

          <div className="item">
            <img src="/images/sherin2.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              facere in vel praesentium deleniti quisquam rerum tempore, modi
              consequatur dolore! Quam quas veniam praesentium blanditiis beatae
              exercitationem dolor debitis aliquam.
            </p>
          </div>


          <div className="item owner">
            <img src="/images/orgcr.JPG" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              facere in vel praesentium tempore, modi
              consequatur dolore! Quam quas veniam praesentium blanditiis beatae
              exercitationem dolor debitis aliquam.
            </p>
          </div>

          <div className="item">
            <img src="/images/sherin2.jpg" alt="" />
            <p>
              veniam praesentium blanditiis beatae
              exercitationem dolor debitis aliquam.
            </p>
          </div>


          <div className="item owner">
            <img src="/images/orgcr.JPG" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              facere in vel praesentium deleniti quisquam rerum tempore, modi
              consequatur dolore! Quam quas veniam praesentium blanditiis beatae
              exercitationem dolor debitis aliquam.
            </p>
          </div>

          <div className="item">
            <img src="/images/sherin2.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              facere in vel praesentium deleniti quisquam rerum tempore, 
            </p>
          </div>


          <div className="item owner">
            <img src="/images/orgcr.JPG" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              facere in vel praesentium deleniti quisquam rerum tempore, modi
              consequatur dolore! Quam quas veniam praesentium blanditiis beatae
              exercitationem.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
