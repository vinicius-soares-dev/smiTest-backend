const express = require("express");
const app = express();
require("dotenv").config({ debug: true });
const PORT = process.env.PORT || 8000;
const routes = require("./src/routes/");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
                                                
module.exports = app;