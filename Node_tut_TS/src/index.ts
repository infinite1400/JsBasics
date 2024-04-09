import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose, { mongo } from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017";

mongoose.Promise=Promise;
mongoose
  .connect(MONGO_URI,{
    dbName : "TS-Backend-learn"
  })
  .then(() => {
    console.log("Database Connected Successfully !");
  })
  .catch((err: Error) => {
    console.log(err);
  });

mongoose.connection.on('error', (error : Error) => console.log(error))
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());

const server = http.createServer(app);
const Port = 8000;
server.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}/ `);
});
