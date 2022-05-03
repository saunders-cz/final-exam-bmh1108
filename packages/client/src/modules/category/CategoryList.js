import { React } from "react";
import { Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_PASTRY_CATEGORIES } from "./queries.js";
import { PastryList } from "../pastry/PastryList.js";

export const CategoryList = () => {
  const { data, error, loading } = useQuery(GET_PASTRY_CATEGORIES);

  if (error) return <Typography>{error.message}</Typography>;

  if (loading) return <Typography>Loading...</Typography>;

  console.log(data);

  const { categories } = data;

  return (
    <Grid container spacing={2}>
      {categories.map((category, i) => (
        <Grid container item xs={12} key={i}>
          <Grid item xs={12}>
            <Typography variant="h4">{category.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <PastryList pastries={category.pastries} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
