import {
  ButtonGroup,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { pastries } from "../pastry/pastryData.js";
import { useCart } from "./CartContext";

const getFoodItem = (id) => {
  return pastries.find((p) => p.id === id);
};

export const CartContentsDetail = () => {
  const cart = useCart();
  const { items, updateItemQuantity } = cart;
  return (
    <Grid container style={{ maxWidth: 400 }} direction="column">
      {items.map((item, i) => {
        const foodItem = getFoodItem(item.id);
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
                {foodItem.title} x {item.qty} @ ${foodItem.price}
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup>
                <IconButton
                  onClick={() => updateItemQuantity(item.id, item.qty + 1)}
                >
                  <Icon>add</Icon>
                </IconButton>
                <IconButton
                  onClick={() => updateItemQuantity(item.id, item.qty - 1)}
                >
                  <Icon>remove</Icon>
                </IconButton>
                <IconButton onClick={() => updateItemQuantity(0)}>
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