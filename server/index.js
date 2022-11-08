
const express = require('express');
// const {google} = require("googleapis")
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
const session = require("express-session")
const path = require("path")
var compression = require("compression")
const passport = require("./config/passport")
const db = require("./models")

var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// Sets up the Express app to handle data parsing
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// We need to use sessions to keep track of our user's login status (middleware that allows us to use request.user)
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// app.use(compression({filter:shouldCompress}))


// Static directory
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname +"/public")))

// Routes
// =============================================================
require("./routes_api/api-routes.js")(app)



// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync().then(()=>{
    app.listen(PORT,function(){
        console.log("Server up and running, listening on port:"+PORT)
    
    })
})
