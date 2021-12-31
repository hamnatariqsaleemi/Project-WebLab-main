import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  component: {
    color: "black",
  },
  container: {
    justifyContent: "left",
    "&  >*": {
      padding: 20,
      color: "black",
      textDecoration: "none",
    },
  },
});

const Header = () => {
  const css = useStyle();
  return (
    <AppBar className={css.component} style={{ background: "#006CFF" }}>
      <Toolbar className={css.container}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/signin">LOGIN</Link>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
