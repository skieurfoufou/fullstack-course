const express = require("express");
const { User } = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  User.findById(req.body.id);
});

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.body.id);
});

module.exports = router;
