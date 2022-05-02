import { Container, Grid, Typography } from "@material-ui/core";
import { Registration } from "../modules/forms/Registration";

export const RegistrationPage = () => {
  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant="h2">Register</Typography>
      </Grid>
      <Grid item xs={12}>
        <Registration />
      </Grid>
    </Container>
  );
};