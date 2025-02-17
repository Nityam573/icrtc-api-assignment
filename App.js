require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

app.use("/register", require("./routes/register"));

app.use("/login", require("./routes/login"));

app.use("/addtrain", require("./routes/add_train"));

app.use("/trains", require("./routes/get_seat_in_train"));

app.use("/book", require("./routes/book"));

app.use("/booking", require("./routes/get_booking"));

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});