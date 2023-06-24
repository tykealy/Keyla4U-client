import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from '@mui/joy/Grid';
import Button from '@mui/joy/Button';
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
export default function BookedCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container spacing={2} sx={{ marginX:isMobile ? "0.3rem": "1rem"}}
    >
     <Grid xs={12} md={6}>
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
            sx={{ width: isMobile ? "170px" : isTablet ? "200px" : "250px" , padding:"5px"}}
          >
            <img
              src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
              srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ paddingLeft:isMobile ? "0.3rem"  : "1.5rem", paddingBottom:"1rem", display:"flex"}}>
          <Box display={"flex"} flexDirection={"column"} gap={isMobile ? 0.3 : 0.5}>
            <Typography component="p" sx={{ fontWeight: "bold" , color:"teal",fontSize:isMobile ? "0.6rem" : "1rem"}}>
              Sport Center:
            </Typography>
            <Typography component="p" sx={{ fontWeight: "bold" , color:"teal",fontSize:isMobile ? "0.6rem" : "1rem"}}>
              Court:
            </Typography>
            <Typography component="p" sx={{ fontWeight: "bold",color:"teal",fontSize:isMobile ? "0.6rem" : "1rem" }}>
              Pitch:
            </Typography>
            <Typography component="p" sx={{ fontWeight: "bold",color:"teal",fontSize:isMobile ? "0.6rem" : "1rem" }}>
              Booked Date:
            </Typography>
            <Typography component="p" sx={{ fontWeight: "bold", color:"teal",fontSize:isMobile ? "0.6rem" : "1rem" }}>
              Play Date
            </Typography>
            <Typography component="p" sx={{ fontWeight: "bold",color:"teal",fontSize:isMobile ? "0.6rem" : "1rem" }}>
              Time:
            </Typography>
            <Typography component="p" sx={{ fontWeight: "bold", color:"teal",fontSize:isMobile ? "0.6rem" : "1rem" }}>
              Price:
            </Typography>
          </Box>
           <Button
          variant="solid"
          size="xs"
          aria-label="View on map"
          sx={{ ml: 'auto',mb:"4rem",padding:"0.5rem", fontWeight: 600,bgcolor:"teal",fontSize: isMobile ? "0.6rem" : "1rem"}}
        >
          View on map
        </Button>
        </CardContent>
      </Card>
      
     </Grid>
     <Grid xs={12} md={6}>
     <Card
        orientation="horizontal"
        variant="outlined"
        sx={{
          width: "100%",
          height: isMobile ? "170px" : isTablet ? "150px" : "250px",
          bgcolor: "background.body",
        }}
      >
        <CardOverflow sx={{ objectFit: "cover" }}>
          <AspectRatio
            ratio="1"
            sx={{ width: isMobile ? "170px" : isTablet ? "150px" : "250px" ,padding:"5px"}}
          >
            <img
              src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
              srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ paddingLeft:isMobile ? "0.3rem" : "1.5rem", paddingBottom:"1rem", display:"flex"}}>
          <Box display={"flex"} flexDirection={"column"} gap={isMobile ? 0.3 : 0.5}>
            <Typography component="p" sx={{ fontWeight: "bold" , color:"teal",fontSize:isMobile ? "0.6rem" : "1rem"}}>
              Sport Center:
            </Typography>
            <Typography component="p" sx={{ fontWeight: "bold" , color:"teal",fontSize:isMobile ? "0.6rem" : "1rem"}}>
              Court:
            </Typography>
            <Typography component="p" sx={{ fontWeight: "bold",color:"teal",fontSize:isMobile ? "0.6rem" : "1rem" }}>
              Pitch:
            </Typography>
            <Typography component="p" sx={{ fontWeight: "bold",color:"teal",fontSize:isMobile ? "0.6rem" : "1rem" }}>
              Booked Date:
            </Typography>
            <Typography component="p" sx={{ fontWeight: "bold", color:"teal",fontSize:isMobile ? "0.6rem" : "1rem" }}>
              Play Date
            </Typography>
            <Typography component="p" sx={{ fontWeight: "bold",color:"teal",fontSize:isMobile ? "0.6rem" : "1rem" }}>
              Time:
            </Typography>
            <Typography component="p" sx={{ fontWeight: "bold", color:"teal",fontSize:isMobile ? "0.6rem" : "1rem" }}>
              Price:
            </Typography>
          </Box>
          <Button
          variant="solid"
          size="xs"
          aria-label="View on map"
          sx={{ ml: 'auto',mb:"4rem",padding:"0.5rem", fontWeight: 600,bgcolor:"teal",fontSize: isMobile ? "0.6rem" : "1rem"}}
        >
          View on map
        </Button>
        </CardContent>
      </Card>
     </Grid>
    </Grid>
  );
}
