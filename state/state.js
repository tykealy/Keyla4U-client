import { atom, selector } from "recoil";

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
  default: false,
});
const selectedLocationState = atom({
  key: "selectedLocation",
  default: "",
});
const selectedSportTypeState = atom({
  key: "selectedSportType",
  default: "",
});
export const RecoilStates = {
  signupState,
  loginState,
  loggedInState,
  selectedLocationState,
  selectedSportTypeState,
};
