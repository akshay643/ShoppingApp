import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import ColorButton from "@mui/material/Button";

import pic from "./images/pic1.jpg";

import "./bottomCards.css";
const ButtonCSS = styled(Button)({
  fontSize: 20,
  padding: "6px 32px",
  border: "1px solid",
  borderRadius: "30px",
  backgroundColor: "black",
  borderColor: "#0063cc"
});

export default function ImgMediaCard() {
  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="green iguana" height="300" image={pic} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          OLAY
        </Typography>
        <Typography>Olay White Radiance Creame
          </Typography>
        <Typography variant="body2" color="text.secondary">
          <s>₹2500</s> <span>(20 % OFF) </span>
          <Typography>₹ 2,000 OFF </Typography>
        </Typography>
      </CardContent>
      <CardActions className="bottom">
          <ButtonCSS variant="contained" disableRipple>
            Shop Now
          </ButtonCSS>
      </CardActions>
    </Card>
  );
}
