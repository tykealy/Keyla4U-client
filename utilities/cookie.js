import Cookies from "js-cookie";

export const setCookie = (key, value, option = {}) => {
  Cookies.set(key, value, option);
};

export const getCookie = (key) => {
  Cookies.get(key);
};

export const removeCookie = (key) => {
  Cookies.remove(key);
};
