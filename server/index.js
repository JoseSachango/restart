
const express = require('express');
// const {google} = require("googleapis")
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
const path = require("path")
var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// Sets up the Express app to handle data parsing
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Static directory
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname +"/public")))

// Routes
// =============================================================
require("./routes_api/api-routes.js")(app)



// Syncing our sequelize models and then starting our Express app
// =============================================================


 app.listen(PORT,function(){
      console.log("Server up and running, listening on port:"+PORT)
  
  })