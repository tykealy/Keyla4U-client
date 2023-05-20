import React from "react";
import ClubFilterList from "../../components/parent/ClubFilterList";
import ClubCard from "../../components/presentation/ClubCard";
import { Grid } from "@mui/material";
import { RecoilStates } from "../../state/state";
import { useRecoilValue } from "recoil";
const ClubsPage = (props) => {
  const image = "http://127.0.0.1:8000/img/";
  const { selectedLocationState, selectedSportTypeState } = RecoilStates;
  const selectedSportType = useRecoilValue(selectedSportTypeState);
  const selectedLocation = useRecoilValue(selectedLocationState);
  const [clubs, setClubs] = React.useState(props.clubs);

  //fetch clubs
  // const fetchClubs = async () => {
  //   const res = await fetch(
  //     `http://localhost:8000/api/clubs?location=${selectedLocation}`,
  //     {
  //       method: "GET",
  //     }
  //   ).catch((e) => console.log(e));
  //   const clubs = await res.json();
  //   setClubs(clubs);
  // };

  // React.useEffect(() => {
  //   fetchClubs();
  //   setClubs(filteredClubs);
  // }, [selectedLocation]);
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xl={1} lg={2} md={3} sm={4} xs={5}>
          <ClubFilterList
            locations={props.locations}
            SportTypes={props.SportTypes}
          />
        </Grid>
        <Grid container item xl={11} lg={10} md={9} sm={8} xs={7} spacing={1}>
          {clubs
            .filter((item) => item.location.includes(selectedLocation))
            .filter((item) => {
              if (selectedSportType == "") {
                return item;
              } else {
                return item.categories.includes(selectedSportType);
              }
            })
            .map((item) => {
              return (
                <Grid key={item.id} item lg={3} xs={12} sm={6} md={4}>
                  <ClubCard
                    id={item.id}
                    name={item.name}
                    location={item.location}
                    minWidth="228px"
                    maxWidth="300px"
                    image={image + item.image}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
};
export default ClubsPage;

export async function getServerSideProps() {
  const clubs_req = await fetch("http://localhost:8000/api/clubs");
  const clubs = await clubs_req.json();

  const locations_req = await fetch("http://localhost:8000/api/locations");
  const locations = await locations_req.json();

  const SportTypesReq = await fetch("http://localhost:8000/api/sports");
  const SportTypes = await SportTypesReq.json();
  return {
    props: {
      clubs: clubs,
      locations: locations,
      SportTypes: SportTypes,
    },
  };
}
