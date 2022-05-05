import { Container, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation.js";
import { CartStatus } from "../modules/cart/CartStatus.js";

export const Layout = () => {
  return (
    <Container>
      <Grid container direction="column">
        <Grid item container justifyContent="space-between">
          <Grid item>
            <Navigation />
          </Grid>
          <Grid item>
            <CartStatus />
          </Grid>
        </Grid>
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};
