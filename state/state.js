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
const selectedClubState = atom({
  key: "selectedClub",
  default: null,
});
export const RecoilStates = {
  signupState,
  loginState,
  loggedInState,
  selectedLocationState,
  selectedSportTypeState,
  selectedClubState,
};
