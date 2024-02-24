const express =require('express');
const cookieParser= require('cookie-parser');
const bodyParser=require("body-parser");
const app =express();


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//Route imports 
const product= require("../backend/routes/productRoute");
const user= require("../backend/routes/userRoute");

app.use("/api/v1",product);
app.use("/api/v1",user)



module.exports=app