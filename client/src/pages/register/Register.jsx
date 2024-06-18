import React, { useState } from "react";
import "./register.scss";
import { upload } from "../../utils/upload.js";
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      // alert("Registration completed!");
      navigate("/login");
    } catch (error) {
      console.log(`error occured while handlesubmitting ${error}`);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h2>Create new account</h2>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            placeholder="enter your name"
            onChange={handleChange}
          />

          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            onChange={handleChange}
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={handleChange}
          />

          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <label htmlFor="">Country</label>
          <input
            type="text"
            name="country"
            placeholder="enter your country"
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </div>

        <div className="right">
          <h2>I want to become a seller</h2>
          <div className="toggle">
            <label htmlFor="">Active the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="enter your phone number"
            onChange={handleChange}
          />

          <label htmlFor="">Description</label>
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="10"
            placeholder="A short description of yourself"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
