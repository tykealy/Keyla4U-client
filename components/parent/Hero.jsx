import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {Container} from "@mui/system";
import CustomButton from "../presentation/CustomButton";
import LaptopMockup from "../presentation/LaptopMockup";
export default function Hero() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "4rem",
    color: "teal",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  }));
  return (
    <Box sx={{ minHeight: "80vh" }}>
      <Container>
      <CustomBox>
          <Box sx={{ flex: "1" ,paddingTop:"1rem"}}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: "10",
                mb: "4",
              }}
            >
              Welcome to Keyla4U
            </Typography>
            <Title variant="h2" sx={{}}>
              Book Sport Facilities 
              <br />
              Nearest To You
            </Title>
            <Typography variant="body2" sx={{fontSize:"18px", color:"#5A6473",my:4}}>
              You no longer need to dial sport center owner for booking sport facilities anymore.
              <br />
              Just browse through the internet and book!
            </Typography>
            <CustomButton backgroundColor="teal" color="#fff" buttonText="start booking now" heroBtn={true}/>
          </Box>
          <Box sx={{flex:"1.25"}}>
              <LaptopMockup/>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}
