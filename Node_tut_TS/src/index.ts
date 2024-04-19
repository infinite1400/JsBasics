import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

import router from "./router";

mongoose.Promise=Promise;
mongoose
  .connect(process.env.MONGO_URI,{
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
const Port=process.env.PORT || 8080
server.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}/ `);
});

app.use('/',router());
// app.get('/',(req : express.Request , res : express.Response)=>{
//     res.send("hello world ! ");
// })