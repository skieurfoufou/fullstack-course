const express = require("express");
const router = express.Router();
const models = require("../models/index");
const { Post } = models;

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.post("/", async (req, res) => {
  const post = new Post(req.body.blogPost);
  const savedPost = await Post.save();
  res.json(savedPost);
});

module.exports = router;
