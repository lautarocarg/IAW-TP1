require('dotenv').config()

const express = require("express");
const estudianteRoute = require('./routes/estudiantesRoute');
const errorHandler = require("./middleware/errorHandler");
const { auth } = require('express-oauth2-jwt-bearer');

const app = express();
const PORT = process.env.PORT;
const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER;

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'https://api.example.com/estudiantes',
  issuerBaseURL: 'https://dev-sm0minl1tenjr0wb.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/estudiantes', checkJwt, estudianteRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});