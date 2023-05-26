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
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
const PAGES = ["Home", "Clubs", "About", "Favorites", "Booked"];
export default function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();
  return (
    <Fragment>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ width: "100%" }}
      >
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton
              key={index}
              onClick={(e) => {
                e.preventDefault();
                page == "Home"
                  ? router.push("/")
                  : router.push(`/${page.toLowerCase()}`);
              }}
            >
              <ListItemIcon>
                <ListItemText sx={{ color: "teal" }}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "teal" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
}
