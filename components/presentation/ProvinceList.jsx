import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { LocationOn } from "@mui/icons-material";
import { Box } from "@mui/material";
import { RecoilStates } from "../../state/state";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
const ProvinceList = (props) => {
  const { selectedLocationState } = RecoilStates;
  const [selectedLocation, setSelectedLocation] = useRecoilState(
    selectedLocationState
  );
  const [open, setOpen] = React.useState(true);
  const { locations } = props;
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LocationOn />
        </ListItemIcon>
        <ListItemText sx={{ color: "green" }} primary="Locations" />
        {open ? (
          <ExpandLess sx={{ color: "green" }} />
        ) : (
          <ExpandMore sx={{ color: "green" }} />
        )}
      </ListItemButton>
      <Box
        sx={{
          width: "100%",
          maxHeight: 390,
          maxWidth: 360,
          bgcolor: "background.paper",
          overflow: "auto",
        }}
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              selected={selectedLocation == ""}
              sx={{ pl: 4 }}
              onClick={() => {
                setSelectedLocation("");
              }}
            >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={"All"} />
            </ListItemButton>
            {locations.map((location, index) => {
              return (
                <ListItemButton
                  selected={selectedLocation == location.location}
                  key={index}
                  sx={{ pl: 4 }}
                  onClick={() => {
                    setSelectedLocation(location.location);
                  }}
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={location.location} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </Box>
    </div>
  );
};

export default ProvinceList;

ProvinceList.propTypes = {
  locations: PropTypes.array,
};
