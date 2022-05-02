import { Grid, Typography } from "@mui/material";
import React from "react";

export const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          Welcome!
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <img src="./img/Benny's.png" />
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={7}>
          <Typography variant="h6" align="justify">
            Established in 2022, Benny's works with people from all walks of life to bring pastries from around the world to Rochester, NY. Half of our proceeds go to these individuals and families who provide us with their traditional pastry recipes and help us enjoy and celebrate their cultures.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
