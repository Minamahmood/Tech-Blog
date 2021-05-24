const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
//require
const withAuth = require("../../utils/auth");