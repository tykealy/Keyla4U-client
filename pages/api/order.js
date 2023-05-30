export default async function order(req, res) {
  // if (req.method === "POST") {
  //   // res.status(200).json(req.body);
  //   res.status(200).json(req);
  // } else {
  //   res.status(200).json({ name: "john" });
  // }
  const data = req.body;
  const formData = new FormData();

  formData.append("email", data.email);
  formData.append("pitch", data.pitch);
  formData.append("play_date", data.play_date);
  formData.append("start_time", data.start_time);
  formData.append("end_time", data.end_time);
  formData.append("payment_method", data.payment_method);
  formData.append("order_status", data.order_status);
  // const request = await fetch("http://localhost:8000/api/order", {
  //   method: "POST",
  //   body: data,
  // });
  // const response = await request.json();
  res.status(200).json(formData);
}

// const handler = nc()
//   // use connect based middleware
//   .use(cors())
//   .post(async (req, res) => {
//     const response = await fetch(remoteServerUrl, config);
//     res.json(response);
//   });

// export default order;
