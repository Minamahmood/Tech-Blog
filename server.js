const path = require("path");

const express = require("express");

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helper");

const exphbs = require("express-handlebars");

const hbs = exphbs.create({
    helpers,
});
const session = require("express-session");
//connect-session-sequelize
const SequelizeStore = require("connect-session-sequelize")(session.Store);
//sess
const sess = {
    secret: "mysecret",
    //cookie
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};
const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sess));
//express.static
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use(routes);

sequelize.sync();
//port//
app.listen(PORT, () => {
    console.log(`App is listening on the port ${PORT}!`);
});