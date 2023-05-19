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
import PropTypes from "prop-types";
const SportType = (props) => {
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
        <ListItemText primary="Sport Types" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {SportTypes.map((SportType) => {
            return (
              <ListItemButton sx={{ pl: 4 }} key={SportType.id}>
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
