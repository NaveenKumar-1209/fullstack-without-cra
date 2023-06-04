import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AvatarName from "../shared/avatar/Avatar";
import HeaderPopover from "./HeaderPopover";
import Popover from "@mui/material/Popover";
import { MyPopover } from "./style";
import { signOutAction } from "../redux/action";

const Header = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [options, setOptions] = useState(null);
  const openAvatarModel = (e) => {
    setOptions(e.currentTarget);
  };
  const handleClose = () => {
    setOptions(null);
  };
  const signOut = () => {
    dispatch(signOutAction());
  };
  const open = Boolean(options);
  const id = open ? "simple-popover" : undefined;
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
        <ul className="profile">
          <li onClick={openAvatarModel} style={{ cursor: "pointer" }}>
            <AvatarName name={profile.profile.name} />
            <Popover
              id={id}
              open={open}
              anchorEl={options}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              className="popover"
            >
              <MyPopover>
                <HeaderPopover name={profile.profile.name} signOut={signOut} />
              </MyPopover>
            </Popover>
          </li>
        </ul>
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
