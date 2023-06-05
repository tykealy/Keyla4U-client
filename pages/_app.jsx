import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RecoilRoot } from "recoil";
import MainNavigation from "../components/parent/MainNavigation";
function MyApp({ Component, pageProps, apiUrl }) {
  return (
    <RecoilRoot>
      <MainNavigation />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
