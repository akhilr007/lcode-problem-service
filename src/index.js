const express = require("express");

const { PORT } = require("./config/server.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.get("/ping", (req, res) => {
  return res.json({ message: "problem service is alive" });
});

app.listen(PORT, () => {
  console.log(`server started at PORT : ${PORT}`);
});
