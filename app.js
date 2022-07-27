require("dotenv").config();
require("express-async-errors");

const morgan = require("morgan");
const connectDB = require("./db/connectDB");

const port = process.env.PORT || 8080;

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// routes
const userRouter = require("./routes/userRoutes");
const appointmentRouter = require("./routes/appointmentRoutes");
const eventRouter = require("./routes/eventRoutes");
const dailyEmotionRouter = require("./routes/dailyEmotionRoutes");
const topicForumRouter = require("./routes/topicForumRoutes");
const repliesRotuer = require("./routes/repliesRoutes");
const medicationRouter = require("./routes/medicationRoutes");

const authorization = require("./middleware/authorization");

// error handling middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(cors());
app.use(morgan("tiny"));
app.use(cookieParser(process.env.SECRET_KEY));
app.use(express.json());

app.use(userRouter);
app.use("/appointment", authorization, appointmentRouter);
app.use("/event", authorization, eventRouter);
app.use("/dailyemotion", authorization, dailyEmotionRouter);
app.use("/forumtopic", authorization, topicForumRouter);
app.use("/forumreplies", authorization, repliesRotuer);
app.use("/medication", authorization, medicationRouter);

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
