import React from "react";
import { styled } from "@mui/material/styles";
import Carousel from "react-multi-carousel";
import { Box } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import CardContent from "@mui/joy/CardContent";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardCover from "@mui/joy/CardCover";
import useMediaQuery from "@mui/material/useMediaQuery";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CardSlider({ data }) {
  // Use a custom hook to get the media query and adjust the font size accordingly
  const matches = useMediaQuery("(max-width:1024px)");
  let fontSize = "3rem";
  if (matches) {
    fontSize = "1.4rem";
  }

  return (
    <Box sx={{ paddingY: "1.5rem", borderTop: "1px" }} width="100%">
      <Typography
        level="h2"
        component="div"
        sx={{
          textAlign: "right",
          fontSize,
          marginBottom: "2rem",
          borderRadius: "20px",
          fontWeight: "bold",
          color: "teal",
        }}
      >
        Pick Your Favorites Sport
      </Typography>
      <Carousel responsive={responsive} width="100%">
        {data.map((item, index) => (
          <Box sx={{ marginRight: "0.5rem" }} key={index}>
            <Card
              key={index}
              sx={{
                margin: "0 15px",
                padding: "0.5rem",
                minHeight: "480px",
                gap: 2,
                width: {
                  sm: 180,
                  lg: 320,
                },
                backgroundColor: "transparent",
                border: "1px solid #e0e0e0",
              }}
              variant="outlined"
            >
              <CardCover>
                <img
                  src={item.image}
                  srcSet={item.image}
                  alt=""
                  loading="lazy"
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                }}
              />
              <CardContent
                sx={{
                  overflow: "hidden",
                  background: "none",
                  width: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  level="h2"
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: "semi-bold",
                    color: "teal",
                    textTransform: "capitalize",
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
