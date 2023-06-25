import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/joy/Button";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Router from "next/router";
import PropTypes from "prop-types";

export default function BookedCard(props) {
  const image = "http://admin.keyla4u.store/Keyla4U-server/public/img/";
  const router = Router;
  // const image = `${props.apiUrl}http://127.0.0/img/`;
  // const image = `${props.apiUrl}/img/`;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const viewOnMap = (embeddedURL) => {
    const normalURL = embeddedURL.replace("/maps/embed?", "/maps/?");
    router.push(normalURL);
  };
  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      sx={{
        width: "100%",
        height: isMobile ? "170px" : isTablet ? "200px" : "250px",
        bgcolor: "background.body",
      }}
    >
      <CardOverflow sx={{ objectFit: "cover" }}>
        <AspectRatio
          ratio="1"
          sx={{
            width: isMobile ? "170px" : isTablet ? "200px" : "250px",
            padding: "5px",
          }}
        >
          <img
            src={`${image}${props.image}`}
            loading="lazy"
            alt="club's logo"
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent
        sx={{
          paddingLeft: isMobile ? "0.3rem" : "1.5rem",
          paddingBottom: "1rem",
          display: "flex",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={isMobile ? 0.3 : 0.5}
        >
          <Typography
            component="p"
            sx={{
              fontWeight: "bold",
              color: "teal",
              fontSize: isMobile ? "0.6rem" : "1rem",
            }}
          >
            Sport Center: {props.name}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontWeight: "bold",
              color: "teal",
              fontSize: isMobile ? "0.6rem" : "1rem",
            }}
          >
            Court: {props.court}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontWeight: "bold",
              color: "teal",
              fontSize: isMobile ? "0.6rem" : "1rem",
            }}
          >
            Pitch: {props.pitch}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontWeight: "bold",
              color: "teal",
              fontSize: isMobile ? "0.6rem" : "1rem",
            }}
          >
            Booked Date: {props.bookedDate}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontWeight: "bold",
              color: "teal",
              fontSize: isMobile ? "0.6rem" : "1rem",
            }}
          >
            Play Date: {props.playDate}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontWeight: "bold",
              color: "teal",
              fontSize: isMobile ? "0.6rem" : "1rem",
            }}
          >
            Time: {props.start_time} - {props.end_time}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontWeight: "bold",
              color: "teal",
              fontSize: isMobile ? "0.6rem" : "1rem",
            }}
          >
            Price: {props.price}
          </Typography>
        </Box>
        <Button
          onClick={() => viewOnMap(props.map)}
          variant="solid"
          size="xs"
          aria-label="View on map"
          sx={{
            ml: "auto",
            mb: "4rem",
            padding: "0.5rem",
            fontWeight: 600,
            bgcolor: "teal",
            fontSize: isMobile ? "0.6rem" : "1rem",
          }}
        >
          View on map
        </Button>
      </CardContent>
    </Card>
  );
}

BookedCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  court: PropTypes.string.isRequired,
  pitch: PropTypes.string.isRequired,
  bookedDate: PropTypes.string.isRequired,
  playDate: PropTypes.string.isRequired,
  start_time: PropTypes.string.isRequired,
  end_time: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
};
