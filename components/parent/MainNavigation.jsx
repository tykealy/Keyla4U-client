import { AppBar, Toolbar, Tabs, Tab, Typography, Box } from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";
import DrawerComp from "../presentation/DrawerComp";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Authentication from "./Authentication";
import SearchBar from "../presentation/SearchBar";
const PAGES = ["Home","Club","About","Favorites","Booked"];
export default function MainNavigtion() {
  
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Fragment>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: "#ffffff",
            fontFamily: "sans-serif",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src="/Logo.png" width="100" height="100" />
            {isMatch ? (
              <>
              </>
            ) : (
              <Tabs
                sx={{ marginRight: "2.5rem", color:"#75CA24" }}
                value={value}
                onChange={(e, value) => setValue(value)}
                TabIndicatorProps={{ style: { background: "green" } }}
                textColor="#75CA24"
                fontFamily="sans-serif"
              >
                {
                  PAGES.map((page,index) => (
                    <Tab key={index} label={page} />
                  ))
                }
              </Tabs>
            )}
          </Box >
         {
          isMatch  ? (
            <>
            <DrawerComp />
            </>
          ) : (
            <Box sx={{display: "flex", justifyContent:"space-evenly"}}>
            <SearchBar />
            <Authentication />
            </Box>
          )
         }
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
