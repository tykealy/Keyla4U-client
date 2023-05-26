import React from "react";
import {
  Box,
  Tabs,
  Tab,
  createTheme,
  ThemeProvider,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
} from "@mui/material";
import { RecoilStates } from "../../state/state";
import { useRecoilState } from "recoil";
import PropTypes from "prop-types";
import axios from "axios";
import { useRouter } from "next/router";
const PitchList = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { club, clubCategoriesID } = props;
  const { selectedSportState } = RecoilStates;
  const [selectedSportID, setSelectedSportID] =
    useRecoilState(selectedSportState);
  const [pitches, setPitches] = React.useState([]);
  const [sport, setSport] = React.useState("");
  const [mount, setMount] = React.useState();
  const [value, setValue] = React.useState();
  const [selectedPitch, setSelectedPitch] = React.useState();

  const [value2, setValue2] = React.useState();
  const [availableDays, setAvailableDays] = React.useState([]);
  const [day, setDay] = React.useState();

  const [availableTimes, setAvailableTimes] = React.useState([]);

  //click event
  const handlePitchClick = (e, pitchID) => {
    setSelectedPitch(pitchID);
  };

  const handleDayClick = (e, day) => {
    setDay(day);
  };

  //when the selected pitch change, reset all the availble that related to the new selected pitch
  React.useEffect(() => {
    pitches && value != null && setAvailableDays(pitches[value].availableDays);
    setValue2();
    setDay();
    setAvailableTimes([]);
  }, [selectedPitch]);

  React.useEffect(() => {
    availableTimes.length > 0 && console.log(availableTimes);
  }, [availableTimes]);

  React.useEffect(() => {
    setMount(true);
  });

  //when the new sport type is selected, reset all the selectedPitch, day,
  //and refetch all the pitches that related to the new slected sport type.
  React.useEffect(() => {
    getPitches();
    setSelectedPitch([]);
    setAvailableDays([]);
    setAvailableTimes([]);
    setValue();
    setValue2();
  }, [selectedSportID, mount]);

  // when selectedPitch and day is not null, call getAvailableTime() function
  React.useEffect(() => {
    if (day != null && selectedPitch != null) getAvailableTime();
  }, [day]);

  React.useEffect(() => {
    console.log(availableDays);
  }, [availableDays]);

  //function to get all the pitches related to selected sport
  const getPitches = async () => {
    try {
      const req = await axios.get(
        `http://localhost:8000/api/pitches/${selectedSportID}`
      );
      const pitches = req;
      setPitches(pitches.data);
    } catch (error) {
      console.log(error);
    }
  };

  //function get all the availbable time related to the selected pitch and day
  const getAvailableTime = async () => {
    try {
      const req = await axios.get(
        `http://localhost:8000/api/availableTimes/${selectedPitch}/${day}`
      );
      const res = req;
      setAvailableTimes(res.data);
    } catch (error) {
      console.log(error);
    }
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
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          border: "1px solid grey",
          margin: "10px",
        }}
      >
        <Box>
          <Tabs
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            TabIndicatorProps={{ style: { background: "teal" } }}
            TabScrollButtonProps={{ style: { color: "teal" } }}
            value={value}
            onChange={(e, value) => {
              setValue(value);
            }}
            sx={{ padding: 1 }}
          >
            {pitches.map((pitch, index) => {
              return (
                <Tab
                  label={`Pitch ${pitch.pitch_num}`}
                  key={pitch.id}
                  sx={{
                    "&:hover": {
                      color: "#99CCCC",
                      opacity: 1,
                    },
                  }}
                  onClick={(e) => {
                    handlePitchClick(e, pitch.id);
                  }}
                ></Tab>
              );
            })}
          </Tabs>
        </Box>
      </div>
      {value == null && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Typography fontSize="1.1rem">
            Please select a pitch number
          </Typography>
        </div>
      )}
      {availableDays.length != 0 && (
        <div style={{ border: "1px solid grey", margin: "0px 10px 10px 10px" }}>
          <Box>
            <Tabs
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              TabIndicatorProps={{ style: { background: "teal" } }}
              TabScrollButtonProps={{ style: { color: "teal" } }}
              value={value2}
              onChange={(e, value2) => {
                setValue2(value2);
              }}
              sx={{ padding: 1 }}
            >
              {availableDays.map((day, index) => {
                return (
                  <Tab
                    key={index}
                    label={`${day}`}
                    sx={
                      (index != 0 && {
                        borderLeft: "1px solid red",
                      },
                      {
                        "&:hover": {
                          color: "#99CCCC",
                          opacity: 1,
                        },
                      })
                    }
                    onClick={(e) => {
                      handleDayClick(e, day);
                    }}
                  ></Tab>
                );
              })}
            </Tabs>
          </Box>
        </div>
      )}
      {value2 == null && value != null && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Typography fontSize="1.1rem" textAlign="center" variant="">
            Please select a date
          </Typography>
        </div>
      )}
      {day != null && (
        <div style={{ textAlign: "center", margin: "30px 0 30px 0" }}>
          <Typography fontSize="1.1rem">
            Select the time you want to book.
          </Typography>
        </div>
      )}
      <div style={{ padding: "0 10px 10px 10px", textAlign: "center" }}>
        <ToggleButtonGroup>
          <Grid rowSpacing={2} container>
            {availableTimes.map((option) => (
              <Grid item lg={2} md={3} sm={4} xs={6}>
                <ToggleButton
                  sx={{ padding: 2 }}
                  key={option.id}
                  value={option.id}
                >
                  {option.start_time} - {option.end_time}
                </ToggleButton>
              </Grid>
            ))}
          </Grid>
        </ToggleButtonGroup>
      </div>
    </ThemeProvider>
  );
};

export default PitchList;
PitchList.propTypes = {
  club: PropTypes.object.isRequired,
  clubCategoriesID: PropTypes.array.isRequired,
  selectedClub: PropTypes.number.isRequired,
};
