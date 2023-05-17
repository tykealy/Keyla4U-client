import React from "react";
import ClubFilterList from "../components/parent/ClubFilterList";
import ClubCard from "../components/presentation/ClubCard";
import { Grid } from "@mui/material";
const ClubsPage = () => {
  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1>Clubs Page</h1>
      <Grid container spacing={1}>
        <Grid item xl={1} lg={2} md={3} sm={4} xs={5}>
          <ClubFilterList />
        </Grid>
        <Grid container item xl={11} lg={10} md={9} sm={8} xs={7} spacing={1}>
          {x.map((item) => {
            return (
              <Grid item lg={3} xs={12} sm={6} md={4}>
                <ClubCard
                  key={item.id}
                  name="tk Sport Center"
                  location="Phnom Penh"
                  minWidth="228px"
                  maxWidth="300px"
                  image="http://127.0.0.1:8000/img/16837028412023-01-31%2015.12.35.jpg"
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
