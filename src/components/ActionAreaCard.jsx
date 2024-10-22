import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard({ image, title, description }) {
  return (
    <Card
      sx={{
        maxWidth: 900,
        width: "90%",
        margin: "20px 0px",
        backgroundColor: "#5e7b58",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ margin: "auto" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "white", fontSize: { sm: "1.8rem" } }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "white", fontSize: { sm: "1.3rem" } }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
