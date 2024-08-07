const express = require('express');

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req, res)=>{
    return res.status(200).send({message:"welcome to ecommerse api", status:true});
})

const authRouters = require("./routes/authRoute.js");
app.use("/auth", authRouters);

const userRouters = require("./routes/userRoute.js");
app.use("/users", userRouters);

module.exports = app;