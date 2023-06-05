import React from "react";
import { Tab, Tabs, Box, createTheme, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import { RecoilStates } from "../../state/state";
import { useRecoilState } from "recoil";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const TabSelecting = (props) => {
  const { labels, clubCategoriesID } = props;
  const [value, setValue] = React.useState(0);

  const { selectedSportState } = RecoilStates;
  const [selectedSportID, setSelectedSportID] =
    useRecoilState(selectedSportState);

  React.useEffect(() => {}, [selectedSportID]);

  React.useEffect(() => {
    setSelectedSportID(clubCategoriesID[value]);
  }, [value]);

  const handleChange = (e, value) => {
    setValue(value);
  };
  const theme = createTheme({
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

  const tabTheme = useTheme();
  const isXs = useMediaQuery(tabTheme.breakpoints.down("sm"));
  const orientation = isXs ? "horizontal" : "vertical";
  const orientation2 = (orientation) => {
    let width;
    orientation == "horizontal" ? (width = "100vw") : "";
    return width;
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box sx={{ width: orientation2 }}>
          <Tabs
            TabIndicatorProps={{ style: { background: "teal" } }}
            TabScrollButtonProps={{ style: { color: "teal" } }}
            sx={{ borderRight: 1, borderColor: "divider" }}
            orientation={orientation}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable force tabs example"
          >
            {labels.map((label) => {
              return (
                <Tab
                  sx={{
                    margin: "10px",
                    "&:hover": {
                      color: "#99CCCC",
                      opacity: 1,
                    },
                  }}
                  key={label.id}
                  label={label.category_name}
                ></Tab>
              );
            })}
          </Tabs>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default TabSelecting;

TabSelecting.propTypes = {
  labels: PropTypes.array.isRequired,
  clubCategoriesID: PropTypes.array.isRequired,
};
