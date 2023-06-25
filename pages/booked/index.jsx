import * as React from "react";
import BookedCard from "./../../components/parent/BookedCard";
import Banner from "../../components/parent/Banner";
const BookedPage = (props) => {
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
      {orders.map((order, index) => {
        return (
          <BookedCard
            key={index}
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
        );
      })}
    </div>
  );
};
export default BookedPage;

export async function getServerSideProps() {
  const apiUrl = process.env.API_URL;
  return {
    props: {
      apiUrl: apiUrl,
    },
  };
}
