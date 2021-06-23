const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressSession = require("express-session")({
  secret: "secret",
  resave: "false",
  saveUninitialized: "false"
  })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession)

const passport = require("passport");

app.use(passport.initialize());
app.use(passport.session());

require("./app/models/chefs.model.js");
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

const Chef =  mongoose.model("Chef");
passport.use(Chef.createStrategy());
passport.serializeUser(Chef.serializeUser());
passport.deserializeUser(Chef.deserializeUser());

require("./app/routes/chefs.router.js")(app);

const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});