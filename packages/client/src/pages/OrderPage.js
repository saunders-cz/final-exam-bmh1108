import { Grid, Typography } from "@mui/material";
import React from "react";
import { CartContentsDetail } from "../modules/cart/CartContentsDetail.js";
import { useCart } from "../modules/cart/CartContext.js";

export const OrderPage = () => {
  const { hasItems } = useCart();
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h2" element="h1">
          Your Order
        </Typography>
        {hasItems === false && (
          <Typography>
            There aren't any items in your cart at this time. Check out our{" "}
            <a href="/menu">menu</a>.
          </Typography>
        )}
      </Grid>
      <Grid item>
        <CartContentsDetail />
      </Grid>
    </Grid>
  );
};