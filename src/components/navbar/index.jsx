import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false)

  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }
  useEffect(()=> {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    }
  },[])

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true
  }

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
          <span className="text">Devbox</span>
          <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>Devbox Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser?.isSeller && (
                  <>
                    <Link to="/mygigs" className="link">Gigs</Link>
                    <Link to="/add" className="link">Add New Gig</Link>
                  </>
                )}
                <Link to="/orders" className="link">Orders</Link>
                <Link to="/messages" className="link">Messages</Link>
                <Link to="/" className="link">Logout</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">Graphics & Design</Link>
            <Link className="link" to="/">Video & Animation</Link>
            <Link className="link" to="/">Writing and Translation</Link>
            <Link className="link" to="/">AI Services</Link>
            <Link className="link" to="/">Digital Marketing</Link>
            <Link className="link" to="/">Music & Audio</Link>
            <Link className="link" to="/">Programming & Tech</Link>
            <Link className="link" to="/">Business</Link>
            <Link className="link" to="/">Lifestyle</Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
