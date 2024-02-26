import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/images/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link to="/myGigs" className="link">
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add New Gig
                      </Link>
                    </>
                  )}

                  <Link to="/orders" className="link">
                    Orders
                  </Link>

                  <Link to="/messages" className="link">
                    Messages
                  </Link>

                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                Sign In
              </Link>
              <Link to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLinks" to="/">
              Graphics & Design
            </Link>

            <Link className="link menuLinks" to="/">
              Video & Animation
            </Link>

            <Link className="link menuLinks" to="/">
              Writing & Translation
            </Link>

            <Link className="link  menuLinks" to="/">
              AI Services
            </Link>

            <Link className="link menuLinks" to="/">
              Digital Marketing
            </Link>

            <Link className="link menuLinks" to="/">
              Music & Audio
            </Link>

            <Link className="link menuLinks" to="/">
              Programming & Tech
            </Link>

            <Link className="link menuLinks" to="/">
              Business
            </Link>

            <Link className="link menuLinks" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
