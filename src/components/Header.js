import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const profile = useSelector((state) => state.profile);
  return (
    <header className="header-root">
      <div className="logo">
        <Link to="/">Frontend</Link>
      </div>
      <ul className="menu-section">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {profile?.isLogin ? (
        <div>Profile</div>
      ) : (
        <ul className="profile">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Sign Up</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
