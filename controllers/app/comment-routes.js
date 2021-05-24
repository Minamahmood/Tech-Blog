const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
//require
const withAuth = require("../../utils/auth");

//Get comments
router.get("/", (req, res) => {
    Comment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});