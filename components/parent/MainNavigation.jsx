import { AppBar, Toolbar, Tabs, Tab, Box } from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";
import DrawerComp from "../presentation/DrawerComp";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Authentication from "./Authentication";
import SearchBar from "../presentation/SearchBar";
import Logo from "./../../public/Logo.jpg";
import { RecoilStates } from "../../state/state";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function MainNavigation() {
  const router = useRouter();
  const PAGES = ["Home", "Clubs", "About", "Favorites", "Booked"];
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const { loggedInState } = RecoilStates;
  const [value, setValue] = useState(1);
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);

  //check if the user is logged in
  useEffect(() => {
    JSON.parse(localStorage.getItem("user")) == null
      ? setLoggedIn(false)
      : setLoggedIn(true);
  }, []);
  return (
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
              sx={{ marginRight: "2.5rem", color: "#75CA24" }}
              value={value}
              onChange={(e, value) => setValue(value)}
              TabIndicatorProps={{ style: { background: "green" } }}
              fontFamily="sans-serif"
            >
              <Image alt="logo" src={Logo} width="100" height="100" />
              {PAGES.map((page, index) => (
                <Tab
                  onClick={() => {
                    page == "Home"
                      ? router.push("/")
                      : router.push(`/${page.toLowerCase()}`);
                  }}
                  key={index}
                  label={page}
                  sx={{ color: "#75CA24" }}
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
  );
}
