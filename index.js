const { Sequelize } = require("sequelize");
require("dotenv").config();
const cors = require("cors");
const express = require("express");

const postRouter = require("./routers/post");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log("Application listening to port 3000");
});
