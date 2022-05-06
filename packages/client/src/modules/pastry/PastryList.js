import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useCart } from "../../modules/cart/CartContext.js";

export const PastryList = ({ pastries }) => {
  const { id } = pastries;
  const cart = useCart();
  const onAddItem = (pastryId) => cart.addItem(pastryId);
  
  return (
    <Grid container spacing={2}>
      {pastries.map((pastry, i) => (
        <Grid item xs={4} key={i}>
          <Card>
            <CardMedia
              height={192}
              component="img"
              src={pastry.imgsrc}
              alt={pastry.name}
            />
            <CardContent>
              <Typography variant="h4">{pastry.name}</Typography>
              <Typography variant="h6">${pastry.price}</Typography>
              <Typography variant="body">
                {pastry.origin}; {pastry.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => onAddItem(id)}>Add to Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
