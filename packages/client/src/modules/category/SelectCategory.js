import { useQuery } from "@apollo/client";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { GET_PASTRY_CATEGORIES } from "./queries.js";

export const SelectCategory = ({
  name,
  value,
  error,
  helperText,
  onChange,
  onBlur,
  style,
}) => {
  const { data, loading } = useQuery(GET_PASTRY_CATEGORIES);

  return (
    <FormControl style={style}>
      <InputLabel id="category-label">Category</InputLabel>
      {loading === true ? (
        <Typography>...</Typography>
      ) : (
        <Select
          name={name}
          labelId="category-label"
          label="Category"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
        >
          {data.categories.map((c, i) => (
            <MenuItem key={i} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
      )}
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
