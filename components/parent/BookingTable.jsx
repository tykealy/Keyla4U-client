import PitchList from "../presentation/PitchList";
import TabSelecting from "../presentation/TabSelecting";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material";
import React from "react";
const BookingTable = (props) => {
  const { club, clubCategoryID, selectedClub } = props;
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={2} md={2} lg={2} xl={3}>
          <TabSelecting
            labels={club.categories}
            clubCategoriesID={clubCategoryID}
          ></TabSelecting>
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={10} xl={9}>
          <PitchList
            clubCategoriesID={clubCategoryID}
            club={club.categories}
            selectedClub={selectedClub}
          ></PitchList>
        </Grid>
      </Grid>
    </div>
    // <Grid container>
    //   <TabSelecting
    //     labels={club.categories}
    //     clubCategoriesID={clubCategoryID}
    //   ></TabSelecting>
    //   <Grid item md={2} xs={4} sm={2}>
    //     <PitchList
    //       clubCategoriesID={clubCategoryID}
    //       club={club.categories}
    //       selectedClub={selectedClub}
    //     ></PitchList>
    //   </Grid>
    //   <Grid
    //     style={{ maxWidth: { xs: 320, sm: 550 } }}
    //     item
    //     md={5}
    //     xs={6}
    //     sm={8}
    //   ></Grid>
    //   <Grid item xs={2} md={5}>
    //     <iframe
    //       style={{ width: "100%", height: "40vh" }}
    //       src={club.map}
    //     ></iframe>
    //   </Grid>
    // </Grid>
  );
};

export default BookingTable;
BookingTable.propTypes = {
  club: PropTypes.object.isRequired,
  clubCategoryID: PropTypes.array.isRequired,
  selectedClub: PropTypes.number.isRequired,
};
