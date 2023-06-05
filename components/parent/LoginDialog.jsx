import { Dialog, DialogTitle, TextField } from "@mui/material";
import PropTypes from "prop-types";
import SignInForm from "../presentation/SignInForm";
const LoginDialog = (props) => {
  const { onClose, open, apiUrl } = props;
  return (
    <div style={{}}>
      <Dialog onClose={onClose} open={open}>
        <SignInForm apiUrl={apiUrl} />
      </Dialog>
    </div>
  );
};

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  apiUrl: PropTypes.string,
};

export default LoginDialog;
