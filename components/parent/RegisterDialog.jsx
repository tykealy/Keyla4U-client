import { Dialog, DialogTitle, TextField } from "@mui/material";
import PropTypes from "prop-types";
import SignUp from "../presentation/SignUpForm";
const RegisterDialog = (props) => {
  const { onClose, open } = props;
  return (
    <div style={{}}>
      <Dialog onClose={onClose} open={open}>
        <SignUp />
      </Dialog>
    </div>
  );
};

RegisterDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default RegisterDialog;
