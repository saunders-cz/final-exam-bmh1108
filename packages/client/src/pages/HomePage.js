import { Grid, Typography } from "@mui/material";
import React from "react";

export const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography>
          Welcome to Benny's Bakery.
        </Typography>
      </Grid>
    </Grid>
  );
};