import { Dialog, DialogTitle, TextField } from "@mui/material";
import PropTypes from "prop-types";
import SignUp from "../presentation/SignUpForm";
const RegisterDialog = (props) => {
  const { onClose, open, title, pl } = props;
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
  title: PropTypes.string.isRequired,
  pl: PropTypes.string,
};

export default RegisterDialog;
