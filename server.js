const path = require("path");

const express = require("express");

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helper");

const exphbs = require("express-handlebars");