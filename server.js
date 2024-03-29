const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan =require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");


//dot config
dotenv.config();

//mongoDB Connection
connectDB();

//rest object
const app = express();

//Middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

 //routes
 app.use("/api/v1/test",require("./routes/testRoutes"));

 //port
 const PORT=process.env.PORT || 8080;

 //listen
 app.listen(PORT,()=>{
    console.log(`Node Server is Running In ${process.env.DEV_MODE} Mode On Port ${process.env.PORT}`
    .bgBlue.white);
 });