import * as React from "react";
import BookedCard from "./../../components/parent/BookedCard";
import Banner from "../../components/parent/Banner";
import Grid from "@mui/joy/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const BookedPage = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    getUserOrders();
  }, []);

  const getUserOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user")).id;
    const response = await fetch(`${props.apiUrl}/api/orders/${user}}`);
    const data = await response.json();
    setOrders(data);
  };

  React.useEffect(() => {
    console.log(orders);
  }, orders);
  return (
    <div>
      <Banner />
      <Grid
        container
        spacing={2}
        sx={{ marginX: isMobile ? "0.3rem" : "1rem" }}
      >
        {orders.map((order, index) => {
          return (
            <Grid xs={12} md={6} key={index}>
              <BookedCard
                image={order.image}
                name={order.name}
                court={order.category_name}
                pitch={order.pitch_num}
                bookedDate={order.booked_date}
                playDate={order.play_date}
                start_time={order.start_time}
                end_time={order.end_time}
                price={order.total_amount}
                map={order.map}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default BookedPage;

export async function getServerSideProps(context) {
  const apiUrl = process.env.API_URL;
  return {
    props: {
      apiUrl: apiUrl,
    },
  };
}
