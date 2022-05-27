const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()
const userRoute = require("./routes/Router");
require("./config/db");

const app = express();
app.use(bodyParser.json());
app.use("/",userRoute);

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`);
});