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
const selectedSportState = atom({
  key: "selectedSportState",
  default: null,
});
const selectedPageState = atom({
  key: "selectedPage",
  default: 1,
});
const clubChangedState = atom({
  key: "clubChangedState",
  default: null,
});

const selectedTimesState = atom({
  key: "selectedTimes",
  default: [],
});

const orderItemState = atom({
  key: "orderItem",
  default: {},
});

export const RecoilStates = {
  signupState,
  loginState,
  loggedInState,
  selectedLocationState,
  selectedSportTypeState,
  selectedSportState,
  selectedPageState,
  clubChangedState,
  selectedTimesState,
  orderItemState,
};
