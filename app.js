require("dotenv").config();
const morgan = require("morgan");
const connectDB = require("./db/connectDB");

const port = process.env.PORT || 8080;
const express = require("express");
const app = express();

const userRouter = require("./routes/userRoutes");

app.use(morgan("tiny"));
app.use(userRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
