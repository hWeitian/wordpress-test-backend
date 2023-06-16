const express = require("express");
const post = require("../controllers/postController");
const { Model } = require("sequelize");

const router = express.Router();

router.get("/", post.getAll);

router.post("/:id", post.updatePost);

router.post("/", post.addOnePost);

module.exports = router;
