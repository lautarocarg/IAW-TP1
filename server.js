require('dotenv').config()

const express = require("express");
const estudianteRoute = require('./routes/estudiantesRoute')

const app = express();
const PORT = process.env.PORT;
const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/estudiantes', estudianteRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});