import Typography from "@mui/joy/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

export default function BookedCard(props) {
  const image = "http://admin.keyla4u.store/Keyla4U-server/public/img/";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      style={{
        maxWidth: isMobile ? "100%" : "70%",
        height: isMobile ? "190px" : "250px",
        margin: "20px auto",
        minWidth: "502px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "" : "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
      <img src={`${image}/${props.image}`} style={{ width: "20%" }}></img>
      <span>
        <Typography
          component="p"
          sx={{
            fontWeight: "bold",
            color: "teal",
            fontSize: isMobile ? "0.6rem" : "0.9rem",
          }}
        >
          Sport Center: {props.name}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontWeight: "bold",
            color: "teal",
            fontSize: isMobile ? "0.6rem" : "0.9rem",
          }}
        >
          Court: {props.court}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontWeight: "bold",
            color: "teal",
            fontSize: isMobile ? "0.6rem" : "0.9rem",
          }}
        >
          Pitch: {props.pitch}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontWeight: "bold",
            color: "teal",
            fontSize: isMobile ? "0.6rem" : "0.9rem",
          }}
        >
          Booked Date: {props.bookedDate}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontWeight: "bold",
            color: "teal",
            fontSize: isMobile ? "0.6rem" : "0.9rem",
          }}
        >
          Play Date: {props.playDate}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontWeight: "bold",
            color: "teal",
            fontSize: isMobile ? "0.6rem" : "0.9rem",
          }}
        >
          Time: {props.start_time} - {props.end_time}
        </Typography>

        <Typography
          component="p"
          sx={{
            fontWeight: "bold",
            color: "teal",
            fontSize: isMobile ? "0.6rem" : "0.9rem",
          }}
        >
          Price: {props.price}$
        </Typography>
      </span>
      <span style={{ width: isMobile ? "10%" : "", height: "100%" }}>
        <Typography>Location</Typography>
        <iframe src={props.map} style={{ height: "80%" }}></iframe>
      </span>
    </div>
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
