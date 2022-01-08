// require("dotenv")
const express=require("express");
const app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.json());

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const PORT=5000
const router = require("./Routes/router");
app.use(bodyparser.urlencoded({extended: true}));
// require("dotenv").config();






app.use('/Meraki_api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.use("/", router);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT PORT ${PORT}`);
});