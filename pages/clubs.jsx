import React from "react";
import ClubFilterList from "../components/parent/ClubFilterList";
import ClubCard from "../components/presentation/ClubCard";
import { Grid } from "@mui/material";
const ClubsPage = (props) => {
  const image = "http://127.0.0.1:8000/img/";
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
          {props.clubs.map((item) => {
            return (
              <Grid key={item.id} item lg={3} xs={12} sm={6} md={4}>
                <ClubCard
                  key={item.id}
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
  const res = await fetch("http://localhost:8000/api/clubs");
  const clubs = await res.json();

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
