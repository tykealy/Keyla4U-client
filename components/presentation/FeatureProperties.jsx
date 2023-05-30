import { Button, styled, Typography, Box, Container } from "@mui/material";
import iphoneMockup from "./../../public/iphoneMockup.png";
export default function FeatureProperties() {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "teal",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    marginBottom:"3rem",
    [theme.breakpoints.down("md")]: {
      padding: "0",
      marginBottom:"5rem"
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "white", fontWeight: "700" }}
          >
            Feature Properties
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "white", fontWeight: "500", my: 3 }}
          >
            Booking any types of sport you want to play. <br /> Football, Volleyball,
            Tennis, any sports that the club owners has to offer
          </Typography>
        </Box>
        <img src="/iphoneMockup.png" alt="IphoneMockup" style={{ maxWidth:"100%" ,  maxHeight:"100%"}} />
      </CustomContainer>
    </CustomBox>
  );
}
