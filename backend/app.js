const express =require('express');
const app =express();


app.use(express.json());

//Route imports 
const product= require("../backend/routes/productRoute");
const user= require("../backend/routes/userRoute");

app.use("/api/v1",product);
app.use("/api/v1",user)



module.exports=app