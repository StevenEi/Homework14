// Server.js file represents the actual "website"

const path = require("path");

// imports the index routes file which then connects to the other routes
const routes = require("./routes/index.js")

// enables the npm apps
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

// connects to the connection file for use on line 33
const sequelize = require("./config/connection");

// enables the connect-session-sequelize package, keeps users logged in even if the server gets restarted
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// boilerplate express code
const app = express();
const PORT = process.env.PORT || 3002;

// boilerplate session code, stores people who are online
const sess = {
    secret: "Super secret secret",
    resave: false,
    saveUninitialized: false,
    // sets the amount of time somebody can be logged in for I believe? I think it resets every time you hit a route..
    // needs some more investigating. currently set to 10 minutes
    cookie: {
      maxAge: 600000
    },
    store: new SequelizeStore({
        db: sequelize,
      }),
}
app.use(session(sess))

// boilerplate handlebars code
const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Imports the post model
// const post = require("./models/post")

// lets us view the req.body after a post request
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// makes the express package use the routes to connect it all together!
app.use(routes)

// connects to any css/js files in the future that will be stored in the public folder
app.use(express.static(path.join(__dirname, "/public")));

// sequelize sync -> Makes the database connect to the server
sequelize.sync({force: false}).then(() => {

app.listen(PORT, () => console.log("Now listening on server http://localhost:" + `${PORT}`));
});