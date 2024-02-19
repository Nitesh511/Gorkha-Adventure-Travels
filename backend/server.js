const app= require('./app');
const dotenv= require("dotenv");

const connectDatabase=require('./config/database');

//config env file 
dotenv.config({path:'../backend/config/config.env'});

//connecting to my database

connectDatabase()

app.listen(process.env.PORT,()=>{
    console.log(`Server is Working on http://localhost:${process.env.PORT}`)
})