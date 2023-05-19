import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";
import ModButton from "../presentation/ModButton";
import { Fragment } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { RecoilStates } from "../../state/state";
export default function Authentication(props) {
  const { loggedIn } = props;
  const { signupState, loginState, loggedInState } = RecoilStates;
  const [openLogin, setOpenLogin] = useRecoilState(loginState);
  const signup = useRecoilValue(signupState);
  const [logedIn, setLoggedIn] = useRecoilState(loggedInState);
  function onClose() {
    setOpenLogin(false);
  }
  function handleLogin() {
    setOpenLogin(true);
  }
  function handleLogout() {
    localStorage.removeItem("user");
    setLoggedIn(false);
  }
  return (
    <Fragment>
      <LoginDialog open={openLogin} onClose={onClose} />
      <RegisterDialog
        open={signup}
        title="Sign up Form"
        onClose={onClose}
        v75CA2
      />
      {!loggedIn ? (
        <ModButton
          onClick={handleLogin}
          buttonTitle="Login"
          style={{ marginLeft: "auto" }}
        />
      ) : (
        <ModButton onClick={handleLogout} buttonTitle="Logout" />
      )}
    </Fragment>
  );
}
