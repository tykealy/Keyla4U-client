import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";
import DrawerComp from "../presentation/DrawerComp";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Authentication from "./Authentication";
import SearchBar from "../presentation/SearchBar";
import Logo from "./../../public/Logo.png";
import { RecoilStates } from "../../state/state";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function MainNavigation() {
  const router = useRouter();
  const PAGES = ["Home", "Clubs", "About", "Favorites", "Booked"];
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const { loggedInState, selectedPageState } = RecoilStates;
  const [value, setValue] = useRecoilState(selectedPageState);
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);

  //check if the user is logged in
  useEffect(() => {
    JSON.parse(localStorage.getItem("user")) == null
      ? setLoggedIn(false)
      : setLoggedIn(true);
  }, []);

  const theme1 = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: "teal",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme1}>
      <AppBar position="sticky" sx={{ marginBottom: 2 }}>
        <Toolbar
          sx={{
            backgroundColor: "#ffffff",
            fontFamily: "sans-serif",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMatch ? (
              <>
                <Image alt="Logo" src={Logo} width="70" height="70" />
              </>
            ) : (
              <Tabs
                sx={{ marginRight: "2.5rem", color: "teal" }}
                value={value}
                onChange={(e, value) => setValue(value)}
                TabIndicatorProps={{ style: { background: "teal" } }}
                fontFamily="sans-serif"
              >
                <Image alt="logo" src={Logo} width="100" height="100" />
                {PAGES.map((page, index) => (
                  <Tab
                    sx={{
                      "&:hover": {
                        color: "#99CCCC",
                        opacity: 1,
                      },
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      page == "Home"
                        ? router.push("/")
                        : router.push(`/${page.toLowerCase()}`);
                    }}
                    key={index}
                    label={page}
                  />
                ))}
              </Tabs>
            )}
          </Box>
          {isMatch ? (
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Authentication loggedIn={loggedIn} />
              <DrawerComp />
            </Box>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <SearchBar />
              <Authentication loggedIn={loggedIn} />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
