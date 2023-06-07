const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const userRouter = require("./routers/userRouter");

app.use("/api", userRouter);

module.exports = app;
