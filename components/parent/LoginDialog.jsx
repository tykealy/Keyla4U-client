import { Dialog, DialogTitle, TextField } from "@mui/material";
import PropTypes from "prop-types";
import SignInForm from "../presentation/SignInForm";
const LoginDialog = (props) => {
  const { onClose, open } = props;
  return (
    <div style={{}}>
      <Dialog onClose={onClose} open={open}>
        <SignInForm />
      </Dialog>
    </div>
  );
};

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default LoginDialog;
