var express = require("express");
var bodyParser = require("body-parser");
var method = require("method-override");
var exphbs = require('express-handlebars');

// Extra for passport
var session = require("express-session");
var passport = require("./config/passport");


var app = express();

var routes = require("./controllers/eCommerce-controller.js");

var db = require("./models");

var port = process.env.PORT || 3000;

//app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(method("_method"));

// Static for CSS & Images
app.use(express.static(process.cwd() + "/public"));

app.engine("handlebars", exphbs({ defaultLayout: "main", helpers: require("./views/helpers/helpers.js") }));
app.set("view engine", "handlebars");

app.use("/", routes(app));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});
