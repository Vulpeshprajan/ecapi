import express from 'express';
import dotenv from "dotenv"
dotenv.config();


import  cors  from "cors";
import morgan from "morgan";
const app = express()
const PORT = process.env.PORT || 8000


 app.use(cors());
 app.use(morgan("tiny"));
 
 app.use(express.urlencoded({extended: false }))
 app.use(express.json())

 import mongoClient from "./config/db.js";
 mongoClient();
//  load router

import loginRouter from "./routers/login.router.js";

//APIS
app.use('/api/v1/login', loginRouter);  



app.get('/',  (req, res)=> {
  res.send('Hello World')
error.status = 404;

next(error);
});

//404 return
app.use((req,res, next) => {
  const error = new Error("Resources not found")


})

// handle error
import { handleError } from "./utils/errorHandler.js";

app.use ((error,req, res, next) =>{
  handleError(error,res); 

});
app.listen(PORT, error => {
    if (error) console.log(error)

    console.log(`Server is running at http://localhost:${PORT}`);
})