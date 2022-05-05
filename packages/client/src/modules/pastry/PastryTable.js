import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_PASTRIES } from "./queries";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { DELETE_PASTRY } from "./mutations";

export const PastryTable = () => {
  const { data, loading, error } = useQuery(GET_PASTRIES);
  const navigate = useNavigate();
  const [pastryToDelete, setPastryToDelete] = useState(undefined);
  const [deletePastry, deleteResult] = useMutation(DELETE_PASTRY, {
    refetchQueries: ["GET_PASTRY", "GET_PASTRIES"],
    onCompleted: () => setPastryToDelete(undefined),
  });

  if (error) return <Typography color="error">{error.message}</Typography>;
  if (loading) return <Typography>Loading...</Typography>;

  const { pastries } = data;

  const columns = [
    { field: "name", headerName: "Name", width: 350 },
    {
      field: "origin",
      headerName: "Origin",
      valueGetter: (input) => {
        return input.row.origin;
      },
      width: 150,
    },
    {
      field: "category",
      headerName: "Category",
      valueGetter: (input) => {
        return input.row.category.name;
      },
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      valueGetter: (input) => input.row.price.toFixed(2),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Edit />}
          onClick={() => navigate(`/menu/${params.row.id}`)}
          label="Edit"
        />,
        <GridActionsCellItem
          icon={<Delete />}
          onClick={() => setPastryToDelete(params.row)}
          label="Delete"
        />,
      ],
    },
  ];

  return (
    <>
      <div style={{ height: 800, width: 900 }}>
        <DataGrid rows={pastries} columns={columns} />
      </div>
      {deleteResult.error && (
        <div>Error deleting pastry: {deleteResult.error.message}</div>
      )}
      {pastryToDelete !== undefined && (
        <Dialog
          open={pastryToDelete !== undefined}
          onClose={() => setPastryToDelete(undefined)}
        >
          <DialogTitle>Delete Pastry</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to delete {pastryToDelete.name}?{" "}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setPastryToDelete(undefined)}>Cancel</Button>
            <Button
              onClick={() =>
                deletePastry({ variables: { id: pastryToDelete.id } })
              }
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
