import {
    Button,
    Container,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
import { Checkbox } from "@mui/material";
  import { useFormik } from "formik";
  import * as yup from "yup";
  
  const initialValues = {
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };
  
  const validationSchema = yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().label("Email"),
    address: yup.string().required().label("Street Address"),
    city: yup.string().required().label("City"),
    state: yup.string().required().label("State"),
    zip: yup.string().required().label("Zip Code"),
    mailing: yup.string().required().label("Mailing List"),
  });
  
  export const Registration = () => {
    const { values, errors, handleSubmit, handleBlur, handleChange, isValid } =
      useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, helpers) => {
          console.log(values, helpers);
        },
      });
  
    return (
      <form onSubmit={handleSubmit}>
        <Container>
          <Grid container spacing={2}/>
            <Grid item xs={12}>
              <Typography variant="h4">Let us know who you are!</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Name"
              error={!!errors.name}
              helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                label="Email"
                error={!!errors.email}
                helperText={errors.email}
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                label="Street Address"
                error={!!errors.address}
                helperText={errors.address}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                label="City"
                error={!!errors.city}
                helperText={errors.city}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="state"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                label="State"
                error={!!errors.state}
                helperText={errors.state}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="zip"
                value={values.zip}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                label="Zip Code"
                error={!!errors.zip}
                helperText={errors.zip}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                Check the button below to be added to our mailing list!
              </Typography>
              </Grid>
            <Grid item xs={12}>
              <Checkbox
              id="mailing"
              value={values.mailing}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Mailing List"
              error={!!errors.mailing}
              helperText={errors.mailing}
              />
              </Grid>
            <Grid item xs={12}>
              <Button type="submit" disabled={isValid === false}>
                Submit
              </Button>
            </Grid>
          </Container>
      </form>
    );
  };