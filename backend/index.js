import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ReviewRoute from "./routes/ReviewRoute.js";

const app = express();

const port = 8080;
const conn_str =
  //"mongodb+srv://bmTravel:bmTravel.@cluster0.inmyqrz.mongodb.net/travelDb";
mongoose.connect(
  conn_str,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("error in connection");
    } else {
      console.log("mongodb is connected");
    }
  }
);

app.use(cors());
app.use(express.json());
app.use(ReviewRoute);

//create a server object:
app.listen(port, () => {
  console.log("starting the server on 8080");
});
//the server object listens on port 8080
