require("dotenv").config();
require("express-async-errors");

const morgan = require("morgan");
const connectDB = require("./db/connectDB");

const port = process.env.PORT || 8080;
const express = require("express");
const app = express();

// routes
const userRouter = require("./routes/userRoutes");

// error handling middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(userRouter);

app.use(morgan("tiny"));

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
