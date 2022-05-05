import { Grid, Typography } from "@mui/material";
import { Registration } from "../modules/forms/Registration";

export const RegistrationPage = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">Register</Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Registration />
      </Grid>
    </>
  );
};