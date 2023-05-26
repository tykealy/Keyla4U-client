import { Card, CardMedia, CardContent, Grid, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { createTheme, ThemeProvider } from "@mui/material";
const ClubCard = (props) => {
  const router = useRouter();
  const { minWidth, maxWidth, image, name, location, map, id } = props;
  const theme = createTheme({
    components: {
      MuiCardContent: {
        styleOverrides: {
          root: {
            "&:last-child": {
              paddingBottom: 16,
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ minWidth: minWidth, maxWidth: maxWidth, margin: "0 auto" }}>
        <Card
          sx={{
            margin: "10px 10px 0px 10px",
            backgroundColor: "transparent",
            border: "1px solid #e0e0e0",
            borderRadius: "10px",
          }}
          elevation={5}
        >
          <div
            onClick={() => {
              router.push(`/clubs/${id}`);
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
                      backgroundColor: "rgba(219, 216, 211, 0.2)",
                      width: "70%",
                      borderRadius: "10px",
                      aspectRatio: "1/1",
                      color: "teal",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <Typography variant="body2" fontSize="1em">
                        7:00
                      </Typography>
                      <Typography variant="body2" fontSize="1em">
                        9:00
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={8} xl={8}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ height: "100%", display: "inline-block" }}>
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
                    </div>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </Card>
      </div>
    </ThemeProvider>
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
