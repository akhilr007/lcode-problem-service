const express = require("express");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes/index");

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

app.listen(PORT, () => {
  console.log(`server started at PORT : ${PORT}`);
});
