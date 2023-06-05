import { Dialog, DialogTitle, TextField } from "@mui/material";
import PropTypes from "prop-types";
import SignUp from "../presentation/SignUpForm";
const RegisterDialog = (props) => {
  const { onClose, open, apiUrl } = props;
  return (
    <div style={{}}>
      <Dialog onClose={onClose} open={open}>
        <SignUp apiUrl={apiUrl} />
      </Dialog>
    </div>
  );
};

RegisterDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  apiUrl: PropTypes.string,
};

export default RegisterDialog;
