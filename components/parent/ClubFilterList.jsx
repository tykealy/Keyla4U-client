import { List, ListSubheader } from "@mui/material";
import ProvinceList from "../presentation/ProvinceList";
import SportType from "../presentation/SportType";
const ClubFilterList = (props) => {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ProvinceList />
      <SportType />
    </List>
  );
};

export default ClubFilterList;
