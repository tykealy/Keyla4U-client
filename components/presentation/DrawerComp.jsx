import React, { useState } from "react";
import { Fragment } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ["Home","Club","About","Favorites","Booked"];
export default function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Fragment>
      <Drawer anchor="top" open={openDrawer} onClose={() => setOpenDrawer(false)} sx={{width:"100%"}}>
        <List>
          {
            PAGES.map((page, index) => (
              <ListItemButton key={index}>
            <ListItemIcon>
              <ListItemText sx={{color:"#75CA24"}}>{ page }</ListItemText>
            </ListItemIcon>
          </ListItemButton>
            ))
          }
          
        </List>
      </Drawer>
      <IconButton sx={{color:"#75CA24",}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
      </IconButton>
    </Fragment>
  );
}
