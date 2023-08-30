require('dotenv').config()

const express = require("express");
const mongoose = require('mongoose');
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

mongoose.set("strictQuery", false)
mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@estudiantesdb.tnzmhos.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
  console.log('Conect to MongoDb')
}).catch((error) => {
  console.error(error);
}
)