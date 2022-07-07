import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";

import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import pic from "./images/pic1.jpg";

import "./card.css";

export default function SearchAppBar() {
  return (
    <Box className="box" sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar>
          <ArrowBackIcon className="arrow" />
          <Avatar className="avatar" alt="Remy Sharp" src={pic} />
          <h3> Maitryi dutta </h3>
          <VerifiedIcon className="icon" />
          <SearchIcon className="searchIcon" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
