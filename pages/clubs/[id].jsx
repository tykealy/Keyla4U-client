import React from "react";
import BookingTable from "../../components/parent/BookingTable";
import { RecoilStates } from "../../state/state";
import { Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import { createTheme, ThemeProvider, Dialog } from "@mui/material";
import { useRecoilValue } from "recoil";
import PaidDialog from "../../components/presentation/PaidDialog";
const Club = ({ club, pitcheCategories, apiUrl }) => {
  const buttonTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            "&.MuiButton-outlined": {
              backgroundColor: "teal",
              color: "white",
              borderColor: "teal",
            },
            "&.Mui-disabled": {
              borderColor: "grey",
              backgroundColor: "white",
              color: "grey",
            },
          },
        },
      },
    },
  });

  const book = async () => {
    const data = orderItem;
    const formData = new FormData();

    formData.append("pitch_id", data.pitch_id);
    formData.append("week_day", data.week_day);

    for (let id of data.id) {
      formData.append("id[]", id.id);
    }

    const req = await fetch(`${apiUrl}/api/availableTimes/book`, {
      method: "POST",
      body: formData,
    }).catch((e) => {
      console.log(e);
    });
    const res = req.json();
  };

  const constructOrder = () => {
    return {
      email: JSON.parse(localStorage.getItem("user")).email,
      pitch: orderItem.pitch_id,
      play_date: orderItem.week_day,
      start_time: orderItem.id[0].start_time,
      end_time: orderItem.id[orderItem.id.length - 1].end_time,
      payment_method: "QRcode",
      order_status: "pending",
    };
  };

  const handlePaidClose = () => {
    setPaid(false);
  };

  const order = async (event) => {
    const data = constructOrder();
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("pitch", data.pitch);
    formData.append("play_date", data.play_date);
    formData.append("start_time", data.start_time);
    formData.append("end_time", data.end_time);
    formData.append("payment_method", data.payment_method);
    formData.append("order_status", data.order_status);
    try {
      const req = await fetch(`${apiUrl}/api/order`, {
        method: "POST",
        body: formData,
      });
      const res = await req.json();
      setOrderData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const [orderData, setOrderData] = React.useState({});
  const { selectedTimesState, orderItemState } = RecoilStates;
  const router = useRouter();
  const selectClub = club.id;
  const [selectedClub, setSelectedClub] = React.useState(selectClub);
  const selectedTimes = useRecoilValue(selectedTimesState);
  const orderItem = useRecoilValue(orderItemState);
  const [qrOpen, setQrOpen] = React.useState(false);
  const [Qrcode, setQrcode] = React.useState("");
  const [paid, setPaid] = React.useState(false);
  const closeqr = () => {
    setQrOpen(false);
    setOrderData({});
    setQrcode(null);
  };

  React.useEffect(() => {
    if (Object.keys(orderData).length != 0) {
      const orderID = orderData.id;
      setQrcode(
        `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${apiUrl}/api/pay/${orderID}`
      );
      fetchPaid(orderID);
    }
  }, [orderData]);

  const fetchPaid = async (orderID) => {
    try {
      const req = await fetch(`${apiUrl}/api/payment/${orderID}`);
      const res = await req.json();
      if (res == "Paid") {
        book();
        setQrOpen(false);
        setPaid(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    Qrcode !== "" ? setQrOpen(true) : "";
  }, [Qrcode]);

  return (
    <div>
      <PaidDialog open={paid} handlePaidClose={handlePaidClose} />
      <Dialog
        open={qrOpen}
        onClose={closeqr}
        PaperProps={{ sx: { borderRadius: "15px" } }}
      >
        <div
          style={{
            width: 340,
            height: 470,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "33px",
              height: "30px",
              backgroundColor: "#E21A1A",
              right: -15,
              marginTop: "25px",
              transform: "rotateY(0deg) rotate(45deg)",
            }}
          ></div>
          <div
            style={{
              height: "12%",
              backgroundColor: "#E21A1A",
              color: "white",
              fontSize: "1.3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            KHQR
          </div>
          <div
            style={{
              height: "18%",
              textAlign: "start",
              padding: "15px",
              backgroundImage:
                "linear-gradient(to right, grey 50%, transparent 60%)",
              backgroundSize:
                "10px 1px" /* adjust the size of each dash and space */,
              backgroundPosition:
                "0 100%" /* position the background at the bottom */,
              backgroundRepeat: "repeat-x",
              paddingBottom:
                "10px" /* adjust the value to control the space below the dashes */,
            }}
          >
            <div style={{ marginLeft: "23px" }}>
              <Typography>Keyla4U</Typography>
              <Typography fontSize="1.4rem">
                $ {orderData.total_amount}
              </Typography>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Qrcode} />
          </div>
        </div>
      </Dialog>
      <div
        style={{
          margin: "20px",
          padding: "10px",
          border: "1px solid teal",
          display: "inline-block",
          borderRadius: "5px",
          width: "60px",
          textAlign: "center",
        }}
        onClick={() => {
          router.push("/clubs");
        }}
      >
        <ArrowBackIosIcon
          sx={{
            verticalAlign: "sub",
            color: "teal",
          }}
        />
      </div>
      <div style={{ display: "inline-block" }}>
        <Typography sx={{ color: "#5A5A5A" }} variant="h5">
          {club.name}
        </Typography>
      </div>
      <ThemeProvider theme={buttonTheme}>
        <div style={{ float: "right", margin: "20px" }}>
          <Button
            variant="outlined"
            sx={{ float: "right" }}
            disabled={selectedTimes.length == 0 ? true : false}
            onClick={() => {
              order();
            }}
          >
            Book Now
          </Button>
        </div>
      </ThemeProvider>
      <BookingTable
        clubCategoryID={pitcheCategories}
        club={club}
        apiUrl={apiUrl}
        selectedClub={selectedClub}
      ></BookingTable>
    </div>
  );
};

export default Club;

export async function getServerSideProps(context) {
  const selectedClub = context.query.id;
  const apiUrl = process.env.API_URL;

  const req = await fetch(`${apiUrl}/api/clubs/${selectedClub}`);
  const res = await req.json();
  const pitchCategoryID = res.categories.map((category) => {
    return category.id;
  });
  return {
    props: {
      club: res,
      pitcheCategories: pitchCategoryID,
      apiUrl: apiUrl,
    },
  };
}
