import { Card, CardMedia, CardContent, Grid, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
const ClubCard = (props) => {
  const router = useRouter();
  const { minWidth, maxWidth, image, name, location, map, id } = props;
  return (
    <div style={{ minWidth: minWidth, maxWidth: maxWidth }}>
      <Card
        sx={{
          margin: "10px 10px 10px 10px",
          backgroundColor: "transparent",
          border: "1px solid #e0e0e0",
          borderRadius: "10px",
        }}
        elevation={5}
      >
        <div
          onClick={(e) => {
            router.push(`/clubs/${name}`);
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={image}
          />
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={4} xl={4}>
                <div
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgba(219, 216, 211, 0.2)",
                    width: "70%",
                    borderRadius: "10px",
                    aspectRatio: "1/1",
                    color: "red",
                  }}
                >
                  <Typography variant="body2" fontSize="0.9rem">
                    01 22
                  </Typography>
                  <Typography variant="body2" fontSize="0.9rem">
                    01 22
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={8} xl={8}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontSize={"1rem"}
                  fontWeight={"semi-bold"}
                >
                  {name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize="0.8rem"
                >
                  <PlaceIcon
                    sx={{
                      marginRight: "2px",
                      verticalAlign: "sub",
                      fontSize: "1rem",
                    }}
                  />
                  {location}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ClubCard;

ClubCard.propTypes = {
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  map: PropTypes.string,
};
