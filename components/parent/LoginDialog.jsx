import { Dialog, DialogTitle, TextField } from "@mui/material";
import PropTypes from "prop-types";
import SignInForm from "../presentation/SignInForm";
const LoginDialog = (props) => {
  const { onClose, open, title, pl } = props;
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
  title: PropTypes.string.isRequired,
  pl: PropTypes.string,
};

export default LoginDialog;
