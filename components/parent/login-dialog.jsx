import { Dialog, DialogTitle, TextField } from "@mui/material";
import PropTypes from "prop-types";
export default function LoginDialog(Props) {
  const { onClose, open } = Props;
  return (
    <div style={{}}>
      <Dialog onClose={onClose} open={open}>
        <DialogTitle>Login Form</DialogTitle>
        <TextField variant="filled"></TextField>
      </Dialog>
    </div>
  );
}

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
