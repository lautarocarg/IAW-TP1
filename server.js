require('dotenv').config()
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// POST method route
app.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

app.get("/random.text", (req, res) => {
  res.send("random.text");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
