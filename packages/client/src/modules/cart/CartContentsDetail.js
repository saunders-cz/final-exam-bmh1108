import {
    ButtonGroup,
    Grid,
    Icon,
    IconButton,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  import { pastries } from "../pastry/pastryData.js";
  import { useCart } from "./CartContext";
  
  const getPastry = (id) => {
    return pastries.find((p) => p.id === id);
  };
  
  export const CartContentsDetail = () => {
    const cart = useCart();
    const { pastries, updatePastryQuantity } = cart;
    return (
      <Grid container style={{ maxWidth: 400 }} direction="column">
        {pastries.map((pastry, i) => {
          const Pastry = getPastry(pastry.id);
          return (
            <Grid
              item
              container
              key={i}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  {pastry.name} x {pastry.qty} @ ${pastry.price}
                </Typography>
              </Grid>
              <Grid item>
                <ButtonGroup>
                  <IconButton
                    onClick={() => updatePastryQuantity(pastry.id, pastry.qty + 1)}
                  >
                    <Icon>add</Icon>
                  </IconButton>
                  <IconButton
                    onClick={() => updatePastryQuantity(pastry.id, pastry.qty - 1)}
                  >
                    <Icon>remove</Icon>
                  </IconButton>
                  <IconButton onClick={() => updatePastryQuantity(0)}>
                    <Icon>delete</Icon>
                  </IconButton>
                </ButtonGroup>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    );
  };