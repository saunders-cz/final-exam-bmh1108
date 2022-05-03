import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { PastryForm } from "./PastryForm";
import { GET_PASTRY } from "./queries";

export const EditPastry = ({ onClose }) => {
  const params = useParams();

  const { data, loading, error } = useQuery(GET_PASTRY, {
    variables: {
      id: params.id,
    },
  });

  if (error) return <Typography>{error.message}</Typography>;
  if (loading) return <Typography>Loading...</Typography>;

  return (
    <PastryForm id={params.id} initialValues={data.book} onClose={onClose} />
  );
};
