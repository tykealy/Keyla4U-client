import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { RecoilStates } from "../../state/state";
import { useRecoilState } from "recoil";
import PropTypes from "prop-types";
const SportType = (props) => {
  const { selectedSportTypeState } = RecoilStates;
  const [selectedSportType, setSelectedSportType] = useRecoilState(
    selectedSportTypeState
  );
  const [open, setOpen] = React.useState(true);
  const { SportTypes } = props;
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <SportsSoccerIcon />
        </ListItemIcon>
        <ListItemText sx={{ color: "green" }} primary="Sport Types" />
        {open ? (
          <ExpandLess sx={{ color: "green" }} />
        ) : (
          <ExpandMore sx={{ color: "green" }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            selected={selectedSportType == ""}
            onClick={() => {
              setSelectedSportType("");
            }}
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={"All"} />
          </ListItemButton>
          {SportTypes.map((SportType, index) => {
            return (
              <ListItemButton
                selected={selectedSportType == SportType.category_name}
                onClick={() => {
                  setSelectedSportType(SportType.category_name);
                }}
                sx={{ pl: 4 }}
                key={index}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={SportType.category_name} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </div>
  );
};

export default SportType;

SportType.propTypes = {
  SportType: PropTypes.array,
};
