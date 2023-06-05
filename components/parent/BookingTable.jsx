import PitchList from "../presentation/PitchList";
import TabSelecting from "../presentation/TabSelecting";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import React from "react";
const BookingTable = (props) => {
  const { club, clubCategoryID, selectedClub, apiUrl } = props;
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
            apiUrl={apiUrl}
            clubCategoriesID={clubCategoryID}
            club={club.categories}
            selectedClub={selectedClub}
          ></PitchList>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookingTable;
BookingTable.propTypes = {
  club: PropTypes.object.isRequired,
  clubCategoryID: PropTypes.array.isRequired,
  selectedClub: PropTypes.number.isRequired,
  apiUrl: PropTypes.string.isRequired,
};
