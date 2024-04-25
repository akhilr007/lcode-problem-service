const express = require("express");
const mongoose = require("mongoose");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler.middleware");
const connectToDB = require("./config/db.config");

const app = express();

/* MIDDLEWARES */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

/*  ROUTES MIDDLEWARE*/
app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "problem service is alive" });
});

/* ERROR HANDLER MIDDLEWARE */
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server started at PORT : ${PORT}`);

  /* DATABASE CONNECTION */
  connectToDB()
    .then((connection) => {
      console.log("Database connection established");
    })
    .catch((error) => {
      console.error("Failed to connect to Database: MongoDB:", error);
      process.exit(1);
    });
});

/* GRACEFUL SHUTDOWN */
process.on("SIGINT", async () => {
  try {
    await mongoose.disconnect();
    console.log("MongoDB disconnected through app termination");
  } catch (error) {
    console.log(error);
    console.log("hello");
    process.exit(1);
  }
});
