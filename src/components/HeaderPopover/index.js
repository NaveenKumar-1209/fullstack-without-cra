import React from "react";
import { useStyles } from "./style";

const HeaderPopover = ({ name, signOut }) => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      <li>{name}</li>
      <li style={{ cursor: "pointer" }} onClick={signOut}>
        sign out
      </li>
    </ul>
  );
};

export default HeaderPopover;
