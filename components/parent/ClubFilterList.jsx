import { List, ListSubheader } from "@mui/material";
import ProvinceList from "../presentation/ProvinceList";
import SportType from "../presentation/SportType";
import PropTypes from "prop-types";
const ClubFilterList = (props) => {
  const { locations, SportTypes } = props;
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ProvinceList locations={locations} />
      <SportType SportTypes={SportTypes} />
    </List>
  );
};

export default ClubFilterList;

ClubFilterList.propTypes = {
  locations: PropTypes.array,
  SportTypes: PropTypes.array,
};
