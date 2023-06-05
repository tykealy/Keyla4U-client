import React from "react";
import PropTypes from "prop-types";
import { Dialog, Typography, Button, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Router from "next/router";
const PaidDialog = ({ open, handlePaidClose }) => {
  const router = Router;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handlePaidClose}
        PaperProps={{ sx: { borderRadius: "15px" } }}
      >
        <div
          style={{
            width: 340,
            height: 470,
            textAlign: "center",
          }}
        >
          <div style={{ marginTop: "35%" }}>
            <CheckCircleIcon style={{ fontSize: 100, color: "teal" }} />
          </div>
          <Typography sx={{ marginTop: "10px" }} variant="h6">
            Booked Successfully
          </Typography>
          <Typography sx={{ marginTop: "10px" }} variant="body2">
            Merci for booking with us.
          </Typography>
          <Grid container sx={{ marginTop: "20%" }}>
            <Grid item xs={6} xl={6}>
              <Button
                variant="filled"
                sx={{ background: "teal", width: "80%", color: "white" }}
              >
                View orders
              </Button>
            </Grid>
            <Grid item xs={6} xl={6}>
              <Button
                onClick={() => {
                  router.push("/clubs");
                }}
                variant="filled"
                sx={{ background: "teal", width: "80%", color: "white" }}
              >
                Back home
              </Button>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
};

export default PaidDialog;

PaidDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handlePaidClose: PropTypes.func.isRequired,
};
