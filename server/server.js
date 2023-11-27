// import express, { Router } from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import morgan from 'morgan';
// import path from 'path';
// import xss from 'xss-clean';
// import mongoSanitize from 'express-mongo-sanitize';
// import dbConnection from './dbConfig/dbConnection.js';
// import router from './routes/authRoute.js';




// dotenv.config();

// const app = express();
// // port
// const PORT = process.env.PORT || 8800;

// // connection db
// dbConnection();

// // Import middlewares
// // import cors
// app.use(cors());
// // import xss
// app.use(xss());
// // body parser
// app.use(bodyParser.json());
// // body parser urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
// // with limit on  express json
// // import mongo sanitize
// app.use(mongoSanitize());
// // json limit
// app.use(express.json({ limit: '10mb' }));
// // express urlencoded
// app.use(express.urlencoded({ limit: '10mb', extended: true }));
// // morgen
// app.use(morgan('dev'));

// app.use(router);

// app.listen(PORT,() =>{console.log(`Server running on port: ${PORT}`)}) ;




























//  changing


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import mainRouter from "./routes/index.js"
import dbConnection from "./dbConfig/dbConnection.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8800;


// MONGODB CONNECTION
dbConnection();

// middlenames
app.use(cors());
app.use(xss());
app.use(mongoSanitize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

const API_VERSION = "/api-v1"

app.use(API_VERSION, mainRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Dev Server running on port: ${PORT}`);
});