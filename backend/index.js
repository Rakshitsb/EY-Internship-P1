import express, { urlencoded } from "express";
import dbConnection from "./connection/db.js";
//routes
import awtRouter from "./route/auth.js";

const app=express();
const Port=3001;

//Database connection 
dbConnection("mongodb://localhost:27017/EyInternship");

//middleware
app.use(express.json());
app.use("/api/auth",awtRouter);

app.listen(Port,console.log(`Server started at Port: ${Port}`))