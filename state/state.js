import { atom } from "recoil";

const signupState = atom({
  key: "signupState",
  default: false,
});
const loginState = atom({
  key: "loginState",
  default: false,
});
const loggedInState = atom({
  key: "loggedInState",
  // default: () => {
  //   if (JSON.parse(localStorage.getItem("user")) == null) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // },
  default: false,
});

export const RecoilStates = {
  signupState,
  loginState,
  loggedInState,
};
