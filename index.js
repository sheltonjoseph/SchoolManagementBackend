const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const studentRoute = require("./routes/student");
const authRoute = require("./routes/auth");
const staffRoute = require("./routes/staff");




dotenv.config();


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json());
  app.use("/api/auth", authRoute);
  app.use("/api/students", studentRoute);
  app.use("/api/staffs", staffRoute);

  app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });