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

export const PastryList = ({ pastries }) => {
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
              <Typography variant="h5">{pastry.name}</Typography>
              <Typography variant="h4">{pastry.origin}, {pastry.price}</Typography>
              <Typography variant="body">{pastry.description}</Typography>
            </CardContent>
            <CardActions>
              <Button>Add to Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};