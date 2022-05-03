import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { PastryTable } from "../modules/pastry/PastryTable";
import { useNavigate, useParams } from "react-router-dom";
import { EditPastry } from "../modules/pastry/EditPastry";
import { AddPastry } from "../modules/pastry/AddPastry";

export const AdminPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [showAddPastry, setShowAddPastry] = useState(false);

  const showEditPastry = params.id !== undefined;

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2">Pastries</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAddPastry(true)}>Add Pastry</Button>
          <Link href="/menu">View Pastries</Link>
        </Grid>
        <Grid item>
          <PastryTable />
        </Grid>
      </Grid>
      {showEditPastry && (
        <Dialog open={true} onClose={() => navigate("/")}>
          <DialogTitle />
          <DialogContent>
            <EditPastry onClose={() => navigate("/")} />
          </DialogContent>
        </Dialog>
      )}
      {showAddPastry && (
        <Dialog open={true} onClose={() => setShowAddPastry(false)}>
          <DialogTitle />
          <DialogContent>
            <AddPastry onClose={() => setShowAddPastry(false)} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
